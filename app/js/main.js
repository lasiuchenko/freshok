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
     $('.catalog__list').toggle();
  });


    $(".star").rateYo({
      readOnly: true,
    });
  
  // var mixer = mixitup('.products__content');
  
  var mixerOne = mixitup('.products', {
    controls: {
        scope: 'local'
    }
});

var mixerTwo = mixitup('.discounts', {
    controls: {
        scope: 'local'
    }
});
  }
)
