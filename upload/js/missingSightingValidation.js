$(document).ready(function () {

    var vrequired;
    var vemail;
    var vnumber;
    var vdigits;
    var vmaxlength1;
    var vmaxlength2;
    var vminlength1;
    var vminlength2;
    var keys = ["required", "email", "number", "digits", "maxlength1", "maxlength2", "minlength1", "minlength2"];
    $.ajax({
        type: "POST",
        url: "readResourceFile",
        data: 'keys=' + keys,
        async: false,
        success: function (keyValueList) {
            vrequired = keyValueList[0].value;
            vemail = keyValueList[1].value;
            vnumber = keyValueList[2].value;
            vdigits = keyValueList[3].value;
            vmaxlength1 = keyValueList[4].value;
            vmaxlength2 = keyValueList[5].value;
            vminlength1 = keyValueList[6].value;
            vminlength2 = keyValueList[7].value;

        },
        datatype: 'json'
    });



    var validator = $("#missingEntry").validate({

        rules: {
            validateOnBlur: true,
            "profile.name": {
                nameFormat: true
            },
            "profile.relationship": {
                required: true
            },
            "profile.gender.id": {
                required: true
            },
            "eventDate": {
                date: true,
                myDateFormat: true
            },
            "profile.disabilityDetails": {
                detailFormat: true
            },
            "profile.description": {
                detailFormat: true
            },
            "profile.identificationMarks": {
                detailFormat: true
            },
            "profile.fatherName": {
                nameFormat: true
            },
            "profile.motherName": {
                nameFormat: true
            },
            "profile.fatherNumber": {
                number: true,
                digits: true,
                minlength: 10,
                maxlength: 10,
                phoneNumberFormat: true
            },
            "profile.motherNumber": {
                number: true,
                digits: true,
                minlength: 10,
                maxlength: 10,
                phoneNumberFormat: true
            },
            "profile.fatherEmail": {
                email: true
            },
            "profile.motherEmail": {
                email: true
            },
            "profile.aadhaarNo": {
                number: true,
                digits: true,
                aadhaarNumberFormat: true,
                minlength: 12,
                maxlength: 12
            },
            "profile.address": {
                detailFormat: true
            },
            "profile.pinCode": {
                number: true,
                digits: true,
                pinCodeFormat: true,
                minlength: 6,
                maxlength: 6
            }
        }
    });

    var validator = $("#sightingEntry").validate({

        rules: {
            validateOnBlur: true,
            "profile.name": {
                nameFormat: true
            },
            "profile.relationship": {
                required: true
            },
            "profile.gender.id": {
                required: true
            },
            "eventDate": {
                date: true,
                myDateFormat: true
            },
            "profile.description": {
                detailFormat: true
            },
            "profile.disabilityDetails": {
                detailFormat: true
            },
            "profile.identificationMarks": {
                detailFormat: true
            },
            "profile.reason": {
                detailFormat: true
            },
            "profile.fatherNumber": {
                number: true,
                digits: true,
                minlength: 10,
                maxlength: 10,
                phoneNumberFormat: true
            },
            "profile.motherNumber": {
                number: true,
                digits: true,
                minlength: 10,
                maxlength: 10,
                phoneNumberFormat: true
            },
            "profile.fatherEmail": {
                email: true
            },
            "profile.motherEmail": {
                email: true
            },
            "profile.address": {
                detailFormat: true
            },
            "profile.pinCode": {
                number: true,
                digits: true,
                pinCodeFormat: true,
                minlength: 6,
                maxlength: 6
            }
        }
    });


    var validator = $("#searchBasic").validate({

        rules: {
            validateOnBlur: true,
            "name": {
                nameFormat: true
            },
            "genderId": {
                required: true
            }
        },
        "messages": {
            genderId: {
                required: 'Please select gender'
            }
        }
    });


    var validator = $("#textSearchs").validate({

        rules: {
            validateOnBlur: true,
            "textSearch": {
                nameFormat: true
            }
        }
    });




    var validator = $("#byChildIdAction").validate({

        rules: {
            validateOnBlur: true,
            "profileId": {
                number: true,
                digits: true,
                maxlength: 9
            }
        }
    });


    var validator = $("#search").validate({

        rules: {
            validateOnBlur: true,
            "name": {
                nameFormat: true
            },
            "eventDateFrom": {
                date: true,
                myDateFormat: true
            },
            "eventDateTo": {
                myDateFormat: true
            },
            "fatherNumber": {
                number: true,
                digits: true,
                minlength: 10,
                maxlength: 10,
                phoneNumberFormat: true
            },
            "motherNumber": {
                number: true,
                digits: true,
                minlength: 10,
                maxlength: 10,
                phoneNumberFormat: true
            },
            "pinCode": {
                number: true,
                digits: true,
                pinCodeFormat: true,
                minlength: 6,
                maxlength: 6
            }
        }
    });


    var validator = $("#commentForm").validate({

        rules: {
            validateOnBlur: true,
            "comment": {
                detailFormat: true,
                required: true
            },
        },

        errorPlacement: function (error, element) {
            error.insertBefore(element);
        }
    });





    var validator = $("#auditLogByMobileNumber").validate({

        rules: {
            validateOnBlur: true,
            "mobileNumber": {
                number: true,
                digits: true,
                minlength: 10,
                maxlength: 10,
                phoneNumberFormat: true
            },
        },

        errorPlacement: function (error, element) {
            error.insertBefore(element);
        }
    });





    var validator = $("#feedbackform").validate({

        rules: {
            borderColorOnError: '#FFF',
            validateOnBlur: true,
            "feedback.name": {
                required: true,
                nameFormat: true
            },

            "feedback.email": {
                required: true,
                email: true
            },
            "feedback.mobileNumber": {
                required: true,
                minlength: 10,
                maxlength: 10,
                number: true,
                digits: true,
                phoneNumberFormat: true
            },

            "feedback.feedback": {
                required: true,
                detailFormat: true
            }
        }
    });

    jQuery.extend(jQuery.validator.messages, {

        required: vrequired,
        email: vemail,
        number: vnumber,
        digits: vdigits,
        maxlength: jQuery.validator.format(vmaxlength1 + " {0} " + vmaxlength2),
        minlength: jQuery.validator.format(vminlength1 + " {0} " + vminlength2)

    });

});