(function(dmUIConfig) {
  $(document).ready(function () {
    $(document).on('click', '.js-delivery-slot-cta.enabled', function () {
      $('.js-delivery-selection, .js-delivery-selection-summary, .js-delivery-address, .js-payment-method').hide();
      $('.js-delivery-selection-slot').fadeIn();
      $('.js-payment-highlight').removeClass('active');
      $('.delivery-selection--this-week, .delivery-selection--coming-week').perfectScrollbar('update');
      if($('.delivery-selection-slot .delivery-selection-row').find('.selected-slot').length===0) {
        $('.js-place-order').removeClass('enabled').addClass('button--disabled');
      }
    });

    $('.js-delivery-selection-cta').on('click', function () {
      $('.js-delivery-selection-slot, .js-delivery-address, .js-payment-method').hide();
      $('.js-delivery-selection').fadeIn();
      $('.js-payment-highlight').removeClass('active');
    });

    $(document).on('click', '.js-place-order.enabled', function () {
      $('.js-delivery-selection-slot, .js-payment-method').hide();
      $('.js-delivery-selection-summary, .js-alert-order, .js-delivery-address').fadeIn();
      $('.js-payment-highlight').removeClass('active');
    });

    $(document).on('click', '.js-address-delete', function () {
      if($(this).parents('li').find('input').is(':checked')) {
        $('.js-delivery-slot-cta').addClass('button--disabled').removeClass('enabled');
      }
      $(this).parents('li').fadeOut(600, function () {
        $(this).remove();
        $('.delivery-vertical__address').scrollTop(0).perfectScrollbar('update');
      });

      if($(this).parents('.dashboard__address, .delivery-vertical__address').find('li').length <=1) {
        $('.delivery-vertical__address-new').delay(200).fadeIn(500);
        $(this).parents('.delivery-vertical__address').hide();
        $('.js-new-address-cta').hide();
      }

      if($(this).parents('.dashboard__address').find('li').length <=1) {
        $('.resp-tab-content-active:visible').find('.dashboard-no-items').removeClass('js-hide-show');
        $('.resp-tab-content-active:visible').find('.dashboard__address--label').hide();
      }
    });

    $('.delivery-vertical__address').on('click', 'label', function() {
      $('.js-delivery-slot-cta').addClass('enabled').removeClass('button--disabled');
    });

    // Delivery Slots
    $('.delivery-selection-row span').on('click', function() {
      if(!$(this).hasClass('delivery-slot--not-selectable')) {
        $('.delivery-selection-row span').removeClass('selected-slot');
        $(this).addClass('selected-slot');
        $('.js-delivery-selection-slot .order-validity').fadeIn();
        $('.js-place-order').addClass('enabled').removeClass('button--disabled');
      }
    });

    $('.js-payment-method-cta').on('click', function () {
      $('.js-delivery-address').hide();
      $('.js-payment-highlight').addClass('active');
      $('.js-payment-method').fadeIn();
    });

    $('.js-payment-emi').on('click', function () {
      $('.js-div-table-scrollable').perfectScrollbar('update');
    });

    $('.js-make-default-address').clickToggle( function () {
      $(this).addClass('active');
    }, function () {
      $(this).removeClass('active');
    });

    // Weeks switch
    $('.js-delivery-next-week').clickToggle( function () {
      $(this).text('PREVIOUS 7 DAYS');
      $('.delivery-current-week').hide();
      $('.delivery-next-week').fadeIn('fast', function () {
        $('.delivery-selection--coming-week').perfectScrollbar('update');
      });
    }, function () {
      $(this).text('NEXT 7 DAYS');
      $('.delivery-next-week').hide();
      $('.delivery-current-week').fadeIn('fast', function () {
        $('.delivery-selection--this-week').perfectScrollbar('update');
      });
    });

    $('.delivery-vertical__address').on('click', '.js-delivery-favorite', function () {
      // dummy '.favorite-address' class name - indicating the address as favorite.
      $(this).parents('li').toggleClass('favorite-address');
      $(this).find('.js-delivery-favorite-icon').toggle();
    });

    $('.js-cart-accept').on('click', function () {
      // Redirect to My Cart page
      // $(this).parents('.container').remove();
    });

    $('.js-cart-reject').on('click', function () {
      $(this).parents('.alert').fadeOut(400, function () {
        $(this).hide();
      });
    });

    // Enable Pay Now
    $('.payment-method--card input[type="radio"]').on('click', function () {
      $(this).parents('.resp-tab-content-active').find('.js-payment-pay-now').removeClass('button--disabled');
    });

    $('.payment-method--card select').on('change', function () {
      $(this).parents('.resp-tab-content-active').find('.js-payment-pay-now').removeClass('button--disabled');
    });

    $('.form__input--expiry-date .form__input').on('focus', function () {
      $(this).parent().addClass('form__input--group-focus');
    });

    $('.payment-form:visible').on('click', 'input', function () {
      console.log($(this).is(':checked'));
    });

    $('.js-accordion-tabs-delivery .resp-tab-item').on('click', function () {
      $('.delivery-vertical__address').scrollTop(0).perfectScrollbar('update');
      $(this).parents('.js-accordion-tabs-delivery').find('form input').val('');
      $(this).parents('.js-accordion-tabs-delivery').find('form').each(function() {
        $(this).validate().resetForm();
      });
    });

  });
}(DM_UI_CONFIG));
