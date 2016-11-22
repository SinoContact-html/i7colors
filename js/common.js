// JavaScript Document
$(function($) {
	var mySwiper_banner = new Swiper ('#banner', {
    	loop: true,
		autoplay: 5000,
		paginationClickable :true,
		
    	pagination: '#banner_swp',
	})
	
	var mySwiper_mumber1 = new Swiper ('#mumber1', {
		direction : 'vertical',
		height: 242,
		slidesPerView: 5,
		
    	prevButton:'#up_arr1',
		nextButton:'#down_arr1',
	})
	
	var mySwiper_product1 = new Swiper ('#hot_product1', {
		slidesPerView: 4,
		spaceBetween : 60,
		
    	prevButton:'#hot_pro_prev1',
		nextButton:'#hot_pro_next1',
	})
	
	var mySwiper_mumber2 = new Swiper ('#mumber2', {
		direction : 'vertical',
		height: 242,
		slidesPerView: 5,
		
    	prevButton:'#up_arr2',
		nextButton:'#down_arr2',
	})
	
	var mySwiper_product2 = new Swiper ('#hot_product2', {
		slidesPerView: 4,
		spaceBetween : 60,
		
    	prevButton:'#hot_pro_prev2',
		nextButton:'#hot_pro_next2',
	})
	
	$('body').on('click','.btn_enter', function(){
        $(".popup .close").trigger("click")
    })
	
	var gotop = new goTop();
	$('.gotop').height('240');
});