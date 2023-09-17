// ==UserScript==
// @name         Google search result open in new tab
// @version      1.31
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

	$("div#rcnt").click((event) => {
		let target = event.target;

		while (target && target !== document) {
			if (target.tagName === "A") {
				event.preventDefault();
				window.open(target.href, "_blank");
				break;
			}
			target = target.parentElement;
		}
	});
})();
