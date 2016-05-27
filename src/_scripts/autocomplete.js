(function(dmUIConfig) {
  $(document).ready(function () {
    // Choose location auto complete

    // autoComplete Plugin reference - https://goodies.pixabay.com/jquery/auto-complete/demo.html

    $('.autocomplete-input input').on('keyup', function(e) {
      $(this).trigger('dmart.browse.pincode.autosuggest'); // Using trigger to call a method in another JavaScript file to perform some logic.

      $('.autocomplete-suggestions').scrollTop(1).perfectScrollbar('update');

      // Enter key pressed
      if(e.which === 13) {
        if($(this).val() !== '') {
          $(this).val($('.autocomplete-suggestions .autocomplete-suggestion.selected').text());
          $('.autocomplete-suggestions').hide();
        }
      }

      // backspace key pressed
      if(e.which === 8 && !$('.autocomplete-suggestions').hasClass('ps-active-y')) {
        $('.autocomplete-suggestions').perfectScrollbar('destroy');
        $('.autocomplete-suggestions').perfectScrollbar();
        $('.autocomplete-suggestions').scrollTop(10).perfectScrollbar('update');
      }
    });

    // iphone fixes 'Done' button
    $('.autocomplete-input input').on('focusout', function(e) {
      if($(this).val() !== '') {
        $(this).val($('.autocomplete-suggestions .autocomplete-suggestion.selected').text());
        $('.autocomplete-suggestions').hide();
      }
    });

    $('.autocomplete-input input').autoComplete({
      minChars: 1,
      source: function(term, suggest){
        term = term.toLowerCase();

        // Convert into Ajax request based on back-end implementation
        var choices = ['40007', '400076, Powai', '400077, Ghatkopar (E)', '400078, Bhandup (W)', '400078, Bhandup (W)', '400077, Ghatkopar (E)', '400078, Bhandup (W)', '400077, Ghatkopar (E)', '400078, Bhandup (W)'];
        var matches = [];
        for (var i=0; i<choices.length; i++) {
          if (~choices[i].toLowerCase().indexOf(term)) {
            matches.push(choices[i]);
          }
        }
        suggest(matches);
        $('.autocomplete-suggestions').scrollTop(1).perfectScrollbar('update');
      }
    });

    $('.autocomplete-suggestions').perfectScrollbar({
      suppressScrollX: true
    });

    //close suggestions on focusout, esc key and click out
    $('body, html').on('mouseup touchend keyup', function(e) {
      if($('.autocomplete-suggestions').is(':visible')) {
        var container = $('.autocomplete-suggestions:visible, .autocomplete-input input');
        if ((!container.is(e.target) && container.has(e.target).length === 0) || e.which === 27) {
          $('.autocomplete-suggestions:visible').hide();
        }
      }
    });
  });
}(DM_UI_CONFIG));
