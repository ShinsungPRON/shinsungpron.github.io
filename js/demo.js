/* =================================
===  EXPAND COLLAPSE            ====
=================================== */

const home = document.querySelector('#home-page');
const image = document.querySelector('#about-page');


$(document).ready(function(){
	$('#toggle-switcher').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('#switch-style').animate({'left':'-220px'});
		}else{
			$(this).addClass('open');
			$('#switch-style').animate({'left':'0'});
		}
	});
});

$(document).ready(function(){
	$('#go-home').click(function(){
		window.location.href = '/';
		home.scrollIntoView({behavior: 'smooth'});
	});
});

$(document).ready(function(){
	$('#go-image').click(function(){
		image.scrollIntoView({behavior: 'smooth'});
	});
});

$(document).ready(function(){
	$('#go-history').click(function(){
		window.location.href = '/history';
	});
});