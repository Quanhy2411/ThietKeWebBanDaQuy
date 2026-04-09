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
<script>
var swiper = new Swiper(".mySlider", {
  loop: true,

  autoplay: {
    delay: 3000, 
    disableOnInteraction: false
  },

  speed: 1000
});
</script>
