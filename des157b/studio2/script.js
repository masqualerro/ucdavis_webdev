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

// function outputHTML1(data) {
// 	let html = '<h2>Master</h2>';
// 	let total = 0;

// 	let twoThousands = 0;
// 	let twentyTens = 0;
// 	let nineteenHundreds = 0;
// 	let eighteenHundreds = 0;
// 	let ancient = 0;

// 	let southAmerica = 0;
// 	let america = 0;
// 	let asia = 0;
// 	let europe = 0;
// 	let africa = 0;
// 	let japan = 0;
// 	let mexico = 0;

// 	for (let i = 0; i < data.books.length; i++) {
// 		if (data.books[i].originalPub >= 2010) {
// 			twentyTens += 1;
// 		} else if (data.books[i].originalPub <= 2009 && data.books[i].originalPub >= 2000) {
// 			twoThousands += 1;
// 		} else if (data.books[i].originalPub <= 1999 && data.books[i].originalPub >= 1900) {
// 			nineteenHundreds += 1;
// 		} else if (data.books[i].originalPub <= 1899 && data.books[i].originalPub >= 1800) {
// 			eighteenHundreds += 1;
// 		} else {
// 			ancient += 1;
// 			console.log(`${data.books[i].Title} published ${data.books[i].originalPub} NOT GOING`);
// 		}
// 	}

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

// var counts = {};
// var compare = 0;
// var mostFrequent;

// function mostFreqAuthor(data) {
// 	for (var i = 0, len = data.books.length; i < len; i++) {
// 		var word = data.books[i].Author;

// 		if (counts[word] === undefined) {
// 			counts[word] = 1;
// 		} else {
// 			counts[word] = counts[word] + 1;
// 		}
// 		if (counts[word] > compare) {
// 			compare = counts[word];
// 			mostFrequent = data.books[i].Author;
// 		}
// 	}
// 	console.log(`Most Frequent Author: ${mostFrequent} -> ${compare}`);
// 	return mostFrequent;
// }

// function mostFreqYear(data) {
// 	for (var i = 0, len = data.books.length; i < len; i++) {
// 		var word = data.books[i].originalPub;

// 		if (counts[word] === undefined) {
// 			counts[word] = 1;
// 		} else {
// 			counts[word] = counts[word] + 1;
// 		}
// 		if (counts[word] > compare) {
// 			compare = counts[word];
// 			mostFrequent = data.books[i].originalPub;
// 		}
// 	}

// 	console.log(`Most Frequent Year: ${mostFrequent} -> ${compare}`);
// 	return mostFrequent;
// }
