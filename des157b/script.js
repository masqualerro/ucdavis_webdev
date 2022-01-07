(function () {
	'use strict';

	const button = document.querySelector('button');
	const body = document.querySelector('body');
	const banner = document.querySelector('#banner');
	const sections = document.querySelectorAll('section');
	const icon = document.querySelector('i');
	let mode = 'dark';

	button.addEventListener('click', function () {
		if (mode === 'dark') {
			body.className = 'switch';
			banner.className = 'switch';
			button.className = 'switch';
			body.style.backgroundColor = '#202124';
			icon.className = 'fas fa-sun';

			for (const section of sections) {
				section.className = 'switch';
			}
			mode = 'light';
		} else {
			body.removeAttribute('class');
			banner.removeAttribute('class');
			button.removeAttribute('class');
			icon.className = 'fas fa-moon';
			body.style.backgroundColor = '#ebebeb';

			for (const section of sections) {
				section.removeAttribute('class');
			}
			mode = 'dark';
		}
	});
})();
