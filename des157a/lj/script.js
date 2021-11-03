(function () {
	"use strict";
	console.log("reading js");

	const liJournal = document.querySelectorAll("li");
	const myMain = document.querySelector("main");

	for (let i = 0; i < liJournal.length; i++) {
		liJournal[i].addEventListener("click", mySelect(i));
	}
	function mySelect(i) {
		return function () {
			const cImg = document.createElement("img");
			liJournal[i].appendChild(cImg);
			cImg.setAttribute("src", "images/glyph.svg");
			cImg.setAttribute("class", "separator");
			liJournal[i].style.fontWeight = "700";
			liJournal[i].style.fontStyle = "italic";
		};
	}
})();
