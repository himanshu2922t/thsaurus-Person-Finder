

var vvalidname;
var vspecialcharacter;
var vvalidphone;
var vvalidpin;
var vvalidaadhar;
var vdateformat;
var vgenderinbd;
var vrelationinbd;
var vmissingToday;
var vmissingTotal;
var vsightingToday;
var vsightingTotal;

var keys = ["validname", "specialcharacter", "validphone", "validpin", "validaadhar", "dateformat", "genderinbd", "relationinbd", "missingToday", "missingTotal", "sightingToday", "sightingTotal"];
$.ajax({
    type: "POST",
    url: "readResourceFile",
    data: 'keys=' + keys,
    async: false,
    success: function (keyValueList) {
        vvalidname = keyValueList[0].value;
        vspecialcharacter = keyValueList[1].value;
        vvalidphone = keyValueList[2].value;
        vvalidpin = keyValueList[3].value;
        vvalidaadhar = keyValueList[4].value;
        vdateformat = keyValueList[5].value;
        vgenderinbd = keyValueList[6].value;
        vrelationinbd = keyValueList[7].value;
        vmissingToday = keyValueList[8].value;
        vmissingTotal = keyValueList[9].value;
        vsightingToday = keyValueList[10].value;
        vsightingTotal = keyValueList[11].value;
    },
    datatype: 'json'
});


$.validator.addMethod(
    "nameFormat",
    function (value, element) {
        var unicodeWord = XRegExp('^[\\p{L}\\p{Z}\\p{M}\\u002E]+$');
        return unicodeWord.test(value);
    },
    vvalidname
);
$.validator.addMethod(
    "detailFormat",
    function (value, element) {
        //return value.match(/^[a-zA-Z0-9 _,-./\n]*$/);
        var unicodeWord = XRegExp('^[\\p{L}\\p{Z}\\p{M}\\p{N}\\u005F\\u002C\\u002D\\u002E\\u002F]+$');
        return unicodeWord.test(value);
    },
    vspecialcharacter
);

$.validator.addMethod(
    "phoneNumberFormat",
    function (value, element) {
        if (value == "") {
            return true;
        }
        else
            return value.match(/^([1-9]{1})([0-9]{9})$/);
    },
    vvalidphone
);


$.validator.addMethod(
    "pinCodeFormat",
    function (value, element) {
        if (value == "") {
            return true;
        }
        else
            return value.match(/^([1-9]{1})([0-9]{5})$/);
    },
    vvalidpin
);

$.validator.addMethod(
    "aadhaarNumberFormat",
    function (value, element) {
        if (value == "") {
            return true;
        }
        else
            return value.match(/^([2-9]{1})([0-9]{11})$/);
    },
    vvalidaadhar
);

$.validator.addMethod(
    "myDateFormat",
    function (value, element) {

        if (value != null && value.length() != 0) {
            //return value.match(/^((?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2}))*$/);    
            return value.match(/^(0[1-9]|[12][0-9]|3[01])[- //.](0[1-9]|1[012])[- //.](19|20)\d\d$/);
        }
    },
    vdateformat
);

$(function () {

    $("#dialog").dialog({
        autoOpen: false,
        buttons: {
            OK: function () { $(this).dialog("close"); }
        }
    });
    $("#dialog1").dialog({
        autoOpen: false,
        buttons: {
            OK: function () { $(this).dialog("close"); }
        }
    });

    $("#sub").click(function () {

        if ($('#gender').val() == "-") {
            $("#dialog").text(vgenderinbd);
            $("#dialog").dialog("open");
            return false;
        }


        if ($('#relationship').val() == "-") {
            $("#dialog").text(vrelationinbd);
            $("#dialog").dialog("open");

            return false;
        }
    });
});   	
