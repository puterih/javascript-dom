// DOM Selection
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()

// document.querySelector() - element
// atau disebut menanyakan selector css
// ---
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';


// // document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for( let i = 0; i < p.length; i++ ) {
// 	p[i].style.backgroundColor = 'lightblue';
// }
// ---


// Day-5
// node root
const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';