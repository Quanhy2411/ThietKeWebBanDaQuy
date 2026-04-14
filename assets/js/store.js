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

// Lọc sản phẩm
function filterProducts() {
  const category = document.getElementById("filterCategory").value;

  if (category === "all") {
    renderProducts(products);
  } else {
    const filtered = products.filter((p) => p.category === category);
    renderProducts(filtered);
  }
}

// Load trang
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});
