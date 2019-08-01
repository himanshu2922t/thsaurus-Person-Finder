function activateTab(tab) {

    createCookie('activeTab', tab, 0);

    //Reset the old active tab
    $(".activeTab").each(function () {

        $(this).removeClass("activeTab").addClass("tab");
    });

    //Set the selected tab as active
    document.getElementById(tab).setAttribute("class", "activeTab");
}

function resetTabs() {

    eraseCookie('activeTab');
}

function restoreTab() {

    var activeTab = readCookie('activeTab');

    if (activeTab != null && document.getElementById(activeTab) != null) {

        document.getElementById(activeTab).setAttribute("class", "activeTab");
    }
    else {

        activateFirstTab();
    }
}

function activateFirstTab() {

    var tabsRow = document.getElementById("tabsRow");

    if (tabsRow != null) { // If page contain tabs

        var firstTab = getFirstChild(tabsRow).id;

        document.getElementById(firstTab).setAttribute("class", "activeTab");
    }
}

function getFirstChild(n) {

    x = n.firstChild;

    while (x.nodeType != 1) {

        x = x.nextSibling;
    }

    return x;
}

function createCookie(name, value, days) {

    var expires = '', date = new Date();

    if (days) {

        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toGMTString();
    }

    document.cookie = name + '=' + value + expires + '; path=/';
}

function readCookie(name) {

    var nameEQ = name + '=',
        allCookies = document.cookie.split(';'),
        i,
        cookie;

    for (i = 0; i < allCookies.length; i += 1) {

        cookie = allCookies[i];
        while (cookie.charAt(0) === ' ') {

            cookie = cookie.substring(1, cookie.length);
        }

        if (cookie.indexOf(nameEQ) === 0) {

            return cookie.substring(nameEQ.length, cookie.length);
        }
    }

    return null;
}

function eraseCookie(name) {

    createCookie(name, '', -1);
}