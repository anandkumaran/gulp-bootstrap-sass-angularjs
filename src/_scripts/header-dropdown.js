(function(dmUIConfig) {
  $(document).ready(function () {

    $(document).on('click', '.dropdown-signin', function () {
      $(this).toggleClass('opened');
      $('.form .form__input, .form .form__input--mobile').removeClass('form__input--error');

      if($(this).hasClass('opened')) {
        $(this).parent().find('.dropdown-register').removeClass('opened');
        $(this).parent().find('.header-dropdown--register').hide();
        $(this).parent().find('.header-dropdown--signin').fadeIn();
      }
      else {
        $(this).parent().find('.header-dropdown--signin').hide();
      }
    });

    $(document).on('click', '.dropdown-register', function () {
      $(this).toggleClass('opened');
      $('.form .form__input, .form .form__input--mobile').removeClass('form__input--error');

      if($(this).hasClass('opened')) {
        $(this).parent().find('.dropdown-signin').removeClass('opened');
        $(this).parent().find('.header-dropdown--signin').hide();
        $(this).parent().find('.header-dropdown--register').fadeIn();
      }
      else {
        $(this).parent().find('.header-dropdown--register').hide();
      }
    });

    $(document).on('click', '.dropdown-minicart', function () {
      $(this).toggleClass('opened');

      if($(this).hasClass('opened')) {
        $(this).parent().find('.header-dropdown--minicart').fadeIn();
        $('.cart-details__scroll').perfectScrollbar('update');
      }
      else {
        $(this).parent().find('.header-dropdown--minicart').hide();
      }
    });

    $(document).on('click', '.js-myaccount-dropdown', function () {
      $(this).toggleClass('opened');

      if($(this).hasClass('opened')) {
        $(this).parent().find('.header-dropdown--myaccount').fadeIn();
      }
      else {
        $(this).parent().find('.header-dropdown--myaccount').hide();
      }
    });

    //close suggestions on focusout, esc key and click out
    $('body, html').on('mouseup touchend keyup', function(e) {
      var container = $('.dropdown-register, .header-dropdown--register');
      if($('.header-dropdown--register').is(':visible')) {
        if ((!container.is(e.target) && container.has(e.target).length === 0) || e.which === 27) {
          container.removeClass('opened');
          container.parent().find('.header-dropdown--register').hide();
        }
      }
    });

    //close suggestions on focusout, esc key and click out
    $('body, html').on('mouseup touchend keyup', function(e) {
      var container = $('.dropdown-signin, .header-dropdown--signin');
      if($('.header-dropdown--signin').is(':visible')) {
        if ((!container.is(e.target) && container.has(e.target).length === 0) || e.which === 27) {
          container.removeClass('opened');
          container.parent().find('.header-dropdown--signin').hide();
        }
      }
    });

    var gridBreakpointsLg = 1000;
    if ($(window).width() >= gridBreakpointsLg) {
      //enlarging search box
      $('.js-search-field').on('keyup', function() {
        $(this).addClass('active');
        if($(this).val() !== '') {
          $(this).parents('.header-component__primary').find('.delivery-code__label, .delivery-code__pin, .delivery-code__label-choose, .delivery-code__label-choose-location, .icon-delivery-caret-down, .cart-price-label').css({
            display: 'none',
            opacity: 0
          });
          $(this).next('i.icon-search-voice').addClass('active');
          $('.js-class-delivery-downdown, .js-class-cart-downdown').removeClass('col-lg-2').addClass('col-lg-1');
          if($('.js-header-container').hasClass('header-sticky')) {
            $('.js-class-alt-search').removeClass('col-lg-5').addClass('col-lg-7');
          }
          else {
            $('.js-class-alt-search').removeClass('col-lg-5').addClass('col-lg-8');
          }
          $('.delivery-code .icon-delivery-location, .delivery-code__label-choose, .delivery-code__label-choose-location, .cart-wrap, .avatar').addClass('active');
          $(this).parent().find('.header-dropdown').delay(400).slideDown('fast', function () {
            $(this).parents().find('.header-dropdown .search-dropdown').perfectScrollbar('update');
          });
        }
        else {
          $(this).parent().find('.header-dropdown').slideUp('fast');
        }
      });
    }

    //close header search dropdown on focusout, esc key and click out
    $('body, html').on('mouseup touchend keyup', function(e) {
      var container = $('.js-search-field, .header-dropdown--search');
      if($('.header-dropdown--search').is(':visible') || $('.search-toolbar__field.js-search-field').hasClass('active')) {
        if ((!container.is(e.target) && container.has(e.target).length === 0) || e.which === 27) {
          $('.header-dropdown--search').slideUp('fast');
          $('.js-class-alt-search').removeClass('col-lg-8 col-lg-7').addClass('col-lg-5');
          setTimeout(function(){
            $('.header-component__primary').find('.delivery-code__label, .delivery-code__pin, .icon-delivery-caret-down, .cart-price-label').show().animate({
              opacity: 1
            }, 450);

            if($('.splash').length) {
              $('.header-component__primary').find('.delivery-code__label-choose, .delivery-code__label-choose-location').show().animate({
                opacity: 1
              }, 450);
            }
            $('i.icon-search-voice').removeClass('active');
            $('.js-class-delivery-downdown, .js-class-cart-downdown').removeClass('col-lg-1').addClass('col-lg-2');
            $('.delivery-code .icon-delivery-location, .cart-wrap, .avatar').removeClass('active');
            $('.search-toolbar__field.js-search-field').removeClass('active');
          }, 320);
        }
      }
    });

    //close mini cart on focusout, esc key and click out
    $('body, html').on('mouseup touchend keyup', function(e) {
      if($('.header-dropdown--minicart').is(':visible')) {
        var container = $('.dropdown-minicart, .header-dropdown--minicart');
        if ((!container.is(e.target) && container.has(e.target).length === 0) || e.which === 27) {
          container.removeClass('opened');
          container.parent().find('.header-dropdown--minicart').hide();
        }
      }
    });

    //close myaccount dropdown on focusout, esc key and click out
    $('body, html').on('mouseup touchend keyup', function(e) {
      if($('.header-dropdown--myaccount').is(':visible')) {
        var container = $('.js-myaccount-dropdown, .header-dropdown--myaccount');
        if ((!container.is(e.target) && container.has(e.target).length === 0) || e.which === 27) {
          container.removeClass('opened');
          container.parent().find('.header-dropdown--myaccount').hide();
        }
      }
    });

  });
}(DM_UI_CONFIG));
