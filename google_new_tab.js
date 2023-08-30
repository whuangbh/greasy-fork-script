// ==UserScript==
// @name         Google search result open in new tab
// @version      1.2
// @description  As the name suggests, open the google search result in a new tab
// @author       Hw
// @match        https://www.google.com/search?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// @namespace    http://tampermonkey.net/
// ==/UserScript==

(function () {
    "use strict";

    // big anchor tag: div.yuRUbf>div>a, l
    // youtube link: a.X5OiLe
    // sm anchor tag: a.fl, div.HiHjCd>a

    const querySelector = [
        "div.yuRUbf>div>a",
        "a.X5OiLe",
        "a.fl",
        "a.l",
        "div.HiHjCd>a",
    ];

    for (const query of querySelector) $(query).attr("target", "_blank");

    // Expandable button
    $("div.dnXCYb").click(() => {
        $("div.yuRUbf>div>a").attr("target", "_blank");
        $("div.GdN4W.d0fCJc.BOZ6hd>a").attr("target", "_blank");
    });
})();
