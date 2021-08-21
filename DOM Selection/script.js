// DOM Selection
// document.getElementById() -> mengembalikan elemen 1
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Puteri Husnul';

// document.getElementsByTagName() -> mengembalikan elemen HTMLCollection
// cara melakukan pengulangan terhadap semua elemen yg sudah kita pilih dgn menggunakan getElementsByTagName()
const p = document.getElementsByTagName('p');
p[2].style.backgroundColor = 'lightblue';

for( i = 0; i < p.length; i++ ) {
	p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';


// Day-3