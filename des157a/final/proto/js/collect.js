(function () {
	'use strict';
	console.log('reading js: collection');

	const foot = document.getElementById('down');
	const foot1 = document.getElementById('up');
	const scrollContainer = document.getElementById('imgslide');
	const mosaic = document.getElementById('mosaic');
	const footIcon = document.querySelector('.fas.fa-chevron-down');
	const footIcon1 = document.querySelector('.fas.fa-chevron-up');

	foot.addEventListener('click', function () {
		mosaic.style.transform = 'translateY(-100%)';
		console.log('clicked');
		scrollContainer.style.opacity = '0%';
		foot.style.display = 'none';
		foot1.style.display = 'block';
	});

	foot1.addEventListener('click', function () {
		mosaic.style.transform = 'translateY(100%)';
		console.log('clicked 2');
		scrollContainer.style.opacity = '100%';
		foot.style.display = 'block';
		foot1.style.display = 'none';
	});

	// foot.addEventListener('mouseover', function () {
	// 	footIcon.style.transform = 'translateY(-5px)';
	// 	footIcon.style.color = '#f241c3';
	// });
	// foot1.addEventListener('mouseover', function () {
	// 	footIcon1.style.transform = 'translateY(-5px)';
	// 	footIcon1.style.color = '#f241c3';
	// });

	// foot.addEventListener('mouseout', function () {
	// 	footIcon.style.transform = 'translateY(0px)';
	// 	footIcon.style.color = 'black';
	// });
	// foot1.addEventListener('mouseout', function () {
	// 	footIcon1.style.transform = 'translateY(0px)';
	// 	footIcon1.style.color = 'black';
	// });

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
