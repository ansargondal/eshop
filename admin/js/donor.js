$(function () {
    $('body').on('click', '.js-donor-status-dd a.dropdown-item', function () {

        var status = $.trim($(this).text());

        var btn = $(this).closest('td').find('.btn');

        btn.text(status).removeClass('badge-success badge-info badge-warning text-dark');

        switch (status.toLowerCase()) {
            case 'complete':
                btn.addClass('badge-success');
                break;
            case 'incomplete':
                btn.addClass('badge-warning text-dark');
                break;
            default:
                break;
        }

        notify('Donor status has been updated!');
    });
});