document.addEventListener("DOMContentLoaded", function () {
  fetch("check_session.php")
    .then((res) => res.json())
    .then((data) => {
      const messageElement = document.getElementById("welcomeMessage");

      if (data.loggedIn) {
        messageElement.innerText = "Xin chào " + data.name;
      } else {
        alert("Vui lòng đăng nhập để xem trang này!");
        window.location.href = "login.html";
      }
    })
    .catch((err) => {
      console.error("Lỗi kết nối:", err);
      document.getElementById("welcomeMessage").innerText = "Lỗi tải dữ liệu!";
    });
});
