
var verrorSendingMessage;
var vallMendatory;
var venterName;
var venterMobno;
var venterValidMobno;
var vmobAlreadyExist;
var vemailAlreadyExist;
var vvalidSecuritycode;
var vvalidname;
var vmissingToday;
var vmissingTotal;
var vsightingToday;
var vsightingTotal;
var keys = ["errorSendingMessage", "allMendatory", "enterName", "enterMobno", "enterValidMobno", "mobAlreadyExist", "emailAlreadyExist", "validSecuritycode", "validname", "missingToday", "missingTotal", "sightingToday", "sightingTotal"];
$.ajax({
    type: "POST",
    url: "readResourceFile",
    data: 'keys=' + keys,
    async: false,
    success: function (keyValueList) {
        verrorSendingMessage = keyValueList[0].value;
        vallMendatory = keyValueList[1].value;
        venterName = keyValueList[2].value;
        venterMobno = keyValueList[3].value;
        venterValidMobno = keyValueList[4].value;
        vmobAlreadyExist = keyValueList[5].value;
        vemailAlreadyExist = keyValueList[6].value;
        vvalidSecuritycode = keyValueList[7].value;
        vvalidname = keyValueList[8].value;
        vmissingToday = keyValueList[9].value;
        vmissingTotal = keyValueList[10].value;
        vsightingToday = keyValueList[11].value;
        vsightingTotal = keyValueList[12].value;

    },
    datatype: 'json'
});


function resetPassword() {

    $("#Confirm").dialog({

        buttons: {
            'Yes': function () {

                $("Confirm").show();

                //Close the dialog box
                $(this).dialog('close');

                //Send request
                $.ajax({
                    type: "POST",
                    url: "resetPassword",
                    success: function () {

                        $("#done").dialog({
                            buttons: {
                                'OK': function () {
                                    $(this).dialog('close');
                                }
                            }
                        });
                    },

                    datatype: 'json'
                });
            },
            'No': function () {

                $(this).dialog('close');
            }
        },
        open: function () {//Make No button as default

            $(this).siblings('.ui-dialog-buttonpane').find('button:eq(1)').focus();
        }
    });
}

function readDistrict(stateId, select) {

    $.ajax({
        type: "POST",
        url: "readDistrict",
        data: 'filterid=' + stateId,
        success: function (districtObjectList) {

            $("#district").empty();

            //$("#district").append("<option value=\"-1\">--Select--</option>");
            $("#district").append("<option value=\"-1\">" + select + "</option>");
            for (var i = 0; i < districtObjectList.length; i++) {

                //alert(districtObjectList[i].key + ", " + districtObjectList[i].value);

                $("#district").append("<option value=\"" + districtObjectList[i].key + "\">" + districtObjectList[i].value + "</option>");
            }
        },
        datatype: 'json'
    });
}


function readCommon(filterid, fldid, urlvar, select) {

    $.ajax({
        type: "POST",
        url: urlvar,
        data: 'filterid=' + filterid,
        success: function (objectList) {

            $("#" + fldid).empty();

            //$("#"+fldid).append("<option value=\"-1\">--Select--</option>");
            $("#" + fldid).append("<option value=\"-1\">" + select + "</option>");
            for (var i = 0; i < objectList.length; i++) {

                $("#" + fldid).append("<option value=\"" + objectList[i].key + "\">" + objectList[i].value + "</option>");
            }

            if (fldid == 'districtfir') {
                $("#policestationlocation").empty();
                //$("#policestationlocation").append("<option value=\"-1\">--Select--</option>");
                $("#policestationlocation").append("<option value=\"-1\">" + select + "</option>");
                document.getElementById('firno').value = "";
                document.getElementById('firno').disabled = true;
                document.getElementById('firdt').value = "";
                document.getElementById('firdt').disabled = true;

            } else if (fldid == 'policestationlocation') {
                document.getElementById('firno').value = "";
                document.getElementById('firno').disabled = true;
                document.getElementById('firdt').value = "";
                document.getElementById('firdt').disabled = true;
            }


        },
        datatype: 'json'
    });
}

function requestContact(authorId) {

    $("#requestContactConfirmationDialog").dialog({
        modal: true, width: '350', autoOpen: true,

        buttons: {
            'Yes': function () {

                //Close the dialog box
                $(this).dialog('close');

                //Send request
                $.ajax({
                    type: "POST",
                    url: "requestContact",
                    data: 'authorId=' + authorId,
                    success: function (object) {

                        if (object.message != null) {

                            alert(object.message);
                        }
                        else {

                            alert(verrorSendingMessage);
                        }
                    },
                    datatype: 'json'
                });
            },
            'No': function () {

                $(this).dialog('close');
            }
        },
        open: function () {//Make No button as default

            $(this).siblings('.ui-dialog-buttonpane').find('button:eq(1)').focus();
        }
    });
}


function closureConfirmation(profileId) {

    $("#closureConfirmationDialog").dialog({
        modal: true, width: '350', autoOpen: true,

        buttons: {

            'Yes': function () {

                //Close the dialog box
                $(this).dialog('close');

                //Send request
                $.ajax({
                    type: "POST",
                    url: "closureProfile",
                    data: 'profileId=' + profileId,
                    success: function () {
                        window.location.reload(true);
                    }
                });
            },

            'No': function () {

                $(this).dialog('close');
            }
        },

        open: function () {//Make No button as default

            $(this).siblings('.ui-dialog-buttonpane').find('button:eq(1)').focus();
        }
    });
}

function getStateWiseGenderWiseReport(missingOrSighting, todayOrTotal) {

    $.ajax({
        type: "POST",
        url: "getStateWiseGenderWiseReport",
        data: 'missingOrSighting=' + missingOrSighting + '&todayOrTotal=' + todayOrTotal,

        success: function (StateWiseGenderWiseReportList) {

            var reportHeading = "";

            if ('M' == missingOrSighting && 'today' == todayOrTotal) {
                reportHeading = vmissingToday;
            } else if ('M' == missingOrSighting && 'total' == todayOrTotal) {
                reportHeading = vmissingTotal;
            } else if ('S' == missingOrSighting && 'today' == todayOrTotal) {
                reportHeading = vsightingToday;
            } else if ('S' == missingOrSighting && 'total' == todayOrTotal) {
                reportHeading = vsightingTotal;
            }


            $("#reportHeading").html(reportHeading);
            $("#reportTable").find("tr:gt(0)").remove(); //Empty the report table

            if (StateWiseGenderWiseReportList == null || StateWiseGenderWiseReportList.length == 0) {

                $("#reportTable tr:last").after("<tr><td colspan=\"4\">No data found</td></tr>")
            }
            else {

                for (var i = 0; i < StateWiseGenderWiseReportList.length; i++) {

                    var tableRowString = "<tr>"
                        + "<td>"
                        + StateWiseGenderWiseReportList[i].state_name
                        + "</td>"
                        + "<td>"
                        + StateWiseGenderWiseReportList[i].girls_count
                        + "</td>"
                        + "<td>"
                        + StateWiseGenderWiseReportList[i].boys_count
                        + "</td>"
                        + "<td>"
                        + StateWiseGenderWiseReportList[i].transgender_count
                        + "</td>"
                        + "</tr>";

                    $("#reportTable tr:last").after(tableRowString);
                }
            }

            $("#graphs").hide();
            $("#report").show();
        },
        datatype: 'json'
    });
}

function closeDashboardReport() {
    $("#report").hide();
    $("#graphs").show();
}


function reasonToCloseProfile(profileId, moderationCode) {
    //alert("profileId = "+profileId)
    $("#reasonToCloseaccountConfirmationDialog").dialog({
        modal: true, width: '350', autoOpen: true,

        buttons: {

            'Confirm': function () {

                var reason = $('#reason').val();
                var childFound = $('input:radio[name=childFound]:checked').val();
                if (reason != "" && childFound != "") {
                    $(this).dialog('close');
                    $.ajax({
                        type: "POST",
                        url: "closureProfile",
                        data: 'profileId=' + profileId + '&childFound=' + childFound + '&reason=' + reason,
                        success: function (result) {
                            if (moderationCode == '6') {
                                case_close(profileId);
                            }
                            location.reload(true);
                        },
                        datatype: 'json'
                    });
                }
                else {
                    alert(vallMendatory);

                }

            },

            'Cancel': function () {

                $(this).dialog('close');
            }

        },
        open: function () {//Make No button as default			
            $(this).siblings('.ui-dialog-buttonpane').find('button:eq(1)').focus();
        }

    });

}

function case_close(child_id) // Please pass the Missing Id.
{

    //alert("Sending data to TrackChild for closer ..."+trachchild);

    $.ajax({
        type: "POST",
        url: "http://trackthemissingchild.gov.in/trackchild/khoya_paya/khoya_paya_case_close",
        data:
            {
                authuser: "6f355d739e60d6a7e405f1111e34b21e6d3392c5cccd2adef4e18f4813865339",
                authpassword: "40ff81ded9ecfc7af56475092f1593ca38b6a0b26de43bfea900456269939c85",
                child_id: child_id,
            },
        success: function (msg) {
            alert("Track Missing Message: " + msg);
        }
    });

    //alert("Finished sending data to TrackChild.");
}

function sendJson() {

    var trachchild = $("input[name='trachchild']:checked").val();
    if (trachchild == 'yes') {
        //alert("Sending data to TrackChild ..."+trachchild);

        $.ajax({
            type: "POST",
            url: "http://trackthemissingchild.gov.in/trackchild/khoya_paya/khoya_paya_json",
            data: $("#json_form").serialize(),
            success: function (msg) {
                alert("Track Missing Message: " + msg);
            }
        });

        //alert("Finished sending data to TrackChild.");
    }
}

function testfor() {
    alert("test");
}
function OTPSend(mobileNo, userName, captcha, email) {
    $.ajax({
        type: "POST",
        url: "userRegistrationOTP",
        data: 'mobileNo=' + mobileNo + '&userName=' + userName + '&captcha=' + captcha + '&email=' + email,
        success: function (jsonStream) {

            if (jsonStream.substring(0, 5) == "valid") {
                $("#otptable").show();
                $("#sub").hide();
                $("#otpByUser").focus();
                $("#otpref").html(jsonStream.substring(5, jsonStream.length));

            } else if (jsonStream == "invalidCaptcha") {
                alert(vvalidSecuritycode);
                $("#captcha").focus();
            } else if (jsonStream == "enterName") {
                alert(venterName);
                $("#username").focus();
            } else if (jsonStream == "invalidName") {
                alert(vvalidname);
                $("#username").focus();
            } else if (jsonStream == "enterMobno") {
                alert(venterMobno);
                $("#number").focus();
            } else if (jsonStream == "invalidMobno") {
                alert(venterValidMobno);
                $("#number").focus();
            } else if (jsonStream == "mobileExist") {
                alert(vmobAlreadyExist);
                $("#number").focus();
            } else if (jsonStream == "emailExist") {
                alert(vemailAlreadyExist);
                $("#email").focus();
            }
        },
        datatype: 'json'
    });
}

function encriptPass(salt) {
    var mobileNo = $("#mobileNumber").val();
    var password = $("#passwdSalted").val();
    var otp = $("#otpByUserLogin").val();

    $.ajax({
        type: "POST",
        url: "getsaltkey",
        data: 'mobileNumber=' + mobileNo,

        async: false,
        success: function (jsonStream) {

            if (otp != "") {
                var salted = otp + salt;
                var passwordEncoded = CryptoJS.SHA512(salted);
                for (var i = 1; i < this.passwordEncodingIterations; i++) { //TODO use webworker
                    passwordEncoded = CryptoJS.SHA512(passwordEncoded.concat(CryptoJS.enc.Utf8.parse(salted)));
                }
                var passwordEncoded64 = this.passwordEncodingAsBase64 ? passwordEncoded.toString(CryptoJS.enc.Base64) : passwordEncoded;
                $("#otp").val(passwordEncoded64);
                $("#loginWithOTP").submit();
            }

            if (password != "" && password != 'undefined') {
                var salted = password + jsonStream;
                var passwordEncoded = CryptoJS.SHA512(salted);
                for (var i = 1; i < this.passwordEncodingIterations; i++) { //TODO use webworker
                    passwordEncoded = CryptoJS.SHA512(passwordEncoded.concat(CryptoJS.enc.Utf8.parse(salted)));
                }
                var passwordEncoded64 = this.passwordEncodingAsBase64 ? passwordEncoded.toString(CryptoJS.enc.Base64) : passwordEncoded;
                var finalSalted = passwordEncoded64 + salt;
                var finalPasswordEncoded = CryptoJS.SHA512(finalSalted);
                for (var i = 1; i < this.passwordEncodingIterations; i++) { //TODO use webworker
                    finalPasswordEncoded = CryptoJS.SHA512(finalPasswordEncoded.concat(CryptoJS.enc.Utf8.parse(salted)));
                }
                var finalPasswordEncoded64 = this.passwordEncodingAsBase64 ? finalPasswordEncoded.toString(CryptoJS.enc.Base64) : finalPasswordEncoded;
                $("#passwdSalted").val(finalPasswordEncoded64);
                $("#loginWithOTP").submit();
            }

        },
        datatype: 'json'
    });
};

function submitUserRegistration(salt) {

    var otp = $("#otpByUserReg").val();
    var otpWithSalt = otp + salt;
    var otpWithSaltSHA = CryptoJS.SHA512(otpWithSalt);
    $("#otpByUser").val(otpWithSaltSHA);
    $("#userRegistration").submit();
}