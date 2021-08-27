const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function() {
	// document.body.style.backgroundColor = 'lightblue';
	// document.body.setAttribute('class', 'biru-muda');
	document.body.classList.toggle('biru-muda');
} 


const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
	document.body.style.backgroundColor = rgb('100,100,100');

	// BELOM SELESAI... BANYAK TUGAS SEKOLAH :(
// Lanjut besokk
// Sinyal lag, jd tdk bisa lanjut liat di yt lptp :(

