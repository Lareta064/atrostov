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
	window.addEventListener('resize', ()=>{
		if(window.innerWidth >1199){
			menuButton.classList.remove('active');
			mobileMenu.classList.remove('active');
			bodyEl.classList.remove('lock');
			if(hasDropItems.length>0){
				hasDropItems.forEach((item)=>{
					item.classList.remove('active');
					item.querySelector('.header-sub-menu').classList.remove('active');
				});
			}
		}
	});
	const header = document.querySelector(".header"); // 
     let lastScrollTop = 0; 

	window.addEventListener("scroll", () => {
		const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

		// Если пользователь прокручивает вверх
		if (currentScrollTop < lastScrollTop) {
			header.classList.add("fix-header");
		} else {
			header.classList.remove("fix-header"); 
		}

		// Обновляем предыдущую позицию скролла
		lastScrollTop = currentScrollTop;
		
	});
	document.addEventListener('click', function(event) {
		if (window.innerWidth >= 1200) return; // Проверяем, что экран мобильный
	
		if (!mobileMenu.classList.contains('active')) return; // Если меню не открыто, ничего не делаем
	
		const isInsideHasDrop = event.target.closest('.has-drop'); // Проверяем, был ли клик внутри .has-drop
		const isInsideMenu = event.target.closest('#mobile-menu'); // Проверяем, был ли клик внутри меню
		const isMenuButton = event.target.closest('.menu-button'); // Проверяем, был ли клик по кнопке-бургеру
		const isLink = event.target.closest('a[href^="#"]'); // Проверяем, является ли кликнутый элемент ссылкой-якорем
		const isButton = event.target.closest('button'); // Проверяем, является ли элемент кнопкой
	
		if (!isInsideHasDrop && !isMenuButton && (isLink || isButton || !isInsideMenu)) {
			// Закрываем мобильное меню
			menuButton.classList.remove('active');
			mobileMenu.classList.remove('active');
			bodyEl.classList.remove('lock');
	
			// Закрываем все .has-drop.active
			const activeDrop = mobileMenu.querySelector('.has-drop.active');
			if (activeDrop) {
				activeDrop.classList.remove('active');
				const subMenu = activeDrop.querySelector('.header-sub-menu');
				if (subMenu) {
					subMenu.classList.remove('active');
				}
			}
		}
	});
   /*review slider */
   $('.review-slider').slick({
	
		infinite: true,
		speed: 2000,
		draggable: true,
		swipe: true,
		autoplay: true,
		slidesToShow: 3,
		pauseOnHover: false,
		centerMode: true,
		variableWidth: true,
		centerPadding: '160px',
		slidesToScroll: 1,
		arrows: true,
		prevArrow:$('.review-pagination .btn-prev'),
		nextArrow:$('.review-pagination .btn-next'),
		autoplay: true,
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
	    speed: 2000,
		draggable: true,
		swipe: true,
		autoplay: true,
		infinite: true,
		
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

	/*team-slider*/
	$('.team-slider').slick({
	    speed: 2000,
		draggable: true,
		swipe: true,
		autoplay: true,
		infinite: true,
		
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
		slidesToShow: '4.5',
		centerMode: true,
		centerPadding: '300px',
		slidesToScroll: 1,
		arrows: true,
		prevArrow:$('.docs-pagination .btn-prev'),
		nextArrow:$('.docs-pagination .btn-next'),
		
		responsive: [
			{
				breakpoint: 1999,
				settings: {
					slidesToShow:'3.5',
					centerMode: true,
		           centerPadding: '190px',
				},
			},
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
		speed: 2000,
		draggable: true,
		swipe: true,
		autoplay: true,
		infinite: true,
		
		slidesToShow: '4',
		centerMode: true,
		// variableWidth: true,
		centerPadding: '160px',
		slidesToScroll: 1,
		arrows: true,
		prevArrow:$('.about-media .btn-prev'),
		nextArrow:$('.about-media .btn-next'),
	
		
		responsive: [
			{
				breakpoint: 1999,
				settings: {
					slidesToShow: '3',
					centerMode: true,
					variableWidth: false,
					centerPadding: '160px',
				},
			},
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
					prevArrow: $('.gallery-grid-nav .btn-prev'),
					nextArrow: $('.gallery-grid-nav .btn-next'),
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
	// Fancybox
	Fancybox.bind("[data-fancybox]", {
        
		Thumbs: false,
	});
});
