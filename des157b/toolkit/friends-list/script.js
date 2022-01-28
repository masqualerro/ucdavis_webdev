Parse.initialize('6vhdOmHGiPCP0TCMhyEhWEITD1iZD7hMEkqk0Ri2', 'YiKHfCR3wHcUr11sWp1Nz2mu2QHs7FPkS2OmcKfK'); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/';

const newBtn = document.getElementById('newbtn');
const addFriendForm = document.getElementById('add-friend');

const friendList = document.querySelector('main ol');

async function displayFriends() {
	const friends = Parse.Object.extend('Friends');
	const query = new Parse.Query(friends);
	try {
		const results = await query.ascending('lname').find();
		// console.log(results);

		results.forEach(function (eachFriend) {
			const id = eachFriend.id;
			const lname = eachFriend.get('lname');
			const fname = eachFriend.get('fname');
			const email = eachFriend.get('email');
			const facebook = eachFriend.get('facebook');
			const twitter = eachFriend.get('twitter');
			const instagram = eachFriend.get('instagram');
			const linkedin = eachFriend.get('linkedin');

			const theListItem = document.createElement('li');
			theListItem.setAttribute('id', `r-${id}`);

			theListItem.innerHTML = `
            <div class="name">${fname} ${lname}</div>
            <div class="email">
                <i class="fas fa-envelope-square"></i>
                ${email}
            </div>
            <div class="social">
                <a href="${facebook}"><i class="fab fa-facebook-square"></i></a>
                <a href="${twitter}"><i class="fab fa-twitter-square"></i></a>
                <a href="${instagram}"><i class="fab fa-instagram"></i></a>
                <a href="${linkedin}"><i class="fab fa-linkedin"></i></a>
            </div>
            <i class="fas fa-edit" id="e-${id}"></i>
            <i class="fas fa-times-circle" id="d-${id}></i>`;
			friendList.append(theListItem);
		});
		const editFriendForm = document.getElementById('edit-friend');
		const editBtns = document.querySelectorAll('.fa-edit');

		for (let i = 0; i < editBtns.length; i++) {
			editBtns[i].addEventListener('click', function (e) {
				e.preventDefault();
				editFriendForm.className = 'edit-friend-onscreen';
			});
		}

		editFriendForm.addEventListener('submit', function (e) {
			e.preventDefault();
			editFriendForm.className = 'add-friend-offscreen';
		});
	} catch (error) {
		console.log('Error while fetching friends', error);
	}
}
displayFriends();

newBtn.addEventListener('click', function (e) {
	e.preventDefault();
	addFriendForm.className = 'add-friend-onscreen';
});

addFriendForm.addEventListener('submit', function (e) {
	e.preventDefault();
	addFriendForm.className = 'add-friend-offscreen';
});
