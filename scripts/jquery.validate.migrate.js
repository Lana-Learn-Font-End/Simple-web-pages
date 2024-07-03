// jquery validate w"ith bootstrap 4
jQuery.validator.setDefaults({
    errorElement: "div",
    errorClass: "invalid-feedback",
    errorPlacement: function (error, element) {
        element.closest(".form-group").append(error);
    },
    //on error-handle
    highlight: function (element, errorClass, validClass) {
        $(element).addClass("is-invalid");
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass("is-invalid");
    },
    //on form-submit
    submitHandler: function (form) {
        alert("Submitted!");
        form.submit();
    }
});

$.validator.addMethod(
    "regex",
    (value, element, param) => {
        return value.match(typeof param == "string" ? new RegExp(param) : param);
    },
    "Please enter a value in the correct format."
);
