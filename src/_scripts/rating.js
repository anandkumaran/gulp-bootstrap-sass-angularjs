'use strict';
(function(dmUIConfig) {
  $(document).ready(function () {
    $('.user-review__ratings, .write-review .user-review__ratings').raty({
      starType: 'i',
      starOn: 'icon-star-on',
      starOff: 'icon-star-off'
    });

    $('.user-review .user-review__ratings').raty({
      starType: 'i',
      score: 3,
      starOn: 'icon-star-on',
      starOff: 'icon-star-off',
      readOnly: true
    });

    $('.user-review__ratings-five').raty({
      starType: 'i',
      score: 5,
      starOn: 'icon-star-on',
      starOff: 'icon-star-off',
      readOnly: true
    });

    $('.user-review__ratings-four').raty({
      starType: 'i',
      score: 4,
      starOn: 'icon-star-on',
      starOff: 'icon-star-off',
      readOnly: true
    });

    $('.user-review__ratings-three').raty({
      starType: 'i',
      score: 3,
      starOn: 'icon-star-on',
      starOff: 'icon-star-off',
      readOnly: true
    });

    $('.user-review__ratings-two').raty({
      starType: 'i',
      score: 2,
      starOn: 'icon-star-on',
      starOff: 'icon-star-off',
      readOnly: true
    });

    $('.user-review__ratings-one').raty({
      starType: 'i',
      score: 1,
      starOn: 'icon-star-on',
      starOff: 'icon-star-off',
      readOnly: true
    });

  });
}(DM_UI_CONFIG));
