'use strict';
(function(dmUIConfig) {
  $.validator.addMethod(
    'regex',
    function(value, element, regexp) {
      var re = new RegExp(regexp);
      return this.optional(element) || re.test(value);
    },
    'Check your input!'
  );

  $.validator.addMethod(
  'expiryDateValidate',
  function (value, element) {
    var today = new Date();
    var startDate = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0, 0);
    var expDate = value;
    var separatorIndex = expDate.indexOf('/');
    expDate = expDate.substr( 0, separatorIndex ) + '/1' + expDate.substr( separatorIndex );
    return Date.parse(startDate) <= Date.parse(expDate);
  },
  'Must be a valid Expiration Date.'
  );

  $(document).ready(function () {
    $('.js-search-field, .input-text-field, .promo-code-form input').on('keypress', function (key) {
      //console.log(key); // to check the value of charCode which the key is pressed
      if ((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode !== 45) && (key.charCode !== 44) && (key.charCode !== 34) && (key.charCode !== 38) && (key.charCode !== 43) && (key.charCode !== 124) && (key.charCode !== 42) && (key.charCode !== 63) && (key.charCode !== 32) && (key.charCode !== 46) && (key.charCode !== 39) && (key.charCode !== 0) && (key.charCode < 47 || key.charCode > 58)) {
        return false;
      }
    });

    $('#formValidation').validate({
      errorElement: 'span',
      ignore: '.ignore',
      onkeyup: function(element) {
        if ($(element).val() && !($(element).attr('type') === 'email' || $(element).attr('type') === 'tel' || $(element).attr('type') === 'password' || $(element).attr('type') === 'text')) {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        mobileNumber: {
          number: true,
          minlength: 10,
          maxlength: 10,
          regex: /^[7-9]+[0-9]*$/
        },
        password: {
          minlength: 8,
          maxlength: 60
        },
        otpNumber1: {
          number: true,
          minlength: 1,
          maxlength: 1
        },
        otpNumber2: {
          number: true,
          minlength: 1,
          maxlength: 1
        },
        otpNumber3: {
          number: true,
          minlength: 1,
          maxlength: 1
        },
        otpNumber4: {
          number: true,
          minlength: 1,
          maxlength: 1
        },
        otpNumber5: {
          number: true,
          minlength: 1,
          maxlength: 1
        },
        otpNumber6: {
          number: true,
          minlength: 1,
          maxlength: 1
        },
        email: {
          minlength: 6,
          maxlength: 150,
          regex: /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
        }
      },
      groups: {
        name: 'otpNumber1 otpNumber2 otpNumber3 otpNumber4 otpNumber5 otpNumber6'
      },
      messages: {
        email: 'Oops! Invalid mail-id!',
        mobileNumber: 'Enter valid mobile number!',
        password: 'Enter min 8 or max 60 characters!',
        otpNumber1: 'Enter digits',
        otpNumber2: 'Enter digits',
        otpNumber3: 'Enter digits',
        otpNumber4: 'Enter digits',
        otpNumber5: 'Enter digits',
        otpNumber6: 'Enter digits'
      },
      errorPlacement: function (error, element) {
        if (element.attr('rel') === 'otpInput') {
          error.insertAfter('.otp-group');
        }
        else {
          error.insertAfter(element);
        }
      }
    });

    $('#formAccountValidation').validate({
      errorElement: 'span',
      onkeyup: function(element) {
        if ($(element).val()) {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        mobileNumber: {
          number: true,
          minlength: 10,
          maxlength: 10,
          regex: /^[7-9]+[0-9]*$/
        },
        otpNumber1: {
          number: true,
          minlength: 1,
          maxlength: 1
        },
        otpNumber2: {
          number: true,
          minlength: 1,
          maxlength: 1
        },
        otpNumber3: {
          number: true,
          minlength: 1,
          maxlength: 1
        },
        otpNumber4: {
          number: true,
          minlength: 1,
          maxlength: 1
        },
        otpNumber5: {
          number: true,
          minlength: 1,
          maxlength: 1
        },
        otpNumber6: {
          number: true,
          minlength: 1,
          maxlength: 1
        }
      },
      groups: {
        name: 'otpNumber1 otpNumber2 otpNumber3 otpNumber4 otpNumber5 otpNumber6'
      },
      messages: {
        otpNumber1: 'Enter digits',
        otpNumber2: 'Enter digits',
        otpNumber3: 'Enter digits',
        otpNumber4: 'Enter digits',
        otpNumber5: 'Enter digits',
        otpNumber6: 'Enter digits'
      },
      errorPlacement: function (error, element) {
        if (element.attr('rel') === 'otpInput') {
          error.insertAfter('.otp-group ');
        }
        else {
          error.insertAfter(element);
        }
      }
    });

    $('#formRegisterValidation').validate({
      errorElement: 'span',
      onkeyup: function(element) {
        if ($(element).val() && !($(element).attr('type') === 'email' || $(element).attr('type') === 'tel' || $(element).attr('type') === 'password')) {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        mobileNumber: {
          number: true,
          minlength: 10,
          maxlength: 10,
          regex: /^[7-9]+[0-9]*$/
        },
        email: {
          minlength: 6,
          maxlength: 150,
          regex: /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
        },
        password: {
          minlength: 8,
          maxlength: 60
        },
        firstName: {
          minlength: 1,
          maxlength: 150,
          regex: /^[A-Za-z]+[A-Za-z\s]*$/
        },
        lastName: {
          minlength: 1,
          maxlength: 150,
          regex: /^[A-Za-z]+[A-Za-z\s]*$/
        },
        tcAgree: {
          required: true
        }
      },
      messages: {
        email: 'Oops! Invalid mail-id!',
        firstName: 'Enter only alphabets!',
        lastName: 'Enter only alphabets!',
        mobileNumber: 'Enter valid mobile number!',
        password: 'Enter min 8 or max 60 characters!',
        tcAgree: 'You must agree to our T&C to register'
      }
    });

    $('#formLocationValidation').validate({
      errorElement: 'span',
      onkeyup: function(element) {
        if ($(element).val()) {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        pinNumber: {
          minlength: 1
        }
      },
      messages: {
        pinNumber: 'This field is required!'
      }
    });

    $('#formLocationValidationModal').validate({
      errorElement: 'span',
      onkeyup: function(element) {
        if ($(element).val()) {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        pinNumberModal: {
          minlength: 1
        }
      },
      messages: {
        pinNumberModal: 'This field is required!'
      }
    });

    $('#forgotValidation').validate({
      errorElement: 'span',
      ignore: '.ignore',
      onkeyup: function(element) {
        if ($(element).val()) {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        mobileNumber: {
          number: true,
          minlength: 10,
          maxlength: 10,
          regex: /^[7-9]+[0-9]*$/
        }
      },
      messages: {
        mobileNumber: 'Enter valid mobile number!'
      }
    });

    $('#footerNewsletter').validate({
      errorElement: 'span',
      onkeyup: function(element) {
        if ($(element).val() && !($(element).attr('type') === 'email')) {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        newsletter: {
          minlength: 6,
          maxlength: 150,
          regex: /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
        }
      },
      messages: {
        newsletter: 'Oops! Invalid mail-id!'
      }
    });

    $('#formReviewValidation').validate({
      errorElement: 'span',
      onkeyup: function(element) {
        if ($(element).val() && $(element).val() === '') {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        writeReviewTitle: {
          minlength: 3,
          maxlength: 150,
          regex: /^[A-Za-z]+[A-Za-z\s]*$/
        },
        writeReviewDescription: {
          minlength: 10,
          maxlength: 320,
          regex: /^[A-Za-z]+[A-Za-z\s]*$/
        }
      },
      messages: {
        writeReviewTitle: 'Fill atleast 3 characters',
        writeReviewDescription: 'Fill atleast 10 characters'
      }
    });

    $('#formCoupon').validate({
      errorElement: 'span',
      onkeyup: function(element) {
        if ($(element).val() && $(element).val() === '') {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        promeCode: {
          minlength: 6,
          maxlength: 10,
          regex: /^[A-Za-z]+[A-Za-z0-9\s]*$/
        }
      },
      messages: {
        promeCode: 'Enter min 6 and max 10 alphanumeric!'
      },
      submitHandler: function(form) {
        $(form).find('.input-group').hide();
        $('.promo-code--title').hide();
        $('.js-coupon-applied, .js-coupon-code-applied').fadeIn().css('display', 'block');
      }
    });

    $('#formServiceCenter').validate({
      errorElement: 'span',
      ignore: '.ignore',
      onkeyup: function(element) {
        if ($(element).val()) {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        addressPincode: {
          minlength: 1,
          maxlength: 250,
          regex: /^[A-Za-z0-9]+[A-Za-z0-9\s]*$/
        }
      },
      messages: {
        addressPincode: 'Allowed only alphanumeric!'
      }
    });

    $('#formShareCartValidation').validate({
      errorElement: 'span',
      ignore: '.ignore',
      onkeyup: function(element) {
        if ($(element).val() && !($(element).attr('type') === 'email' || $(element).attr('type') === 'tel')) {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        mobileNumber: {
          number: true,
          minlength: 10,
          maxlength: 10,
          regex: /^[7-9]+[0-9]*$/,
          require_from_group: [1, '.requiredPhoneEmail']
        },
        email: {
          minlength: 6,
          maxlength: 150,
          regex: /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
          require_from_group: [1, '.requiredPhoneEmail']
        }
      },
      groups: {
        name: 'mobileNumber email'
      },
      messages: {
        mobileNumber: 'Fill anyone field with proper value!',
        email: 'Fill anyone field with proper value!'
      },
      errorPlacement: function (error, element) {
        if (element.attr('rel') === 'requirePhoneEmail') {
          error.insertAfter('.share-cart-form .form-control:last-child input');
        }
        else {
          error.insertAfter(element);
        }
      },
      submitHandler: function(form) {
        $('#ShareCartModal').fadeIn();
      }
    });

    $('#guestOrderDetails').validate({
      errorElement: 'span',
      onkeyup: function(element) {
        if (!$(element).attr('type') === 'tel') {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        guestMobileNumber: {
          minlength: 10,
          maxlength: 10,
          number: true,
          regex: /^[7-9]+[0-9]*$/
        },
        guestOrderId: {
          minlength: 6,
          maxlength: 10,
          regex: /^[A-Za-z]+[A-Za-z0-9\s]*$/
        }
      },
      messages: {
        guestMobileNumber: 'Enter valid mobile number!',
        guestOrderId: 'Order ID should be min 6 or max 10 alphanumeric!'
      }
    });

    $('#formNewAddress').validate({
      errorElement: 'span',
      onkeyup: function(element) {
        if ($(element).val() && !($(element).attr('type') === 'tel')) {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        newName: {
          minlength: 1,
          maxlength: 150,
          regex: /^[A-Za-z]+[A-Za-z\s]*$/
        },
        newLandmark: {
          minlength: 1,
          maxlength: 150,
          regex: /^[A-Za-z0-9]+[A-Za-z0-9\s]*$/
        },
        newMobileNumber: {
          number: true,
          minlength: 10,
          maxlength: 10,
          regex: /^[7-9]+[0-9]*$/
        },
        newAlternateNumber: {
          number: true,
          minlength: 10,
          maxlength: 10,
          regex: /^[7-9]+[0-9]*$/
        },
        newCity: {
          minlength: 1,
          maxlength: 250,
          regex: /^[A-Za-z]+[A-Za-z\s]*$/
        },
        newState: {
          minlength: 1,
          maxlength: 250,
          regex: /^[A-Za-z]+[A-Za-z\s]*$/
        },
        newPincode: {
          minlength: 6,
          maxlength: 7
        },
        newAddress: {
          minlength: 1,
          maxlength: 250
        }
      },
      messages: {
        newName: 'Enter only alphabets!',
        newMobileNumber: 'Enter valid mobile number!',
        newCity: 'Enter proper city name!',
        newPincode: 'Enter Pincode!',
        newAddress: 'Enter Address!'
      }
    });

    $('#formNewAddressModal').validate({
      errorElement: 'span',
      onkeyup: function(element) {
        if (!$(element).attr('type') === 'tel') {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        newName: {
          minlength: 1,
          maxlength: 150,
          regex: /^[A-Za-z]+[A-Za-z\s]*$/
        },
        newLandmark: {
          minlength: 1,
          maxlength: 150,
          regex: /^[A-Za-z0-9]+[A-Za-z0-9\s]*$/
        },
        newMobileNumber: {
          number: true,
          minlength: 10,
          maxlength: 10,
          regex: /^[7-9]+[0-9]*$/
        },
        newCity: {
          minlength: 1,
          maxlength: 250,
          regex: /^[A-Za-z]+[A-Za-z\s]*$/
        },
        newState: {
          minlength: 1,
          maxlength: 250,
          regex: /^[A-Za-z]+[A-Za-z\s]*$/
        },
        newPincode: {
          number: true,
          minlength: 6,
          maxlength: 7
        },
        newAddress: {
          minlength: 1,
          maxlength: 250
        }
      },
      messages: {
        newName: 'Enter only alphabets!',
        newMobileNumber: 'Enter valid mobile number!',
        newCity: 'Enter proper city name!',
        newState: 'Enter proper state name!',
        newPincode: 'Enter Pincode!',
        newAddress: 'Enter Address!'
      }
    });

    $('#formEditAddress').validate({
      errorElement: 'span',
      onkeyup: function(element) {
        if (!$(element).attr('type') === 'tel') {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        editName: {
          minlength: 1,
          maxlength: 150,
          regex: /^[A-Za-z]+[A-Za-z\s]*$/
        },
        editLandmark: {
          minlength: 1,
          maxlength: 150,
          regex: /^[A-Za-z0-9]+[A-Za-z0-9\s]*$/
        },
        editMobileNumber: {
          number: true,
          minlength: 10,
          maxlength: 10,
          regex: /^[7-9]+[0-9]*$/
        },
        editCity: {
          minlength: 1,
          maxlength: 250,
          regex: /^[A-Za-z]+[A-Za-z\s]*$/
        },
        editState: {
          minlength: 1,
          maxlength: 250,
          regex: /^[A-Za-z]+[A-Za-z\s]*$/
        },
        editPincode: {
          number: true,
          minlength: 6,
          maxlength: 7
        },
        editAddress: {
          minlength: 1,
          maxlength: 250
        }
      },
      messages: {
        editName: 'Enter only alphabets!',
        editMobileNumber: 'Enter valid mobile number!',
        editCity: 'Enter proper city name!',
        editState: 'Enter proper state name!',
        editPincode: 'Enter Pincode!',
        editAddress: 'Enter min!'
      }
    });

    // Dashboard - Personal Information
    $('#dashboardPersonalDetailsValidation').validate({
      errorElement: 'span',
      onkeyup: function(element) {
        if ($(element).val() && !($(element).attr('type') === 'email' || $(element).attr('type') === 'tel')) {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        mobileNumber: {
          number: true,
          minlength: 10,
          maxlength: 10,
          regex: /^[7-9]+[0-9]*$/
        },
        email: {
          minlength: 6,
          maxlength: 150,
          regex: /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
        },
        firstName: {
          minlength: 1,
          maxlength: 150,
          regex: /^[A-Za-z]+[A-Za-z\s]*$/
        },
        lastName: {
          minlength: 1,
          maxlength: 150,
          regex: /^[A-Za-z]+[A-Za-z\s]*$/
        }
      },
      messages: {
        email: 'Oops! Invalid mail-id!',
        firstName: 'Enter only alphabets!',
        lastName: 'Enter only alphabets!',
        mobileNumber: 'Enter valid mobile number!'
      }
    });

    // Contact form
    $('#formContactValidation').validate({
      errorElement: 'span',
      onkeyup: function(element) {
        if (!$(element).attr('type') === 'email') {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        emailContact: {
          minlength: 6,
          maxlength: 150,
          regex: /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
        },
        nameContact: {
          minlength: 1,
          maxlength: 150,
          regex: /^[A-Za-z]+[A-Za-z\s]*$/
        },
        messageContact: {
          minlength: 10,
          maxlength: 250,
          regex: /^[A-Za-z]+[A-Za-z0-9.!()-_?,\s]*$/,
          required: true
        }
      },
      messages: {
        emailContact: 'Oops! Invalid mail-id!',
        nameContact: 'Enter only alphabets!',
        messageContact: 'Fill min 10 or max 250 characters!'
      }
    });

    // Dashboard - Change Password
    $('#dashboardChangePasswordValidation').validate({
      errorElement: 'span',
      onkeyup: function(element) {
        if ($(element).val() && !($(element).attr('type') === 'password')) {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        oldPassword: {
          minlength: 8,
          maxlength: 60
        },
        newPassword: {
          minlength: 8,
          maxlength: 60
        }
      },
      messages: {
        oldPassword: 'Enter min 8 or max 60 characters!',
        newPassword: 'Enter min 8 or max 60 characters!'
      }
    });

    //Credit Card Payment validation
    $('#formCCvalidation').validate({
      errorElement: 'span',
      onkeyup: function(element) {
        if ($(element).val() && !($(element).attr('type') === 'tel' || $(element).attr('type') === 'password')) {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        creditCardNumber: {
          creditcard: true
        },
        creditCardCvv: {
          number: true,
          minlength: 3,
          maxlength: 4,
          regex: /^(?!0{3})[0-9]*$/
        },
        creditCardName: {
          minlength: 1,
          maxlength: 150,
          regex: /^[a-zA-Z'\s]*$/
        },
        rechargeInput: {
          number: true,
          minlength: 1,
          maxlength: 8
        }
      },
      messages: {
        creditCardNumber: 'Something is wrong!',
        creditCardCvv: 'Something is wrong!',
        creditCardName: 'Something is wrong!',
        rechargeInput: 'Enter atleast 1 digits or max 8 digits!'
      }
    });

    // Debit Card Payment validation
    $('#formDCvalidation').validate({
      errorElement: 'span',
      onkeyup: function(element) {
        if ($(element).val() && !($(element).attr('type') === 'tel' || $(element).attr('type') === 'password')) {
          this.element(element);
        }
      },
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        debitCardNumber: {
          creditcard: true
        },
        debitCardCvv: {
          number: true,
          minlength: 3,
          maxlength: 4,
          regex: /^(?!0{3})[0-9]*$/
        },
        debitCardName: {
          minlength: 1,
          maxlength: 150,
          regex: /^[a-zA-Z'\s]*$/
        },
        rechargeInput: {
          number: true,
          minlength: 1,
          maxlength: 8
        }
      },
      messages: {
        debitCardNumber: 'Something is wrong!',
        debitCardCvv: 'Something is wrong!',
        debitCardName: 'Something is wrong!',
        rechargeInput: 'Enter atleast 1 digits or max 8 digits!'
      }
    });


    // Debit ATM Card Payment validation
    $('#formDebitATMvalidation').validate({
      errorElement: 'span',
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        rechargeInput: {
          number: true,
          minlength: 1,
          maxlength: 8
        }
      },
      messages: {
        rechargeInput: 'Enter atleast 1 digits or max 8 digits!'
      }
    });

    // Internet Banking Payment validation
    $('#formNetBankvalidation').validate({
      errorElement: 'span',
      onfocusout: function(element) {
        if ($(element).val() || $(element).val() !== '') {
          this.element(element);
        }
      },
      rules: {
        rechargeInput: {
          number: true,
          minlength: 1,
          maxlength: 8
        }
      },
      messages: {
        rechargeInput: 'Enter atleast 1 digits or max 8 digits!'
      }
    });

    function changeCardType(cardType, thisVal) {
      if (!thisVal.hasClass('valid')) {
        thisVal.parents('.form-control').find('.payment-card-type .dmart-sprite').css({
          opacity: 0,
          top: '35px'
        });
        thisVal.parents('.form-control').find('.payment-card-type .js-' + cardType + '-card').css({
          opacity: 1,
          top: 0
        });
      }
      else {
        thisVal.parents('.form-control').find('.payment-card-type .sprite-card').css({
          opacity: 0,
          top: '35px'
        });
        thisVal.parents('.form-control').find('.payment-card-type .js-' + cardType + '-card').css({
          opacity: 1,
          top: 0
        });
      }
    }

    $.fn.toggleInputError = function(erred) {
      this.toggleClass('error', erred);
      if(erred) {
        this.parent().find('span.error').remove();
        this.parent().append('<span class="error" style="display: inline;">Something is wrong!</span>');
      }
      else {
        this.parent().find('span.error').remove();
      }
      return this;
    };

    $(document).on('focus keyup blur', '.payment-form:visible .cc-number', function() {
      var $thisVal = $(this);
      $thisVal.payment('formatCardNumber');
      var cardType = $.payment.cardType($thisVal.val());
      changeCardType(cardType, $thisVal);
    });

    $(document).on('keyup blur', '.payment-form:visible .cc-exp', function() {
      $(this).payment('formatCardExpiry');
    });


    $(document).on('blur', '.payment-form:visible .cc-exp', function() {
      $(this).payment('formatCardExpiry');
      $(this).toggleInputError(!$.payment.validateCardExpiry($(this).payment('cardExpiryVal')));
    });

    $(document).on('keyup blur', '.payment-form:visible .cc-cvc', function() {
      $(this).payment('formatCardCVC');
      var cardType = $.payment.cardType($('.cc-number:visible').val());
      $(this).toggleInputError(!$.payment.validateCardCVC($(this).val(), cardType));
    });

    $('.select-other-banks').on('change', function() {
      $('.bank-list input').removeAttr('checked');
    });

    $('.bank-list input').on('click', function() {
      $('.select-other-banks option').removeAttr('selected');
      $('.select-other-banks option:first').attr('selected', 'selected');
    });

  });
}(DM_UI_CONFIG));
