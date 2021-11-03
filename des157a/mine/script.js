(function () {
	"use strict";
	console.log("reading js");

	//clicking on desired circle will zooom in on cat
	//pressing "esc" will return picture to regular dimensions

	const c1 = document.getElementById("circle1");
	const c2 = document.getElementById("circle2");
	const catImg = document.querySelector("img");
	const inst = document.getElementById("instruction");

	c1.addEventListener("click", function () {
		catImg.className = "c1zoom";
		c1.className = "hidden";
		c2.className = "hidden";
		inst.innerHTML =
			"esc to escape<br>g for grayscale<br>h for hue rotate<br>n to return to 'normal'";
	});

	c2.addEventListener("click", function () {
		catImg.className = "c2zoom";
		c1.className = "hidden";
		c2.className = "hidden";
	});

	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape") {
			catImg.className = "start";
			c1.className = "visible";
			c2.className = "visible";
		}
	});

	document.addEventListener("keydown", function (e) {
		if (e.key === "g" || e.key === "G") {
			catImg.style.filter = "grayscale(100%)";
		}
	});

	document.addEventListener("keydown", function (e) {
		if (e.key === "h" || e.key === "H") {
			catImg.style.filter = "hue-rotate(200deg)";
		}
	});

	document.addEventListener("keydown", function (e) {
		if (e.key === "n" || e.key === "N") {
			catImg.style.filter = "none";
		}
	});
})();
