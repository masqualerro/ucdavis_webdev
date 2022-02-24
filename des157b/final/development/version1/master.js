(function () {
	'use strict';

	document.querySelector('.btn').addEventListener('mousedown', function () {
		this.style.backgroundColor = 'white';
	});

	document.querySelector('.btn').addEventListener('mouseup', function () {
		this.style.backgroundColor = 'black';
	});
})();

// QUIZ RESULTS + STORAGE
