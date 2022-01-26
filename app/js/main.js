$(function () {
  $('.top-slider__list').slick({
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="top-slider__arrow-btn top-slider__arrow-btn--prev"><svg class="top-slider__arrow"><use xlink:href="images/sprite.svg#icon-arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="top-slider__arrow-btn top-slider__arrow-btn--next"><svg class="top-slider__arrow"><use xlink:href="images/sprite.svg#icon-arrow-right"></use></svg></button>',
  });

  $('.product-slide').slick({
    infinite: false,
    dots: false,
    prevArrow: '<button type="button" class="top-slider__arrow-btn top-slider__arrow-btn--product-prev"><svg class="top-slider__arrow"><use xlink:href="images/sprite.svg#icon-arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="top-slider__arrow-btn top-slider__arrow-btn--product-next"><svg class="top-slider__arrow"><use xlink:href="images/sprite.svg#icon-arrow-right"></use></svg></button>',
  });

  $('.partners__list').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 784,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 658,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  let clickMobile = $('.burger-btn--header, .mobile-close');
  let clickCart = $('.user-nav__link--cart, .cart-close');
  let clickFilters = $('.filters-menu, .filters-close');

  $(clickFilters).on('click', function () {
    $('.filters-popup').slideToggle('3000');
  });
  
$('.filters-popup').on('click', function (e) {
    if ($(e.target).closest('.filters-popup__content').length == 0) {
      $(this).slideToggle('3000')}
  })

  $(clickMobile).on('click', function () {
    $('.mobile-menu').slideToggle('3000');
  });

  $('.mobile-menu').on('click', function (e) {
    if ($(e.target).closest('.mobile-menu__content').length == 0) {
      $(this).slideToggle('3000')}
  })
  
  $(clickCart).on('click', function () {
    $('.cart-popup').slideToggle('3000');
  });

  $('.cart-popup').on('click', function (e) {
    if ($(e.target).closest('.cart-popup__content').length == 0) {
      $(this).slideToggle('3000')}
  })

  $('.catalog__btn').on('click', function (e) {
    let parent = $(this).parent();
    $(this).toggleClass('catalog__btn--active');
    parent.find('.catalog__list').slideToggle('3000');
  });

  $('.user-nav__link--search').on('click', function () {
    $('.search-mobile').slideToggle('3000');
  });

  $('.burger-btn--mini').on('click', function () {
    let parent = $(this).parent();
      parent.hide();
  });

  $('.filters__btn').on('click', function (){
    let parent = $(this).parent();

    $(this).toggleClass('filters__btn--active');
    parent.toggleClass('filters__item--active');
    parent.find('.filters__sub-list').slideToggle('3000');
  })

  $('.plus-btn, .minus-btn').on('click', function () {
    let $input = $(this).parents('.quantity').find('.quantity__input');
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

  $('.filter-price__input').ionRangeSlider({
    type: 'double',
    skin: 'big',
    prefix: '₽',
    onStart: function (data) {
      $('.price-range__input--from').val(data.from);      
      $('.price-range__input--to').val(data.to);
    },

    onChange: function(data) {
      $('.price-range__input--from').val(data.from);
      $('.price-range__input--to').val(data.to);
    },
  });

  let my_range = $('.filter-price__input').data('ionRangeSlider');
  
  $('.price-range__input--from').on('change', function () { 
    let from = $('.price-range__input--from').val();
    if (from && Number(from)) { 
      console.log('Update')
        my_range.update({
        from: from
      });
    }
  })

  $('.price-range__input--to').on('change', function () { 
    let to = $('.price-range__input--to').val();
    if (to && Number(to)) { 
      console.log('Update')
        my_range.update({
        to: to
      });
    }
  })
  
  $('.filter-btn').on('click', function () {
    $('.filter-btn').removeClass('filter-btn--active');
    $(this).addClass('filter-btn--active');
  })

  $('.filter-btn--list').on('click', function () {
    $('.products__item').addClass('products__item--list');
  })
  
  $('.filter-btn--grid').on('click', function () {
    $('.products__item').removeClass('products__item--list');
  })

  $('.select-style').styler();

  $('.rate__star').rateYo({
    readOnly: true,
    numStars: 1,
    starWidth: "16px",
    normalFill: "#ffb800",
    starSvg: '<svg><use xlink:href="images/sprite.svg#icon-star"></use></svg>'
  });

  $('.rate__star-product').rateYo({
    numStars: 5,
    maxValue: 5,
    starWidth: "16px",
    normalFill: "#c1c1c1",
    ratedFill: "#ffb800",
    starSvg: '<svg><use xlink:href="images/sprite.svg#icon-star"></use></svg>'
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
