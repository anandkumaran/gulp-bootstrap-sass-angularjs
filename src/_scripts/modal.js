(function(dmUIConfig) {
  $(document).ready(function () {
    $('.modal-link').on('click', function(){
      var targetDiv = $(this).data('target');
      var largeScreen = 1000;
      if($(window).width() >= largeScreen) {
        $('#'+targetDiv).fadeIn(100, function () {
          $('.delivery-selection--this-week').scrollTop(0).perfectScrollbar('update');
        });
      }
      else {
        $('#'+targetDiv).css('display', 'block');
        $('.delivery-selection--this-week').scrollTop(0).perfectScrollbar('update');
      }
      $('html, body').css('overflow', 'hidden');
    });

    $('.modal-dialog__close, .location-skip').on('click', function(){
      $(this).parents('.modal-dialog').hide();
      $('html, body').css('overflow', 'auto');
    });

    //close on ESC
    $(document).bind('keydown', function(e){
      if (e.which === 27) {
        $('.js-modal-dialog-esc').hide();
        $('html, body').css('overflow', 'auto');
        $('.js-share-cart-cancel-bta').trigger('click');
      }
    });

    $('.delivery-code .delivery-code__label, .splash .delivery-code .delivery-code__label-choose, .splash .delivery-code .delivery-code__label-choose-location, .delivery-code .delivery-code__pin, .delivery-code .icon-delivery-caret-down').on('click', function () {
      $('#locationModal').show();
      $(this).trigger('dmart.browse.pincode.fetchall');
      $('html, body').css('overflow', 'hidden');
    });

    $('#ShareCartModal').on('click', '.modal-dialog__close', function () {
      $('.js-share-cart-cancel-bta').trigger('click');
    });

    // Fix : AE-4254
    // Add the below script when you display the '.alert' message box

    // $('html, body').animate({
    //   scrollTop: 0
    // }, 500);
  });
}(DM_UI_CONFIG));
