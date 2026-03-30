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
