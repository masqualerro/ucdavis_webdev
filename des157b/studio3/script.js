'use strict';
document.querySelector('.amButton').addEventListener('click', runAm);
document.querySelector('.spButton').addEventListener('click', runSp);

function runAm() {
	document.getElementById('myChart2').style.display = 'none';
	getDataAm();
	document.querySelector('.amButton').removeEventListener('click', runAm);
	document.querySelector('.amButton').setAttribute('class', 'amClicked');
	document.querySelector('.amClicked').addEventListener('click', function () {
		document.getElementById('genreH').innerHTML = 'genre list -- apple music';
		document.getElementById('myChart2').style.display = 'none';
		document.getElementById('myChart').style.display = 'initial';
		document.getElementById('spListAll').style.display = 'none';
		document.getElementById('amListAll').style.display = 'initial';
	});
}

function runSp() {
	document.getElementById('myChart').style.display = 'none';
	getDataSp();
	document.querySelector('.spButton').removeEventListener('click', runSp);
	document.querySelector('.spButton').setAttribute('class', 'spClicked');
	document.querySelector('.spClicked').addEventListener('click', function () {
		document.getElementById('genreH').innerHTML = 'genre list -- spotify';
		document.getElementById('myChart2').style.display = 'initial';
		document.getElementById('myChart').style.display = 'none';
		document.getElementById('amListAll').style.display = 'none';
		document.getElementById('spListAll').style.display = 'initial';
	});
}

async function getDataAm() {
	document.getElementById('genreH').innerHTML = 'genre list -- apple music';
	document.getElementById('amListAll').style.display = 'initial';
	document.getElementById('spListAll').style.display = 'none';
	document.querySelector('.lds-dual-ring').style.display = 'inline-block';
	const amGenres = await fetch('json/library.json');
	const am = await amGenres.json();
	console.log(am);
	listGenres(am, 'doughnut');
	document.querySelector('.lds-dual-ring').style.display = 'none';
	document.querySelector('.amButton').removeEventListener('click', function () {
		getDataAm();
		document.querySelector('.amButton').setAttribute('class', 'amClicked');
	});
}
async function getDataSp() {
	document.getElementById('genreH').innerHTML = 'genre list -- spotify';
	document.getElementById('amListAll').style.display = 'none';
	document.getElementById('spListAll').style.display = 'initial';
	document.querySelector('.lds-dual-ring').style.display = 'inline-block';
	const spGenres = await fetch('json/spotify.json');
	const sp = await spGenres.json();
	console.log(sp);
	listSpotify(sp, 'doughnut');
	document.querySelector('.lds-dual-ring').style.display = 'none';
}

function listGenres(x, chart) {
	document.querySelector('.lds-dual-ring').style.display = 'none';
	document.getElementById('myChart2').style.display = 'none';
	document.getElementById('myChart').style.display = 'initial';
	let genreLabels = [];
	let genreColor = [];
	let genreData = [];
	const data = {
		labels: genreLabels,
		datasets: [
			{
				label: 'My First Dataset',
				data: genreData,
				backgroundColor: genreColor,
				hoverOffset: 4,
			},
		],
	};

	for (let i = 0; i < x.library.length; i++) {
		genreLabels.push(x.library[i].genre);
		genreColor.push(`rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`);
		genreData.push(x.library[i].songs);
		// document.getElementById('listAll').innerHTML += `${x.library[i].genre} --- `;
		document.getElementById(
			'amListAll'
		).innerHTML += `<a href="https://www.google.com/search?q=${x.library[i].genre}" target="_blank">${x.library[i].genre}</a> --- `;
	}

	for (let i = 0; i < x.library.length; i++) {
		if (x.library[i].subgenres != 'none') {
			x.library[i].subgenres.forEach((element) => console.log(element.genre));
		}
	}
	const config = {
		type: chart,
		data: data,
		options: {
			animation: {
				duration: 1000,
			},
			hover: {
				animationDuration: 0,
			},
			responsiveAnimationDuration: 0,
			elements: {
				line: {
					tension: 0,
				},
			},
			plugins: {
				legend: {
					display: false,
				},
			},
		},
	};
	Chart.defaults.font.family = "'Inconsolata', monospace";
	Chart.defaults.font.size = 11;
	const myChart = new Chart(document.getElementById('myChart'), config);
	let genre;
	console.log(genreLabels);
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function listSpotify(x, chart) {
	document.querySelector('.lds-dual-ring').style.display = 'none';
	document.getElementById('myChart').style.display = 'none';
	document.getElementById('myChart2').style.display = 'initial';

	let genreLabels = [];
	let genreColor = [];
	let genreData = [];
	const data = {
		labels: genreLabels,
		datasets: [
			{
				label: 'My First Dataset',
				data: genreData,
				backgroundColor: genreColor,
				hoverOffset: 4,
			},
		],
	};
	for (let i = 0; i < x.library.length; i++) {
		genreLabels.push(x.library[i].genre);
		genreColor.push(`rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`);
		genreData.push(x.library[i].songs);
		// document.getElementById('listAll').innerHTML += `${x.library[i].genre} --- `;
		document.getElementById(
			'spListAll'
		).innerHTML += `<a href="https://www.google.com/search?q=${x.library[i].genre}" target="_blank">${x.library[i].genre}</a> --- `;
	}
	const config = {
		type: chart,
		data: data,
		options: {
			animation: {
				duration: 1000,
				delay: 200,
			},
			elements: {
				line: {
					tension: 0,
				},
			},
			plugins: {
				legend: {
					display: false,
				},
			},
		},
	};
	Chart.defaults.font.family = "'Inconsolata', monospace";
	Chart.defaults.font.size = 11;
	const myChart = new Chart(document.getElementById('myChart2'), config);
	let genre;
	console.log(genreLabels);
}
