$(document).ready(function() {
	
	$(".carousel-banner").carousel({
		pause:'hover'
	});
	
	$('.carousel-banner').on('slide.bs.carousel', function () { 
		$('.bannercarousal').owlCarousel('destroy');
    })
	$('.carousel-banner').on('slid.bs.carousel', function () {
		bannercarousal();
    })
	bannercarousal();
	
	
	$(".dropdown").mouseover(function(){
		$('.dropdown-menu').addClass('megamenu');
		$('.nav-overlay').addClass('show');		
	});
	$(".dropdown").mouseleave(function(){
		$('.dropdown-menu').removeClass('megamenu dropdownshow');
		$('.nav-overlay').removeClass('show');
		$('.third-level').removeClass('show').find('ul').html('');	
	});
	$(".bannercarousal .item a").mouseover(function(){
		var thisdata = $(this).data('itemtext');
		//alert(thisdata);
		$(this).closest('.bannercarousal').siblings('.tabcontent').text(thisdata);
	});
	$(".bannercarousal .item a").mouseleave(function(){
		$('.tabcontent').text('');
	});
	// $(".dropdown").mouseleave(function(){
	// 	$('.dropdown-menu').removeClass('megamenu dropdownshow');
	// 	$('.nav-overlay').removeClass('show');
	// 	$('.third-level').removeClass('show').find('ul').html('');	
	// });



	$(".havedropdown").mouseover(function(){
		$('.dropdown-menu').addClass('dropdownshow');

		var innerlist = $(this).find('ul').html();
		$('.third-level').addClass('show').find('ul').html(innerlist);
		
	});
	
	  $('.commoncarousal').owlCarousel({
		margin: 20,
		nav: true,
		dots: false,
		loop: true,
		navText:["<span class='icon-left-arrow'></span>","<span class='icon-right-arrow'></span>"],
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 2
		  },
		  767: {
			items: 3
		  },
		  992: {
			items: 4
		  }
		}
	  });
	  
	  $('.eventscarousal').owlCarousel({
		margin:0,
		nav: false,
		dots: false,
		loop: true,
		items: 1,
		autoplay:true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoplayTimeout: 2000
	  });
	  $('.thumbnail-slider-container').height($('.slider-container').width());
	  $('.thumbnail-slider .item').width($('.thumbnail-slider-container').height());	 	  
	  var duration = 1000;
	  var thumbnailSlider = $('#thumbnailSlider');
	  thumbnailSlider.owlCarousel({
	   loop:true,
	   margin:0,
	   nav:false,
	   center:true,
	   autoplay:false,
	   autoplayTimeout: 3000,
	   items:3
	  }).on('changed.owl.carousel', function (e) {
	   var currenttabimg = thumbnailSlider.find('.center').next().find('.item').data('imgpath');	   
	   $('.dimg').attr('src',currenttabimg)
	  });
//////////////////////////////////////
	  $('.slideshow').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.thumbs'
	  });
	  $('.thumbs').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical:true,
		asNavFor: '.slideshow',
		dots: false,
		arrows: false,
		autoplay:true,
		centerPadding: '0px',
		centerMode: false,
		focusOnSelect: true
	  });
	//   $('.thumbs').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	// 	$('.slick-current img').addClass('works');                 
	//    });
//////////////////////////////////////
	 new WOW().init();
});
function bannercarousal(){
	$('.bannercarousal').owlCarousel({
		margin: 20,
		nav: true,
		dots: false,
		loop: true,
		autoplay:true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		navText:["<span class='icon-left-arrow'></span>","<span class='icon-right-arrow'></span>"],
		responsive: {
		  0: {
			items: 2
		  },
		  600: {
			items: 3
		  }
		}
	});
}

$(document).on('click','.openpopup', function(){
	vidImagePath = $(this).find('img').attr('src');
	
	var vid = $(this).data('videoid');
	var videopathfull = 'https://www.youtube-nocookie.com/embed/'+ vid +'?rel=0&autoplay=1&modestbranding=0';
	//alert(videopathfull);
	$('.videopopup').find('iframe').attr('src',videopathfull);
	$('.videopopup').removeClass('d-none').css("background-image", "url(" + vidImagePath + ")");
	$('.overlay').removeClass('d-none');
	
});

$(document).on('click','.closepopup', function(){
	$('.overlay, .videopopup').addClass('d-none');
	$('.videopopup').find('iframe').attr('src','');
});