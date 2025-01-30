document.addEventListener("DOMContentLoaded", function (){
	const bodyEl = document.body;
	/*open mobile menu */
	const menuButton = document.querySelector('.menu-button');
	const mobileMenu = document.querySelector('#mobile-menu');
	
	menuButton.addEventListener('click', ()=> {
		const hasDropActiveItem = mobileMenu.querySelector('.has-drop.active');
		if( menuButton.classList.contains('active')){
			menuButton.classList.remove('active');
			mobileMenu.classList.remove('active');
			bodyEl.classList.remove('lock');
			if(hasDropActiveItem){
				if(hasDropActiveItem.querySelector('active')){
					hasDropActiveItem.querySelector('active').classList.remove('active');
				}
				
				hasDropActiveItem.classList.remove('active');
			}
		}else{
			menuButton.classList.add('active');
			mobileMenu.classList.add('active');
			bodyEl.classList.add('lock');
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
					bodyEl.classList.remove('lock');
				}else{
					item.classList.add('active');
					item.querySelector('.header-sub-menu').classList.add('active');
					bodyEl.classList.add('lock');
				}
			});
		});
	}
   /*review slider */
   $('.review-slider').slick({
	
	
	infinite: true,
	speed: 800,
	slidesToShow: 3,
	centerMode: true,
	variableWidth: true,
	centerPadding: '160px',
	slidesToScroll: 1,
	arrows: true,
	prevArrow:$('.review-pagination .btn-prev'),
	nextArrow:$('.review-pagination .btn-next'),

	
	responsive: [

		{
			breakpoint: 1023,
			settings: {
				slidesToShow: 4,
				centerMode: true,
				// variableWidth: true,
				// centerPadding: '160px',
			},
		},
		  {
			
			breakpoint: 424,
			settings: {
				slidesToShow: 1,
				centerMode: false,
				variableWidth: false,
			}
		}
	]
});
});
