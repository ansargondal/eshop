$(function () {
    //region Global Stuff
    var $taskEditModal = $('#edit-note-modal');
    var $messageModal = $('#message-modal');
    var $taskModal = $('#new-note-modal');
    //endregion

    //region Edit Task btn click
    $body.on('click', '.js-btn-edit', function (evt) {
        evt.preventDefault();

        $tr = $(this).closest('tr');

        var task = $tr.find('.task').text();
        var type = $tr.find('.type').text();
        var startedOn = $tr.find('.start-date').text();
        var dueDate = $tr.find('.due-date').text();

        $taskEditModal.find('[name=task]').val(task);
        $taskEditModal.find('[name=type]').val(type);
        $taskEditModal.find('[name=start_date]').val(startedOn);
        $taskEditModal.find('[name=due_date]').val(dueDate);


        $taskEditModal.modal('show');

        //add focus to non empty fields
        addFocusOnOpenModal($taskEditModal);
    });
    //endregion


    $('.js-btn-new-task').click(function (evt) {
        evt.preventDefault();

        $taskModal.modal('show');

        //add focus to non empty fields
        addFocusOnOpenModal($taskModal);
    });


    $('#new-note-form').validate({
        rules: {
            type: {
                required: true,
                minlength: 2
            },
            note: {
                required: true,
            }
        },
        messages: {
            type: {
                required: "Please enter a type",
            },
            note: {
                required: "Please enter the note",
            },
        },
    });


//endregion

    var opts = {
        angle: 0, // he span of the gauge arc
        lineWidth: 0.30, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.6, // // Relative to gauge radius
            strokeWidth: 0.035, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#8FC0DA',    // just experiment with them
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support

    };


    var target = document.getElementById('24-hours-stock'); // your canvas elementh
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 3000; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(1250); // set actual value

    var target = document.getElementById('24-hours-sale'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 3000; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(1250); // set actual value

    var target = document.getElementById('24-hours-destroy'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 3000; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(1250); // set actual value


});
