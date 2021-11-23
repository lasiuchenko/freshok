$(function () {
    $('.top-slider__list').slick( {
        dots: false,
        infinite: false,
        slidesToShow: 1,
      }

    );


    $('.accordeon').on('click', function() {
        $('.catalog__list').toggleClass('catalog__list--active');
        $('.catalog').toggleClass('catalog--active');
        $('.accordeon').toggleClass('accordeon--active');
      }

    );

  }

)