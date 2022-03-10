(function () {
	'use strict';

	// window.onload = function () {
	// 	alert('placeholder images --> not related to the previous page');
	// };

	const images = document.querySelectorAll('.rankO');

	for (let i = 0; i < images.length; i++) {
		console.log(images[i].src);
		images[i].addEventListener('click', function () {
			document.getElementById('overlay').style.backgroundImage = `url(${images[i].src})`;
			document.getElementById('overlay').style.display = 'block';
			document.querySelector('main').style.opacity = '0.25';
		});
	}

	document.getElementById('overlay').addEventListener('click', function () {
		this.style.display = 'none';
		document.querySelector('main').style.opacity = '1';
	});

	dragula([document.getElementById('rankDiv')]);
})();
