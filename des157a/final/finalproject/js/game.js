(function () {
	'use strict';
	console.log('reading js');

	//CONCEPT:
	//	provide a tour of the outside of my office building + look at cats
	//	point and click "game" of sorts
	//Circular div "buttons" provide navigation between different pictures + zoom in on specific areas of an image
	//pressing 'esc' will return picture to regular dimensions if pressed while zoomed in
	//Option to add filters to current image with different key presses:
	//	CONTROLS:
	// 		click circles to navigate
	// 		g for grayscale
	// 		h for hue rotate
	// 		s for sepia
	// 		i for invert
	// 		n to return to remove filters
	// 		esc to zoom out (while zoomed)

	//cat statistics
	const srcName = document.getElementById('srcname');
	const catName = document.getElementById('catname');
	const story = document.getElementById('story');
	const catColor = document.getElementById('catcolor');
	const catPer = document.getElementById('catper');
	const catAct = document.getElementById('catact');
	const catYN = document.getElementById('catyn');
	const catStats = document.getElementById('catstats');
	//filters
	const grayScale = document.getElementById('grayscale');
	const sepia = document.getElementById('sepia');
	const hueRotate = document.getElementById('huerotate');
	const invert = document.getElementById('invert');

	//"catz.jpg" buttons
	const catz1 = document.getElementById('circle1');
	const catz2 = document.getElementById('circle2');
	const catz3 = document.getElementById('circle11');
	//"truckz.jpg" buttons (homepage)
	const c3 = document.getElementById('circle3');
	const c4 = document.getElementById('circle4');
	const c5 = document.getElementById('circle5');
	//"stand.jpg" buttons
	const stand1 = document.getElementById('circle6');
	const stand2 = document.getElementById('circle7');
	//build.jpg buttons
	const b1 = document.getElementById('build1');
	//"walk.jpg" buttons
	const walk1 = document.getElementById('circle8');
	const walk2 = document.getElementById('circle9');
	const walk3 = document.getElementById('circle10');

	//images, div containers text elements
	const catImg = document.querySelector('img');
	const inst = document.getElementById('instruction');
	const div = document.getElementById('container');
	let imgWidth = catImg.width;

	//"catz.jpg" functions
	catz1.addEventListener('click', function () {
		catImg.className = 'catz1zoom';
		catImg.style.width = '2500px';
		catImg.style.height = 'auto';
		catz1.style.visibility = 'hidden';
		catz2.style.visibility = 'visible';
		catz3.style.visibility = 'hidden';
		c3.style.visibility = 'hidden';
		c5.style.visibility = 'hidden';
		catz2.style.top = '10%';

		catz1.className = 'btn hidden';
		catz2.className = 'btn visible';
		catz3.className = 'btn hidden';
		c3.className = 'btn hidden';
		c5.className = 'btn hidden';

		catStats.style.visibility = 'visible';

		catName.innerHTML = 'Bubba';
		catColor.innerHTML = 'Gray (Tabby)';
		catPer.innerHTML = 'aloof';
		catAct.innerHTML = 'vibing';
		catStats.style.visibility = 'visible';
	});

	catz2.addEventListener('click', function () {
		catImg.className = 'catz2zoom';
		catImg.style.width = '2500px';
		catImg.style.height = 'auto';
		catz1.style.visibility = 'visible';
		catz2.style.visibility = 'hidden';
		catz3.style.visibility = 'hidden';
		c3.style.visibility = 'hidden';
		c5.style.visibility = 'hidden';

		catz1.className = 'btn visible';
		catz2.className = 'btn hidden';
		catz3.className = 'btn hidden';
		c3.className = 'btn hidden';
		c5.className = 'btn hidden';

		catName.innerHTML = "'El Gaucho'";
		catColor.innerHTML = 'Black';
		catPer.innerHTML = 'feisty';
		catAct.innerHTML = 'eatin';
		catStats.style.visibility = 'visible';
	});

	catz3.addEventListener('click', function () {
		catImg.src = 'images/truckz.jpg';
		console.log(`image changed: ${catImg.src}`);
		catImg.style.height = '100%';
		catImg.style.width = 'auto';
		div.style.width = '439px';

		srcName.innerHTML = 'truckz.jpg';
		catYN.innerHTML = 'none to be seen --> go find one!';

		catz1.style.visibility = 'hidden';
		catz2.style.visibility = 'hidden';
		catz3.style.visibility = 'hidden';
		c3.style.visibility = 'visible';
		c4.style.visibility = 'visible';
		c5.style.visibility = 'visible';
		b1.style.visibility = 'hidden';

		catz1.className = 'btn hidden';
		catz2.className = 'btn hidden';
		catz3.className = 'btn hidden';
		c3.className = 'btn visible';
		c4.className = 'btn visible';
		c5.className = 'btn visible';
		b1.className = 'btn hidden';
	});

	//stand.jpg buttons
	stand1.addEventListener('click', function () {
		catImg.className = 'stand1zoom';
		catImg.style.width = 'auto';
		catImg.style.height = '2000px';
		stand1.style.visibility = 'hidden';
		stand1.className = 'hidden';
		stand2.style.top = '66%';
		stand2.style.left = '2%';

		catName.innerHTML = 'Mackerel';
		catColor.innerHTML = 'Brown (striped)';
		catPer.innerHTML = 'mysterious';
		catAct.innerHTML = 'contemplating';
		catStats.style.visibility = 'visible';
	});

	stand2.addEventListener('click', function () {
		catImg.src = 'images/walk.jpg';
		console.log(`image changed: ${catImg.src}`);
		catImg.style.height = '100%';
		catImg.style.width = 'auto';
		div.style.width = '439px';
		catImg.className = 'start';
		catImg.style.height = '100%';

		srcName.innerHTML = 'walk.jpg';
		catStats.style.visibility = 'hidden';

		stand1.style.visibility = 'hidden';
		stand2.style.visibility = 'hidden';
		walk1.style.visibility = 'visible';
		walk2.style.visibility = 'visible';
		walk3.style.visibility = 'visible';

		stand1.className = 'btn hidden';
		stand2.className = 'btn hidden';
		walk1.className = 'btn visible';
		walk2.className = 'btn visible';
		walk3.className = 'btn visible';
	});

	//walk.jpg buttons
	walk1.addEventListener('click', function () {
		catImg.src = 'images/catz.jpg';
		console.log(`image changed: ${catImg.src}`);
		catImg.style.height = '100%';
		catImg.style.width = '962px';
		div.style.width = '962px';

		srcName.innerHTML = 'catz.jpg';
		catYN.innerHTML = 'You found TWO !!!<br>Click on one for more info<br>';

		catz1.style.visibility = 'visible';
		catz2.style.visibility = 'visible';
		catz3.style.visibility = 'visible';
		c3.style.visibility = 'hidden';
		c4.style.visibility = 'hidden';
		c5.style.visibility = 'visible';
		walk1.style.visibility = 'hidden';
		walk2.style.visibility = 'hidden';
		walk3.style.visibility = 'hidden';
		stand1.style.visibility = 'hidden';
		stand2.style.visibility = 'hidden';

		catz1.className = 'btn visible';
		catz2.className = 'btn visible';
		catz3.className = 'btn visible';
		c3.className = 'btn hidden';
		c4.className = 'btn hidden';
		c5.className = 'btn visible';
		walk1.className = 'btn hidden';
		walk2.className = 'btn hidden';
		walk3.className = 'btn hidden';
		stand1.className = 'btn hidden';
		stand2.className = 'btn hidden';
	});
	walk2.addEventListener('click', function () {
		catImg.src = 'images/stand.jpg';
		console.log(`image changed: ${catImg.src}`);
		catImg.style.height = '100%';
		catImg.style.width = 'auto';
		div.style.width = '439px';

		srcName.innerHTML = 'stand.jpg';
		catYN.innerHTML = 'You found one!<br> Click on them for more info<br>';

		walk1.style.visibility = 'hidden';
		walk2.style.visibility = 'hidden';
		walk3.style.visibility = 'hidden';
		stand1.style.visibility = 'visible';
		stand2.style.visibility = 'visible';
		stand2.style.top = '72%';
		stand2.style.left = '2%';

		walk1.className = 'btn hidden';
		walk2.className = 'btn hidden';
		walk3.className = 'btn hidden';
		stand1.className = 'btn visible';
		stand2.className = 'btn visible';
	});

	walk3.addEventListener('click', function () {
		catImg.className = 'walk1zoom';
		console.log('zoom in');
		catImg.style.width = 'auto';
		catImg.style.height = '2000px';
		walk1.style.visibility = 'hidden';
		walk2.style.visibility = 'hidden';
		walk3.style.visibility = 'hidden';

		walk1.className = 'btn hidden';
		walk2.className = 'btn hidden';
		walk3.className = 'btn hidden';

		catYN.innerHTML = 'You found one!<br>Click on them for more info<br>';
		catName.innerHTML = 'Mackerel';
		catColor.innerHTML = 'Brown (striped)';
		catPer.innerHTML = 'mysterious';
		catAct.innerHTML = 'walking';

		catStats.style.visibility = 'visible';
	});

	// truckz.jpg images --> STARTING PAGE
	c3.addEventListener('click', function () {
		catImg.src = 'images/catz.jpg';
		console.log(`image changed: ${catImg.src}`);
		catImg.style.height = '100%';
		catImg.style.width = '962px';
		div.style.width = '962px';

		srcName.innerHTML = 'catz.jpg';
		catYN.innerHTML = 'You found TWO !!!<br>Click on one for more info<br>';

		catz1.style.visibility = 'visible';
		catz2.style.visibility = 'visible';
		catz3.style.visibility = 'visible';
		c3.style.visibility = 'hidden';
		c4.style.visibility = 'hidden';

		catz1.className = 'btn visible';
		catz2.className = 'btn visible';
		catz3.className = 'btn visible';
		c3.className = 'btn hidden';
		c4.className = 'btn hidden';
	});

	c4.addEventListener('click', function () {
		catImg.src = 'images/build.jpg';
		console.log(`image changed: ${catImg.src}`);
		catImg.style.height = '100%';
		catImg.style.width = 'auto';
		div.style.width = '439px';

		srcName.innerHTML = 'build.jpg';
		catYN.innerHTML = 'none to be seen --> go find one!';

		catz1.style.visibility = 'hidden';
		catz2.style.visibility = 'hidden';
		c3.style.visibility = 'hidden';
		c4.style.visibility = 'hidden';
		c5.style.visibility = 'hidden';
		b1.style.visibility = 'visible';

		catz1.className = 'btn hidden';
		catz2.className = 'btn hidden';
		c3.className = 'btn hidden';
		c4.className = 'btn hidden';
		c5.className = 'btn hidden';
		b1.className = 'btn visible';
	});

	c5.addEventListener('click', function () {
		catImg.src = 'images/stand.jpg';
		console.log(`image changed: ${catImg.src}`);
		catImg.style.height = '100%';
		catImg.style.width = 'auto';
		catImg.className = 'start';
		div.style.width = '439px';

		srcName.innerHTML = 'stand.jpg';
		catYN.innerHTML = 'You found one!<br>Click on them for more info<br>';

		catz1.style.visibility = 'hidden';
		catz2.style.visibility = 'hidden';
		catz3.style.visibility = 'hidden';
		c3.style.visibility = 'hidden';
		c4.style.visibility = 'hidden';
		c5.style.visibility = 'hidden';
		stand1.style.visibility = 'visible';
		stand2.style.visibility = 'visible';
		stand2.style.top = '72%';
		stand2.style.left = '2%';

		catz1.className = 'btn hidden';
		catz2.className = 'btn hidden';
		catz3.className = 'btn hidden';
		c3.className = 'btn hidden';
		c4.className = 'btn hidden';
		c5.className = 'btn hidden';
		stand1.className = 'btn visible';
		stand2.className = 'btn visible';
	});

	//build.jpg button
	b1.addEventListener('click', function () {
		catImg.src = 'images/truckz.jpg';
		console.log(`image changed: ${catImg.src}`);
		catImg.style.height = '100%';
		catImg.style.width = 'auto';
		div.style.width = '439px';

		srcName.innerHTML = 'truckz.jpg';
		catYN.innerHTML = 'none to be seen --> go find one!';

		catz1.style.visibility = 'hidden';
		catz2.style.visibility = 'hidden';
		c3.style.visibility = 'visible';
		c4.style.visibility = 'visible';
		c5.style.visibility = 'visible';
		b1.style.visibility = 'hidden';

		catz1.className = 'btn hidden';
		catz2.className = 'btn hidden';
		c3.className = 'btn visible';
		c4.className = 'btn visible';
		c5.className = 'btn visible';
		b1.className = 'btn hidden';
	});

	//ESCAPE (ZOOM-OUT) FUNCTION + FILTERS
	document.addEventListener('keydown', function (e) {
		if (
			e.key === 'Escape' &&
			catImg.src == 'https://masqualerro.github.io/des157a/final/finalproject/game/images/catz.jpg'
		) {
			catImg.className = 'start';
			catImg.style.width = '100%';
			catz1.style.visibility = 'visible';
			catz2.style.visibility = 'visible';
			catz3.style.visibility = 'visible';
			c5.style.visibility = 'visible';

			catz1.className = 'btn visible';
			catz2.className = 'btn visible';
			catz3.className = 'btn visible';
			c5.className = 'btn visible';
			catz2.style.top = '48%';
			console.log('zoom out');

			catStats.style.visibility = 'hidden';
		} else if (
			e.key === 'Escape' &&
			catImg.src == 'https://masqualerro.github.io/des157a/final/finalproject/game/images/stand.jpg'
		) {
			catImg.className = 'start';
			catImg.style.height = '100%';
			stand1.style.visibility = 'visible';
			stand1.className = 'btn visible';
			stand2.style.top = '72%';
			stand2.className = 'btn visible';
			console.log('zoom out');
			catStats.style.visibility = 'hidden';
		} else if (
			e.key === 'Escape' &&
			catImg.src == 'https://masqualerro.github.io/des157a/final/finalproject/game/images/walk.jpg'
		) {
			catImg.className = 'start';
			catImg.style.height = '100%';
			walk1.style.visibility = 'visible';
			walk2.style.visibility = 'visible';
			walk3.style.visibility = 'visible';

			walk1.className = 'btn visible';
			walk2.className = 'btn visible';
			walk3.className = 'btn visible';
			console.log('zoom out');
			catStats.style.visibility = 'hidden';
		} else if (e.key === 'Escape') {
			catImg.className = 'start';
			catImg.style.height = '100%';
			console.log('zoom out');
			catStats.style.visibility = 'hidden';
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'g' || e.key === 'G') {
			catImg.style.filter = 'grayscale(100%)';
			grayScale.style.fontWeight = '700';
			grayScale.style.fontStyle = 'italic';
			sepia.style.fontWeight = '400';
			sepia.style.fontStyle = 'normal';
			hueRotate.style.fontWeight = '400';
			hueRotate.style.fontStyle = 'normal';
			invert.style.fontWeight = '400';
			invert.style.fontStyle = 'normal';
			console.log('filter: grayscale');
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'h' || e.key === 'H') {
			catImg.style.filter = 'hue-rotate(200deg)';
			hueRotate.style.fontWeight = '700';
			hueRotate.style.fontStyle = 'italic';
			sepia.style.fontWeight = '400';
			sepia.style.fontStyle = 'normal';
			invert.style.fontWeight = '400';
			invert.style.fontStyle = 'normal';
			grayScale.style.fontWeight = '400';
			grayScale.style.fontStyle = 'normal';
			console.log('filter: hue-rotate');
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 's' || e.key === 'S') {
			catImg.style.filter = 'sepia(100%)';
			sepia.style.fontWeight = '700';
			sepia.style.fontStyle = 'italic';
			invert.style.fontWeight = '400';
			invert.style.fontStyle = 'normal';
			hueRotate.style.fontWeight = '400';
			hueRotate.style.fontStyle = 'normal';
			grayScale.style.fontWeight = '400';
			grayScale.style.fontStyle = 'normal';
			console.log('filter: sepia');
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'i' || e.key === 'I') {
			catImg.style.filter = 'invert(100%)';
			invert.style.fontWeight = '700';
			invert.style.fontStyle = 'italic';
			sepia.style.fontWeight = '400';
			sepia.style.fontStyle = 'normal';
			hueRotate.style.fontWeight = '400';
			hueRotate.style.fontStyle = 'normal';
			grayScale.style.fontWeight = '400';
			grayScale.style.fontStyle = 'normal';

			console.log('filter: invert');
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'n' || e.key === 'N') {
			catImg.style.filter = 'none';
			invert.style.fontWeight = '400';
			invert.style.fontStyle = 'normal';
			sepia.style.fontWeight = '400';
			sepia.style.fontStyle = 'normal';
			hueRotate.style.fontWeight = '400';
			hueRotate.style.fontStyle = 'normal';
			grayScale.style.fontWeight = '400';
			grayScale.style.fontStyle = 'normal';

			console.log('filter: none');
		}
	});
})();
