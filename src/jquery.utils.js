/*
 * author:杨直庆	
 * jquery新增的自定义方法
 */
;
(function($) {
	$.fn.extend({
		//选项卡函数
		"tabs": function(options) {
			options = $.extend({
				child: ".item",//选项
				active: "active",//选中项的类
				event: "click",//事件名称
				tabs : ".content",//需要切换的选项内容
				first : 0,//初次显示的编号
				callBack: function() {}//回调函数
			}, options);
			var parent = this,
				items = parent.find(options.child),
				tabs = $(options.tabs);
				tabs.eq(options.first).show();
				items.eq(options.first).addClass(options.active);
			this.on(options.event, options.child, function() {
				var idx = items.index(this);
				tabs.eq(idx).show().siblings().hide();
				parent.show();
				items.eq(idx).addClass(options.active).siblings().removeClass(options.active);
				options.callBack(idx);
			})
			return this;
		}
	})
})(jQuery)
