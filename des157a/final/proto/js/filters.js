(function () {
	'use strict';
	console.log('reading js: filters');

	const imgList = document.querySelectorAll('img');
	const grayScale = document.getElementById('grayscale');
	const sepia = document.getElementById('sepia');
	const hueRotate = document.getElementById('huerotate');
	const invert = document.getElementById('invert');

	document.addEventListener('keydown', function (e) {
		if (e.key === 'g' || e.key === 'G') {
			for (let i = 0; i < imgList.length; i++) {
				imgList[i].style.filter = 'grayscale(100%)';
			}
			grayScale.style.fontFamily = 'GeneralSans-LightItalic';
			invert.style.fontFamily = 'general_sanslight';
			sepia.style.fontFamily = 'general_sanslight';
			hueRotate.style.fontFamily = 'general_sanslight';
			console.log('filter: grayscale');
		}
	});
	document.addEventListener('keydown', function (e) {
		if (e.key === 'h' || e.key === 'H') {
			for (let i = 0; i < imgList.length; i++) {
				imgList[i].style.filter = 'hue-rotate(200deg)';
			}
			hueRotate.style.fontFamily = 'GeneralSans-LightItalic';
			invert.style.fontFamily = 'general_sanslight';
			sepia.style.fontFamily = 'general_sanslight';
			grayScale.style.fontFamily = 'general_sanslight';
			console.log('filter: hue-rotate');
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 's' || e.key === 'S') {
			for (let i = 0; i < imgList.length; i++) {
				imgList[i].style.filter = 'sepia(100%)';
			}
			sepia.style.fontFamily = 'GeneralSans-LightItalic';
			invert.style.fontFamily = 'general_sanslight';
			hueRotate.style.fontFamily = 'general_sanslight';
			grayScale.style.fontFamily = 'general_sanslight';
			console.log('filter: sepia');
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'i' || e.key === 'I') {
			for (let i = 0; i < imgList.length; i++) {
				imgList[i].style.filter = 'invert(100%)';
			}
			invert.style.fontFamily = 'GeneralSans-LightItalic';
			sepia.style.fontFamily = 'general_sanslight';
			hueRotate.style.fontFamily = 'general_sanslight';
			grayScale.style.fontFamily = 'general_sanslight';
			console.log('filter: invert');
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'n' || e.key === 'N') {
			for (let i = 0; i < imgList.length; i++) {
				imgList[i].style.filter = 'none';
			}
			invert.style.fontFamily = 'general_sanslight';
			sepia.style.fontFamily = 'general_sanslight';
			hueRotate.style.fontFamily = 'general_sanslight';
			grayScale.style.fontFamily = 'general_sanslight';
			console.log('filter: none');
		}
	});

	// document.addEventListener('keydown', function (e) {
	// 	if (e.key === 'b' || e.key === 'B') {
	// 		for (let i = 0; i < imgList.length; i++) {
	// 			imgList[i].style.filter = 'blur(5px)';
	// 		}
	// 		sepia.style.fontFamily = 'GeneralSans-LightItalic';
	// 		invert.style.fontFamily = 'general_sanslight';
	// 		hueRotate.style.fontFamily = 'general_sanslight';
	// 		grayScale.style.fontFamily = 'general_sanslight';
	// 		console.log('filter: sepia');
	// 	}
	// });
})();
