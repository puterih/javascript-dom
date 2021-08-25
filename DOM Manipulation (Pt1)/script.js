// element.innerHTML untuk mengubah isi dari sebuah teks yang sudah diseleksi
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Puteri husnul</em>';
// --
// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world!';
// ---

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';
// ---

// atribut contoh: id, class, href
// ---
// const judul = document.getElementsByTagName('h1')[0];
// const a = document.querySelector('section#a a');
// ----
// judul.setAttribute('name', 'putri');
// setAttribute: menambah atribut bisa ketik di console juga
// ---

const p2 = document.querySelector('.p2');

// menggunakan setAttribute, p2 akan diganti menjadi label
// agar menjadi "p2 label", gunakan element dibawah
// element.classList.add() untuk menambah class baru
// element.classList.remove() untuk menghilangkan class
// element.classList.toggle() jika ada tidak ada class tertentu, maka akan menambahkan. jika ada maka akan menghilangkan.
// element.classList.item() untuk mengetahui class tertentu yg ada di dlm sebuah element. misal sebuah element memiliki 3 class, dan kita bisa cek class ke 2 itu apa
// element.classList.contains() mengecek apakah punya class tertentu 
// element.classList.replace() untuk mengganti class yg ada dgn class yg baru
// ----
// ketik di web console
// p2.classList.add('label'); -> undefined
// p2.classList.remove('label'); -> undefined
// p2.classList.toggle('label'); -> true, jika 2x -> false [seperti lampu mati hidup jika di ulang]
// --
// element.classList.('dua');
// element.classList.('tiga');
// element.classList.('empat');
// p2.classList.item(2); -> tiga, karna dihitung dr 0
// p2.classList.contians('dua'); -> true, karna contains itu sebuah pertanyaan.
// jika diketik p2.classList.contains('lima'); ->false, krna tidak punya.
// --
// p2.classList.replace('tiga', 'tengah'); ->undefined, artinya atribut tiga diganti dengan nama "tengah".


 // day-7 (DOM Manipulation Pt.1 is end)
