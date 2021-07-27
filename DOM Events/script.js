// events(kejadian) & Event(genap/meskipun) 
// Event pada Js merepresentasikan sebuah kejadian yang yerjadi di dalam DOM
// kejadian tersebut bisa dilakukan oleh user, *ketika meng klik mouse event, menekan tombol pd keyboard event, dll.
// atau event dilakukan secara otomatis oleh API, misal menjalankan animasi dengan css, ketika animasi selesai dijalankan kita bisa menangkap events(kejadian)


// const p3 = document.querySelector('.p3');

// function ubahWarnaP2() {
// 	p2.style.backgroundColor = 'lightblue';
// }
// function ubahWarnaP3() {
// 	p3.style.backgroundColor = 'lightblue';
// }


// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;


// // ambil parent
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
// 	const ul = document.querySelector('section#b ul');
// 	const liBaru = document.createElement('li');
// 	const tekasLiBaru = document.createTextNode('item baru');
// 	liBaru.appendChild(tekasLiBaru);
// 	ul.appendChild(liBaru);
// });



const p3 = document.querySelector('.p3');
// menggunakan event handler
// p3.onclick = function() {
// 	p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function() {
// 	p3.style.color = 'red';
// }

// menggunakan event Listener
p3.addEventListener('mouseenter', function() {
	p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('mouseleave', function() {
	p3.style.backgroundColor = 'lightgreen';
});


























