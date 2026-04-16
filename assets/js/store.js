function renderProducts(data) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  data.forEach((product) => {
    const productHTML = `
      <div class="col-lg-3 col-md-4 col-6 mb-4">
        <div class="card h-100 shadow-sm border-0 the">

          <a href="chitietsp.html?id=${product.id}">
            <img src="${product.image}" class="card-img-top p-3" alt="${product.name}">
          </a>

          <div class="card-body text-center">

            <h6 class="card-title tenTrangSuc">
              ${product.name}
            </h6>

            <p class="card-text giaTrangSuc text-danger fw-bold">
              ${product.price.toLocaleString("vi-VN")}đ
            </p>

            <button onclick="addToCart(${product.id})"
              class="btn btn-outline-warning btn-sm w-100">
              Thêm vào giỏ
            </button>

          </div>
        </div>
      </div>
    `;

    productList.innerHTML += productHTML;
  });
}

function filterProducts() {
  const categoryElement = document.getElementById("filterCategory");
  const searchInput = document.getElementById("searchInput");

  const category = categoryElement ? categoryElement.value : "all";
  const keyword = searchInput ? removeVietnamese(searchInput.value) : "";

  const filtered = products.filter((p) => {
    const name = removeVietnamese(p.name);

    const matchesCategory = category === "all" || p.category === category;
    const matchesKeyword =
      name.includes(keyword) || p.price.toString().includes(keyword);

    return matchesCategory && matchesKeyword;
  });

  renderProducts(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const searchKeyword = params.get("search");

  if (searchKeyword) {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.value = searchKeyword;

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchKeyword.toLowerCase()),
    );
    renderProducts(filtered);
  } else {
    renderProducts(products);
  }
});
function addToCart(productId) {
  const quantityInput = document.getElementById("quantity");
  const qty = quantityInput ? parseInt(quantityInput.value) : 1;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find((p) => p.id === productId);
  if (!product) return;

  let cleanImage = product.image.replace("../", "");

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: cleanImage,
      quantity: qty,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("🛒 Đã thêm " + product.name + " vào giỏ hàng!");
}
