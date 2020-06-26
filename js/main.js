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

  // Модальные окна

  $('[data-modal=application]').on('click', function() {
    $('.overlay, #application').fadeIn();
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #application, #order, #gratitude').fadeOut('slow');
  });
 
  // Вывод нужного имени пульсометра в зависимости от кнопки купить

  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  });

  // Фунция валидации форм

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Please specify your name",
          minlength: jQuery.validator.format("At least {0} characters required!")
        },
        phone: "Please enter your phone number",
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        }
      }
    });
  };

  validateForms('#application form');
  validateForms('#application-form');
  validateForms('#order form');

  // маска ввода номера
  $('[type="tel"]').mask("+7 (999) 999-9999");

  // отправка писем
  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val(""); //очистка input после отправки формы
      $('#application, #order').fadeOut();
      $('.overlay, #gratitude').fadeIn('slow');

      $('form').trigger('reset'); //очистка форм
    });
    return false;
  });

});
