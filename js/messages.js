$(function () {

    //region Global Variables
    var $replyMessageModal = $('#reply-message-modal');
    var $viewMessageModal = $('#view-message-modal');
    var $messageModal = $('#message-modal');

    var $tbody = $('#messages-table tbody');
    var $trs = $tbody.find('tr').clone();
    //endregion

    //region Show View Message Modal And Update It's status from unread to read
    $body.on('click', '.js-view-message', function (evt) {
        evt.preventDefault();

        $tr = $(this).closest('tr');


        var name = $tr.find('.name').text();
        var email = $tr.find('.email').text();
        var message = $tr.find('.full-message').text();

        $viewMessageModal.find('[name=name]').val(name);
        $viewMessageModal.find('[name=email]').val(email);
        $viewMessageModal.find('[name=message]').val(message);

        //update bg status on read
        $(this).closest('tr').removeClass('unread').addClass('read');

        //change envelop icon on read
        var $envelopIcon = $(this).find('.fa');
        $envelopIcon.removeClass('.fa-envelope').addClass('fa-envelope-open');


        $viewMessageModal.modal('show');

        //add focus to non empty fields
        addFocusOnOpenModal($viewMessageModal);

    });
    //endregion

    //region Direct Reply
    $body.on('click', '.js-btn-reply', function (evt) {
        evt.preventDefault();

        $tr = $(this).closest('tr');

        var email = $tr.find('.email').text();

        $replyMessageModal.find('[name=email]').val(email);

        $replyMessageModal.modal('show');


        //add focus to non empty fields
        addFocusOnOpenModal($replyMessageModal);
    });
    //endregion

    //region Reply From View Modal
    $body.on('click', '.js-view-btn-reply', function (evt) {
        evt.preventDefault();
        var email = $viewMessageModal.find('#email').val();

        $viewMessageModal.modal('hide');

        $replyMessageModal.find('#email').val(email);
        $replyMessageModal.modal('show');

        //add focus to non empty fields
        addFocusOnOpenModal($replyMessageModal);
    });
    //endregion


    //region Reply form submission

    $body.on('click', '.js-main-btn-reply', function (evt) {
        evt.preventDefault();

        $messageModal.modal('show');
    });

    //region

    //region Enabling filtering options of the message table
    $jsFilters.on('click', function (evt) {
        evt.preventDefault();

        //activate selected filter
        $jsFilters.removeClass('active');
        $(this).addClass('active');

        //refresh table and clear all filters
        $tbody.empty().append($trs);

        //making a copy and filtering with it
        var $trCopy = $trs;

        var filter = $.trim($(this).text().toLowerCase());

        switch (filter) {
            case 'read':
                $trCopy.each(function () {
                    //remove all unread rows
                    if ($(this).hasClass('unread')) {
                        $(this).remove();
                    }
                });
                break;
            case'unread':
                $trCopy.each(function () {
                    //remove all unread rows
                    if ($(this).hasClass('read')) {
                        $(this).remove();
                    }
                });
                break;
            default:
                break;
        }
    });
    //endregion

});

