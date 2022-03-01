function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getDataChi() {
	document.getElementById('container').style.backgroundImage = `none`;
	document.querySelector('.lds-ripple').style.display = 'inline-block';
	const artData = await fetch(
		`https://api.artic.edu/api/v1/artworks/search?q=essentials&page=${getRandomInt(
			1,
			34
		)}&fields=id,image_id,title,artist_title,date_display,category_titles,style_titles,classification_title,color`
	);
	const data = await artData.json();

	console.log(data);
	dataReadChi(data);
	console.log(artData);
}

function dataReadChi(x) {
	document.querySelector('.lds-ripple').style.display = 'none';
	const int = getRandomInt(0, 9);
	console.log(x.data[int].artist_display);
	console.log(x.data[int].title);
	document.getElementById(
		'container'
	).style.backgroundImage = `url(${x.config.iiif_url}/${x.data[int].image_id}/full/843,/0/default.jpg)`;
	document.querySelector(
		'figcaption'
	).innerHTML = `${x.data[int].title}, ${x.data[int].date_display}<br>${x.data[int].artist_title}`;
}

document.querySelector('button').addEventListener('click', function () {
	const int = getRandomInt(0, 1);
	if (int === 0) {
		getDataChi();
	} else {
		getDataMet();
	}
});

document.querySelector('button').addEventListener('mousedown', function () {
	document.querySelector('button').style.backgroundColor = 'white';
});

document.querySelector('button').addEventListener('mouseup', function () {
	document.querySelector('button').style.backgroundColor = 'black';
});

async function getDataMet() {
	document.getElementById('container').style.backgroundImage = `none`;
	document.querySelector('.lds-ripple').style.display = 'inline-block';
	const artData = await fetch(
		`https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&isHighlight=true&hasImages=true&q=art`
	);
	const dataNum1 = await artData.json();
	// console.log(`THIS IS THE JSON UR GETTING`);
	console.log(dataNum1);
	dataReadMet(dataNum1);
}

async function dataReadMet(x) {
	const int = x.objectIDs[getRandomInt(0, 236)];
	console.log(x.objectIDs[int]);
	const artData1 = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${int}`);
	const artDisplay = await artData1.json();
	console.log(artDisplay);
	displayMet(artDisplay);
}

function displayMet(x) {
	document.querySelector('.lds-ripple').style.display = 'none';
	document.getElementById('container').style.backgroundImage = `url(${x.primaryImageSmall})`;
	document.querySelector('figcaption').innerHTML = `${x.title}, ${x.objectDate}<br>${x.artistDisplayName}`;
	console.log(x.primaryImage);
}
