$(function () {
    $('.top-slider__list').slick( {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        // prevArrow: '<button type="button" class="slick-prev"></button>',
        // nextArrow: '<button type="button" class="slick-next"><img src="images/icons/icon-arrow-right.svg" alt="Правая стрелка"></button>'

      }

    );
    $(".star").rateYo({
      readOnly: true,
    });
 
    var mixer=mixitup('.products__content');
  }

)