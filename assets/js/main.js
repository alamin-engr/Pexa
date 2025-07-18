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



}(jQuery));

