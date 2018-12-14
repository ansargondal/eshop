$(function () {

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

    $('#dsignup').validate({
        rules: {
            firstname: {
                required: true,
                minlength: 2
            },
            lastname: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            firstname: {
                required: "Please enter your firstname.",
                minlength: "Firstname must have 2 atleast characters."
            },
            lastname: {
                required: "Please enter your lastname.",
                minlength: "Lastname must have 2 atleast characters."
            },
            email: "Pease enter valid email.",
            password: {
                required: "Please enter your password.",
                minlength: "Password must have 5 at least characters."
            }
        },
        submitHandler: function () {

            $('#exampleModal1').modal({
                keyboard: false,
                backdrop: 'static'
            });
        }
    });


    $('.sw-btn-next.btn#s_f1_next[disabled]').css("background-color", 'rgb(209,209,209)').css('color', '#666');
    $('#s_f1_next').attr("disabled", "disabled");

    $('[name="is_female"]').on("click", function () {
        if (check_radio($(this), "yes")) {
            $('.is_female_err').css("opacity", 0);
            $('#s_f1_next').removeAttr("disabled");
        } else {
            $('.is_female_err').css("opacity", 1);
            $('#s_f1_next').attr('disabled', 'disabled');
        }
    });


    $('input#age').on("change", function (evt) {

        if ($(this).val() !== "") {
            $('#s_f1_next').removeAttr("disabled");
        } else {
            $('#s_f1_next').attr("disabled", "disabled");
        }
    });

    $('[name="had_pelvic"]').on("click", function () {
        if (check_radio($(this), "yes")) {
            $('#s_f1_next').removeAttr("disabled");
        } else {
            $('#s_f1_next').attr('disabled', 'disabled');
        }
    });

    $('[name="are_willing"]').on("click", function () {
        if (check_radio($(this), "yes")) {
            $('.are_willing_err').css("opacity", 0);
            $('#s_f1_next').removeAttr("disabled");
        } else {
            $('.are_willing_err').css("opacity", 1);
            $('#s_f1_next').attr('disabled', 'disabled');
        }
    });

    $('[name="are_able"]').on("click", function () {
        if (check_radio($(this), "yes")) {
            $('#s_f1_next').removeAttr("disabled");
        } else {
            $('#s_f1_next').attr('disabled', 'disabled');
        }

    });
});