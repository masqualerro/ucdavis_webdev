(function () {
	"use strict";
	console.log("reading js");

	//clicking on desired circle will zooom in on cat
	//pressing "esc" will return picture to regular dimensions

	//"catz.jpg" buttons
	const c1 = document.getElementById("circle1");
	const c2 = document.getElementById("circle2");
	const c3 = document.getElementById("circle3");
	const c4 = document.getElementById("circle4");

	const catImg = document.querySelector("img");
	const inst = document.getElementById("instruction");
	const div = document.getElementById("container");
	let imgWidth = catImg.width;

	function divResize() {
		div.style.width = `${catImg.width}`;
	}

	//"catz.jpg" functions
	c1.addEventListener("click", function () {
		catImg.className = "c1zoom";
		c1.className = "hidden";
		c2.className = "hidden";
		c3.className = "hidden";
		inst.innerHTML =
			"esc to zoom out<br>g for grayscale<br>h for hue rotate<br>n to return to 'normal'";
	});

	c2.addEventListener("click", function () {
		catImg.className = "c2zoom";
		c1.className = "hidden";
		c2.className = "hidden";
		c3.className = "hidden";
		inst.innerHTML =
			"esc to zoom out<br>g for grayscale<br>h for hue rotate<br>n to return to 'normal'";
	});

	c3.addEventListener("click", function () {
		catImg.src = "images/truckz.jpg";
		catImg.style.height = "100%";
		catImg.style.width = "auto";
		console.log(`img width = ${imgWidth}px`);
		console.log(`img height = ${catImg.height}px`);
		div.style.width = "439px";
	});

	c4.addEventListener("click", function () {
		catImg.src = "images/build.jpg";
		console.log(`image changed: ${catImg.src}`);
		catImg.style.height = "100%";
		catImg.style.width = "auto";
		console.log(`img width = ${imgWidth}px`);
		console.log(`img height = ${catImg.height}px`);
		div.style.width = "439px";
	});

	//FILTERS
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
		if (e.key === "s" || e.key === "S") {
			catImg.style.filter = "sepia(100%)";
		}
	});

	document.addEventListener("keydown", function (e) {
		if (e.key === "i" || e.key === "I") {
			catImg.style.filter = "invert(100%)";
		}
	});

	document.addEventListener("keydown", function (e) {
		if (e.key === "n" || e.key === "N") {
			catImg.style.filter = "none";
		}
	});
})();
