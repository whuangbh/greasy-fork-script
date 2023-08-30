// ==UserScript==
// @name         Google search result open in new tab
// @version      1.1
// @description  As the name suggests, open the google search result in a new tab
// @author       Hw
// @match        https://www.google.com/search?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// ==/UserScript==

(function () {
    "use strict";

    // big anchor tag: div.yuRUbf>div>a
    // youtube link: a.X5OiLe
    // sm anchor tag: a.fl,

    const querySelector = [
        "div.yuRUbf>div>a",
        "a.X5OiLe",
        "a.fl",
        "div.wQiwMc.related-question-pair a",
    ];
    // const arr = [];

    for (const query of querySelector) $(query).attr("target", "_blank");

    // const apply = (arr) => {
    //     for (const item of arr) $(item).attr("target", "_blank");
    // };

    // apply(arr);
})();
