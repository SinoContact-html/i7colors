// JavaScript Document
$(function() {
	var mySwiper_banner = $('#banner').swiper({
    	loop: true,
		autoplay: 5000,
		paginationClickable :true,
		calculateHeight : true,
		
    	pagination: '#banner_swp'
	});
	
	var mySwiper_mumber1 = new Swiper ('#mumber1', {
		mode  : 'vertical',
		slidesPerView: 5
	});
	
	$('#up_arr1').on('click', function(e){
    	e.preventDefault()
    	mySwiper_mumber1.swipePrev()
  	})
	$('#down_arr1').on('click', function(e){
  		e.preventDefault()
    	mySwiper_mumber1.swipeNext()
	});
	
	var mySwiper_product1 = new Swiper ('#hot_product1', {
		slidesPerView: 4,
		calculateHeight : true
	});
	
	$('#hot_pro_prev1').on('click', function(e){
    	e.preventDefault()
    	mySwiper_product1.swipePrev()
  	});
	$('#hot_pro_next1').on('click', function(e){
  		e.preventDefault()
    	mySwiper_product1.swipeNext()
	});
	
	var mySwiper_mumber2 = new Swiper ('#mumber2', {
		mode  : 'vertical',
		slidesPerView: 5
	});
	
	$('#up_arr2').on('click', function(e){
    	e.preventDefault()
    	mySwiper_mumber2.swipePrev()
  	});
	$('#down_arr2').on('click', function(e){
  		e.preventDefault()
    	mySwiper_mumber2.swipeNext()
	});
	
	var mySwiper_product2 = new Swiper ('#hot_product2', {
		slidesPerView: 4,
		calculateHeight : true
	});
	
	$('#hot_pro_prev2').on('click', function(e){
    	e.preventDefault()
    	mySwiper_product2.swipePrev()
  	});
	$('#hot_pro_next2').on('click', function(e){
  		e.preventDefault()
    	mySwiper_product2.swipeNext()
	});
	
	$('body').on('click','.btn_enter', function(){
        $(".popup .close").trigger("click")
    });
	
	//var gotop = new goTop();
	//$('.gotop').height(240);
	
	$('.btn_suggest').click(function(e) {
		var InfoBoxTop = ($(window).height()-261)/2 + $(window).scrollTop();
        $('.pop_bg').height($(document).height());
		$('.pop_bg').fadeIn();
		$('#feedback').css('top',InfoBoxTop);
		$('#feedback').fadeIn();
		$('body').css('overflow','hidden');
    });
	
	$('#feedback_close').click(function(e) {
		$('.pop_bg').fadeOut();
        $('#feedback').fadeOut();
		$('body').css('overflow','auto');
    });
	
	var mySwiper_school_banner = new Swiper ('#school_banner', {
    	loop: true,
		autoplay: 5000,
		paginationClickable :true,
		calculateHeight : true,
		
    	pagination: '#school_banner_swp'
	});
	
	var mySwiper_new_class = new Swiper ('#new_class', {
		slidesPerView: 4,
		calculateHeight : true
	});
	
	$('#sb_prev').on('click', function(e){
    	e.preventDefault()
    	mySwiper_new_class.swipePrev()
  	});
	$('#sb_next').on('click', function(e){
  		e.preventDefault()
    	mySwiper_new_class.swipeNext()
	});
	
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
	
	//var windowHeight = $(document).height();
	//$('.online_bg').height(windowHeight);
	
	var num = 1;
	$('.plus').click(function(e) {
		if(num>=1) $('.reduce').removeClass('noclick');
        num++;
		$('.product_info_numbers').find('span').html(num);
    });
	
	$('.reduce').click(function(e) {
		if($('.reduce').hasClass('noclick')) return;
		if(num<=2){
			$('.reduce').addClass('noclick');
		}
        num--;
		$('.product_info_numbers').find('span').html(num);
    });
	
	var $activeNav;
	$(".business-nav li").not(".active").hover(function(){
		$(this).addClass("mouseover");
		var _left = $(this).offset().left - $('.container').offset().left;
		var _top = $(this).height();
		$(".business-nav-twice").css({left:_left,top:_top,display:"block"});
		$activeNav = $(this);
	},function(){
		$(this).removeClass("mouseover");
		
	});
	
	$(".business-nav-twice").mouseover(function(){
		$activeNav.addClass("mouseover");
	});
	$(".business-nav-div").hover(function(){
		console.log($activeNav);
	},function(){
		$activeNav.removeClass("mouseover");
		$(".business-nav-twice").css({display:"none"});
	});
	
	$('.problem_list li h1').click(function(e) {
		if($(this).siblings('.problem_detil').css('display') == 'block') return;
        $('.problem_detil').slideUp();
		$(this).siblings('.problem_detil').slideDown();
    });
	
	$('#submit').click(function(e) {
		var popHeight = $('#popbox').height();
        var InfoBoxTop = ($(window).height()-popHeight)/2 + $(window).scrollTop()-10;
        $('.pop_bg').height($(document).height());
		$('.pop_bg').fadeIn();
		$('#popbox').css('top',InfoBoxTop);
		$('#popbox').fadeIn();
		$('body').css('overflow','hidden');
    });
	
	$('#close_popbox').click(function(e) {
        $('.pop_bg').fadeOut();
        $('#popbox').fadeOut();
		$('body').css('overflow','auto');
    });
	
	$('.input_box em').click(function(e) {
        if(!$(this).hasClass('show')){
			$(this).addClass('show');
			$(this).siblings('.text').val($(this).siblings('.pass').val());
			$(this).siblings('.text').show();
			$(this).siblings('.pass').hide();
		}else{
			$(this).removeClass('show');
			$(this).siblings('.pass').val($(this).siblings('.text').val());
			$(this).siblings('.pass').show();
			$(this).siblings('.text').hide();
		}
    });
	
	$('.mumber_title_bar').click(function(e) {
		if($(this).next('.mumber_menu_list').css('display') == 'block'){
			$(this).next('.mumber_menu_list').slideUp();
		}else{
			$('.mumber_menu_list').slideUp();
			$(this).next('.mumber_menu_list').slideDown();
		}
    });
	
	$('.level_one em').click(function(e) {
		if($(this).parent().siblings('.level_two').css('display') == 'block'){
			$(this).removeClass('open');
			$(this).parent().siblings('.level_two').slideUp();
		}else{
			$('.level_one em').removeClass('open');
			$('.level_two').slideUp();
			$(this).addClass('open');
			$(this).parent().siblings('.level_two').slideDown();
		}
    });
	
	$('.pro_plus').click(function(e) {
        var thisNumber = $(this).siblings('input').val();
		thisNumber++;
		$(this).siblings('input').val(thisNumber);
    });
	
	$('.pro_reduce').click(function(e) {
		var thisNumber = $(this).siblings('input').val();
		if(thisNumber<=1) return;
		thisNumber--;
		$(this).siblings('input').val(thisNumber);
    });
	
	$('.pro_num').blur(function(e) {
        if($(this).val()=='' || $(this).val()==0){
			$(this).val(1);
		}
    });
	
	$('.all').click(function(e) {
        if($(this).is(':checked')){
			$(this).parents('.tab_main_box').find('input[type="checkbox"]').attr("checked","checked");
		}else{
			$(this).parents('.tab_main_box').find('input[type="checkbox"]').removeAttr("checked");
		}
    });
	
	$(".new-invoice-btn").on("click",function(){
		$(".new-invoice").css("display","block");
		$(this).css("display","none");
	})
	
	
	$("#submit").on("click",function(){
		$(".consignee-box").css("display","none");
	});
	
	$(".cosignee-btn").on("click",function(){
		var InfoBoxTop = ($(window).height()-430)/2 + $(window).scrollTop();
        $('.pop_bg').height($(document).height());
		$('.pop_bg').fadeIn();
		$('#popbox2').css('top',InfoBoxTop);
		$('#popbox2').fadeIn();
		$('body').css('overflow','hidden');
		
		$(".invoice-box").css("display","none");
	});
	
	$('#close_popbox2').click(function(e) {
        $('.pop_bg').fadeOut();
        $('#popbox2').fadeOut();
		$('body').css('overflow','auto');
    });
	
	$('#select_type').change(function(e) {
        $('#text_type').val($(this).find('option:selected').val());
    });
	
	$('.consignee li').hover(function(){
		$('.consignee li').removeClass('active');
		$(this).addClass('active');
		$(this).find('p').show();
	},function(){
		$('.consignee li').removeClass('active');
		$(this).find('p').hide();
	});
	
	$('#all_read').click(function(e) {
        $('.mall_sms_table').find('em').addClass('read');
    });
	
	$('.reason').click(function(e) {
        $('.content').html($(this).html());
    });
	
	$('.qr_box').hover(function(){
		$('.qr_show_box').show();
	},function(){
		$('.qr_show_box').hide();
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

function OpenPopbox(id){
    var popbox_bg = $('.pop_bg');
    $(popbox_bg).height($(document).height());
    $(popbox_bg).width($(document).width());
    var boxName = $('#'+id);
    //var InfoBoxLeft = ($(window).width()-$(boxName).width()+2)/2;
    var InfoBoxTop = ($(window).height()-$(boxName).height()+2)/2 + $(window).scrollTop();
    $(boxName).css({'top':InfoBoxTop+'px'});
    $(popbox_bg).fadeIn(300);
    $(boxName).fadeIn(300);
	$('body').css('overflow','hidden');
}

function ClosePopbox(id){
    var popbox_bg = $('.pop_bg');
    var boxName = $('#'+id);
    $(boxName).fadeOut(300);
    $(popbox_bg).fadeOut(300);
	$('body').css('overflow','auto');
}