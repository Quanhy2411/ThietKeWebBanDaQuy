document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"));

  // Tìm sản phẩm trong data.js
  const product = products.find((p) => p.id === productId);

  if (product) {
    renderProductDetail(product);
  } else {
    document.getElementById("product-detail").innerHTML =
      "<h3 class='text-center'>Không tìm thấy sản phẩm!</h3>";
  }
});

function renderProductDetail(product) {
  // đổi tên breadcrumb
  document.getElementById("breadcrumb-name").innerText = product.name;

  const detailHTML = `
  
  <div class="col-md-6 text-center">

      <div class="border rounded p-3 shadow-sm bg-white">
          <img 
          src="../${product.image}" 
          class="img-fluid rounded"
          alt="${product.name}"
          style="max-height:450px">
      </div>

  </div>


  <div class="col-md-6">

      <h2 class="fw-bold mb-3">${product.name}</h2>

      <p class="text-muted">Mã sản phẩm: TPL-${product.id}00${product.id}</p>

      <h3 class="text-danger fw-bold my-3">
        ${product.price.toLocaleString("vi-VN")}đ
      </h3>

      <div class="mb-4">
          <h5>Mô tả sản phẩm</h5>
          <p>${product.description}</p>
      </div>


      <div class="d-flex align-items-center mb-4">

          <label class="me-3 fw-bold">Số lượng:</label>

          <button 
          class="btn btn-outline-secondary"
          onclick="changeQty(-1)">-</button>

          <input 
          type="number"
          id="quantity"
          value="1"
          min="1"
          class="form-control mx-2 text-center"
          style="width:70px">

          <button 
          class="btn btn-outline-secondary"
          onclick="changeQty(1)">+</button>

      </div>


      <button 
      onclick="addToCart(${product.id})"
      class="btn btn-warning btn-lg w-100 fw-bold py-3 shadow">

         THÊM VÀO GIỎ HÀNG

      </button>


      <div class="mt-4 p-3 bg-light border rounded">

          <p class="mb-2"> Cam kết vàng đúng tuổi</p>

          <p class="mb-2"> Miễn phí giao hàng toàn quốc</p>

          <p class="mb-0"> Bảo hành làm sáng trọn đời</p>

      </div>

  </div>

  `;

  document.getElementById("product-detail").innerHTML = detailHTML;
}

// ==============================
// Tăng giảm số lượng
// ==============================

function changeQty(value) {
  const input = document.getElementById("quantity");

  let qty = parseInt(input.value);

  qty += value;

  if (qty < 1) qty = 1;

  input.value = qty;
}

// ==============================
// Thêm vào giỏ hàng
// ==============================

function addToCart(productId) {
  const qty = parseInt(document.getElementById("quantity").value);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find((p) => p.id === productId);

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: qty,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("🛒 Đã thêm " + product.name + " vào giỏ hàng!");
}
