$(function () {
    $('.top-slider__list').slick( {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/icon-arrow-left.svg" alt="Левая стрелка"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/icon-arrow-right.svg" alt="Правая стрелка"></button>'

      }

    );


    var mixer=mixitup('.products__content');
  }

)