// ==UserScript==
// @name         Google search result open in new tab
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  As the name suggests, open the google search reuslt in new tab
// @author       Hw
// @match        https://www.google.com/search?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// ==/UserScript==

(function () {
    "use strict";
    const anchorList = $("div.yuRUbf>div>a");
    const youtubeLinkList = $("a.X5OiLe");

    const apply = (arr) => {
        for (const item of arr) $(item).attr("target", "_blank");
    };

    apply(anchorList);
    apply(youtubeLinkList);
})();
