(function(dmUIConfig) {
  $(document).ready(function () {
    // x Remove product from My Cart
    $(document).on('click', '.cart-details__item--remove a', function(){
      $(this).parents('.cart-details__item-lists').fadeOut('slow', function(){
        $(this).remove();
        $('.cart-details__scroll').scrollTop(0).perfectScrollbar('update');
      });

      if ($(this).parents('.cart-details__item-list').find('.cart-details__item-lists').length === 1) {
        $(this).parents('.cart-details__item-list').find('.cart-no-items').delay(400).fadeIn(500);
      }
    });

    $('.cart-details__item--title').on('click', function() {
      $(this).toggleClass('active');
      if($(this).hasClass('active') && !$(this).hasClass('cart-details__item--bottom')) {
        $('.cart-details__item .cart-details__item--title').removeClass('active');
        $(this).find('.cart-details__item--title-arrow i').toggleClass('icon-caret-down icon-caret-up');
        if( $(this).parents('.cart-summary-delivery').hasClass('js-cart-summary-delivery')) {
          $(this).find('.cart-details__item--title-arrow i').toggleClass('icon-caret-up');
        }

        $('.js-cart-summary-delivery .cart-details__item--bottom').next('.cart-details__item-list').hide();
        $(this).next('.cart-details__item-list').slideToggle(800, function () {
          $('.cart-details__scroll').scrollTop(0).perfectScrollbar('update');
        });

        $('.js-cart-summary-delivery .cart-details__item--bottom').find('.cart-details__item--title-arrow i').addClass('icon-caret-up');
      }
    });

    $('.js-cart-summary-delivery .cart-details__item--title').on('click', function() {
      if($(this).hasClass('cart-details__item--bottom') && $(this).hasClass('active')) {
        $('.cart-details__item .cart-details__item-list').css('display', 'none');
        $('.cart-details__scroll-secondary').animate({
          'min-height': 0
        }, 800);
        $(this).next('.cart-details__item-list').slideDown(800, function () {
          $('.cart-details__scroll').scrollTop(0).perfectScrollbar('update');
        });
        $(this).find('.cart-details__item--title-arrow i').toggleClass('icon-caret-up');
      }
      else {
        $('.cart-details__scroll-secondary').animate({
          'max-height': '240px'
        }, 400);
        $('.cart-details__item--bottom').next('.cart-details__item-list').css('display', 'none');
        $(this).find('.cart-details__item--title-arrow i').toggleClass('icon-caret-up');
      }
    });


    $('.order-details-info .cart-details__item--title').on('click', function(e) {
      e.stopPropagation();
    });

    $('.cart-summary--delivery-details').on('click', function(){
      $(this).parents('.cart-summary__price-details').find('.delivery-charges__details').toggleClass('js-hide-show');
      $('.cart-summary__details').scrollTop(120).perfectScrollbar('update');
    });

    $('.js-share-cart').on('click', function(){
      $(this).hide();
      $('.share-cart-form').removeClass('js-hide-show');
      $('.cart-summary__details--primary .form__divider').hide();
      $('.proceed-cta').addClass('button--disabled');
      $('.cart-summary__details').scrollTop($('.share-cart-form').offset().top).perfectScrollbar('update');
      $('#formShareCartValidation input').val('');
    });

    $('.clear-cart-cta-btn').on('click', function () {
      $('#clearCartModal').show();
    });

    // Clear cart modal 'OK' action
    $('.modal-dialog--clear-cart').on('click', '.clear-cart-confirm', function () {
      $(this).parents('.modal-dialog').hide();
      $('.cart-details__item-list').find('.cart-details__item-lists').remove();
      $('.cart-details__item-list').find('.cart-no-items').fadeIn();
      $('html, body').animate({
        scrollTop: $('.cart-title').offset().top - 100
      }, 1000);
      $('html, body').removeAttr('style');
    });

    // Clear cart modal 'Cancel' action
    $('.modal-dialog--clear-cart').on('click', '.clear-cart-reject', function () {
      $(this).parents('.modal-dialog').hide();
      $('html, body').removeAttr('style');
    });

    // Share A Cart - close
    $(document).on('click', '.js-share-cart-cancel-bta', function(e) {
      $('.share-cart-form').addClass('js-hide-show');
      $('.js-share-cart').show();
      $('.proceed-cta').removeClass('button--disabled');
      $('.cart-summary__details--primary .form__divider').show();
      $('.cart-summary__details').perfectScrollbar('update');
    });

    // Promotion panel add to cart function
    $('.promotion-panel__btn-addtocart').on('click', function() {
      $(this).css('display', 'none');
      $(this).parents('.promotion-panel').find('.promotion-panel--change-qty-cta').fadeIn();
      $(this).parents('.promotion-panel__btn').find('.promotion-panel__btn-viewcart').fadeIn();
      // $(this).parents('.promotion-panel__btn').find('.promotion-panel__btn-quantity').fadeIn();
    });

    $('.promotion-panel--change-qty-cta').on('click', function () {
      $(this).css('display', 'none');
      $(this).parents('.promotion-panel').find('.promotion-panel__btn-quantity').fadeIn();
      $(this).parents('.promotion-panel').find('.promotion-panel__btn-viewcart').css('display', 'none');
    });

    $('.promotion-panel__btn-quantity').on('change', 'select', function () {
      $(this).parents('.promotion-panel__btn-quantity').css('display', 'none');
      $(this).parents('.promotion-panel').find('.promotion-panel--change-qty-cta').fadeIn();
      $(this).parents('.promotion-panel__btn').find('.promotion-panel__btn-viewcart').fadeIn();
    });

    // Search and Add to list

    var gridBreakpointsLg = 1024;
    if ($(window).width() >= gridBreakpointsLg) {
      $('.my-list-search-toolbar .search-toolbar__field').on('focus', function () {
        $('.dropdown-search-add-list').slideDown(600, function () {
          $(this).scrollTop(0).perfectScrollbar('update');
        });
        $('html, body').animate({
          scrollTop: $('.my-list-search-toolbar').offset().top - 250
        }, 800);
      });
    }

    $('.dropdown-search-add-list').on('click', '.product-search__btn-addtolist.js-not-added', function () {
      $(this).text('Added to List').removeClass('js-not-added');
      // Adding sample product
      $('.resp-tab-content-active .product-listing-item:last-child').find('.product-listing__quantity-secondary select').selectric('destroy');
      var cloneList = $('.resp-tab-content-active .product-listing-item:last-child').clone();
      $('.resp-tab-content-active .tabs-primary__content--blurb').append(cloneList);
      $('.resp-tab-content-active .product-listing-item:last-child').css({opacity: 0, display: 'block'}).animate({
        opacity: 1
      }, 1000).css('display', 'block');
      $('.resp-tab-content-active .product-listing-item .product-listing__quantity-secondary select').selectric({
        maxHeight: 85
      });
      $('.dropdown-search-add-list').slideUp();
      $('.js-mylist-show-alert').addClass('js-hide-show');
    });

    $('.product-search-item--size-select').on('change', function(){
      var selectedValue = $('option:selected', this).text();
      if(selectedValue !== 'Size') {
        $(this).parents('li').find('.product-search__btn-addtolist').show().removeClass('cart-button-disabled').attr('disabled', false);
        $(this).parents('li').find('.quantity-select').addClass('js-hide-show');
        $(this).parents('li').find('.quantity-select .form__input').val('1');
      }
      else {
        $(this).parents('li').find('.product-search__btn-addtolist').show().addClass('cart-button-disabled').attr('disabled', true);
        $(this).parents('li').find('.quantity-select').addClass('js-hide-show');
        $(this).parents('li').find('.quantity-select .form__input').val('1');
      }
    });

    // My List search dropdown - close
    $('body, html').on('mouseup touchend', function(e) {
      var container = $('.my-list-search-toolbar');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.dropdown-search-add-list').css('display', 'none');
      }
    });

    // My List

    $('.delete-my-list-cta').on('click', function () {
      $('#clearMyListModal').show();
    });

    // Clear My List modal 'OK' action
    $('.modal-dialog--clear-mylist').on('click', '.clear-mylist-confirm', function () {
      $(this).parents('.modal-dialog').hide();

      $('html, body').animate({
        scrollTop: 0
      }, 500);

      $('.resp-tabs-container .resp-tab-content-active, .resp-tabs-list .resp-tab-active, .resp-tabs-container .resp-tab-active').addClass('tab-remove').delay(600).fadeOut('slow', function () {
        console.log($('.resp-tabs-list .resp-tab-active').length);
        if($('.resp-tabs-list .resp-tab-active').length === 1 || $('.resp-accordion .resp-tab-active').length === 1) {
          $('.resp-tabs-list .tab-remove, .resp-accordion .tab-remove').next().trigger('click');
        }
        else {
          $('.js-accordion-tabs-vertical, .mylist-search-delete-cta').remove();
          $('.my-listing-products').html('<p class="text-center">No List available</p>');
        }
        $('.resp-tabs-container .tab-remove, .resp-tabs-list .tab-remove, .resp-accordion .tab-remove').remove();
      });

    });

    // Clear My List modal 'Cancel' action
    $('.modal-dialog--clear-mylist').on('click', '.clear-mylist-reject', function () {
      $(this).parents('.modal-dialog').hide();
    });

    $(document).on('click', '.js-show-back-form', function () {
      $(this).parents('.alert').hide();
      $('.promo-code--title').fadeIn();
      $('.promo-code-form .input-group').fadeIn();
      $('.promo-code-form .input-group input').val('');
      $('.js-coupon-code-applied').hide();
    });

    $(document).on('change', '.js-alert-change select', function () {
      var choose = $(this).val();

      if(choose < 1) {
        $(this).parents('.blurb').find('.js-alert-week select').attr('disabled', true);
        $(this).parents('.blurb').find('.mylist-set-alert-save button').attr('disabled', true);
        $(this).parents('.blurb').find('.js-alert-week').removeClass('hide');
        $(this).parents('.blurb').find('.js-alert-month').addClass('hide');
        $(this).parents('.blurb').find('.mylist-set-alert-save button').addClass('button--disabled').attr('disabled', true);
     }
      else if(choose >= 2) {
        $(this).parents('.blurb').find('.js-alert-month').removeClass('hide');
        $(this).parents('.blurb').find('.js-alert-week').addClass('hide');
        $(this).parents('.blurb').find('.js-alert-month select').attr('disabled', false);
        $(this).parents('.blurb').find('.mylist-set-alert-save button').attr('disabled', false).removeClass('button--disabled');
      }
      else {
        $(this).parents('.blurb').find('.js-alert-month').addClass('hide');
        $(this).parents('.blurb').find('.js-alert-week').removeClass('hide');
        $(this).parents('.blurb').find('.js-alert-week select').attr('disabled', false);
        $(this).parents('.blurb').find('.mylist-set-alert-save button').removeClass('button--disabled').attr('disabled', false);
      }
    });

    $('.js-alert-disabled').clickToggle( function () {
      $('.js-alert-week select, .js-alert-month select, .js-alert-change select').attr('disabled', true);
      $('.mylist-set-alert-save button').removeAttr('disabled').removeClass('button--disabled');
    }, function () {
      if($('.js-alert-change select').val() >= 1) {
        $('.js-alert-week select, .js-alert-month select, .js-alert-change select').removeAttr('disabled');
      }
      else {
        $('.js-alert-change select').removeAttr('disabled');
        $('.mylist-set-alert-save button').attr('disabled', true).addClass('button--disabled');
      }
    });

    // Change the condition based on the dynamic lesser amount of 1000
    $('.cart-details__item').on('change', '.simulation-test', function () {
      if($(this).val() <= 1) {
        $('.js-less-total-value').removeClass('js-hide-show');
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        $('.cart-summary__cta-container .proceed-cta').attr('disabled', true).addClass('button--disabled');
      }
      else {
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        $('.js-less-total-value').addClass('js-hide-show');
        $('.cart-summary__cta-container .proceed-cta').attr('disabled', false).removeClass('button--disabled');
      }
    });
  });
}(DM_UI_CONFIG));
