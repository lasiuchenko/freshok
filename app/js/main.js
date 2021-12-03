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


    $(".rate__star").rateYo({
      readOnly: true,
      numStars: 1,
      starWidth: "16px",
      normalFill: "$yellow-900",
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
    });
  }
)
