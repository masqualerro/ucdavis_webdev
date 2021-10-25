(function () {
	"use strict";
	console.log("reading js");

	const myForm = document.querySelector("form");

	myForm.addEventListener("submit", function (e) {
		e.preventDefault();
		const errorMsg = document.getElementById("incomplete");

		//form+album output/generation variables
		const divImg = document.getElementById("albumgen");
		const overlay = document.getElementById("overlay");
		const albumT = document.getElementById("atitle");
		const bandN = document.getElementById("bandname");
		const libP = document.getElementById("madlib");
		const gl = document.querySelector("img");

		// album cover customization variables
		const userName = document.getElementById("uName");
		const albumName = document.getElementById("albumName");
		const textColor = document.getElementById("textcolor");
		const bgColor = document.getElementById("bgcolor");
		const accColor = document.getElementById("acccolor");
		const vibeSelect = document.getElementById("imgchoice");

		// madlib variables
		const noun1 = document.getElementById("noun1");
		const noun2 = document.getElementById("noun2");
		const adj1 = document.getElementById("adj");
		const adj2 = document.getElementById("adj2");
		const adj3 = document.getElementById("adj3");
		const verb1 = document.getElementById("verb");

		// get values then list in console log
		let uNameValue = userName.value;
		console.log(`Username: ${uNameValue}`);
		let aNameValue = albumName.value;
		console.log(`Album Name: ${aNameValue}`);
		let tcValue = textColor.value;
		console.log(`Text Color: ${tcValue}`);
		let bgValue = bgColor.value;
		console.log(`Background Color: ${bgValue}`);
		let acValue = accColor.value;
		console.log(`Accent Color: ${acValue}`);

		let nValue1 = noun1.value;
		console.log(`Noun 1: ${nValue1}`);
		let nValue2 = noun2.value;
		console.log(`Noun 2: ${nValue2}`);

		let aValue1 = adj1.value;
		console.log(`Adjective 1: ${aValue1}`);
		let aValue2 = adj2.value;
		console.log(`Adjective 2: ${aValue2}`);
		let aValue3 = adj3.value;
		console.log(`Adjective 2: ${aValue3}`);

		let vValue1 = verb1.value;
		console.log(`Verb: ${vValue1}`);

		console.log(`Concept: ${vibeSelect.value}`);

		if (
			vValue1 == "" ||
			nValue1 == "" ||
			nValue2 == "" ||
			aValue1 == "" ||
			aValue2 == "" ||
			aValue3 == "" ||
			uNameValue == "" ||
			aNameValue == "" ||
			vibeSelect.value == "none"
		) {
			console.log("form incomplete");
			errorMsg.innerHTML = "Please fill out the form completely :)";
		} else {
			errorMsg.style.display = "none";
			// Set overlay on album art
			overlay.style.backgroundColor = `${bgValue}`;
			albumT.style.color = `${tcValue}`;
			bandN.style.color = `${acValue}`;
			albumT.innerHTML = `${aNameValue}`;
			bandN.innerHTML = `${uNameValue} quartet`;

			//set album image based on user selection
			if (vibeSelect.value === "greenhouse") {
				divImg.style.backgroundImage = "url(images/ghb.jpg)";
				albumT.style.textAlign = "right";
				albumT.style.paddingLeft = "10px";
				bandN.style.textAlign = "right";
				bandN.style.paddingLeft = "10px";
			} else if (vibeSelect.value === "field") {
				divImg.style.backgroundImage = "url(images/fieldb.jpg)";
				albumT.style.textAlign = "right";
				albumT.style.paddingLeft = "10px";
				bandN.style.textAlign = "right";
				bandN.style.paddingLeft = "10px";
			} else if (vibeSelect.value === "city") {
				divImg.style.backgroundImage = "url(images/cityb.jpg)";
				albumT.style.textAlign = "left";
				albumT.style.paddingLeft = "10px";
				bandN.style.textAlign = "left";
				bandN.style.paddingLeft = "10px";
			} else if (vibeSelect.value === "car") {
				divImg.style.backgroundImage = "url(images/car.jpg)";
				albumT.style.textAlign = "right";
				albumT.style.paddingLeft = "10px";
				bandN.style.textAlign = "right";
				bandN.style.paddingLeft = "10px";
			} else if (vibeSelect.value === "light") {
				divImg.style.backgroundImage = "url(images/light.jpg)";
				albumT.style.textAlign = "right";
				albumT.style.paddingLeft = "10px";
				bandN.style.textAlign = "right";
				bandN.style.paddingLeft = "10px";
			}

			gl.style.visibility = "visible";

			libP.innerHTML = `When the subject is <b>${uNameValue}</b>, the same adjectives are always hauled out and used over again, not because of any lack of thought or imagination on anyone's part, but because there are so many ways to tell the truth. <b>${aValue1}</b>, <b>${aValue2}</b>, and <b>${aValue3}</b> are only a few of the words that have become cliches since <b>${uNameValue}'s</b> rise to prominence. But how these words really apply to them only becomes clear when you stop to consider that they are never used in comparing <b>${uNameValue}</b> to another musician. And perhaps that is the key to the importance of <b>${uNameValue}</b>. They are in competition with no-one but themselves.\nThey play the tenor <b>${nValue1}</b>, and as you listen to this record, your ear will immediately tell you that they have played differently in the past, and their career tells you that they will play differently in the future. On <b>${aNameValue}</b>, <b>${uNameValue}'s</b> <b>${nValue1}</b> flows <b>${vValue1}</b> like <b>${nValue2}</b>, with backing from their quartet. `;
		}
	});
})();

//vValue1 = verb
//nValue1 = noun1
//nValue2 = noun2
//aValue1 = adjective
//aValue2 = adjective 2
//aValue3 = adjective 3
//uNameValue
//amNameValueu
