'use strict';
(function(dmUIConfig) {
  $(document).ready(function () {

    // Grid and List View
    $(document).on('click', '.plp-view-option .plp-view-option__grid', function() {
      $('.plp-view-option a').removeClass('active');
      $(this).addClass('active');
      $('.product-listing-item').removeClass('view-list-active');
      $('.product-added-to-cart .product-listing__total-items').show();
      $('.product-listing__total-items--list-view, .product-added-to-cart .product-listing__save').hide();
      $('.js-switch-view').prop('class', 'col-xs-12 col-md-4 col-lg-3 js-switch-view');
      if($('.product-listing-item').hasClass('product-added-to-cart')) {
        $('.product-added-to-cart .product-listing-item__secondary').css('display', 'none');
      }
    });

    $(document).on('click', '.plp-view-option .plp-view-option__list', function() {
      $('.plp-view-option a').removeClass('active');
      $(this).addClass('active');
      $('.product-listing-item').addClass('view-list-active');
      $('.product-listing__total-items').hide();
      $('.product-added-to-cart .product-listing__total-items--list-view').show();
      $('.js-switch-view').prop('class', 'col-xs-12 js-switch-view');
      if($('.product-listing-item').hasClass('product-added-to-cart')) {
        $('.product-added-to-cart .product-listing-item__secondary').css('display', 'block');
      }
      $('.product-listing-item').removeAttr('style');
      $('.product-listing-item__tertiary').hide();
    });

    // Grid and List View for CR PLP filter
    $(document).on('click', '.plp-filter .plp-view-option .plp-view-option__grid', function() {
      $('.plp-view-option a').removeClass('active');
      $(this).addClass('active');
      $('.product-listing-item').removeClass('view-list-active');
      $('.product-added-to-cart .product-listing__total-items').show();
      $('.product-listing__total-items--list-view, .product-added-to-cart .product-listing__save').hide();
      $('.js-switch-view').prop('class', 'col-xs-12 col-md-6 col-lg-4 js-switch-view');
      if($('.product-listing-item').hasClass('product-added-to-cart')) {
        $('.product-added-to-cart .product-listing-item__secondary').css('display', 'none');
      }
    });

    $(document).on('click', '.plp-filter .plp-view-option .plp-view-option__list', function() {
      $('.plp-view-option a').removeClass('active');
      $(this).addClass('active');
      $('.product-listing-item').addClass('view-list-active');
      $('.product-listing__total-items').hide();
      $('.product-added-to-cart .product-listing__total-items--list-view').show();
      $('.js-switch-view').prop('class', 'col-xs-12 js-switch-view');
      if($('.product-listing-item').hasClass('product-added-to-cart')) {
        $('.product-added-to-cart .product-listing-item__secondary').css('display', 'block');
      }
      $('.product-listing-item').removeAttr('style');
      $('.product-listing-item__tertiary').hide();
    });

    // Price Range Slider - default
    $('.js-filter-price-range').ionRangeSlider({
      type: 'double',
      min: 100,
      max: 50000,
      from: 12000,
      to: 30000,
      prefix: '<i class="icon-rupees"></i>',
      prettify_enabled: true,
      prettify_separator: ',',
      force_edges: true
    });

    // Price Range Slider - update
    $(document).on('click', '.js-filter-price-range-cta', function() {
      $(this).closest('.filter-price .custom-range-slider').hide();
      $(this).closest('.js-price-slider').removeClass('active');
      $('.js-filter-price-range').data('ionRangeSlider').update({
          from: 5000,
          to: 20000
      });
    });

    // Price Range Slider - close
    $(document).on('click', '.js-price-slider span', function() {
      $('.filter-price .custom-range-slider').fadeIn();
      $(this).parent().addClass('active');
    });

    // Price Range Slider - close
    $('body, html').on('mouseup touchend', function(e) {
      if($('.js-price-slider .custom-range-slider').is(':visible')) {
        var container = $('.js-price-slider span');
        if (!container.is(e.target) && container.has(e.target).length === 0 && $('.filter-price .custom-range-slider').is(':visible')) {
          $('.filter-price .custom-range-slider').css('display', 'none');
          container.parent().removeClass('active');
          $('.js-filter-price-range').data('ionRangeSlider').reset();
        }
      }
    });

    // Discount Range Slider - default
    $('.js-filter-discount-range').ionRangeSlider({
      type: 'double',
      min: 1,
      max: 100,
      from: 12,
      to: 70,
      postfix: '%',
      prettify_enabled: true,
      prettify_separator: ',',
      force_edges: true
    });

    // Discount Range Slider - update
    $(document).on('click', '.js-filter-discount-range-cta', function() {
      $(this).closest('.filter-discounts .custom-range-slider').hide();
      $(this).closest('.js-discount-slider').removeClass('active');
      $('.js-filter-discount-range').data('ionRangeSlider').update({
          from: 50,
          to: 60
      });
    });

    // Discount Range Slider - close
    $(document).on('click', '.js-discount-slider span', function() {
      $('.filter-discounts .custom-range-slider').fadeIn();
      $(this).parent().addClass('active');
    });

    // Discount Range Slider - close
    $('body, html').on('mouseup touchend', function(e) {
      if($('.js-discount-slider .custom-range-slider').is(':visible')) {
        var container = $('.js-discount-slider span');
        if (!container.is(e.target) && container.has(e.target).length === 0 && $('.filter-discounts .custom-range-slider').is(':visible')) {
          $('.filter-discounts .custom-range-slider').css('display', 'none');
          container.parent().removeClass('active');
          $('.js-filter-discount-range').data('ionRangeSlider').reset();
        }
      }
    });

    // Filters
    var x=1, $applyFilter, filterValue;
    $(document).on('click', '.js-filter-add a', function() {
      if(!$(this).hasClass('selected')) {
        $(this).addClass('selected').attr('id', 'filter-'+x).attr('rel', x);
        if($(this).parents('.js-filter-add').hasClass('js-filter-add-color')) {
          filterValue = $(this).html();
          $applyFilter = '<li><a href="javascript:;" id="filter-apply-'+x+'" rel="'+x+'">'+filterValue+'<i class="filter-remove-cta icon-cross"></i></a></li>';
          $('.filter-applied-list').prepend($applyFilter);
        }
        else {
          filterValue = $(this).attr('title');
          $applyFilter = '<li><a href="javascript:;" title="'+filterValue+'" id="filter-apply-'+x+'" rel="'+x+'"><span>'+filterValue+'</span><i class="filter-remove-cta icon-cross"></i></a></li>';
          $('.filter-applied-list').prepend($applyFilter);
        }
        x++;
      }
      else {
        var id = $(this).attr('rel');
        $('.filter-applied-list #filter-apply-'+id).parent().remove();
        $(this).removeClass('selected').removeAttr('id rel');
        x--;
      }

      if($('.filter-applied-list li').length > 0) {
        $('.filter-module__applied').slideDown();
      }
      else {
        $('.filter-module__applied').slideUp();
      }
    });

    $(document).on('click', '.filter-applied-list .filter-remove-cta', function() {
      var value = $(this).parent().attr('rel');
      $('.js-filter-add #filter-'+value).removeClass('selected').removeAttr('id rel');
      $('.filter-applied-list #filter-apply-'+value).parent().remove();
      if($('.filter-applied-list li').length > 0) {
        $('.filter-module__applied').slideDown();
      }
      else {
        $('.filter-module__applied').slideUp();
      }
    });

    // Product Listing Apparel Color slider
    $(document).on('click', '.plp-apparel .js-plp-color-pallette a', function() {
      if(!$(this).parent().hasClass('disabled')) {
        $(this).parent().parent().find('li').removeClass('selected');
        $(this).parent().addClass('selected');
        var pallette = $(this).attr('rel').split('-').pop();

        $(this).parents('.plp-apparel').find('.plp-image-slider img').css('opacity', 0).removeClass('active');
        $(this).parents('.plp-apparel').find('.plp-image-slider #plpImageSlider-'+pallette).animate({
          opacity: 1
        }, 600).addClass('active');
      }
    });

    // Remove product
    $(document).on('click', '.added-product__remove a', function() {
      var $parents = $(this).parents('.product-listing-item');
      var addedProductLength = $(this).parents('.added-product-wrap').find('.added-product-wrap__list').length;
      $(this).parents('.added-product-wrap__list').remove();
      $('.added-product-wrap').scrollTop(0).perfectScrollbar('update');
      $parents.find('.added-product-wrap ul li').find('.custom-dropdown').removeClass('primary-border');
      if(addedProductLength === 1) {
        if($parents.hasClass('plp-apparel')) {
          $parents.find('.product-listing__cta-container').hide();
          $parents.find('.product-listing-item__primary').find('.product-listing--image').removeClass('small');
          $parents.find('.slides a.selected span').remove();
          $parents.find('.slides a.selected').removeClass('selected');
          $parents.find('.slides a.addedToCart span').remove();
          $parents.find('.slides a.addedToCart').removeClass('addedToCart');
          $parents.find('.product-listing__save, .product-listing__size-guide, .plp-apparel__color-pallette').show();
          $parents.find('.plp-apparel__color-pallette-alt').hide();
        }
        else {
          $parents.find('.product-listing__cta-container').fadeIn();
        }
        $parents.find('.product-listing-item__secondary').css('display', 'none');
        $parents.removeClass('product-added-to-cart');
        $parents.find('.product-listing-item__primary, .product-listing-details, .product-listing--original-price, .product-listing--discounted-price, .product-listing__quantity-secondary').fadeIn();
        $(this).parents('.added-product-wrap').perfectScrollbar('destroy');
      }
      else if(addedProductLength === 2) {
        $parents.find('.product-listing-item__secondary').find('.cart-icon').removeClass('small');
        $(this).parents('.added-product-wrap').perfectScrollbar('destroy');
      }
      else {
        $parents.find('.added-product-wrap').removeAttr('style');
        $parents.find('.product-listing-item__secondary').find('.cart-icon').addClass('small');
      }
    });


    // Add to Shopping List
    $(document).on('click', '.product-listing-item__tertiary-lists a', function() {
      $(this).toggleClass('selected');
      if($(this).parents('.product-listing-item__tertiary-lists').find('a').hasClass('selected')) {
        $(this).parents('.product-listing-item__tertiary-lists').siblings('.add-list-submit-cta').addClass('active');
      }
      else {
        $(this).parents('.product-listing-item__tertiary-lists').siblings('.add-list-submit-cta').removeClass('active');
      }
    });

    $(document).on('click', '.add-list-submit-cta.active', function() {
      $(this).text('Added to List');
      $(this).parents('.product-listing-item__tertiary').delay(500).fadeOut(300).animate({
        opacity: 0
      }, 100);
      $('.product-listing-item__tertiary-lists a, .add-list-submit-cta').removeClass('selected');
    });

    $(document).on('click', '.product-listing__quantity--add a', function() {
      if(!$(this).hasClass('disabled')) {
        $('.product-listing-item__tertiary .add-list-submit-cta').removeClass('active').text('Submit');
        $(this).parents('.product-listing-item').find('.product-listing-item__tertiary').animate({
          opacity: 1
        }, 500).css('display', 'block');
        $(this).parents('.product-listing-item').find('.product-listing-item__tertiary-lists').scrollTop(0).perfectScrollbar('update');
      }
    });

    // validating Add to Shopping List input field by clicking CTA button
    $(document).on('click', '.product-listing-item__tertiary--add-cta', function() {
      if($(this).siblings('.product-listing-item__tertiary--field').val() === '') {
        $(this).siblings('.product-listing-item__tertiary--field').css('border', '1px solid #d35400');
        return false;
      }
      else {
        $(this).siblings('.product-listing-item__tertiary--field').removeAttr('style');
        var listValue = $(this).siblings('.product-listing-item__tertiary--field').val();
        $('.product-listing-item__tertiary-lists ul').prepend('<li><a class="new" href="javascript:;">'+listValue+'</a></li>');
        $('.product-listing-item__tertiary-lists .new').animate({opacity: 1}, 800).removeClass('new');
        $(this).siblings('.product-listing-item__tertiary--field').val('');
      }
    });

    // click outside to close Add to Shopping List popup
    $('body, html').on('mouseup touchend', function(e) {
      var container = $('.product-listing-item__tertiary:visible');
      if(container) {
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          container.css('opacity', 0).fadeOut();
        }
      }
    });

    function flipCard($parents) {
      if(!$parents.hasClass('view-list-active')) {
        $parents.find('.product-listing-item__primary').css('display', 'none');
        $parents.find('.product-listing-item__secondary').css('display', 'block');
        $('.added-product-wrap').scrollTop(0).perfectScrollbar('update');

        var addedProductLength = $parents.find('.added-product-wrap .added-product-wrap__list').length;

        if(addedProductLength<=1) {
          $parents.find('.cart-icon').removeClass('small');
        }
        else {
          $parents.find('.cart-icon').addClass('small');
        }

        $parents.find('.product-listing--original-price, .product-listing--discounted-price, .product-listing__quantity-secondary, .product-listing__cta-container').hide();
        $parents.delay(2000).addClass('product-added-to-cart');
        $parents.find('.added-product-wrap ul li').find('.custom-dropdown').removeClass('primary-border');
      }
      else {
        $parents.find('.product-listing--original-price, .product-listing__size-guide, .product-listing--discounted-price, .product-listing__quantity-secondary, .product-listing__cta-container, .product-listing__total-items').hide();
        $parents.delay(2000).addClass('product-added-to-cart');
        $parents.find('.slides a.selected').addClass('addedToCart').removeClass('selected');
        $parents.find('.product-listing-item__secondary, .product-listing__total-items--list-view').css('display', 'block');
      }
      if($parents.hasClass('view-list-active')) {
        $('.product-added-to-cart').find('.product-listing-item__secondary').css('display', 'block');
      }
    }

    function addWeight($parents) {
      $parents.find('.product-listing-item__secondary').find('.cart-icon').addClass('small');
      $parents.find('.added-product-wrap ul').append($parents.find('.added-product-wrap__list')[0].outerHTML);
      $parents.find('.added-product-wrap ul li').find('.custom-dropdown').removeClass('primary-border');
      $parents.find('.added-product-wrap ul li:last-child').find('.custom-dropdown').addClass('primary-border');
      var savingText = $parents.find('.product-price__saving').html();
      savingText = savingText.replace('Your', 'Total');
      $parents.find('.product-price__saving').html(savingText);
      var scrollHeight = $parents.find('.added-product-wrap ul li:last-child')[0].offsetTop;
      $parents.find('.added-product-wrap').scrollTop(scrollHeight).perfectScrollbar('update');
    }

    $(document).on('change', '.add-product-other-quantity .product-listing__quantity--select', function(){
      $('.added-product-wrap').perfectScrollbar({
        suppressScrollX: true
      });

      var $parents = $(this).parents('.product-listing-item');
      addWeight($parents);

      // to make first option as default in select dropdown then updating the selectric plugin
      $('option', this).eq(0).attr('selected', true);
    });

    $(document).on('change', '.product-listing-details .product-listing__quantity-other--select', function(){
      var $parents = $(this).parents('.product-listing-item');
      flipCard($parents);
      addWeight($parents);

      $('.added-product-wrap').perfectScrollbar({
        suppressScrollX: true
      });

      // to make first option as default in select dropdown then updating the selectric plugin
      $('option', this).eq(0).attr('selected', true);

    });


    $(document).on('click', '.product-listing__cta-button, .product-added-to-cart__icon-cta', function() {
      var $parents = $(this).parents('.product-listing-item');
      var addedProductLength =$parents.find('.added-product-wrap').find('.added-product-wrap__list').length;
      $parents.find('.slider-variant-wrap li a').removeClass('selected');
      if(addedProductLength === 0) {
        $parents.find('.added-product-wrap ul').append('<li class="added-product-wrap__list clearfix">\<div class="md-custom-select js-rupee added-product__quantity custom-dropdown">\<select tabindex="0"><option>2kg - ₹250</option><option>5kg - ₹500</option><option>10kg - ₹1000</option></select></div>\<div class="md-custom-select added-product__quantity-size custom-dropdown">\<select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>\</select></div><div class="added-product__remove">\<a href="javascript:;"><i class="added-product__remove-icon icon-cross"></i></a></div></li>');
      }
      flipCard($parents);
    });

    // adding size variant to cart
    $(document).on('click', '.slider-variant .slides a', function() {
      if(!$(this).hasClass('disabled') && !$(this).hasClass('addedToCart')) {
        $(this).toggleClass('selected');
        $(this).parents().siblings('.product-listing__cta-container').show();
        $(this).parents('.product-listing-item__primary').find('.product-listing--image').addClass('small');
      }

      if($(this).parent().parent().find('.selected').length <=0) {
        $(this).parents('.product-listing-details').find('.product-listing__cta-container').hide();
        $(this).parents('.product-listing-item__primary').find('.product-listing--image').removeClass('small');
      }
    });

    $(document).on('click', '.plp-apparel .plp-apparel__cta-button', function() {
      var $parents = $(this).parents('.product-listing-item');
      // var selectedProductLength = $parents.find('.slider-variant .slides a.selected').length;
      // var i;

      var addedProductLength = $parents.find('.added-product-wrap').find('.added-product-wrap__list').length;
      if(addedProductLength === 0) {
        // for (i = 0; i < selectedProductLength; i++) {
        $parents.find('.added-product-wrap ul').append('<li class="added-product-wrap__list clearfix">\<div class="md-custom-select added-product__quantity custom-dropdown">\<select tabindex="0"><option value="1">Small</option><option value="2">Medium</option><option value="3">Large</option><option value="4">Extra Large</option></select></div>\<div class="md-custom-select added-product__quantity-size custom-dropdown">\<select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>\</select></div><div class="added-product__remove">\<a href="javascript:;"><i class="added-product__remove-icon icon-cross"></i></a></div></li>');
        // }
        $parents.find('.add-product-other-quantity').show();
      }
      flipCard($parents);
      $parents.find('.slider-variant').resize();
    });

    $('body, html').on('mouseup touchend', function(e) {
      var container = $('.product-listing-item__secondary:visible');
      if($('.product-listing-item__secondary').is(':visible')) {
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if(!container.parents('.product-listing-item').hasClass('view-list-active')) {
            container.siblings('.product-listing-item__primary').css('display', 'block');
            container.siblings('.product-listing-item__primary').find('.product-listing--image').toggleClass('small');
            container.parents('.product-listing-item').find('.product-listing__save, .product-listing__size-guide').hide();
            container.css('display', 'none');
            container.parents('.product-listing-item').find('.slider-variant li a.selected').each(function(){
              var text = $(this).text().indexOf(' (1)');
              if(text === -1) {
                $(this).addClass('addedToCart').removeClass('selected').append(' <span>(1)</span>');
              }
            });
            container.parents('.product-listing-item').find('.added-product-details').show();
            container.parents('.product-listing-item').find('.slider-variant').resize();
            container.parents('.product-listing-item').find('.plp-apparel__color-pallette').hide();
            container.parents('.product-listing-item').find('.plp-apparel__color-pallette-alt').show();
          }
        }
      }
    });

    function flipAdded() {
      var container = $('.product-listing-item__secondary:visible');
      if(!container.parents('.product-listing-item').hasClass('view-list-active')) {
        container.siblings('.product-listing-item__primary').css('display', 'block');
        container.parents('.product-listing-item').find('.product-listing__save, .product-listing__size-guide').hide();
        container.css('display', 'none');
        container.parents('.product-listing-item').find('.slider-variant li a.selected').each(function(){
          var text = $(this).text().indexOf(' (1)');
          if(text === -1) {
            $(this).addClass('addedToCart').removeClass('selected').append(' <span>(1)</span>');
          }
        });
        container.parents('.product-listing-item').find('.added-product-details').show();
        container.parents('.product-listing-item').find('.slider-variant').resize();
        container.parents('.product-listing-item').find('.plp-apparel__color-pallette').hide();
        container.parents('.product-listing-item').find('.plp-apparel__color-pallette-alt').show();
      }
    }

    //fliping card after scroll
    $(window).scroll( $.throttle( 250, flipAdded ) );

    var myVar;
    $('.product-listing-item__secondary').on({
     'mouseenter': function() {
        clearInterval(myVar);
      },
     'mouseleave': function() {
        myVar = setInterval(function(){
          flipAdded();
        }, 4000);
      }
    });

    $('.filter-add-baner__close').click(function(){
      $('.filter-add-baner').fadeOut(300);
    });

    $('.js-disabled').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
    });

    /*category filter*/
    $('.filter__item--title').on('click', function() {
      $('.filter__item--title').next('.filter__item-list').slideUp();
      $('.filter__item--title').removeClass('active');
      if($(this).next('.filter__item-list').css('display') === 'none') {
        $(this).next('.filter__item-list').slideDown();
        $(this).next('.filter__item-list').perfectScrollbar('update');
        $(this).addClass('active');
      }
      else {
        $(this).next('.filter__item-list').slideUp();
        $(this).removeClass('active');
      }
    });

    $('.js-mobile-filter a').on('click', function () {
      $('.product-filter-wrapper').css('display', 'block');
      $('html, body').css('overflow', 'hidden');
    });

    $('.js-brand-filter-back').on('click', function() {
      $('.product-filter-wrapper').css('display', 'none');
      $('html, body').css('overflow', 'auto');
    });

    $('.js-filter-category .filter__item-list .filter__sub-item-list li').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
    });

    $('.js-filter-hide-show').on('click', function() {
      $(this).find('.filter__item--title-arrow i').toggleClass('icon-caret-down icon-caret-up');
      $(this).parents('.product-filter').find('.filter__item-module, .filter__item-fixed-ternary').slideToggle();
    });

    $('.filter-title .js-clear-filter').on('click', function () {
      return false;
    });

    $('.filter__item-list-tertiary').on('click', 'li', function(){
      $('filter__item-list-tertiary li').removeClass('active');
      $('a', this).toggleClass('active');
    });

    $('.js-clear-filter').on('click', function () {
      $(this).parents('.product-filter--brand').find('.filter__item-module .search-text-input').val('').focus();
    });
  });
}(DM_UI_CONFIG));
