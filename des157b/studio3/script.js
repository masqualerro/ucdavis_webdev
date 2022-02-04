let genreFilter;
let worldFilter;

document.querySelector('#submit').addEventListener('click', function (e) {
	e.preventDefault();
	genreFilter = document.querySelector('#genres').value;
	worldFilter = document.querySelector('#world').value;
	getData();
});

async function getData() {
	const myBooks = await fetch('data.json');
	const data = await myBooks.json();

	document.querySelector('#bookP').innerHTML = fillTable(data);
	mostFreqYear(data);
	genre(data);
}

function dates(x) {
	let twoThousands = 0;
	let twentyTens = 0;
	let nineteenHundreds = 0;
	let eighteenHundreds = 0;
	let ancient = 0;

	for (let i = 0; i < x.books.length; i++) {
		if (x.books[i].originalPub >= 2010) {
			twentyTens += 1;
		} else if (x.books[i].originalPub <= 2009 && x.books[i].originalPub >= 2000) {
			twoThousands += 1;
		} else if (x.books[i].originalPub <= 1999 && x.books[i].originalPub >= 1900) {
			nineteenHundreds += 1;
		} else if (x.books[i].originalPub <= 1899 && x.books[i].originalPub >= 1800) {
			eighteenHundreds += 1;
		} else {
			ancient += 1;
			console.log(`${x.books[i].Title} published ${x.books[i].originalPub} NOT GOING`);
		}
	}
	console.log(twentyTens, twoThousands, nineteenHundreds, eighteenHundreds, ancient);
	const labels = ['Ancient', '1800s', '1900s', '2000s', '2010+'];

	const data = {
		labels: labels,
		datasets: [
			{
				label: 'My First dataset',
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: [ancient, eighteenHundreds, nineteenHundreds, twoThousands, twentyTens],
			},
		],
	};

	const config = {
		type: 'line',
		data: data,
		options: {},
	};
	const myChart = new Chart(document.getElementById('myChart'), config);
}

function genre(x) {
	let bio = 0;
	let scifi = 0;
	let fantasy = 0;
	let horror = 0;
	let magreal = 0;
	let music = 0;
	let mystery = 0;
	let romance = 0;
	let mythology = 0;
	let philosophy = 0;
	let comics = 0;
	let classic = 0;
	let short = 0;

	for (let i = 0; i < x.books.length; i++) {
		if (x.books[i].Bookshelves.includes('horror') === true) {
			horror += 1;
		} else if (x.books[i].Bookshelves.includes('science-fiction') === true) {
			scifi += 1;
		} else if (x.books[i].Bookshelves.includes('magical-realism') === true) {
			magreal += 1;
		} else if (x.books[i].Bookshelves.includes('fantasy') === true) {
			fantasy += 1;
		} else if (x.books[i].Bookshelves.includes('music') === true) {
			music += 1;
		} else if (x.books[i].Bookshelves.includes('mystery') === true) {
			mystery += 1;
		} else if (x.books[i].Bookshelves.includes('romance') === true) {
			romance += 1;
		} else if (x.books[i].Bookshelves.includes('mythology') === true) {
			mythology += 1;
		} else if (x.books[i].Bookshelves.includes('biography') === true) {
			bio += 1;
		} else if (x.books[i].Bookshelves.includes('non-fiction') === true) {
		} else if (x.books[i].Bookshelves.includes('short-stories') === true) {
			short += 1;
		} else if (x.books[i].Bookshelves.includes('classics') === true) {
			classic += 1;
		} else if (x.books[i].Bookshelves.includes('philosophy') === true) {
			philosophy += 1;
		} else if (x.books[i].Bookshelves.includes('comics') === true) {
			comics += 1;
		} else {
		}
	}
	const labels = [
		'Biography',
		'Sci-Fi',
		'Fantasy',
		'Horror',
		'Magical Realism',
		'Music',
		'Mystery',
		'Romance',
		'Mythology',
		'Philosophy',
		'Comics',
		'Classics',
		'Short Stories',
	];

	const data = {
		labels: labels,
		datasets: [
			{
				label: 'My First dataset',
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: [
					bio,
					scifi,
					fantasy,
					horror,
					magreal,
					music,
					mystery,
					romance,
					mythology,
					philosophy,
					comics,
					classic,
					short,
				],
			},
		],
	};

	const config = {
		type: 'line',
		data: data,
		options: {},
	};
	const myChart = new Chart(document.getElementById('myChart'), config);
}

function fillTable(data) {
	let tableContent =
		'<table class="sortable"><tr><th>Title</th><th>Author</th><th>Year</th><th>Genre</th><th>Country</th><th>Read Y/N</th></tr>';
	for (let i = 0; i < data.books.length; i++) {
		let origin = '';
		let readYN = '';
		let genre = '';

		if (data.books[i].Bookshelves.includes('south-american-literature') === true) {
			origin = 'South America';
		} else if (
			data.books[i].Bookshelves.includes('asian-literature') === true &&
			data.books[i].Bookshelves.includes('japanese-literature') === true
		) {
			origin = 'Japan';
		} else if (data.books[i].Bookshelves.includes(' american-literature') === true) {
			origin = 'USA';
		} else if (data.books[i].Bookshelves.includes('european-literature') === true) {
			origin = 'Europe';
		} else if (data.books[i].Bookshelves.includes(' african-literature') === true) {
			origin = 'Africa';
		} else if (data.books[i].Bookshelves.includes('mexican-literature') === true) {
			origin = 'Mexico';
		} else if (data.books[i].Bookshelves.includes('asian-literature') === true) {
			origin = 'Asia';
		} else {
			console.log(`${data.books[i].Title}: NOT LABELED`);
		}

		if (data.books[i].Bookshelves.includes('horror') === true) {
			genre = 'Horror';
		} else if (data.books[i].Bookshelves.includes('science-fiction') === true) {
			genre = 'Sci-Fi';
		} else if (data.books[i].Bookshelves.includes('magical-realism') === true) {
			genre = 'Magical Realism';
		} else if (data.books[i].Bookshelves.includes('fantasy') === true) {
			genre = 'Fantasy';
		} else if (data.books[i].Bookshelves.includes('music') === true) {
			genre = 'Music';
		} else if (data.books[i].Bookshelves.includes('mystery') === true) {
			genre = 'Mystery';
		} else if (data.books[i].Bookshelves.includes('romance') === true) {
			genre = 'Romance';
		} else if (data.books[i].Bookshelves.includes('mythology') === true) {
			genre = 'Mythology';
		} else if (data.books[i].Bookshelves.includes('biography') === true) {
			genre = 'Biography';
		} else if (data.books[i].Bookshelves.includes('non-fiction') === true) {
			genre = 'Non-Fiction';
		} else if (data.books[i].Bookshelves.includes('short-stories') === true) {
			genre = 'Short Stories';
		} else if (data.books[i].Bookshelves.includes('classics') === true) {
			genre = 'Classic';
		} else if (data.books[i].Bookshelves.includes('philosophy') === true) {
			genre = 'Philosophy';
		} else if (data.books[i].Bookshelves.includes('comics') === true) {
			genre = 'Comics';
		} else {
			genre = 'Fiction';
		}

		if (data.books[i].shelf === 'read') {
			readYN = 'Y';
		} else {
			readYN = 'N';
		}

		if (genreFilter === 'start' && worldFilter != 'start') {
			console.log('genre filter empty! world filter full');
			if (data.books[i].Bookshelves.includes(worldFilter) === true) {
				tableContent += `<tr><td> <a href="https://www.goodreads.com/book/show/${data.books[i].id}"> ${data.books[i].Title}</a></td><td>${data.books[i].Author}</td><td>${data.books[i].originalPub}</td><td>${genre}</td><td>${origin}</td><td>${readYN}</td>`;
				console.log('here');
			}
		} else if (worldFilter === 'start' && genreFilter != 'start') {
			console.log('world filter empty! genre filter full');
			if (data.books[i].Bookshelves.includes(genreFilter) === true) {
				tableContent += `<tr><td> <a href="https://www.goodreads.com/book/show/${data.books[i].id}"> ${data.books[i].Title}</a></td><td>${data.books[i].Author}</td><td>${data.books[i].originalPub}</td><td>${genre}</td><td>${origin}</td><td>${readYN}</td>`;
				console.log('here m8');
			}
		} else if (worldFilter != 'start' && genreFilter != 'start') {
			console.log('both filters full');
			if (
				data.books[i].Bookshelves.includes(genreFilter) === true &&
				data.books[i].Bookshelves.includes(worldFilter) === true
			) {
				tableContent += `<tr><td> <a href="https://www.goodreads.com/book/show/${data.books[i].id}"> ${data.books[i].Title}</a></td><td>${data.books[i].Author}</td><td>${data.books[i].originalPub}</td><td>${genre}</td><td>${origin}</td><td>${readYN}</td>`;
			}
		} else {
			tableContent += `<tr><td> <a href="https://www.goodreads.com/book/show/${data.books[i].id}"> ${data.books[i].Title}</a></td><td>${data.books[i].Author}</td><td>${data.books[i].originalPub}</td><td>${genre}</td><td>${origin}</td><td>${readYN}</td>`;
		}

		// tableContent += `<tr><td> <a href="https://www.goodreads.com/book/show/${data.books[i].id}"> ${data.books[i].Title}</a></td><td>${data.books[i].Author}</td><td>${data.books[i].originalPub}</td><td>${genre}</td><td>${origin}</td><td>${readYN}</td>`;
	}

	tableContent += '</table>';
	return tableContent;
}

// 	// for (let i = 0; i < data.books.length; i++) {
// 	// 	if (data.books[i].shelf === 'to-read') {
// 	// 		console.log(data.books[i].Title);
// 	// 		html += `<img src="https://covers.openlibrary.org/b/isbn/${data.books[i].ISBN}-M.jpg" alt="book_cover">`;
// 	// 	}
// 	// }

// 	for (let i = 0; i < data.books.length; i++) {
// 		total += 1;
// 	}

// 	for (let i = 0; i < data.books.length; i++) {
// 		if (data.books[i].Bookshelves.includes('south-american-literature') === true) {
// 			southAmerica += 1;
// 		} else if (
// 			data.books[i].Bookshelves.includes('asian-literature') === true &&
// 			data.books[i].Bookshelves.includes('japanese-literature') === true
// 		) {
// 			asia += 1;
// 			japan += 1;
// 		} else if (data.books[i].Bookshelves.includes(' american-literature') === true) {
// 			america += 1;
// 		} else if (data.books[i].Bookshelves.includes('european-literature') === true) {
// 			europe += 1;
// 		} else if (data.books[i].Bookshelves.includes(' african-literature') === true) {
// 			africa += 1;
// 		} else if (data.books[i].Bookshelves.includes('mexican-literature') === true) {
// 			mexico += 1;
// 		} else if (data.books[i].Bookshelves.includes('asian-literature') === true) {
// 			asia += 1;
// 		} else {
// 			console.log(`${data.books[i].Title}: NOT LABELED`);
// 		}
// 	}

// 	html += `<p>Total Books: ${total}</p>`;
// 	html += `<p>USA: ${america}</p>`;
// 	html += `<p>Central + South America: ${southAmerica + mexico}</p>`;
// 	html += `<p>Europe: ${europe}</p>`;
// 	html += `<p>Asia: ${asia}</p>`;
// 	html += `<p>Africa: ${africa}</p>`;
// 	html += `<p></p>`;
// 	html += `<p>2010+ : ${twentyTens}</p>`;
// 	html += `<p>2000-2009: ${twoThousands}</p>`;
// 	html += `<p>1900-1999: ${nineteenHundreds}</p>`;
// 	html += `<p>1800-1899: ${eighteenHundreds}</p>`;
// 	html += `<p>>1800: ${ancient}</p>`;

// 	html += ``;

// 	return html;
// }

var counts = {};
var compare = 0;
var mostFrequent;

function mostFreqAuthor(data) {
	for (var i = 0, len = data.books.length; i < len; i++) {
		var word = data.books[i].Author;

		if (counts[word] === undefined) {
			counts[word] = 1;
		} else {
			counts[word] = counts[word] + 1;
		}
		if (counts[word] > compare) {
			compare = counts[word];
			mostFrequent = data.books[i].Author;
		}
	}
	console.log(`Most Frequent Author: ${mostFrequent} -> ${compare}`);
	return mostFrequent;
}

function mostFreqYear(data) {
	for (var i = 0, len = data.books.length; i < len; i++) {
		var word = data.books[i].originalPub;

		if (counts[word] === undefined) {
			counts[word] = 1;
		} else {
			counts[word] = counts[word] + 1;
		}
		if (counts[word] > compare) {
			compare = counts[word];
			mostFrequent = data.books[i].originalPub;
		}
	}

	console.log(`Most Frequent Year: ${mostFrequent} -> ${compare}`);
	return mostFrequent;
}
