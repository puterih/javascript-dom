const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('ItemBaru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);


const link = document.getElementsByTagName('a');

sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.getElementById('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor ='lightgreen';
liBaru.style.backgroundColor ='lightgreen';
h2Baru.style.backgroundColor ='lightgreen';               
