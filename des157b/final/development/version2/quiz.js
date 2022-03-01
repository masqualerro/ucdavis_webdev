(function () {
	'use strict';

	const userInfo = document.querySelector('form');
	const favoritePick = document.getElementById('step1');
	const ranking = document.getElementById('step2');
	const feeling = document.getElementById('step3');

	let userName;
	let userAge;
	let favorite;
	let rankArray = [];

	userInfo.addEventListener('submit', function (e) {
		e.preventDefault();

		userName = document.getElementById('uname').value;
		userAge = document.getElementById('age').value;
		console.log(userName);

		document.getElementById('formCont').style.display = 'none';
		favoritePick.style.display = 'initial';
		document.getElementById('chooseFav').style.animationName = 'opacityFade';

		// window.location = 'quiz/favorite/fav.html';
	});

	document.getElementById('favNext').addEventListener('click', function () {
		if (document.getElementById('favorite')) {
			const imgs = document.querySelectorAll('.rankO');
			favorite = document.getElementById('favorite').alt;
			favoritePick.style.display = 'none';
			ranking.style.display = 'initial';
			document.getElementById('rankDiv').style.animationName = 'opacityFade';
			switch (favorite) {
				case 'impressionism':
					for (let i = 0; i <= 9; i++) {
						imgs[i].src = `images/impressionism/${i}.jpg`;
					}
					break;
				case 'renaissance':
					for (let i = 0; i <= 9; i++) {
						imgs[i].src = `images/renaissance/${i}.jpg`;
					}
					break;
				case 'romanticism':
					for (let i = 0; i <= 9; i++) {
						imgs[i].src = `images/romanticism/${i}.jpg`;
					}
					break;
				case 'surrealism':
					for (let i = 0; i <= 9; i++) {
						imgs[i].src = `images/surrealism/${i}.jpg`;
					}
					break;
				case 'contemporary':
					for (let i = 0; i <= 9; i++) {
						imgs[i].src = `images/contemporary/${i}.jpg`;
					}
					break;
				case 'expressionism':
					for (let i = 0; i <= 9; i++) {
						imgs[i].src = `images/expressionism/${i}.jpg`;
					}
					break;
			}
		} else {
			alert('add error message later');
		}
	});
	document.getElementById('rankNext').addEventListener('click', function () {
		const rankingDiv = document.getElementById('rankDiv');
		ranking.style.display = 'none';
		feeling.style.display = 'initial';
		document.getElementById('top').style.animationName = 'opacityFade';
		for (let i = 0; i <= 5; i++) {
			console.log(rankingDiv.children[i]);
		}

		// for (let i = 0; document.querySelectorAll('.container').length; i++) {
		// 	this.style.animationName = 'opacityFade';
		// }
	});
	document.getElementById('feelNext').addEventListener('click', function () {});
})();
