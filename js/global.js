/************** Global Variables ***************/
var $body = $('body'),
    $deleteModal = $('#delete-modal'),
    $tr = '',
    $jsFilters = $('.js-filter'),
    $formGroup = '',
    $btnNew = $('.js-btn-new'),
    $newModal = $('.new-modal'),
    $date = $('.date-picker');

//check if element exists on page
if ($date.length > 0) {
    $date.datepicker({showAnim: 'slideDown'});
}

var $newUserModal = $('#new-user-modal');
var $editUserModal = $('#edit-user-modal');

$body.on('click', '.js-btn-user-edit', function (evt) {
    evt.preventDefault();
    $editUserModal.modal('show');
});


$sidebar = $('.sidebar');

//check sidebar status and toggle it as it was last time on reload
check_sb_status();


/************** !Global Variables **************/

addFocusOnOpenModal($body);

/************** New btn click and show modal logic ***************/

$btnNew.click(function (evt) {
    evt.preventDefault();
    $newModal.modal('show');
});
/************** New btn click and show modal logic ***************/



//region Sidebar Toggle Btn Click
$('.js-sb-toggle').click(function (evt) {
    evt.preventDefault();

    $('.navbar-brand').toggleClass('rotate');
    $('.main').toggleClass('main-collapse');
    $('.box').toggleClass('hf-collapse');
    $sidebar.toggleClass('sb-collapse');

    $sb_status = !!$sidebar.hasClass('sb-collapse');
    setCookie('sb_collapsed', $sb_status);
});
//endregion


/************** Delete btn click and show modal logic ***************/
$body.on('click', '.js-btn-delete', function (evt) {
    evt.preventDefault();

    $tr = $(this).closest('tr');

    var $messageId = $(this).data('id');

    $deleteModal.find('#id').val($messageId);

    $deleteModal.modal({
        backdrop: 'static',
        keyboard: false
    });
});

/************** !Delete btn click logic ***************/


/************** Delete form submission logic ***************/
$body.on('click', '#js-btn-delete', function (evt) {
    evt.preventDefault();

    var $form = $(this).closest('form');

    $.ajax({
        url: $form.attr('action'),
        type: $form.attr('method'),
        data: $form.serialize(),
        success: function (response) {
            if ($.trim(response)) {
                $tr.remove();
                $deleteModal.modal('hide');
            }
        }
    });
});
/************** !Delete form submission logic ***************/


$('[data-toggle="tooltip"]').tooltip({trigger: 'hover'});


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


//datapicker validations  label fixes
$date.datepicker({}).on('change', function (e) {
    $(this).parents('.form-group').find('label').addClass('focus');
    $(this).valid();
});


$('.c-dropdown .form-control').focus(function () {

    $(this).closest('.form-group').find('.c-dropdown-menu').slideDown();

}).focusout(function () {

    $(this).closest('.form-group').find('.c-dropdown-menu').delay(100).slideUp();

});

var dataTable = $('table.dt');
dataTable.DataTable({
    responsive: true,
    conditionalPaging: true,
    'language': {
        processing: '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only"></span>',
        'paginate': {
            'previous': '<i class="fa fa-angle-double-left"></i>',
            'next': '<i class="fa fa-angle-double-right"></i>'
        },
        "sSearch": "",
    },
    "columnDefs": [
        {"orderable": false, "targets": 'no-sort'}
    ]
});

$('input[type="search"]').attr('placeholder', 'Search').css('padding', '5px 5px 5px 0').focusin(function () {
    $(this).css({
        'outline': 'none',
        'box-shadow': 'none',
        'border-bottom': '1px solid #0c5460'
    });
}).focusout(function () {
    $(this).css({
        'border-bottom': '1px solid rgba(7,7,7,.1)'
    });
});


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


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


//check if sidebar is collapsed
function is_sb_collapsed() {
    return $.trim(getCookie('sb_collapsed'));
}

function check_sb_status() {

    if (is_sb_collapsed() === 'true' || is_mobile()) {
        $('.navbar-brand').addClass('rotate');
        $('.main').addClass('main-collapse');
        $('.box').addClass('hf-collapse');
        $sidebar.addClass('sb-collapse');
    } else {
        $('.navbar-brand').removeClass('rotate');
        $('.main').removeClass('main-collapse');
        $('.box').removeClass('hf-collapse');
        $sidebar.removeClass('sb-collapse');
    }
}

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

function is_mobile() {

// device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        return true;
    }

    return false;
}
