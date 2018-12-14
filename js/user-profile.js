$('#user-info').validate({
    rules: {
        username: {
            required: true,
            minlength: 4
        },
        first_name: {
            required: true,
            minlength: 2
        },
        last_name: {
            required: true,
            minlength: 2
        },
        email: {
            required: true,
            email: true
        },
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
    },
});