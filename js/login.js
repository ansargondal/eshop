$(function () {

    $body = $('body');

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

    $('#submit').submit(function (e) {
        e.preventDefault();
    });

    $('#login').validate({
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            username: {
                required: "Please enter your firstname.",
                minlength: "Firstname must have 2 atleast characters."
            },
            password: {
                required: "Please enter your password.",
                minlength: "Password must have 5 atleast characters."
            }
        }
    });

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
            email: "Pease enter valid email."
        }
    });


});