(function () {
	'use strict';

	window.onload = function () {
		alert('placeholder images --> not related to the previous pages');
	};

	document.querySelector('button').addEventListener('click', function () {
		alert('this will display final results page -- have not started yet');
	});

	dragula(
		[
			document.getElementById('top'),
			document.getElementById('left'),
			document.getElementById('right'),
			document.getElementById('bLeft'),
			document.getElementById('bRight'),
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
