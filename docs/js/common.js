var speed = 400;

$(document).ready(function(){
  var imgCount = $('.img').length
  $("#slider").on("change", function() {
    for (var i = 1; i <= imgCount; i++) {
      speed = 201 - this.value;
      $('#range').text(`1000px / ${speed/10}s`)
      speed = speed * (i / 1.25)
      $('#img-' + i).css({
        'animation-duration': speed + 's',
        'animation-name': 'float'
      });
    }
  });


//-планый переход по ссылкам
$('.lPage').on('click', function(e) { 
	var linkLocation = $(this).attr('href');
		$("body").addClass('fadeOutBody');        
	setTimeout(function() {	
		window.location = linkLocation;	 
	}, 400);  
});   

//- показать/скрыть языки
$(".btn-lang-js").on('click', function(e){
	e.preventDefault();
	if($('.header-lang-panel').hasClass('is-active')) {
		$('.header-lang-panel').removeClass('is-active');
	}
	else {
		$('.header-lang-panel').addClass('is-active');
	}
});   

//открыть меню
$('.btn-nav-js').on('click', function(e) {     
 $('.menu__container').fadeIn();  
 $('.menu__container').addClass('menuActive');    
 $('body').addClass('navFix'); 
 $('html').addClass('htmlFix'); 
});
//закрыть меню
$('.closeMenu, .menu-hide').on('click', function(e) {           
 $('.menu__container').removeClass('menuActive');   
 $('.menu__container').fadeOut(); 
 $('body').removeClass('navFix'); 
 $('html').removeClass('htmlFix');  
});


//- INDEX-JS

var lastWheelHome = new Date();
	//Смена слайдов скроллом мыши на главной
	$('#wrapper-home').on('mousewheel', function(event) {
		if (event.deltaY > 0) {
		 var wWidth2 = $(window).outerWidth();     
		 if (wWidth2 >= 1024) {
		  return false;                 
		 }  
		}
		else {
		 var wWidth2 = $(window).outerWidth();     
		 if (wWidth2 >= 1024) {
				if(new Date - lastWheelHome < 1000) return
	  		lastWheelHome = new Date()
					//переход на следующую страницу   
					var linkLocation = $('.wrapper').attr('data-nextPage');            
					$("body").addClass('fadeOutBody');            
					setTimeout(function() { 
						window.location = linkLocation;   
					}, 400);   				            
					
			}  
		}

	});


	



try {

let initialPoint;
let finalPoint;
let wrapHome = document.getElementById('wrapper-home');

wrapHome.addEventListener('touchstart', function(event) {

initialPoint=event.changedTouches[0];
}, false);
wrapHome.addEventListener('touchend', function(event) {

finalPoint=event.changedTouches[0];
let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
if (xAbs > 20 || yAbs > 20) {
	if (xAbs > yAbs) {
		if (finalPoint.pageX < initialPoint.pageX){
			/*СВАЙП ВЛЕВО*/

		var w = $(window).outerWidth();                                                           
		if (w <= 1023) {
			//переход на следующую страницу   
			var linkLocation = $('.wrapper').attr('data-nextPage');            
			$("body").addClass('fadeOutBody');            
			setTimeout(function() {	
				window.location = linkLocation;	 
			}, 400);  
		} 				

			// console.log('СВАЙП ВЛЕВО');
		}
			else {
				console.log('СВАЙП ВПРАВО');
			/*СВАЙП ВПРАВО*/
		}
	}
	else {
		if (finalPoint.pageY < initialPoint.pageY) {

		var w = $(window).outerWidth();                                                           
		if ( (w >= 1024) ) {
		/*СВАЙП ВВЕРХ*/

			//переход на следующую страницу   
			var linkLocation = $('.wrapper').attr('data-nextPage');            
			$("body").addClass('fadeOutBody');            
			setTimeout(function() {	
				window.location = linkLocation;	 
			}, 400);  

		} 	
		}
		else{
			// console.log('СВАЙП ВНИЗ');
		/*СВАЙП ВНИЗ*/
		}
	}
}
}, false);

} catch (e) {}
//- INDEX-JS END

//- partnership-JS

//отменяем общий скролл страницы на тач устройствах при скролле на вертикальной области скролла
$('body').on('mouseenter', '.scrollContent', function(e) {
	$('#scrollSwipe').addClass('noSwipe');
});

//убираем курсор мыши
$('body').on('mouseleave ', '.scrollContent', function(e) {
	$('#scrollSwipe').removeClass('noSwipe');
});

function pageReload(className, linkPage) {
	if(
		(className !== 'jspDrag') &&
		(className !== 'jspContainer') &&
		(className !== 'partnership-box') &&
		(className !== 'jspVerticalBar') &&
		(className !== 'jspHorizontalBar') &&
		(className !== 'jspTrack') &&
		(className !== 'effectText') &&
		(className !== 'title effectTitle') &&
		(className !== 'effectTitle') &&
		(className !== 'jspPane') &&
		(className !== 'jspDisabled') &&
		(className !== 'jspArrowRight') &&
		(className !== 'jspArrow jspArrowUp') &&
		(className !== 'jspArrow jspArrowUp jspDisabled') &&
		(className !== 'jspArrowUp') &&
		(className !== 'jspArrowDown') &&
		(className !== 'jspDrag jspHover') &&
		(className !== 'jspArrow jspArrowDown jspDisabled') &&
		(className !== 'jspArrow jspArrowDown') &&
		(className !== 'jspArrow')		
	) {     
			$("body").addClass('fadeOutBody');            
			setTimeout(function() {	
			window.location = linkPage;	 
			}, 400);
	}
}

$('#wrapper-partnership').on('mousewheel', function(event) {

 if (event.deltaY > 0) { 
 	var wWidth2 = $(window).outerWidth();     
 	if (wWidth2 >= 1024) {  
				if(new Date - lastWheelHome < 1000) return
	  		lastWheelHome = new Date() 		
		 			var linkLocation = $('.wrapper').attr('data-prevPage');  
		 			pageReload(event.target.className, linkLocation);
 	}  
	}
	else {
 	var wWidth2 = $(window).outerWidth();     
 	if (wWidth2 >= 1024) {  
				if(new Date - lastWheelHome < 1000) return
	  		lastWheelHome = new Date() 		 	    
		 			var linkLocation = $('.wrapper').attr('data-nextPage');  
		 			pageReload(event.target.className, linkLocation);
 	}       
	}

	
});

/*TOUCH*/
try {



let initialPoint;
let finalPoint;

let wrapPartnership = document.getElementById('wrapper-partnership');

wrapPartnership.addEventListener('touchstart', function(event) {

initialPoint=event.changedTouches[0];
}, false);
wrapPartnership.addEventListener('touchend', function(event) {

finalPoint=event.changedTouches[0];
let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
if (xAbs > 20 || yAbs > 20) {
	if (xAbs > yAbs) {
		if (finalPoint.pageX < initialPoint.pageX){
			/*СВАЙП ВЛЕВО*/
			// console.log('СВАЙП ВЛЕВО');
		var w = $(window).outerWidth();                                                           
		if (w <= 1023) {
			//переход на следующую страницу   
			var linkLocation = $('.wrapper').attr('data-nextPage');            
			$("body").addClass('fadeOutBody');            
			setTimeout(function() {	
				window.location = linkLocation;	 
			}, 400);
		} 			


		}
			else {
			/*СВАЙП ВПРАВО*/
			// console.log('СВАЙП ВПРАВО');
			var w = $(window).outerWidth();                                                           
			if (w <= 1023) {
				//переход на предыдущую страницу   
				var linkLocation = $('.wrapper').attr('data-prevPage');            
				$("body").addClass('fadeOutBody');            
				setTimeout(function() {	
					window.location = linkLocation;	 
				}, 400);
			} 			

		}
	}
	else {
		if (finalPoint.pageY < initialPoint.pageY) {
			/*СВАЙП ВВЕРХ*/
			var w = $(window).outerWidth();                                                           
			if ( (w >= 1024) ) {

				var linkLocation = $('.wrapper').attr('data-nextPage');  
				pageReload(initialPoint.target.className, linkLocation);

			} 

		}
		else{
			// console.log('СВАЙП ВНИЗ');
			var w = $(window).outerWidth();                                                           
			if ( (w >= 1024) ) {
				var linkLocation = $('.wrapper').attr('data-prevPage');
				pageReload(initialPoint.target.className, linkLocation);
			}			
		/*СВАЙП ВНИЗ*/
		}
	}
}
}, false);


} catch (e) {}

//- показать полное описание
$('.seeMoreJs').on('click', function(e) {
	e.preventDefault();
	$(this).closest('.box-action').addClass('is-hidden');
 $('.partnership-box').addClass('is-active');
 $('.partnership-box').find('p').slideDown();

 $('body, html').addClass('is-scroll');
});
//- показать полное описание
$('.btnMoreJs').on('click', function(e) {
	e.preventDefault();
	$(this).closest('.box-action').addClass('is-hidden');
	var parentBox = $(this).closest('.history-box');
 var partnershipBox = $(parentBox).find('.partnership-box');
 $(partnershipBox).addClass('is-active');
 $(partnershipBox).find('p').slideDown();

 $('body, html').addClass('is-scroll');
});

//- partnership-JS END


//- photo-video-JS

//Смена слайдов скроллом мыши
$('#wrapper-media').on('mousewheel', function(event) {
	if (event.deltaY > 0) {
		var wWidth2 = $(window).outerWidth();     
		if (wWidth2 >= 1024) {
				if(new Date - lastWheelHome < 1000) return
	  		lastWheelHome = new Date() 					
					//переход на предыдущую страницу   
					var linkLocation = $('.wrapper').attr('data-prevPage');            
					$("body").addClass('fadeOutBody');            
					setTimeout(function() {	
					window.location = linkLocation;	 
					}, 400);                
		}  
	}
	else {
		var wWidth2 = $(window).outerWidth();     
		if (wWidth2 >= 1024) {
				if(new Date - lastWheelHome < 1000) return
	  		lastWheelHome = new Date() 		
					//переход на следующую страницу   
					var linkLocation = $('.wrapper').attr('data-nextPage');            
					$("body").addClass('fadeOutBody');            
					setTimeout(function() {	
					window.location = linkLocation;	 
					}, 400); 

		}  

	}

});    

function pageReloadMedia(className, linkPage) {
	if(
		(className !== 'slide-title') &&
		(className !== 'slide-img') &&
		(className !== 'slide-link') &&
		(className !== 'slide-box effect-1 slide-type-image') &&
		(className !== 'slide-box effect-1 slide-type-video')
	) {     
			$("body").addClass('fadeOutBody');            
			setTimeout(function() {	
			window.location = linkPage;	 
			}, 400);
	}
}

/*TOUCH*/
try {


let initialPoint;
let finalPoint;

let wrapMedia = document.getElementById('wrapper-media');

wrapMedia.addEventListener('touchstart', function(event) {

initialPoint=event.changedTouches[0];
}, false);
wrapMedia.addEventListener('touchend', function(event) {

finalPoint=event.changedTouches[0];
let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
if (xAbs > 20 || yAbs > 20) {
	if (xAbs > yAbs) {
		if (finalPoint.pageX < initialPoint.pageX){
			/*СВАЙП ВЛЕВО*/
			var w = $(window).outerWidth();                                                           
			if (w <= 1023) {
				//переход на следующую страницу   
				var linkLocation = $('.wrapper').attr('data-nextPage');  
				pageReloadMedia(initialPoint.target.className, linkLocation);
			} 		

		}
			else {
			/*СВАЙП ВПРАВО*/
			var w = $(window).outerWidth();                                                           
			if (w <= 1023) {
				//переход на предыдущую страницу   
				var linkLocation = $('.wrapper').attr('data-prevPage');   
				pageReloadMedia(initialPoint.target.className, linkLocation);
			} 

		}
	}
	else {
		if (finalPoint.pageY < initialPoint.pageY) {

		/*СВАЙП ВВЕРХ*/
		var w = $(window).outerWidth();   
		if (w >= 1024) {
			//переход на следующую страницу   
			var linkLocation = $('.wrapper').attr('data-nextPage');            
			$("body").addClass('fadeOutBody');            
			setTimeout(function() {	
				window.location = linkLocation;	 
			}, 400);
		}

		}
		else{
			/*СВАЙП ВНИЗ*/
			var w = $(window).outerWidth();                                                           
			if (w >= 1024) {
				//переход на предыдущую страницу   
				var linkLocation = $('.wrapper').attr('data-prevPage');            
				$("body").addClass('fadeOutBody');            
				setTimeout(function() {	
					window.location = linkLocation;	 
				}, 400);
			} 
		}
	}
}
}, false);


} catch (e) {}

/*TOUCH END*/

//-переключение по стрелкам
//-предыдущий слайд
$('.btn-prev-js').on('click', function(e) {
	e.preventDefault();
	var sliderName = $(this).closest('.slider-arrows').attr('data-slider');
	$('.'+sliderName).find('.swiper-button-prev').trigger('click');
});
//-следующий слайд
$('.btn-next-js').on('click', function(e) {
	e.preventDefault();
	var sliderName = $(this).closest('.slider-arrows').attr('data-slider');
	$('.'+sliderName).find('.swiper-button-next').trigger('click');
});


try {

 var sliderAll = new Swiper('.sliderAll', {
		slidesPerView: 'auto',
		paginationClickable: true,   
		spaceBetween: 0,
   navigation: {
     nextEl: '.btnNextAll',
     prevEl: '.btnPrevAll',
   },
   breakpoints: {
   	320: {
					loop: true,
					centeredSlides: true,
   	},   	
   	1024: {
					loop: false,
					centeredSlides: false,
   	},
   }
 });		


var sliderPhoto = new Swiper('.sliderPhoto', {
		slidesPerView: 'auto',
		paginationClickable: true,   
		spaceBetween: 0,
   navigation: {
     nextEl: '.btnNextPhoto',
     prevEl: '.btnPrevPhoto',
   },
   breakpoints: {
   	320: {
					loop: true,
					centeredSlides: true,
   	},   	
   	1024: {
					loop: false,
					centeredSlides: false,
   	},
   }
 });		

var sliderVideo = new Swiper('.sliderVideo', {
		slidesPerView: 'auto',
		paginationClickable: true,   
		spaceBetween: 0,
   navigation: {
     nextEl: '.btnNextVideo',
     prevEl: '.btnPrevVideo',
   },
   breakpoints: {
   	320: {
					loop: true,
					centeredSlides: true,
   	},   	
   	1024: {
					loop: false,
					centeredSlides: false,
   	},
   }
 });		


	
} catch (e) {}

//- сортировка слайдов
$('.btn-filter').on('click', function(e) {
	e.preventDefault();

	if(!$(this).hasClass('is-active')) {
		$('.slider-filter').find('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
		var filterVal = $(this).attr('data-filter');
		$('.media-container').find('.is-show').removeClass('is-show');

		if(filterVal == 'all') {
			$('.media-slider-photo, .media-slider-video').hide();
			$('.media-slider-all').show();
			$('.slider-arrows').attr('data-slider', 'sliderAll');
			sliderAll.update();
		}

		if(filterVal == 'photo') {
			$('.media-slider-all, .media-slider-video').hide();
			$('.media-slider-photo').show();
			$('.slider-arrows').attr('data-slider', 'sliderPhoto');  
			sliderPhoto.update();
		}

		if(filterVal == 'video') {
			$('.media-slider-photo, .media-slider-all').hide();
			$('.media-slider-video').show();  
			$('.slider-arrows').attr('data-slider', 'sliderVideo');  
			sliderVideo.update();
		}
	}
});


//- photo-video-JS END


//- history-JS START

function pageReloadHistory(className, linkPage) {
	if(
		(className !== 'jspDrag') &&
		(className !== 'jspContainer') &&
		(className !== 'partnership-box') &&
		(className !== 'jspVerticalBar') &&
		(className !== 'jspHorizontalBar') &&
		(className !== 'jspTrack') &&
		(className !== 'effectText') &&
		(className !== 'title effectTitle') &&
		(className !== 'effectTitle') &&
		(className !== 'jspPane') &&
		(className !== 'jspDisabled') &&
		(className !== 'jspArrowRight') &&
		(className !== 'jspArrow jspArrowUp') &&
		(className !== 'jspArrow jspArrowUp jspDisabled') &&
		(className !== 'jspArrowUp') &&
		(className !== 'jspArrowDown') &&
		(className !== 'jspDrag jspHover') &&
		(className !== 'jspArrow jspArrowDown jspDisabled') &&
		(className !== 'jspArrow jspArrowDown') &&
		(className !== 'jspArrow')		
	) {     
			$("body").addClass('fadeOutBody');            
			setTimeout(function() {	
			window.location = linkPage;	 
			}, 400);
	}
}

$('#wrapper-history').on('mousewheel', function(event) {

 if (event.deltaY > 0) { 
 	var wWidth2 = $(window).outerWidth();     
 	if (wWidth2 >= 1024) {  
			if(new Date - lastWheelHome < 1000) return
  		lastWheelHome = new Date() 		 		
	 			var linkLocation = $('.wrapper').attr('data-prevPage');  
	 			pageReload(event.target.className, linkLocation);
 	}  
	}
	else {
 	var wWidth2 = $(window).outerWidth();     
 	if (wWidth2 >= 1024) {   
			if(new Date - lastWheelHome < 1000) return
  		lastWheelHome = new Date() 		
	 			var linkLocation = $('.wrapper').attr('data-nextPage');  
	 			pageReload(event.target.className, linkLocation);
 	}       
	}

	
});

/*TOUCH*/
try {


let initialPoint;
let finalPoint;

let wrapHistory = document.getElementById('wrapper-history');

wrapHistory.addEventListener('touchstart', function(event) {

initialPoint=event.changedTouches[0];
}, false);
wrapHistory.addEventListener('touchend', function(event) {

finalPoint=event.changedTouches[0];
let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
if (xAbs > 20 || yAbs > 20) {
	if (xAbs > yAbs) {
		if (finalPoint.pageX < initialPoint.pageX){
			/*СВАЙП ВЛЕВО*/

			var w = $(window).outerWidth();                                                           
			if (w <= 1023) {
				//переход на следующую страницу   
				var linkLocation = $('.wrapper').attr('data-nextPage');            
				$("body").addClass('fadeOutBody');            
				setTimeout(function() {	
					window.location = linkLocation;	 
				}, 400);
			} 	

		}
			else {
			/*СВАЙП ВПРАВО*/
			var w = $(window).outerWidth();                                                           
			if (w <= 1023) {
				//переход на предыдущую страницу   
				var linkLocation = $('.wrapper').attr('data-prevPage');            
				$("body").addClass('fadeOutBody');            
				setTimeout(function() {	
					window.location = linkLocation;	 
				}, 400);
			} 	

		}
	}
	else {
		if (finalPoint.pageY < initialPoint.pageY) {

		/*СВАЙП ВВЕРХ*/
		var w = $(window).outerWidth();   
		if (w >= 1024) {
			var linkLocation = $('.wrapper').attr('data-nextPage');  
			pageReload(initialPoint.target.className, linkLocation);
		}

		}
		else{
			/*СВАЙП ВНИЗ*/
			var w = $(window).outerWidth();                                                           
			if (w >= 1024) {
				var linkLocation = $('.wrapper').attr('data-prevPage');
				pageReload(initialPoint.target.className, linkLocation);
			} 
		}
	}
}
}, false);

} catch (e) {}

//- переключение табов в истории 
$('.tab-js').on('click', function(e) {
	e.preventDefault();

	if(!$(this).hasClass('is-active')) {
		$('.history-tab-list').find('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
		var tab = $(this).attr('data-tab');
		$('.media-container').find('.is-show').removeClass('is-show');

		$('.history-tab-content').find('.history-box:not(.'+tab+')').hide();
		$('.history-tab-content').find('.history-box.'+tab).show();
	}
});

//- history-JS END

});//-end ready


function orientationdevice(widthD, heightD) {
  if(widthD > heightD) {
    $('body, html').removeClass('portrait').addClass('landscape');
  } else {
  		$('body, html').removeClass('landscape').addClass('portrait');
  }
}

function destroyScrollPane() {
	var apis = [];
	$('.scroll-pane').each(
		function()	{
			$(this).removeClass('scrollPaneInit');
			$(this).data('jsp').destroy();
		}		
	)
	return false;
}

function initialiseScrollPane() {
	var apis = [];
	$('.scroll-pane').each(
		function()	{
			apis.push($(this).addClass('scrollPaneInit').jScrollPane({showArrows: true, autoReinitialise: true}).data().jsp);
		}		
	)
	return false;
}

function loadPage() {
	var windowWidth = $(window).outerWidth(); 
	var windowHeight = $(window).outerHeight();

	setTimeout(function() {
		$('.wrapper').addClass('loading');
	},500);

	if($('.scroll-pane') && (windowWidth >= 1024)) {
		try { initialiseScrollPane(); } catch (e) {} 
	}

	orientationdevice(windowWidth, windowHeight);


	try {
	} catch (e) {} 
		
}
window.addEventListener("load", loadPage);
//- loadPage END 

function resizePage() {
 var windowWidth = $(window).outerWidth(); 
 var windowHeight = $(window).outerHeight();

	if($('.scroll-pane') && (windowWidth <= 1023) && ($('.scroll-pane').hasClass('scrollPaneInit'))) {
		try { destroyScrollPane(); } catch (e) {} 
	}

	if($('.scroll-pane') && (windowWidth >= 1024)) {
		try { initialiseScrollPane(); } catch (e) {} 
	}	

	orientationdevice(windowWidth, windowHeight);


}//end resizePage
window.addEventListener("resize", resizePage);
//- resizePage END 
                  
var parallax = $('#scene').parallax();

for (var i = 1; i < 6; i++) {
  twinkleLoop(i);
};

function twinkleLoop(i) {
  var duration = ((Math.random() * 5) + 3)

  duration = duration - ((495 - speed)/100)
  twinkle(i, duration)

  setTimeout(function() {
    twinkleLoop(i)
  }, duration * 1000);
}

function twinkle(id, duration) {
  var top = (Math.floor(Math.random() * 85) + 0) + '%';
  var left = (Math.floor(Math.random() * 85) + 0) + '%';

  $('#speck' + id).remove();
  $('#specks').append("<div class='speck' id='speck" + id + "'></div>")
  $('#speck' + id).css({
    'top': top,
    'left': left,
    'animation-duration': duration + 's',
    'animation-timing-function': 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
    'animation-name': 'twinkle',
  })
}