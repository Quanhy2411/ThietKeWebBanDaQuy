function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  cartContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML =
      "<tr><td colspan='5' class='text-center'>Giỏ hàng trống</td></tr>";
    totalPriceElement.innerText = "0đ";
    return;
  }

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    cartContainer.innerHTML += `
            <tr>
                <td>
                    <div class="d-flex align-items-center">
                        <img src="../${item.image}" width="60" class="me-3 border">
                        <span>${item.name}</span>
                    </div>
                </td>
                <td>${item.price.toLocaleString("vi-VN")}đ</td>
                <td>
                    <input type="number" min="1" value="${item.quantity}" 
                           onchange="updateQuantity(${index}, this.value)" 
                           class="form-control" style="width: 70px;">
                </td>
                <td class="fw-bold">${itemTotal.toLocaleString("vi-VN")}đ</td>
                <td>
                    <button onclick="removeItem(${index})" class="btn btn-sm btn-danger">Xóa</button>
                </td>
            </tr>
        `;
  });

  totalPriceElement.innerText = total.toLocaleString("vi-VN") + "đ";
}

// Cập nhật số lượng và tự động tăng giá tiền
function updateQuantity(index, newQty) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity = parseInt(newQty);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart(); // Gọi lại hàm để cập nhật lại giao diện và tổng tiền
}

// Xóa sản phẩm khỏi giỏ
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Chạy lần đầu khi vào trang
document.addEventListener("DOMContentLoaded", renderCart);
