(function () {
	'use strict';
	console.log('reading js');

	var visited = localStorage.getItem('visited');
	if (!visited) {
		alert(
			'Hello :)\nBrowse through some different photo collections using the circles.\n*NOTE: "archive" page and random button are still in progress and hold empty links'
		);
		localStorage.setItem('visited', true);
	}
})();
