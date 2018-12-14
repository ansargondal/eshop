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

    var $active = $('#accordion .show').prev().addClass('active');
    $active.find('a').append('<i class="fa fa-minus pull-right"></i>');
//    $active.find('a').append('<span class="glyphicon glyphicon-minus pull-right"></span>');
    $('#accordion .card-header').not($active).find('a').prepend('<i class="fa fa-plus pull-right"></i>');
//    $('#accordion .panel-heading').not($active).find('a').prepend('<span class="glyphicon glyphicon-plus pull-right"></span>');
    $('#accordion').on('show.bs.collapse', function (e) {
        $('#accordion .card-header.active').removeClass('active').find('.fa').toggleClass('fa-plus fa-minus');
        $(e.target).prev().addClass('active').find('.fa').toggleClass('fa-plus fa-minus');
    });
    $('#accordion').on('hide.bs.collapse', function (e) {
        $(e.target).prev().removeClass('active').find('.fa').removeClass('fa-minus').addClass('fa-plus');
    });
    k

});

