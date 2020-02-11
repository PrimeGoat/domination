// Change URL for an <img>'s src
function setImgUrl(id, url) {
	const image = document.getElementById(id);
	image.src = url;
}

setImgUrl("image-1", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f31b44f-24d7-4b80-b74e-a97998190b2d/dcfwe3n-42207ddf-5f1f-4d77-aebf-226c16afdba0.jpg/v1/fill/w_1024,h_1536,q_75,strp/scorpion_fatality_on_sub_zero__finish_him___by_joelxero_dcfwe3n-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRmMzFiNDRmLTI0ZDctNGI4MC1iNzRlLWE5Nzk5ODE5MGIyZFwvZGNmd2Uzbi00MjIwN2RkZi01ZjFmLTRkNzctYWViZi0yMjZjMTZhZmRiYTAuanBnIiwiaGVpZ2h0IjoiPD0xNTM2Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNGYzMWI0NGYtMjRkNy00YjgwLWI3NGUtYTk3OTk4MTkwYjJkXC9qb2VseGVyby00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.Y2-CjNdkR4YLAor6nHiG-zINKyzl-60vBQHaPRmKVY0");
setImgUrl("image-2", "http://www.imfdb.org/images/0/00/Red_Scorpion_FAL_2.jpg");
setImgUrl("image-3", "https://vignette.wikia.nocookie.net/doom/images/4/48/Gibs_anim.gif/revision/latest?cb=20190115150002")

// Sets the first child of the "arguments" id to have a text decoration of strikethrough
function lineThru() {
	document.getElementById("arguments").firstElementChild.style.textDecoration = "line-through";
}

lineThru();

// Removes last child of arguments list
function removeNode() {
	document.getElementById("arguments").removeChild(document.getElementById("arguments").lastElementChild);
}

removeNode();
removeNode();

// Adds to the arguments list
function addToArgList(element) {
	let li = document.createElement('li');
	li.appendChild(element);
	document.getElementById("arguments").appendChild(li);
}

const newImg = document.createElement('img');
newImg.src = "https://s1.thcdn.com/productimg/1600/1600/12219226-1004711652698386.jpg";
addToArgList(newImg);

// Makes an image's height be 30 pixels
function img30px(image) {
	image.style.height = "30px";
}

img30px(newImg);
img30px(document.getElementById("image-1"));

// Makes an element invisible
function makeInvisible(element) {
	element.className = "invisible";
}

makeInvisible(document.getElementById("image-1"));

// Changes font size for an ID
function changeFontSize(size, id) {
	document.getElementById(id).style.fontSize = size;
}

changeFontSize("45px", "thing-2");

// Creates a list element with specified text
function makeLi(text) {
	const li = document.createElement('li');
	li.innerText = text;

	return li;
}

const myLi = makeLi("TESTING DAMMIT!!");
addToArgList(myLi);

// Header adder
function headerAdder(size, text) {
	const header = document.createElement('h' + size);
	header.innerText = text;

	return header;
}

addToArgList(headerAdder(2, "w00t!"));