(function () {
	'use strict';
	console.log('reading js');

	window.onunload = function () {};

	const randomC = document.getElementById('random');
	const collections = ['family.html', 'greenhouse.html', 'light.html', 'mendo.html', 'warehouse.html'];

	function randomIntFromInterval(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	const rndInt = randomIntFromInterval(0, 4);
	randomC.setAttribute('href', `collection/shoots/${collections[rndInt]}`);
	console.log(`Random selection: ${collections[rndInt]}`);
})();
