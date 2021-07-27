// DOM Selection
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()

// document.querySelector() -> sama seperti getElemenById yaitu menghasilkan elemen
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// // nth-child selalu dihitung dari 1
// li2.style.backgroundColor = 'orange';

// // kita ingin memanggil semua tag p
// // const p = document.querySelector('p');
// // // dgn menggunakan querySelector akan mengembalikan 1 elemen(yg pertamakali ditemukan saja)
// // p.innerHTML = 'Ini diubah melalui javascript';


// // document.qyuerySelectorAll() -> jika ingin menghasilkan Nodelist untuk memilih semua elemen yg ada di halaman
// const p = document.querySelectorAll('p');
// // harus dikasih index untuk memilih yg akan diwarnai cnth: p[2] dan selalu dihitung dr 0
// p[2].style.backgroundColor = 'lightblue';

// jika ingin semua diwarnai maka gunakan looping:
// const p = document.querySelectorAll('p');
// for( let i = 0; i < p.length; i++ ) {
// 	p[i].style.backgroundColor = 'lightblue';
// }

// pilih yang mana
// - getElementById()
// - getElementsByTagName()
// - getElementsByClassName()
// - querySelector()
// -querySelectorAll()
// dari antara kelima tersebut, tergantung dari kebutuhan
// jika di html ingin mentargetkan punya tag id maka pakai getElemenById()
// jika punya tag class maka pakai getElemenByClassName()
// jika diharuskan untuk tidak mengubah struktur html (cnth: menambah id & class) maka gunakan querySelector() dan querySelectorAll()

// - getElementById()
// - getElementsByTagName()
// method kedua ini adalah method yg paling cepat dibanding yg lain





// target ke paragraf 4
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'orange';





