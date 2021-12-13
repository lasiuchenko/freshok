$(function () {
  $('.top-slider__list').slick({
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="top-slider__arrow-btn top-slider__arrow-btn--prev"><svg class="top-slider__arrow"><use xlink:href="images/sprite.svg#icon-arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="top-slider__arrow-btn top-slider__arrow-btn--next"><svg class="top-slider__arrow"><use xlink:href="images/sprite.svg#icon-arrow-right"></use></svg></button>',
  });

  $('.partners__list').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6, 
    slidesToScroll: 1
  });
  
  $('.catalog__btn').on('click', function () {
    $('.catalog__btn').toggleClass('catalog__btn--active');
    $('.catalog__list').slideToggle('3000');
  });

  $('.user-nav__link--cart, .burger-btn--close').on('click', function () {
    $('.cart-popup').slideToggle('3000');
  });

  $('.burger-btn--mini').on('click', function () {
     let parent = $(this).parent();
  parent.hide();
  });

  $('.rate__star').rateYo({
    readOnly: true,
    numStars: 1,
    starWidth: "16px",
    normalFill: "#FFB800",
  });

  $('.plus-btn, .minus-btn').on('click', function () {
    let $input = $(this).parents('.cart-popup__quantity').find('.cart-popup__input');
    if($(this).hasClass('minus-btn')) {
      let count = parseFloat($input.val()) - 1;
      count = count < 1 ? 1 : count;
      
      $input.val(count);
    }
    else {
    let count = parseFloat($input.val()) + 1
      $input.val(count);
    }
  
});
  
  let mixerOne = mixitup('.products', {
    controls: {
    scope: 'local'
    }
  });  

  let mixerTwo = mixitup('.discounts', {
    controls: {
    scope: 'local'
    }
  })
})
