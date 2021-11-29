(function () {
	'use strict';
	console.log('reading js: collection');

	const foot = document.querySelector('footer');
	const scrollContainer = document.getElementById('imgslide');
	const downArrow = document.querySelector('.down');
	const mosaic = document.getElementById('mosaic');
	const footIcon = document.querySelector('.fas.fa-chevron-down');
	const upArrow = document.querySelector('.up');

	foot.addEventListener('click', function () {
		mosaic.style.transform = 'translateY(-100%)';
		console.log('clicked');
		scrollContainer.style.opacity = '0%';
		footIcon.className = 'fas fa-chevron-up';
		foot.className = 'up';
	});

	// foot.addEventListener('click', function () {
	mosaic.style.transform = 'translateY(100%)';
	console.log('clicked 78');
	scrollContainer.style.opacity = '100%';
	footIcon.className = 'fas fa-chevron-down';
	foot.className = 'down';
	// });

	foot.addEventListener('mouseover', function () {
		footIcon.style.transform = 'translateY(-5px)';
		footIcon.style.color = '#f241c3';
	});

	foot.addEventListener('mouseout', function () {
		footIcon.style.transform = 'translateY(0px)';
		footIcon.style.color = 'black';
	});

	scrollContainer.addEventListener('wheel', (evt) => {
		evt.preventDefault();
		scrollContainer.scrollLeft += evt.deltaY;
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			mosaic.style.transform = 'translateY(100%)';
			console.log('clicked 78');
			scrollContainer.style.opacity = '100%';
			footIcon.className = 'fas fa-chevron-down';
			foot.className = 'down';
		}
	});
})();
