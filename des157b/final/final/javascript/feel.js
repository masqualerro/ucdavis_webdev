(function () {
	'use strict';

	// window.onload = function () {
	// 	alert('placeholder images --> not related to the previous pages');
	// };

	// document.querySelector('button').addEventListener('click', function () {
	// 	alert('this will display final results page -- have not started yet');
	// });
	const images = document.querySelectorAll('.feelO');

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

	dragula(
		[
			document.getElementById('top'),
			document.getElementById('serene'),
			document.getElementById('introspective'),
			document.getElementById('visceral'),
			// document.getElementById('sublime'),
		],
		{
			// revertOnSpill: true,
			removeOnSpill: true,
			copy: function (el, source) {
				return source === document.getElementById('top');
			},
			accepts: function (el, target) {
				return target !== document.getElementById('top');
			},
		}
	);
})();
