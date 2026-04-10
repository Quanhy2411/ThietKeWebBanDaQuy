const loginLink = document.getElementById("loginLink");
const logoutLink = document.getElementById("logoutLink");

function checkLoginStatus() {
  if (sessionStorage.getItem("loggedIn") === "true") {
    loginLink.style.display = "none";
    logoutLink.style.display = "inline";
  } else {
    loginLink.style.display = "inline";
    logoutLink.style.display = "none";
  }
}

logoutLink.addEventListener("click", function (e) {
  e.preventDefault();
  sessionStorage.removeItem("loggedIn");
  alert("Bạn đã đăng xuất!");
  window.location.href = "page/register.html"; // hoặc quay về login.html
});

checkLoginStatus();
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "123456") {
    sessionStorage.setItem("loggedIn", "true");
    alert("Đăng nhập thành công!");
    window.location.href = "../index.html"; // quay về trang chủ
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
  }
});
