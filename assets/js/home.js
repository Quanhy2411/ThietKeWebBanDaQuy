var swiper = new Swiper(".mySlider", {
  loop: true,

  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".dsSpDaXem", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".dsSpDaXem .swiper-button-next",
    prevEl: ".dsSpDaXem .swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
var brandSwiper = new Swiper(".brandSlider", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".brandSlider .swiper-button-next",
    prevEl: ".brandSlider .swiper-button-prev",
  },

  pagination: {
    el: ".brandSlider .swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var collectionSwiper = new Swiper(".collectionSlider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 0, // Không xoay để giữ hình phẳng sang trọng
    stretch: 80, // Kéo các slide sát lại nhau hơn
    depth: 200, // Tạo độ sâu (đẩy slide 2 bên lùi về sau)
    modifier: 1,
    slideShadows: true, // Tạo bóng đổ cho các slide bên cạnh
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
function initAuth() {
  fetch("page/check_session.php")
    .then((res) => res.json())
    .then((data) => {
      const loginLink = document.getElementById("loginLink");
      const logoutLink = document.getElementById("logoutLink");
      const userInfo = document.getElementById("userInfo");

      if (data.loggedIn) {
        if (loginLink) loginLink.style.display = "none";
        if (userInfo) {
          userInfo.style.display = "inline";
          userInfo.innerText = "Xin chào, " + data.name;
        }
        if (logoutLink) logoutLink.style.display = "inline";
      }
    });
}

document.addEventListener("DOMContentLoaded", initAuth);
function updateHeaderAuth() {
  fetch("page/check_session.php")
    .then((res) => res.json())
    .then((data) => {
      const loginLink = document.getElementById("loginLink");
      const logoutLink = document.getElementById("logoutLink");

      if (data.loggedIn) {
        if (loginLink) {
          loginLink.innerHTML = `<i class="fa-solid fa-user"></i> Xin chào, ${data.name}`;
          loginLink.href = "#"; // Không cho bấm sang trang login nữa
        }
        if (logoutLink) {
          logoutLink.style.display = "inline-block";
          logoutLink.style.marginLeft = "10px";
        }
      }
    })
    .catch((err) => console.log("Chưa đăng nhập"));
}

document.addEventListener("DOMContentLoaded", function () {
  updateHeaderAuth();
});
