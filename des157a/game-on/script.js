(function () {
	'use strict';
	console.log('reading js');

	const myForm = document.querySelector('form');
	const game = document.getElementById('game');
	const title = document.getElementById('title');

	title.addEventListener('click', function () {
		location.reload();
	});

	myForm.addEventListener('submit', function (e) {
		e.preventDefault();

		title.style.display = 'inline-block';
		title.style.textAlign = 'initial';
		myForm.style.display = 'none';
		game.style.display = 'flex';
		const p1Avi = document.getElementById('p1avi');
		const p2avi = document.getElementById('p2avi');
		const p1Input = document.getElementById('uName');
		const p1Name = document.getElementById('p1name');

		console.log(p1Input.value);
		p1Name.innerHTML = `${p1Input.value}`;
		const aviChoice = document.querySelectorAll('input[name="character"]');
		let aviValue;
		for (const radio of aviChoice) {
			if (radio.checked) {
				aviValue = radio.value;
				break;
			}
		}

		console.log(p1Avi.src);
		if (aviValue == 'smoker') {
			p1Avi.setAttribute('src', 'images/smoker.png');
			p1Avi.style.transform = 'rotateY(180deg)';
			p1Avi.style.left = '100px';
		} else if (aviValue == 'knight') {
			p1Avi.setAttribute('src', 'images/knight.png');
			p1Avi.style.transform = 'rotateY(180deg)';
			p1Avi.style.left = '25px';
		} else if (aviValue == 'thinker') {
			p1Avi.setAttribute('src', 'images/thinker.png');
			p1Avi.style.transform = 'rotateY(0deg)';
			p1Avi.style.left = '100px';
		} else if (aviValue == 'colors') {
			p1Avi.setAttribute('src', 'images/colores.png');
			p1Avi.style.transform = 'rotateY(0deg)';
			p1Avi.style.left = '90px';
		} else if (aviValue == 'guardian') {
			p1Avi.setAttribute('src', 'images/guard.png');
			p1Avi.style.transform = 'rotateY(0deg)';
			p1Avi.style.left = '175px';
		}

		gameData.index = Math.round(Math.random());
		console.log(gameData.index);

		gameControl.innerHTML = '<h2>The Game Has Started</h2>';
		gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

		document.getElementById('quit').addEventListener('click', function () {
			location.reload();
		});

		console.log('set up the turn!');

		setUpTurn();
	});

	var gameControl = document.getElementById('gamecontrol');
	var score = document.getElementById('score');
	const p1Score = document.getElementById('score1');
	const p2Score = document.getElementById('score2');

	const p1Roll1 = document.getElementById('p1roll1');
	const p1Roll2 = document.getElementById('p1roll2');

	var gameControl = document.getElementById('gamecontrol');
	var gameControl2 = document.getElementById('gamecontrol2');
	var score = document.getElementById('score');
	var actionArea = document.getElementById('actions');

	var gameData = {
		dice: [
			'fas fa-dice-one',
			'fas fa-dice-two',
			'fas fa-dice-three',
			'fas fa-dice-four',
			'fas fa-dice-five',
			'fas fa-dice-six',
		],
		players: ['player 1', 'player 2'],
		score: [0, 0],
		roll1: 0,
		roll2: 0,
		rollSum: 0,
		index: 0,
		gameEnd: 29,
	};

	function setUpTurn() {
		gameControl2.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
		actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
		document.getElementById('roll').addEventListener('click', function () {
			throwDice();
		});
	}

	function throwDice() {
		actionArea.innerHTML = '';
		gameData.roll1 = Math.floor(Math.random() * 6) + 1;
		gameData.roll2 = Math.floor(Math.random() * 6) + 1;
		gameControl2.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
		p1Roll1.setAttribute('class', `${gameData.dice[gameData.roll1 - 1]}`);
		p1Roll2.setAttribute('class', `${gameData.dice[gameData.roll2 - 1]}`);
		gameData.rollSum = gameData.roll1 + gameData.roll2;

		//if two 1s are rolled
		if (gameData.rollSum === 2) {
			console.log('two snake eyes were rolled');
			gameControl2.innerHTML += '<p>Oh no! Snake eyes!</p>';
			gameData.score[gameData.index] = 0;
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			setTimeout(setUpTurn, 2000);
		} else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			gameControl2.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${
				gameData.players[gameData.index]
			}</p>`;
			setTimeout(setUpTurn, 2000);
		} else {
			gameData.score[gameData.index] += gameData.rollSum;
			actionArea.innerHTML =
				'<button id="rollagain">Roll again</button> <span>- or -</span> <button id="pass">Pass</button>';
			document.getElementById('rollagain').addEventListener('click', function () {
				setUpTurn();
			});
			document.getElementById('pass').addEventListener('click', function () {
				gameData.index ? (gameData.index = 0) : (gameData.index = 1);
				setUpTurn();
			});
		}
		checkWinningCondition();
	}

	function checkWinningCondition() {
		if (gameData.score[gameData.index] > gameData.gameEnd) {
			score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${
				gameData.score[gameData.index]
			} points!</h2>`;
			p1Score.innerHTML = `${gameData.score[0]}`;
			p2Score.innerHTML = `${gameData.score[1]}`;

			actionArea.innerHTML = '';
			document.getElementById('quit').innerHTML = 'Start a New Game?';
		} else {
			p1Score.innerHTML = `${gameData.score[0]}`;
			p2Score.innerHTML = `${gameData.score[1]}`;
		}
	}
})();
