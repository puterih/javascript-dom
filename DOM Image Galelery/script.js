const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

// var y = 2;
// thumbs.forEach(function(thumb) {
// 	//  forEach: perulangan terhadap array	
// 	y++;
// 	thumb.classList.add(y * 3);

// });

container.addEventListener('click', function(e) {

	// cek apakah yang di-klik adalah thumb
	if ( e.target.className == 'thumb' ) {
		jumbo.src = e.target.src;
		jumbo.classList.add('fade');
		setTimeout(function() {
			jumbo.classList.remove('fade')
		}, 500);

		e.target.classList.add('active');
	}

});

	
// BELUM SELESAI

