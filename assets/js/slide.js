///////////////////////
//// about
///////////////////////
const aboutSwiper = new Swiper(".p-about__slide", {
  spaceBetween: 10,
  slidesPerView: "auto",
  loop: true,
  speed: 1000,
  initialSlide: 3,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    900: {
      spaceBetween: 20,
    },
  },
});

///////////////////////
//// spots
///////////////////////

const spotsSwiper = new Swiper(".p-spots__swiper", {
  spaceBetween: 16,
  slidesPerView: "auto",
  loop: true,
  centeredSlides: true,
  // centeredSlides true로 하면 0번째 슬라이드가 가운데에 보이게 됨
  initialSlide: 3,
  // initialSlide: 3으로 하면 4번째 슬라이드가 먼저 보이게 됨(0부터시작)
  breakpoints: {
    900: {
      spaceBetween: 32,
      centeredSlides: false,
      initialSlide: 0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
});
