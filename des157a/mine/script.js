(function () {
	"use strict";
	console.log("reading js");

	//clicking on desired circle will zooom in on cat
	//pressing "esc" will return picture to regular dimensions

	//"catz.jpg" buttons
	const catz1 = document.getElementById("circle1");
	const catz2 = document.getElementById("circle2");
	//"truckz.jpg" buttons (homepage)
	const c3 = document.getElementById("circle3");
	const c4 = document.getElementById("circle4");
	const c5 = document.getElementById("circle5");
	//"stand.jpg" buttons
	const stand1 = document.getElementById("circle6");
	const stand2 = document.getElementById("circle7");
	//build.jpg buttons
	const b1 = document.getElementById("build1");
	//"walk.jpg" buttons
	const walk1 = document.getElementById("circle8");
	const walk2 = document.getElementById("circle9");
	const walk3 = document.getElementById("circle10");

	//images, div containers text elements
	const catImg = document.querySelector("img");
	const inst = document.getElementById("instruction");
	const div = document.getElementById("container");
	let imgWidth = catImg.width;
	const imgLabel = document.getElementById("imglabel");

	// if (catImg.src == "http://127.0.0.1:5500/images/catz.jpg") {
	// 	inst.style.
	// }

	// function divResize() {
	// 	div.style.width = `${catImg.width}`;
	// }

	//"catz.jpg" functions
	catz1.addEventListener("click", function () {
		catImg.className = "catz1zoom";
		catImg.style.width = "2500px";
		catImg.style.height = "auto";
		catz1.style.visibility = "hidden";
		catz2.style.visibility = "visible";
		c3.style.visibility = "hidden";
		c5.style.visibility = "hidden";
	});

	catz2.addEventListener("click", function () {
		imgLabel.innerHTML = "el gaucho";
		imgLabel.style.visibility = "visible";
		catImg.className = "catz2zoom";
		catImg.style.width = "2500px";
		catImg.style.height = "auto";
		catz1.style.visibility = "visible";
		catz2.style.visibility = "hidden";
		c3.style.visibility = "hidden";
		c5.style.visibility = "hidden";
	});

	stand1.addEventListener("click", function () {
		catImg.className = "stand1zoom";
		catImg.style.width = "auto";
		catImg.style.height = "2000px";
		stand1.style.visibility = "hidden";
		stand2.style.top = "66%";
		stand2.style.left = "2%";
	});

	walk3.addEventListener("click", function () {
		catImg.className = "walk1zoom";
		catImg.style.width = "auto";
		catImg.style.height = "2000px";
		walk1.style.visibility = "hidden";
		walk2.style.visibility = "hidden";
		walk3.style.visibility = "hidden";
	});

	stand2.addEventListener("click", function () {
		catImg.src = "images/walk.jpg";
		console.log(`image changed: ${catImg.src}`);
		catImg.style.height = "100%";
		catImg.style.width = "auto";
		console.log(`img width = ${imgWidth}px`);
		console.log(`img height = ${catImg.height}px`);
		div.style.width = "439px";
		catImg.className = "start";
		catImg.style.height = "100%";
		stand1.style.visibility = "hidden";
		stand2.style.visibility = "hidden";
		walk1.style.visibility = "visible";
		walk2.style.visibility = "visible";
		walk3.style.visibility = "visible";
	});

	walk1.addEventListener("click", function () {
		catImg.src = "images/catz.jpg";
		catImg.style.height = "100%";
		catImg.style.width = "962px";
		console.log(`img width = ${imgWidth}px`);
		console.log(`img height = ${catImg.height}px`);
		div.style.width = "962px";
		catz1.style.visibility = "visible";
		catz2.style.visibility = "visible";
		c3.style.visibility = "hidden";
		c4.style.visibility = "hidden";
		c5.style.visibility = "visible";
		walk1.style.visibility = "hidden";
		walk2.style.visibility = "hidden";
		walk3.style.visibility = "hidden";
		stand1.style.visibility = "hidden";
		stand2.style.visibility = "hidden";
	});
	walk2.addEventListener("click", function () {
		catImg.src = "images/stand.jpg";
		console.log(`image changed: ${catImg.src}`);
		catImg.style.height = "100%";
		catImg.style.width = "auto";
		console.log(`img width = ${imgWidth}px`);
		console.log(`img height = ${catImg.height}px`);
		div.style.width = "439px";
		walk1.style.visibility = "hidden";
		walk2.style.visibility = "hidden";
		stand1.style.visibility = "visible";
		stand2.style.visibility = "visible";
		// b1.style.visibility = "visible";
		stand2.style.top = "72%";
		stand2.style.left = "2%";
	});

	c3.addEventListener("click", function () {
		catImg.src = "images/catz.jpg";
		catImg.style.height = "100%";
		catImg.style.width = "962px";
		console.log(`img width = ${imgWidth}px`);
		console.log(`img height = ${catImg.height}px`);
		div.style.width = "962px";
		catz1.style.visibility = "visible";
		catz2.style.visibility = "visible";
		c3.style.visibility = "hidden";
		c4.style.visibility = "hidden";
	});

	c4.addEventListener("click", function () {
		catImg.src = "images/build.jpg";
		console.log(`image changed: ${catImg.src}`);
		catImg.style.height = "100%";
		catImg.style.width = "auto";
		console.log(`img width = ${imgWidth}px`);
		console.log(`img height = ${catImg.height}px`);
		div.style.width = "439px";
		catz1.style.visibility = "hidden";
		catz2.style.visibility = "hidden";
		c3.style.visibility = "hidden";
		c4.style.visibility = "hidden";
		c5.style.visibility = "hidden";
		b1.style.visibility = "visible";
	});

	c5.addEventListener("click", function () {
		catImg.src = "images/stand.jpg";
		console.log(`image changed: ${catImg.src}`);
		catImg.style.height = "100%";
		catImg.style.width = "auto";
		catImg.className = "start";
		console.log(`img width = ${imgWidth}px`);
		console.log(`img height = ${catImg.height}px`);
		div.style.width = "439px";
		catz1.style.visibility = "hidden";
		catz2.style.visibility = "hidden";
		c3.style.visibility = "hidden";
		c4.style.visibility = "hidden";
		c5.style.visibility = "hidden";
		stand1.style.visibility = "visible";
		stand2.style.visibility = "visible";
		// b1.style.visibility = "visible";
		stand2.style.top = "72%";
		stand2.style.left = "2%";
	});

	//build.jpg
	b1.addEventListener("click", function () {
		catImg.src = "images/truckz.jpg";
		console.log(`image changed: ${catImg.src}`);
		catImg.style.height = "100%";
		catImg.style.width = "auto";
		console.log(`img width = ${imgWidth}px`);
		console.log(`img height = ${catImg.height}px`);
		div.style.width = "439px";
		catz1.style.visibility = "hidden";
		catz2.style.visibility = "hidden";
		c3.style.visibility = "visible";
		c4.style.visibility = "visible";
		c5.style.visibility = "visible";
		b1.style.visibility = "hidden";
	});

	//FILTERS
	document.addEventListener("keydown", function (e) {
		if (
			e.key === "Escape" &&
			catImg.src == "http://127.0.0.1:5500/images/catz.jpg"
		) {
			catImg.className = "start";
			catImg.style.width = "100%";
			catz1.style.visibility = "visible";
			catz2.style.visibility = "visible";
		} else if (
			e.key === "Escape" &&
			catImg.src == "http://127.0.0.1:5500/images/stand.jpg"
		) {
			catImg.className = "start";
			catImg.style.height = "100%";
			stand1.style.visibility = "visible";
		} else if (
			e.key === "Escape" &&
			catImg.src == "http://127.0.0.1:5500/images/walk.jpg"
		) {
			catImg.className = "start";
			catImg.style.height = "100%";
			walk1.style.visibility = "visible";
			walk2.style.visibility = "visible";
			walk3.style.visibility = "visible";
		} else if (e.key === "Escape") {
			catImg.className = "start";
			catImg.style.height = "100%";
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
