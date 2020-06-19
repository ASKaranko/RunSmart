$(document).ready(function () {
  $('.slider-block').slick({
    dots: false,
    arrows: true,
    prevArrow: $('.slider-arrows__arrow_left'),
    nextArrow: $('.slider-arrows__arrow_right'),
    adaptiveHeight: true,
    speed: 1200,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
          adaptiveHeight: true
        }
      }
    ]
  });
});
