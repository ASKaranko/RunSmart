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

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

// toggle - это не добавление класса, а переключатель, если его нет

function toggleSlide(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  });
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__list-link');

});
