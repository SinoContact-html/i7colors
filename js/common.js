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
	
	//var gotop = new goTop();
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
	
	var mySwiper_school_banner = new Swiper ('#school_banner', {
    	loop: true,
		autoplay: 5000,
		paginationClickable :true,
		calculateHeight : true,
		
    	pagination: '#school_banner_swp',
	})
	
	var mySwiper_new_class = new Swiper ('#new_class', {
		slidesPerView: 4,
		calculateHeight : true,
	})
	
	$('#sb_prev').on('click', function(e){
    	e.preventDefault()
    	mySwiper_new_class.swipePrev()
  	})
	$('#sb_next').on('click', function(e){
  		e.preventDefault()
    	mySwiper_new_class.swipeNext()
	})
	
	$('.school_hot_list.zj h1').click(function(e) {
		if($(this).siblings('.school_zj_detil').css('display') == 'block') return;
		$('.school_hot_list.zj').removeClass('open');
		$(this).parent().addClass('open');
		$('.school_zj_detil').slideUp();
        $(this).siblings('.school_zj_detil').slideDown();
    });
	
	$('#open_more').click(function(e) {
		if($('.open_more_chose_list').css('display') == 'block'){
			$(this).html('更多选项 (适用材料\颜色等)');
			$(this).css('background-image','url(images/down_icon.gif)');
        	$('.open_more_chose_list').slideUp();
		}else{
			$(this).html('收起更多选项');
			$(this).css('background-image','url(images/up_icon.gif)');
			$('.open_more_chose_list').slideDown();
		}
    });
	
	$('.mall_product_box ul li').mouseover(function(e) {
        $('.mall_product_box ul li').removeClass('onthis');
		$('.product_detil').hide();
		$(this).addClass('onthis');
		$(this).find('.product_detil').show();
    });
	
	$('.mall_product_box ul li').mouseout(function(e) {
        $('.mall_product_box ul li').removeClass('onthis');
		$('.product_detil').hide();
    });
	
});

function AlexTab2(tabId,boxId){this.init(tabId,boxId);}
AlexTab2.prototype = {
	_oldm : new Array(),
    init  :function(tabId,boxId){
        var self = this;
        this.tabClick(tabId,boxId);
		this._oldm[tabId] = 0;
    },
    tabClick : function(tabId,boxId){
        var self = this;
		var m = $('#'+tabId+' > span');
        $('#'+tabId+' > span').click(function(){
            var h = $(this).index();
            if(h != self._oldm[tabId]){
                $(this).addClass('active');
				$(m[self._oldm[tabId]]).removeClass('active');
				$('#'+boxId[self._oldm[tabId]]).hide();
				$('#'+boxId[h]).show();
                self._oldm[tabId] = h;
            }
        })
    }
}