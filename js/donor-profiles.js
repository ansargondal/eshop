$(function () {


    $('#myTab a').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show')
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
