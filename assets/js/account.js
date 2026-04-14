document.addEventListener("DOMContentLoaded", function () {
  // Gọi đến file check_session.php mà chúng ta đã làm ở bước trước
  fetch("check_session.php")
    .then((res) => res.json())
    .then((data) => {
      const messageElement = document.getElementById("welcomeMessage");

      if (data.loggedIn) {
        // Hiển thị dòng chữ theo yêu cầu của bạn
        messageElement.innerText = "Xin chào " + data.name;
      } else {
        // Nếu chưa đăng nhập mà tự ý vào trang này, đẩy về trang login
        alert("Vui lòng đăng nhập để xem trang này!");
        window.location.href = "login.html";
      }
    })
    .catch((err) => {
      console.error("Lỗi kết nối:", err);
      document.getElementById("welcomeMessage").innerText = "Lỗi tải dữ liệu!";
    });
});
