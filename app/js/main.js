$(function () {
  $('.top-slider__list').slick({
    dots: false,
    infinite: false,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="top-slider__arrow-btn top-slider__arrow-btn--prev"><svg class="top-slider__arrow"><use xlink:href="images/sprite.svg#icon-arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="top-slider__arrow-btn top-slider__arrow-btn--next"><svg class="top-slider__arrow"><use xlink:href="images/sprite.svg#icon-arrow-right"></use></svg></button>'

  });
  
  $('.catalog__btn').on('click', function () {
    $('.catalog__btn').toggleClass('catalog__btn--active');
    $('.catalog__list').slideToggle('3000');
  });

  $('.user-nav__link--cart, .close-btn').on('click', function () {
    $('.cart-popup').slideToggle('3000');
  });

  $('.cart-popup__close-btn').on('click', function () {
    $('.cart-popup__item').hide();
  }); // как связать кнопку с блоков, сейчас кнопка в первой карточке адаляет все карточки

  $('.rate__star').rateYo({
    readOnly: true,
    numStars: 1,
    starWidth: "16px",
    normalFill: "#FFB800",
  });

  $('.plus-btn, .minus-btn').on('click', function () {
      var $input = $(this).parents('.cart-popup__quantity').find('.cart-popup__input');
    if($(this).hasClass('minus-btn')) {
      var count = parseFloat($input.val()) - 1;
      count = count < 1 ? 1 : count;
      
      $input.val(count);
    }
    else {
      var count = parseFloat($input.val()) + 1
      $input.val(count);
    }
  
});
  
  var mixerOne = mixitup('.products', {
    controls: {
    scope: 'local'
    }
  });  

  var mixerTwo = mixitup('.discounts', {
    controls: {
    scope: 'local'
    }
  })
})
