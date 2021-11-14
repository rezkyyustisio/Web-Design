var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/picture-2.jpg'){
		myImage.setAttribute('src', 'images/picture-1.jpg');
	} else {
		myImage.setAttribute('src', 'images/picture-2.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Selamat datang, ' + myName;
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Selamat datang, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}