function checkLoginStatus() {
  if (sessionStorage.getItem("loggedIn") === "true") {
    loginLink.style.display = "none";
    logoutLink.style.display = "inline";
  } else {
    loginLink.style.display = "inline";
    logoutLink.style.display = "none";
  }
}

function logout() {
  sessionStorage.removeItem("loggedIn");
  alert("Bạn đã đăng xuất!");
  window.location.href = "page/register.html";
}

logoutLink.addEventListener("click", function (e) {
  e.preventDefault();
  logout();
});

checkLoginStatus();
