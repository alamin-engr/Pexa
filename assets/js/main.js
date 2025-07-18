(function ($) {
  "use strict";


  // Menu

  var partnersSlider = new Swiper('.cta-carousel', {
    centeredSlides: true,
    speed: 6000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    slidesPerView:'auto',
    allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
      320: {
        spaceBetween: 35,
      },
      768: {
        spaceBetween: 40,
      },
      992: {
        spaceBetween: 50,
      },
      1200: {
        spaceBetween: 70,
      }
    },
  });

const swiper = new Swiper('.profitability-slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.profitability-button-next',
    prevEl: '.profitability-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  }
});

}(jQuery));

