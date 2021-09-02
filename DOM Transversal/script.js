// Event Handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');


// close.addEventListener('click', function() {
// 	card.style.display = 'none';
// });
// ----

// DOM Transversal
const close = document.querySelectorAll('.close');

// for( let i = 0; i < close.length; i++ ) {
// 	close[i].addEventListener('click', function(e) {
// 		// close[i].parentElement.style.display = 'none';
// 		e.target.parentElement.style.display = 'none';
// 	});
// }
// -- cara lain dibawah ini

close.forEach(function(el) {
	el.addEventListener('click', function(e) {
		e.target.parentElement.style.display = 'none';
		e.preventDefault();
		e.stopPropagation();
// preventDefault yaitu cegah aksi default
	});
});

const cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
	card.addEventListener('click', function(e) {
		alert('ok');
	});
});

// const nama = document.querySelector('.nama');
// // bisa cek console
// console.log(nama.parentNode);
// console.log(nama.parentElement);
// console.log(nama.nextSibling);
// console.log(nama.nextElementSibling);
// console.log(nama.previousSibling);
// console.log(nama.previousElementSibling);

// lanjut nanti Event BUbbling