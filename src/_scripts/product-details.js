'use strict';
(function(dmUIConfig) {
  $(document).ready(function() {
    $('.promotion-offer').mixitup({
      targetSelector: '.item',
      transitionSpeed: 450
    });

    var $productVariant = $('.product-details .slider-variant .slides li a');
    var $productVariantParent = $('.product-details .slider-variant .slides');
    $('.product-details .slider-variant .slides li:first-child').addClass('active');

    var $totalVariant = $('.product-details .slider-variant .slides li');

    // product details variant selection
    $productVariant.on('click', function () {
      $productVariantParent.css('marginLeft', 0);
      if(!$(this).hasClass('js-disabled')) {
        $(this).parents('ul').find('li').removeClass('active');

        if(!$(this).parent().hasClass('addedToCart') && $productVariantParent.find('.addedToCart').length > 0) {
          $(this).parent().addClass('active');
          $('.pdp-price-panel__price-mrp, .pdp-price-panel__primary, .product-details__btn-add-more').fadeIn().css('display', 'block');
          $('.pdp-price-total').hide();
          $('.product-details__btn-addtocart, .product-details__btn--addtocart-popup, .product-details__btn-quantity, .product-details__btn-viewcart').css('display', 'none');
        }
        else {
          if($(this).parent().hasClass('addedToCart')) {
            $(this).parent().removeClass('active');
            $('.product-details__btn-addtocart, .product-details__btn-add-more, .product-details__btn--addtocart-popup, .product-details__btn-quantity').hide();
            $('.product-details__btn-viewcart').css('display', 'block');
          }
          else {
            $(this).parent().addClass('active');
            $('.product-details__btn-addtocart').fadeIn();
            $('.product-details__btn-viewcart, .product-details__btn--addtocart-popup, .product-details__btn-quantity, .product-details__btn-add-more').css('display', 'none');
          }
        }

        var selectedProductLength = $productVariantParent.find('.addedToCart').length;
        $('.quick-product-cart .quick-product-cart--count').text(selectedProductLength);

        if($totalVariant.length === selectedProductLength) {
          $('.product-details__btn-viewcart').css('display', 'block');
          $('.product-details__btn-addtocart, .product-details__btn-add-more').hide();
        }
      }
    });

    // product details add to cart function - Add To Cart and + Add More button
    $('.product-details__btn-addtocart, .product-details__btn-add-more').on('click', function() {
      if(!$(this).hasClass('js-disabled')) {
        if($productVariantParent.find('.active').length <= 0) {
          $(this).css('display', 'none');
          $(this).siblings('.product-details__btn--addtocart-popup').fadeIn();
        }
        else {
          $(this).css('display', 'none');
          $('.product-details .pdp-offer-text').fadeIn();
          $productVariantParent.find('.active').addClass('addedToCart').removeClass('active');
          var selectedProductLength = $productVariantParent.find('.addedToCart').length;
          $('.quick-product-cart .quick-product-cart--count').text(selectedProductLength);
          $('.product-listing__save, .pdp-price-panel__primary, .product-details__btn--addtocart-popup, .pdp-price-panel__price-mrp, .quick-product-cart').css('display', 'none');
          $('.product-details .slider-variant .addedToCart a').find('.product-unit').css('display', 'inline');
          $('.pdp-price-total, .js-show-cart-count').fadeIn();
          $('.product-details__btn-viewcart').css('display', 'block');
        }
      }
    });

    // product details update quantity
    $('.product-details__btn-quantity--add').on('change', function() {
      var quantity = $(this).val();
      $(this).parents('.product-details__btn-quantity').css('display', 'none');
      $('.slider-variant-wrap .slider-variant .addedToCart.active .product-unit-count').text(quantity);
      $('.product-details .slider-variant .active a').children('.product-unit').css('display', 'inline');
      $('.product-details__btn-add-more').css('display', 'none');
      $('.product-details__btn-viewcart').css('display', 'block');
      $productVariantParent.find('.addedToCart').removeClass('active');
      $('.product-details .slider-variant .slides .active').find('.product-details__change-qty').css('display', 'block');
    });

    // variant change qty
    $(document).on('click', '.addedToCart .product-details__change-qty', function () {
      $productVariantParent.find('li').removeClass('active');

      // to make first option as default in select dropdown then updating the selectric plugin
      // $('.product-details__btn-quantity--add option').eq(0).attr('selected', true);
      $('.product-details__btn-quantity--add').selectric('udpate');

      $(this).parent().addClass('active');
      $('.product-details__btn-quantity').fadeIn();
      $('.product-details__btn-add-more, .product-details__btn-viewcart, .product-details__btn--addtocart-popup').css('display', 'none');
    });

    // Add to shopping list
    $('.pdp-alternate-list__summary-add-list').on('click', function () {
      $('.product-listing-item__tertiary .add-list-submit-cta').removeClass('active').text('Submit');
      $(this).parents('.pdp-alternate-list__summary').siblings('.product-listing-item__tertiary').animate({
        opacity: 1
      }, 500).css('display', 'block');
    });

    $('.product-details__addtolist a').on('click', function () {
      $('.product-listing-item__tertiary .add-list-submit-cta').removeClass('active').text('Submit');
      $(this).parents('.product-details__addtolist').siblings('.product-listing-item__tertiary').animate({
        opacity: 1
      }, 500).css('display', 'block');
    });

    // Frequently bought together for apparel
    $(document).on('click', '.pdp-alternate-list .slider-variant .slides a', function () {
      $(this).parents('.product-listing-item__primary').find('.slider-variant .slides a').removeClass('selected');
      $(this).toggleClass('selected');
    });

    // Frequently bought together
    $('.js-alter-module .product-listing-item__primary input[type="checkbox"]').on('click', function () {
      $(this).parents('.js-alter-module').find('.pdp-alternate-list__summary-add-cta').css('display', 'inline');
      $(this).parents('.js-alter-module').find('.pdp-alternate-list__summary-added-cart-cta').hide();
      $(this).parents('.js-alter-module').find('.existing-order__price-view-cart-btn').hide();
      $(this).parents('.product-listing-item__primary').toggleClass('selected');
      var totalLi = $(this).parents('.product-listing-item').parent().parent().find('.product-listing-item').length;
      var alterTotal = $(this).parents('.js-alter-module').find('.product-listing-item__primary input:checked').not(':disabled').length;
      if (alterTotal === totalLi) {
        alterTotal = 'All';
      }
      else if(alterTotal >= 1) {
        $(this).parents('.js-alter-module').find('.js-alter-cta-panel').show();
      }
      else {
        $(this).parents('.js-alter-module').find('.js-alter-cta-panel').hide();
      }

      if(alterTotal <1) {
        $(this).parents('.js-alter-module').find('.js-alter-cta-panel .pdp-alternate-list__summary-add-cta').hide();
        $(this).parents('.js-alter-module').find('.js-alter-cta-panel .existing-order__price-view-cart-btn').show();

      }
      $(this).parents('.js-alter-module').find('.pdp-alternate-list__summary-add-cta span, .js-mylist-add-all span, .existing-order__price-added-btn span, .pdp-alternate-list__summary-added-cart-cta span').text(alterTotal);
    });

    // Frequently Bought Together
    $('.pdp-alternate-list__summary-add-cta').on('click', function () {
      $(this).css('display', 'none');
      $(this).siblings('.pdp-alternate-list__summary-added-cart-cta').fadeIn();
      $(this).parents('.js-alter-module').find('.product-listing-item__primary.selected .product-alternate-checkbox').attr('disabled', true);
    });

    var gridBreakpointsSm = 1024;

    // Write a review
    $(document).on('click', '.product-gallery .review-quick__new a', function () {
      if ($(window).width() <= gridBreakpointsSm) {
        $('html, body').animate({
          scrollTop: $('.customer-reviews').offset().top - 30
        }, 1200);
      }
      else {
        $('html, body').animate({
          scrollTop: $('.customer-reviews').offset().top - 130
        }, 1200);
      }

      $('.write-review__form').slideDown();
      $('.write-review__form input').focus();
    });

    $(document).on('click', '.write-review-cta', function () {
      $('.write-review__form').slideDown();
    });

    $(document).on('click', '.js-form-cancel', function () {
      $('.write-review__form').slideUp();
    });

    // read review
    $(document).on('click', '.product-gallery .review-quick__count a', function () {
      $('html, body').animate({
        scrollTop: $('.user-review').offset().top - 280
      }, 1200);
    });

    // Product Details Apparel color highlights
    $(document).on('click', '.plp-apparel__color-pallette a', function() {
      if(!$(this).parent().hasClass('disabled')) {
        $(this).parents('.plp-apparel__color-pallette').find('li').removeClass('selected');
        $(this).parent().addClass('selected');
      }
    });
  });
}(DM_UI_CONFIG));
