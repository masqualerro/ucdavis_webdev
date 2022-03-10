(function () {
	'use strict';

	const images = document.querySelectorAll('img');

	for (let i = 0; i < images.length; i++) {
		console.log(images[i].src);
		images[i].addEventListener('click', function () {
			document.getElementById('overlay').style.backgroundImage = `url(${images[i].src})`;
			document.getElementById('overlay').style.display = 'block';
		});
	}

	document.getElementById('overlay').addEventListener('click', function () {
		this.style.display = 'none';
	});
})();
