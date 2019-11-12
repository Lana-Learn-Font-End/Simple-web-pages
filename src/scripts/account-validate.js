const signInForm = $("#sign-in-form");
const signUpForm = $("#sign-up-form");

const signInValidator = signInForm.validate({
        rules: {
            email: {
                required: true,
            },
            password: {
                required: true
            }
        },
        messages: {
            email: "Please enter your Email",
            password: "Please enter your password"
        }
    }
);

const signUpValidator = signUpForm.validate({
    rules: {
        email: {
            required: true,
            email: true,
        },
        password: {
            required: true,
            minlength: 8,
            maxlength: 20
        },
        passwordCheck: {
            required: true,
            equalTo: "#sign-up-form input[name=password]"
        },
        firstname: {
            required: true
        },
        lastname: {
            required: true
        },
        agree: {
            required: true
        }
    },
    messages: {
        email: "Please enter a valid Email",
        passwordCheck: {
            equalTo: "Password not match",
            required: ""
        },
        agree: "Please read and agree to our terms and condition"
    }
});
