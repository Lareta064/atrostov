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
	/*branches-slider*/
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
				breakpoint: 1919,
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
	/*.docs-slider*/
	$('.docs-slider').slick({

		infinite: true,
		speed: 800,
		slidesToShow: '3',
		centerMode: true,
		centerPadding: '300px',
		slidesToScroll: 1,
		arrows: true,
		prevArrow:$('.docs-pagination .btn-prev'),
		nextArrow:$('.docs-pagination .btn-next'),
		
		responsive: [
			{
				breakpoint: 1799,
				settings: {
					slidesToShow:'3',
					centerMode: true,
		           centerPadding: '190px',
				},
			},
			{
				breakpoint: 1450,
				settings: {
					slidesToShow:' 3',
					centerMode: false,
					centerPadding: 0,
		         
				},
			},
			{
				breakpoint: 1270,
				settings: {
					slidesToShow:' 2',
					centerMode: true,
					centerPadding: '100px',
					
				},
			},{
				breakpoint: 1023,
				settings: {
					slidesToShow:' 1',
					centerMode: true,
					centerPadding: '220px',
				},
			},
				{
				
				breakpoint: 743,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '40px',
				
				}
			}
		]
	});
	/*.about-media-slider*/
	$('.about-media-slider').slick({
		
		infinite: true,
		speed: 800,
		slidesToShow: 3,
		centerMode: true,
		// variableWidth: true,
		centerPadding: '160px',
		slidesToScroll: 1,
		arrows: true,
		prevArrow:$('.about-media .btn-prev'),
		nextArrow:$('.about-media .btn-next'),
	
		
		responsive: [
			{
				breakpoint: 1799,
				settings: {
					slidesToShow: '2.5',
					centerMode: true,
					variableWidth: false,
					centerPadding: '160px',
				},
			},
	
			{
				breakpoint: 1279,
				settings: {
					slidesToShow: '1.5',
					centerMode: true,
					variableWidth: false,
					centerPadding: '260px',
				},
			},{
				breakpoint: 1024,
				settings: {
					slidesToShow: '1.5',
					centerMode: true,
					variableWidth: false,
					centerPadding: '180px',
				},
			},
			  {
				
				breakpoint: 799,
				settings: {
					slidesToShow: '1.5',
					centerMode: false,
					variableWidth: false,
					centerPadding: '140px',
					
				}
			},
			{
			  
			  breakpoint: 743,
			  settings: {
				  slidesToShow: 1,
				  centerMode: false,
				  variableWidth: false,
				  centerPadding: '40px',
				  
			  }
		  }
		]
		
	});
	/*brands-slider*/
	$('.brands-slider').slick({
	
		infinite: true,
		speed: 5000, // Чем больше, тем медленнее движение
		slidesToShow: 7,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 0, // Бесшовный эффект
		cssEase: 'linear', // Линейное движение
		pauseOnHover: false, // Не останавливать при наведении
		pauseOnFocus: false,
		variableWidth: true,
	});
	function updateSlidesToShow() {
		let slider = $('.brands-slider');
		let sliderWidth = slider.width(); // Получаем ширину слайдера
		let slideWidth = slider.find('.slick-slide').outerWidth(true); // Получаем ширину одного слайда
		let slidesToShow = Math.floor(sliderWidth / slideWidth); // Рассчитываем количество
	
		slider.slick('slickSetOption', 'slidesToShow', slidesToShow > 0 ? slidesToShow : 1, true);
	}
	
	$(window).on('load resize', function() {
		updateSlidesToShow();
	});

	/****************** */
	function initSliders() {
		let windowWidth = $(window).width();
	
		if (windowWidth >= 1024) {
			// Если ширина экрана больше или равна 1024, включаем `.gallery-slider-grid`, а `.gallery-slider` отключаем
			if (!$('.gallery-slider-grid').hasClass('slick-initialized')) {
				$('.gallery-slider-grid').slick({
					slidesToShow: 1,
					speed: 800,
					arrows: true,
					prevArrow: $('.gallery-nav .btn-prev'),
					nextArrow: $('.gallery-nav .btn-next'),
				});
			}
			if ($('.gallery-slider').hasClass('slick-initialized')) {
				$('.gallery-slider').slick('unslick');
			}
		} else {
			// Если ширина экрана меньше 1024, включаем `.gallery-slider`, а `.gallery-slider-grid` отключаем
			if (!$('.gallery-slider').hasClass('slick-initialized')) {
				$('.gallery-slider').slick({
					centerMode: true,
					centerPadding: '160px',
					slidesToShow: 1,
					speed: 1000,
					arrows: true,
					variableWidth: true,
					prevArrow: $('.gallery-nav .btn-prev'),
					nextArrow: $('.gallery-nav .btn-next'),
				});
			}
			if ($('.gallery-slider-grid').hasClass('slick-initialized')) {
				$('.gallery-slider-grid').slick('unslick');
			}
		}
	}
	
	// Вызываем при загрузке страницы
	$(document).ready(initSliders);
	
	// Вызываем при изменении размера экрана с debounce (чтобы не вызывалось слишком часто)
	$(window).on('resize', function () {
		clearTimeout(window.slickResizeTimer);
		window.slickResizeTimer = setTimeout(initSliders, 200);
	});
	
});
