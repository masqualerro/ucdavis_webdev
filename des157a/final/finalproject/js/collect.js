(function () {
	'use strict';
	console.log('reading js: collection');

	const foot = document.getElementById('down');
	const foot1 = document.getElementById('up');
	const scrollContainer = document.getElementById('imgslide');
	const mosaic = document.getElementById('mosaic');
	const info = document.querySelector('button');

	foot.addEventListener('click', function () {
		mosaic.style.transform = 'translateY(-100%)';
		console.log('clicked');
		scrollContainer.style.opacity = '0%';
		foot.style.display = 'none';
		foot1.style.display = 'block';
	});
	foot.addEventListener('mouseover', function () {
		info.style.backgroundColor = '#f241c3';
		info.style.color = '#d8d3cd';
	});
	foot.addEventListener('mouseout', function () {
		info.style.backgroundColor = 'transparent';
		info.style.color = 'black';
	});

	foot1.addEventListener('click', function () {
		mosaic.style.transform = 'translateY(100%)';
		console.log('clicked 2');
		scrollContainer.style.opacity = '100%';
		foot.style.display = 'block';
		foot1.style.display = 'none';
	});

	scrollContainer.addEventListener('wheel', (evt) => {
		evt.preventDefault();
		scrollContainer.scrollLeft += evt.deltaY + evt.deltaX;
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			mosaic.style.transform = 'translateY(100%)';
			scrollContainer.style.opacity = '100%';
		}
	});
})();
