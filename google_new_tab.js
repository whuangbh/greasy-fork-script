// ==UserScript==
// @name         Google search result open in new tab
// @version      1.40
// @description  As the name suggests, open the google search result in a new tab
// @author       Hw
// @match        https://www.google.com/search?*
// @match        https://www.google.com.*/search?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @namespace    http://tampermonkey.net/
// ==/UserScript==

(function () {
    "use strict";

    document.body.addEventListener(
        "click",
        function (event) {
            const link = event.target.closest("a");

            if (link && link.href) {
                const isResultLink = link.querySelector("h3");
                const isInResultsArea =
                    link.closest("#search") || link.closest("#main");

                if (
                    isInResultsArea &&
                    isResultLink &&
                    link.href.startsWith("http")
                ) {
                    if (link.pathname === "/search") {
                        return;
                    }

                    event.preventDefault();
                    event.stopPropagation();
                    window.open(link.href, "_blank");
                }
            }
        },
        true
    );
})();
