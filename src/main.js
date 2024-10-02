import mobileNavFunction from './util/mobile-nav.js';


mobileNavFunction();

const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  resizeObserver: true,
  spaceBetween: 24, //24
  slidesPerGroup: 1,
  // centeredSlides: true,
  loop: true,

  autoplay: {
      delay: 2000,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      320: {
          slidesPerView: "auto",
          spaceBetween: 15,
          centeredSlides: true,
      },
      640: {
          spaceBetween: 35,
          centeredSlides: true,
      },
  },
});

const serviceSwiper = new Swiper(".services__swiper", {
  spaceBetween: 24,
  navigation: {
      nextEl: ".service-swiper-button-next",
      prevEl: ".service-swiper-button-prev",
  },
  breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 24,
          centeredSlides: true,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 40,
      },
      991: {
          slidesPerView: 3,
          spaceBetween: 24,
      },

      1140: {
          slidesPerView: 3,
      },
      1300: {
          slidesPerView: 4,
      },
  },
});


// const swiper_ = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });
