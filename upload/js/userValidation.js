var vstateselect;
var vvalidFileName;

var keys = ["validFileName", "stateselect"];
$.ajax({
    type: "POST",
    url: "readResourceFile",
    data: 'keys=' + keys,
    async: false,
    success: function (keyValueList) {
        vvalidFileName = keyValueList[0].value;
        vstateselect = keyValueList[1].value;
    },
    datatype: 'json'
});


$(function () {

    $("#dialog").dialog({
        autoOpen: false,
        buttons: {
            OK: function () { $(this).dialog("close"); }
        }
    });


    $("#sub").click(function () {

        if ($('#state').val() == "-") {
            alert(vstateselect);
            return false;
        }

    });
});

$(document).ready(function () {
    var validator = $("#userRegistration").validate({

        rules: {
            validateOnBlur: true,
            "user.name": {
                required: true,
                nameFormat: true
            },
            "user.email": {
                email: true
            },
            "user.mobileNumber": {
                required: true,
                digits: true,
                number: true,
                minlength: 10,
                maxlength: 10,
                phoneNumberFormat: true
            },
            "user.phoneNumber": {
                digits: true,
                number: true,
                maxlength: 15
            },
            "user.address": {
                required: true,
                detailFormat: true
            },
            "user.aadhaarNumber": {
                minlength: 12,
                maxlength: 12,
                aadhaarNumberFormat: true,
                number: true,
                digits: true
            },
            "user.state.stateId": {
                required: true
            },
            "user.pinCode": {
                required: true,
                minlength: 6,
                maxlength: 6,
                pinCodeFormat: true,
                number: true,
                digits: true
            },
            "user.requestContactPermission": {
                required: true
            },
            captcha: {
                required: true,
                minlength: 6,
                maxlength: 6
            },
            termsCondition: {
                required: true
            }
        }
    });

    var validator = $("#sendOTP").validate({
        rules: {
            validateOnBlur: true,
            mobileNumber: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10,
                phoneNumberFormat: true
            },
            captcha: {
                required: true,

            }
        }
    });

    var validator = $("#loginWithOTP").validate({
        rules: {
            validateOnBlur: true,
            /*otp:
            {
                digits:true,
                minlength: 5,
                maxlength: 5
            },*/
            captcha:
                {
                    required: true,

                }
        }
    });

    var validator = $("#loginWithOTP").validate({
        rules: {
            validateOnBlur: true,
            /*otp:
            {
                digits:true,
                minlength: 5,
                maxlength: 5
            },*/
            captcha:
                {
                    required: true,

                }
        }
    });

    var validator = $("#userDashboardByNumber").validate({

        rules: {
            validateOnBlur: true,
            "mobileNumber": {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            }

        }
    });

    var validator = $("#missingEntry").validate({

        rules: {
            validateOnBlur: true,
            "profile.firnumber": {
                maxlength: 20
            }

        }
    });

    var validator = $("#updatePageTranslation").validate({

        rules: {
            validateOnBlur: true,
            "name": {
                required: true
            },
            "disabilityDetail": {
                required: true
            },
            "description": {
                required: true
            },
            "reason": {
                required: true
            },
            "identificationMarks": {
                required: true
            },
            "address": {
                required: true
            },
            "fatherName": {
                required: true
            },
            "motherName": {
                required: true
            }
        }
    });

    $('#sub').click(function () {
        $('#userRegistration').valid();
    });
    $('#OTPsub').click(function () {
        $('#userRegistration').valid();
    });

    /*jQuery.extend(jQuery.validator.messages, {
    required: "This field is required uservalidation.",
    email: "Please enter a valid email address.", 
    number: "Please enter a valid number.",
    digits: "Please enter only digits.", 
    maxlength: jQuery.validator.format("Please do not enter more than {0} digits."),
    minlength: jQuery.validator.format("Please enter at least {0} digits."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    });*/
});

function hidefld() {
    if (document.getElementById('password')) {

        var opt = document.getElementById('otp').value;
        if (opt.length > 0) {
            document.getElementById('password').readOnly = true;
        } else {
            document.getElementById('password').readOnly = false;
        }

        var pass = document.getElementById('password').value;
        if (pass.length > 0) {
            document.getElementById('otp').readOnly = true;
        } else {
            document.getElementById('otp').readOnly = false;
        }
    }

}

function inActivefld() {
    var ps = document.getElementById('policestationlocation').value;
    if (ps != -1) {
        document.getElementById('firno').disabled = false;
        document.getElementById('firdt').disabled = false;
    } else {
        document.getElementById('firno').value = "";
        document.getElementById('firno').disabled = true;
        document.getElementById('firdt').value = "";
        document.getElementById('firdt').disabled = true;
    }

}

function validFilename(photoIdCatrd) {
    var filename = document.getElementById('photoIdCatrd').value;
    var parts = filename.split(".");
    var len = parts.length;
    if (len > 2) {
        alert(vvalidFileName);
        document.getElementById('photoIdCatrd').value = "";
        return false;
    }
}
