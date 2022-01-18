(function () {
	'use strict';
	console.log('reading-js');

	const myVideo = document.getElementById('myVideo');
	const par = document.getElementById('lorem');
	const circle = document.getElementById('wrapper');
	const img = document.getElementById('londres');
	const imgControls = document.getElementById('img-controls');
	const macbeth = document.getElementById('macbeth');
	const macbethStop = document.getElementById('macbeth-stop');
	const hue = document.querySelector('#hueR');
	const gray = document.querySelector('#gray');
	const sepia = document.querySelector('#sepia');
	const invert = document.querySelector('#invert');
	const hueI = document.querySelector('#hueI');
	const grayI = document.querySelector('#grayI');
	const sepiaI = document.querySelector('#sepiaI');
	const invertI = document.querySelector('#invertI');
	const speed = document.querySelector('#speed');
	const pause = document.querySelector('#pause');
	const stop = document.querySelector('#stop');
	// const loading = document.querySelector('.fa-plane');

	let filterC = 'normal';
	let imgFilter = 'normal';
	let speedC = 1;
	let previous = 0;
	let run;
	let scaleCounter = 0;
	let ranInt = 0;
	let mac;

	// myVideo.addEventListener('playing', function () {
	// 	loading.style.display = 'none';
	// });

	function checkTime() {
		console.log(parseInt(myVideo.currentTime));

		if (1 < myVideo.currentTime && myVideo.currentTime < 5) {
			par.className = 'showing';
			par.innerHTML = 'When shall we three meet again?<br>In thunder, lightning, or in rain?';
		} else if (7 < myVideo.currentTime && myVideo.currentTime < 12) {
			par.className = 'showing';
			par.innerHTML = "When the hurlyburly's done,<br>When the battle's lost and won.";
		} else if (14 < myVideo.currentTime && myVideo.currentTime < 19) {
			par.className = 'showing';
			par.innerHTML = 'That will be ere the set of sun.';
		} else if (21 < myVideo.currentTime && myVideo.currentTime < 26) {
			par.className = 'showing';
			par.innerHTML = 'Where the place?';
		} else if (28 < myVideo.currentTime && myVideo.currentTime < 33) {
			par.className = 'showing';
			par.innerHTML = 'Upon the heath.';
		} else if (35 < myVideo.currentTime && myVideo.currentTime < 40) {
			par.className = 'showing';
			par.innerHTML = 'Fair is foul, and foul is fair:<br>Hover through the fog and filthy air.';
		} else {
			par.className = 'hidden';
		}
	}

	//calculates random number in range to display random image. If same number is displayed twice in a row will add number to avoid duplicates
	function randomInt(min, max) {
		var numValues = max - min + 1;
		var randomNum = Math.random();
		var randomVal = randomNum * numValues;
		var round = Math.floor(randomVal);
		var finalNum = min + round;

		if (finalNum != previous) {
			img.src = `media/images/${finalNum}.png`;
			previous = finalNum;
			ranInt = finalNum;
		} else {
			img.src = `media/images/${finalNum + 1}.png`;
			console.log(`random number:${finalNum + 1}`);
			ranInt = finalNum + 1;
		}

		console.log(`random number:${finalNum}`);
	}

	circle.addEventListener('click', function () {
		if (scaleCounter === 0) {
			circle.style.width = '325px';
			scaleCounter = 1;
			console.log(scaleCounter);
		} else if (scaleCounter === 1) {
			circle.style.height = '325px';
			myVideo.style.height = '325px';
			myVideo.style.width = '100%';
			scaleCounter = 2;
			console.log(scaleCounter);
		} else if (scaleCounter === 2) {
			circle.style.width = '180px';
			circle.style.height = '180px';
			scaleCounter = 0;
			myVideo.style.width = '400px';
			myVideo.style.height = '100%';
		}
	});

	// FILTER CONTROLS
	gray.addEventListener('click', function () {
		if (filterC === 'grayscale') {
			myVideo.style.filter = 'none';
			filterC = 'normal';
		} else {
			myVideo.style.filter = 'grayscale(80%)';
			filterC = 'grayscale';
		}
	});
	hue.addEventListener('click', function () {
		if (filterC === 'hue') {
			myVideo.style.filter = 'none';
			filterC = 'normal';
		} else {
			myVideo.style.filter = 'hue-rotate(50deg)';
			filterC = 'hue';
		}
	});
	sepia.addEventListener('click', function () {
		if (filterC === 'sepia') {
			myVideo.style.filter = 'none';
			filterC = 'normal';
		} else {
			myVideo.style.filter = 'sepia(0.7)';
			filterC = 'sepia';
		}
	});
	invert.addEventListener('click', function () {
		if (filterC === 'invert') {
			myVideo.style.filter = 'none';
			filterC = 'normal';
		} else {
			myVideo.style.filter = 'invert(80%)';
			filterC = 'invert';
		}
	});
	grayI.addEventListener('click', function () {
		if (imgFilter === 'grayscale') {
			img.style.filter = 'none';
			imgFilter = 'normal';
		} else {
			img.style.filter = 'grayscale(80%)';
			imgFilter = 'grayscale';
		}
	});
	hueI.addEventListener('click', function () {
		if (imgFilter === 'hue') {
			img.style.filter = 'none';
			imgFilter = 'normal';
		} else {
			img.style.filter = 'hue-rotate(50deg)';
			imgFilter = 'hue';
		}
	});
	sepiaI.addEventListener('click', function () {
		if (imgFilter === 'sepia') {
			img.style.filter = 'none';
			imgFilter = 'normal';
		} else {
			img.style.filter = 'sepia(0.7)';
			imgFilter = 'sepia';
		}
	});
	invertI.addEventListener('click', function () {
		if (imgFilter === 'invert') {
			img.style.filter = 'none';
			imgFilter = 'normal';
		} else {
			img.style.filter = 'invert(80%)';
			imgFilter = 'invert';
		}
	});

	// SLIDESHOW CONTROLS

	speed.addEventListener('click', function () {
		if (speedC === 1) {
			pause.style.display = 'initial';
			stop.style.display = 'initial';
			imgControls.style.display = 'initial';
			clearInterval(run);
			img.style.display = 'initial';
			run = setInterval(function () {
				randomInt(1, 19);
				if (img.width > img.height && scaleCounter === 2) {
					img.className = 'horiz';
					img.style.display = 'initial';
				} else if (img.width < img.height && scaleCounter === 2) {
					img.className = 'vert';
					img.style.display = 'initial';
				} else if (img.width > img.height && scaleCounter === 1) {
					img.className = 'vert';
					img.style.display = 'initial';
				} else if (img.width < img.height && scaleCounter === 1) {
					img.className = 'vert';
					img.style.display = 'initial';
				} else if (img.width > img.height && scaleCounter === 0) {
					img.className = 'vert';
					img.style.display = 'initial';
				} else if (img.width < img.height && scaleCounter === 0) {
					img.className = 'vert-small';
					img.style.display = 'initial';
				}
			}, 2000);

			speed.innerHTML = 'speed: 1x';
			speedC = 2;
			console.log('speed 2s');
		} else if (speedC === 2) {
			clearInterval(run);
			run = setInterval(function () {
				randomInt(1, 19);
				if (img.width > img.height && scaleCounter === 2) {
					img.className = 'horiz';
					img.style.display = 'initial';
				} else if (img.width < img.height && scaleCounter === 2) {
					img.className = 'vert';
					img.style.display = 'initial';
				} else if (img.width > img.height && scaleCounter === 1) {
					img.className = 'vert';
					img.style.display = 'initial';
				} else if (img.width < img.height && scaleCounter === 1) {
					img.className = 'vert';
					img.style.display = 'initial';
				} else if (img.width > img.height && scaleCounter === 0) {
					img.className = 'vert';
					img.style.display = 'initial';
				} else if (img.width < img.height && scaleCounter === 0) {
					img.className = 'vert-small';
					img.style.display = 'initial';
				}
			}, 1000);
			speed.innerHTML = 'speed: 2x';
			speedC = 3;
			console.log('speed 1s');
		} else if (speedC === 3) {
			clearInterval(run);
			run = setInterval(function () {
				randomInt(1, 19);
				if (img.width > img.height && scaleCounter === 2) {
					img.className = 'horiz';
					img.style.display = 'initial';
				} else if (img.width < img.height && scaleCounter === 2) {
					img.className = 'vert';
					img.style.display = 'initial';
				} else if (img.width > img.height && scaleCounter === 1) {
					img.className = 'vert';
					img.style.display = 'initial';
				} else if (img.width < img.height && scaleCounter === 1) {
					img.className = 'vert';
					img.style.display = 'initial';
				} else if (img.width > img.height && scaleCounter === 0) {
					img.className = 'vert';
					img.style.display = 'initial';
				} else if (img.width < img.height && scaleCounter === 0) {
					img.className = 'vert-small';
					img.style.display = 'initial';
				}
			}, 500);
			speed.innerHTML = 'speed: 3x';
			speedC = 4;
			console.log('speed 0.5s');
		} else if (speedC === 4) {
			clearInterval(run);
			run = setInterval(function () {
				randomInt(1, 19);
				if (img.width > img.height && scaleCounter === 2) {
					img.className = 'horiz';
					img.style.display = 'initial';
				} else if (img.width < img.height && scaleCounter === 2) {
					img.className = 'vert';
					img.style.display = 'initial';
				} else if (img.width > img.height && scaleCounter === 1) {
					img.className = 'vert';
					img.style.display = 'initial';
				} else if (img.width < img.height && scaleCounter === 1) {
					img.className = 'vert';
					img.style.display = 'initial';
				} else if (img.width > img.height && scaleCounter === 0) {
					img.className = 'vert';
					img.style.display = 'initial';
				} else if (img.width < img.height && scaleCounter === 0) {
					img.className = 'vert-small';
					img.style.display = 'initial';
				}
			}, 250);
			speed.innerHTML = 'speed: 4x';
			speedC = 1;
			console.log('speed 0.25s');
		}
	});

	pause.addEventListener('click', function () {
		clearInterval(run);
		speed.innerHTML = 'play';
		speedC -= 1;
	});
	stop.addEventListener('click', function () {
		clearInterval(run);
		img.style.display = 'none';
		imgControls.style.display = 'none';
		speedC = 1;
		speed.innerHTML = 'slideshow';
	});

	macbeth.addEventListener('click', function () {
		myVideo.currentTime = 0;
		mac = setInterval(checkTime, 1000);
		macbethStop.style.display = 'initial';
	});
	macbethStop.addEventListener('click', function () {
		par.className = 'hidden';
		clearInterval(mac);
		macbethStop.style.display = 'none';
	});
})();
