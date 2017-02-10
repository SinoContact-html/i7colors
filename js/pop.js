// JavaScript Document

/**
 * 打开弹出框
 * @param type 弹出框类型  a alert 其他 confirm
 * @param title 弹出框标题
 * @param con 弹出框内容
 * @param id 弹出框的id
 * @constructor
 */
function OpenPopbox_new(type,title,con,id){
	if(type=='a'){
		$('body').append('<div class="popbox_bg_new" id="'+id+'" style="height:auto; padding-bottom:20px;"><p class="popbox-title"><span class="fl">'+title+'</span><a href="javascript:;" onclick="ClosePopbox(\''+id+'\')">X</a></p><div class="popbox_new_content"><p class="new_con_head">'+con+'</p><p class="new_con_btns"><a href="javascript:;" onclick="ClosePopbox(\''+id+'\')" class="ok_btn">确认</a></p></div></div>');
	}else{
		$('body').append('<div class="popbox_bg_new" id="'+id+'" style="height:auto; padding-bottom:20px;"><p class="popbox-title"><span class="fl">'+title+'</span><a href="javascript:;" onclick="ClosePopbox(\''+id+'\')">X</a></p><div class="popbox_new_content"><p class="new_con_head">'+con+'</p><p class="new_con_btns"><a href="javascript:;" onclick="ClosePopbox(\''+id+'\')" class="ok_btn">确认</a><a href="javascript:;" onclick="ClosePopbox(\''+id+'\')" class="can_btn">取消</a></p></div></div>');
	}
	var popbox_bg = $('.pop_bg');
    $(popbox_bg).height($(document).height());
    $(popbox_bg).width($(document).width());
    var boxName = $('#'+id);
    var InfoBoxTop = ($(window).height()-$(boxName).height()+2)/2 + $(window).scrollTop();
    $(boxName).css({'top':InfoBoxTop+'px'});
    $(popbox_bg).fadeIn(300);
    $(boxName).fadeIn(300);
	$('body').css('overflow','hidden');
}

/**
 * alert 弹出框
 * @param title 标题
 * @param content 内容
 * @param callback 确认的回调，没有传值null
 * @param id 弹出框的id
 * @constructor var popAlert = new PopAlert(title,content,callback,id);popAlert;
 */
function PopAlert(title,content,callback,id){this.init(title,content,callback,id);}
PopAlert.prototype = {
	init  :function(title,content,callback,id){
		var self = this;
		this._title  = title;
		this._content  = content;
		this._id = id + '_' + Date.parse(new Date());
		this._callback (callback);
	},
	_callback : function(callback){
		self = this;
		OpenPopbox_new('a',this._title,this._content,this._id);
		if (callback!=null && typeof callback =='function'){
			$("#"+this._id+" .ok_btn").bind("click",callback);
		}
	}
};

/**
 * 确认有回调的确认框
 * @param title 确认框的名称
 * @param content 确认框的内容
 * @param callback 确认按钮的回调，默认传值null
 * @param id 确认框的id
 * @constructor var popConfirm = new PopConfirm(title,content,callback,id);popConfirm;
 */
function PopConfirm(title,content,callback,id){this.init(title,content,callback,id);}
PopConfirm.prototype = {
	init  :function(title,content,callback,id){
		var self = this;
		this._title  = title;
		this._content  = content;
		this._id = id + '_' + Date.parse(new Date());
		this._callback (callback);
	},
	_callback : function(callback){
		self = this;
		OpenPopbox_new('c',this._title,this._content,this._id);
		if (callback!=null && typeof callback =='function'){
			$("#"+this._id+" .ok_btn").bind("click",callback);
		}
	}
};

/**
 * 确认和取消都有回调函数的确认框
 * @param title 确认框标题
 * @param content 确认框内容
 * @param callback 确认框确定的回调  默认传值 null
 * @param id 确认框的id
 * @param callback1 确认框取消的回调 默认传值 null
 * @constructor var popConfirm = new PopConfirmCallBack(title,content,callback,id,callback1);popConfirm;
 */
function PopConfirmCallBack(title,content,callback,id,callback1){this.init(title,content,callback,id,callback1);}
PopConfirmCallBack.prototype = {
	init  :function(title,content,callback,id,callback1){
		var self = this;
		this._title  = title;
		this._content  = content;
		this._id  = id+'_'+Date.parse(new Date());
		this._callback (callback,callback1);
	},
	_callback : function(callback,callback1){
		self = this;
		OpenPopbox_new('c',this._title,this._content,this._id);
		if (callback!=null && typeof callback =='function'){
			$("#"+this._id+" .ok_btn").bind("click",callback);
		}
		if (callback1!=null && typeof callback1 =='function'){
			$("#"+this._id+" .can_btn").bind("click",callback1);
		}
	}
	
};