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
					slidesToShow: 1,
					centerMode: true,
					variableWidth: false,
					centerPadding: '160px',
				},
			},
			  {
				
				breakpoint: 743,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					variableWidth: false,
					
				}
			}
		]
	});
	/**** */
	$('.branches-slider').slick({
	
		infinite: true,
		speed: 800,
		slidesToShow: 3,
		centerMode: true,
		// variableWidth: true,
		centerPadding: '160px',
		slidesToScroll: 1,
		arrows: true,
		prevArrow:$('.branches-pagination .btn-prev'),
		nextArrow:$('.branches-pagination .btn-next'),
	
		
		responsive: [
			{
				breakpoint: 1799,
				settings: {
					slidesToShow: 2,
					centerMode: true,
					variableWidth: false,
					centerPadding: '160px',
				},
			},
	
			{
				breakpoint: 1279,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					variableWidth: false,
					centerPadding: '260px',
				},
			},
			  {
				
				breakpoint: 743,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					variableWidth: false,
					
				}
			}
		]
	});

	/* .how-work-slider */
	$('.how-work-slider').slick({
	
		infinite: true,
		speed: 800,
		slidesToShow: 4,
		
		slidesToScroll: 1,
		arrows: true,
		prevArrow:$('.how-work-nav .btn-prev'),
		nextArrow:$('.how-work-nav .btn-next'),
	
		
		responsive: [
			{
				breakpoint: 1999,
				settings: {
					slidesToShow: 3,
					
				},
			},
			
			{
				breakpoint: 1249,
				settings: {
					slidesToShow: '2.5',
					centerMode: true,
					variableWidth: false,
					centerPadding: '160px',
				},
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					variableWidth: false,
					centerPadding: '160px',
				},
			},
			  {
				
				breakpoint: 743,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					variableWidth: false,
					
				}
			}
		]
	});
	/*team-slider*/
	$('.team-slider').slick({
	
		infinite: true,
		speed: 800,
		slidesToShow: '3',
		
		slidesToScroll: 1,
		arrows: true,
		prevArrow:$('.team-pagination .btn-prev'),
		nextArrow:$('.team-pagination .btn-next'),
		
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 2,
					
				},
			},
			
			{
				breakpoint: 1270,
				settings: {
					slidesToShow:' 1.8',
					
				},
			},{
				breakpoint: 1023,
				settings: {
					slidesToShow:' 1',
					centerMode: true,
					
					centerPadding: '190px',
				},
			},
			  {
				
				breakpoint: 743,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '10px',
					
				}
			}
		]
	});
	
	
});
