document.addEventListener("DOMContentLoaded", function (){
	const bodyEl = document.body;
	const menuButton = document.querySelector('.menu-button');
	const mobileMenu = document.querySelector('#mobile-menu');
	menuButton.addEventListener('click', ()=> {
		if( menuButton.classList.contains('active')){
			menuButton.classList.remove('active');
			mobileMenu.classList.remove('active');
		}else{
			menuButton.classList.add('active');
			mobileMenu.classList.add('active');
		}
	});

});
