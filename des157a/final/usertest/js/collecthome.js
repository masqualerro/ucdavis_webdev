(function () {
	'use strict';
	console.log('reading js: filters');

	const mendoLink = document.getElementById('mendolink');
	const greenLink = document.getElementById('greenlink');
	const wareLink = document.getElementById('warelink');
	const lightLink = document.getElementById('lightlink');
	const famLink = document.getElementById('famlink');

	const mendoP = document.getElementById('mendop');
	const greenP = document.getElementById('greenp');
	const wareP = document.getElementById('warep');
	const lightP = document.getElementById('lightp');
	const famP = document.getElementById('famp');

	mendoLink.addEventListener('mouseover', function () {
		mendoP.style.opacity = '100%';
		greenP.style.opacity = '0';
		wareP.style.opacity = '0';
		lightP.style.opacity = '0';
		famP.style.opacity = '0';
	});

	mendoLink.addEventListener('mouseout', function () {
		mendoP.style.opacity = '0';
	});
	greenLink.addEventListener('mouseover', function () {
		greenP.style.opacity = '100%';
		mendoP.style.opacity = '0';
		wareP.style.opacity = '0';
		lightP.style.opacity = '0';
		famP.style.opacity = '0';
	});

	greenLink.addEventListener('mouseout', function () {
		greenP.style.opacity = '0';
	});
	wareLink.addEventListener('mouseover', function () {
		wareP.style.opacity = '100%';
		mendoP.style.opacity = '0';
		greenP.style.opacity = '0';
		lightP.style.opacity = '0';
		famP.style.opacity = '0';
	});

	wareLink.addEventListener('mouseout', function () {
		wareP.style.opacity = '0';
	});
	lightLink.addEventListener('mouseover', function () {
		lightP.style.opacity = '100%';
		mendoP.style.opacity = '0';
		wareP.style.opacity = '0';
		greenP.style.opacity = '0';
		famP.style.opacity = '0';
	});

	lightLink.addEventListener('mouseout', function () {
		lightP.style.opacity = '0';
	});
	famLink.addEventListener('mouseover', function () {
		famP.style.opacity = '100%';
		mendoP.style.opacity = '0';
		wareP.style.opacity = '0';
		lightP.style.opacity = '0';
		greenP.style.opacity = '0';
	});

	famLink.addEventListener('mouseout', function () {
		famP.style.opacity = '0';
	});
})();
