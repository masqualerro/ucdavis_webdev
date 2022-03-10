(function () {
	'use strict';

	const images = document.querySelectorAll('.favO');

	for (let i = 0; i < images.length; i++) {
		console.log(images[i].src);

		images[i].addEventListener('click', function () {
			for (let i = 0; i < images.length; i++) {
				images[i].style.border = 'none';
				images[i].removeAttribute('id');
			}
			images[i].style.border = '5px solid blue';
			images[i].setAttribute('id', 'favorite');
		});
	}

	document.getElementById('overlay').addEventListener('click', function () {
		this.style.display = 'none';
	});
})();
