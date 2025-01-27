document.addEventListener("DOMContentLoaded", function (){
	const bodyEl = document.body;
	/*open mobile menu */
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

	/*open drop menu */
	const hasDropItems = mobileMenu.querySelectorAll('.has-drop');
	if(hasDropItems.length>0){
		hasDropItems.forEach((item)=>{
			item.addEventListener('click', ()=>{
				if(item.classList.contains('active')){
					item.classList.remove('active');
					item.querySelector('.header-sub-menu').classList.remove('active');
				}else{
					item.classList.add('active');
					item.querySelector('.header-sub-menu').classList.add('active');
				}
			});
		});
	}

});
