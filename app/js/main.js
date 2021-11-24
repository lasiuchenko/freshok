$(function () {
    $('.top-slider__list').slick( {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/icon-arrow-left.svg" alt="Левая стрелка"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/icon-arrow-right.svg" alt="Правая стрелка"></button>'

      }

    );


    $('.accordeon').on('click', function () {
        $('.catalog__list').toggleClass('catalog__list--active');
        $('.catalog').toggleClass('catalog--active');
        $('.accordeon').toggleClass('accordeon--active');
      }

    );

    var mixer=mixitup('.products__content');
  }

)