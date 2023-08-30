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

    const anchor = "div.yuRUbf>div>a";
    const youtubeLink = "a.X5OiLe";
    const smAnchor = "a.l";

    const arr = $(`${anchor}, ${youtubeLink}, ${smAnchor}`);

    const apply = (arr) => {
        for (const item of arr) $(item).attr("target", "_blank");
    };

    apply(arr);
})();
