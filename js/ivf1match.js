$(function () {

    $body = $('body');
    $date = $('.date');

    //short quiz link click action delegation
    $('.l-short-quiz').on('click', function (evt) {
        evt.preventDefault();
        $('[name=firstname]').focus();
    });


    //collapse the responsive menu
    $('.nav a.nav-link').click(function () {

        $('#main-nav').collapse('hide');
    });


    // Smooth scrolling using jQuery easing
    $('[href*="#"]').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 70)
                }, 1000, "easeInOutQuint");
                return false;
            }
        }
    });


    //sticky nav
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > 120) {
            $('#navbar-main').addClass('sticky-top');
        } else {
            $('#navbar-main').removeClass('sticky-top');
        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function () {
        stickyNav();
    });


    //back to top button
    var backToTop = function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > 400) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    };

    backToTop();

    //run when user scrolls
    $(window).scroll(function () {
        backToTop();
    });


    //Index page JS
    $('#subscribe').submit(function (e) {
        e.preventDefault();
    });

    $('#f-subscribe').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: "Please enter valid email."
        }
    });


    $body.on('focus', '.form-control', function () {

        $formGroup = $(this).closest('.form-group');

        //add focus to specific elements
        $formGroup.find('.bar-animator').addClass('focus');
        $formGroup.find('label').addClass('focus');

        //check if span exists in form-group
        var has_span = $(this).closest('.form-group').find('span').length;

        //if span don't exists then add animator after forcus
        if (has_span === 0) {
            $(this).after('<span class="bar-animator focus"></span>');
        }
    });


    $body.on('focusout', '.form-control', function (evt) {
        evt.preventDefault();

        $formGroup = $(this).closest('.form-group');

        var len = $(this).val().length;

        //remove label's focus if field is empty
        if (len === 0) {
            $formGroup.find('label').removeClass('focus');
        }

        //remove focus from field on focus out
        $formGroup.find('.bar-animator').removeClass('focus');
        $(this).after('');
    });


    $body.on('change', '.form-control', function (evt) {
        $(this).siblings('label').addClass('focus');
        $(this).valid();
    });


    $body.on('click', '.c-dropdown-menu li a', function (evt) {
        evt.preventDefault();
        var list_val = $(this).text();


        $(this).closest('.form-group').find('.form-control')
            .val(list_val).trigger('change');


        //add focus to non empty fields
        var modal = $(this).parents('#step-10');

        addFocusOnOpenModal(modal);
    });

//region Sidebar Main Links Click
    $('.sb-main-nav > li > a').click(function (evt) {
        evt.preventDefault();

        $('.sb-sub-nav').slideUp();
        $(this).closest('li').find('.sb-sub-nav').stop().slideToggle();
    });
//endregion


    $('.file-chooser').change(function () {
        readURL(this);
    });


    $('.c-dropdown .form-control').focus(function () {

        $(this).closest('.form-group').find('.c-dropdown-menu').slideDown();

    }).focusout(function () {

        $(this).closest('.form-group').find('.c-dropdown-menu').delay(100).slideUp();

    });

});

function addFocusOnOpenModal($modal) {

    var controls = $modal.find('.form-control');

    controls.each(function () {

        var len = $(this).val().length;
        var $formGroup = $(this).closest('.form-group');

        //add focus to specific elements
        if (len > 0) {
            $formGroup.find('label').addClass('focus');
        }
    });
}


function readURL(input) {

    var img_choosed = $(input).closest('.form-group').find('.js-img-choosed');


    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {

            img_choosed.attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}


//notification custom function
function notify(message, title = '', icon = 'fa fa-check text-success', type = 'success') {
    $.notify({
        // options
        icon: icon,
        title: title,
        message: message
    }, {
        // settings
        element: 'body',
        type: type,
        allow_dismiss: true,
        animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp'
        },
    });
}