// Manipulation Node (memungkinkan untuk bisa menambah node baru, misal elemen baru pada dom/ menghapus elemen yang ada pada dom, dan mengganti sebuah elemen menggunakan elemen yang baru)

// (createElement) buat elemen baru di dalam document
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
// append(menambahkan)
// anggap pBaru sebagai persediaan vas bunga & teksPBaru adalah bunga
// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('ItemBaru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);
// arti: simpan sebelum elemen apa di dlm ul



// cara menghapus/ remove child
const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);




const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');


const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');
h2Baru.appendChild(teksH2Baru);


// replace(mengganti)
sectionB.replaceChild(h2Baru, p4);
// (h2Baru)node baru akan mengreplace (p4)node lama


pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';

