// JavaScript Document
$(function($) {
	var mySwiper_banner = new Swiper ('#banner', {
    	loop: true,
		autoplay: 5000,
		paginationClickable :true,
		calculateHeight : true,
		
    	pagination: '#banner_swp',
	})
	
	var mySwiper_mumber1 = new Swiper ('#mumber1', {
		mode  : 'vertical',
		calculateHeight : true,
	})
	
	$('#up_arr1').on('click', function(e){
    	e.preventDefault()
    	mySwiper_mumber1.swipePrev()
  	})
	$('#down_arr1').on('click', function(e){
  		e.preventDefault()
    	mySwiper_mumber1.swipeNext()
	})
	
	var mySwiper_product1 = new Swiper ('#hot_product1', {
		slidesPerView: 4,
		calculateHeight : true,
	})
	
	$('#hot_pro_prev1').on('click', function(e){
    	e.preventDefault()
    	mySwiper_product1.swipePrev()
  	})
	$('#hot_pro_next1').on('click', function(e){
  		e.preventDefault()
    	mySwiper_product1.swipeNext()
	})
	
	var mySwiper_mumber2 = new Swiper ('#mumber2', {
		mode  : 'vertical',
		calculateHeight : true,
	})
	
	$('#up_arr2').on('click', function(e){
    	e.preventDefault()
    	mySwiper_mumber2.swipePrev()
  	})
	$('#down_arr2').on('click', function(e){
  		e.preventDefault()
    	mySwiper_mumber2.swipeNext()
	})
	
	var mySwiper_product2 = new Swiper ('#hot_product2', {
		slidesPerView: 4,
		spaceBetween : 60,
		calculateHeight : true,
	})
	
	$('#hot_pro_prev2').on('click', function(e){
    	e.preventDefault()
    	mySwiper_product2.swipePrev()
  	})
	$('#hot_pro_next2').on('click', function(e){
  		e.preventDefault()
    	mySwiper_product2.swipeNext()
	})
	
	$('body').on('click','.btn_enter', function(){
        $(".popup .close").trigger("click")
    })
	
	var gotop = new goTop();
	$('.gotop').height(240);
	
	$('.btn_suggest').click(function(e) {
		var InfoBoxTop = ($(window).height()-261)/2 + window.scrollY;
        $('.pop_bg').height($(document).height());
		$('.pop_bg').fadeIn();
		$('#feedback').css('top',InfoBoxTop);
		$('#feedback').fadeIn();
    });
	
	$('#feedback_close').click(function(e) {
		$('.pop_bg').fadeOut();
        $('#feedback').fadeOut();
    });
	
});