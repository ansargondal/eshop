$(function () {
    $('body').on('click', '.js-status-dd a.dropdown-item', function () {

        var status = $.trim($(this).text());

        var btn = $(this).closest('td').find('.btn');

        btn.text(status).removeClass('badge-success badge-info badge-warning text-dark');

        switch (status.toLowerCase()) {
            case 'active':
                btn.addClass('badge-success');
                break;
            case 'inactive':
                btn.addClass('badge-warning text-dark');
                break;
            default:
                btn.addClass('badge-info');
                break;
        }

        notify('Recipient status updated!');
    });

    $('#edit-recipients-form').validate({
        rules: {
            email: {
                required: true
            },
            status: {
                required: true
            }
        }
    });
});