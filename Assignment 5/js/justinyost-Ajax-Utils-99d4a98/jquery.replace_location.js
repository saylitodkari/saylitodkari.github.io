(function($) {
"use strict";
$.fn.replace_location = function(options) {
	$.fn.replace_location.defaults = {
		replaceLocation: 'replaceLocation',
		ajaxType: 'POST',
		replaceLocationURLAttr: 'href',
		replaceLocationURLFormAttr: 'action'
	};
	
	var opts = $.extend({}, $.fn.replace_location.defaults, options);
	
	$(this).live({
		'change': function(event){
			var formElement = $(this);
			if(formElement.attr(opts.replaceLocationURLAttr) !== null && formElement.attr(opts.replaceLocationURLAttr) !== undefined){
				$.ajax({
					url: formElement.attr(opts.replaceLocationURLAttr),
					data: formElement.serialize(),
					success: function(data){ $(formElement.data(opts.replaceLocation)).html(data + " Fired from Change event handler."); },
					type: opts.ajaxType
				});
				event.preventDefault();
			}
		},
		'submit': function(event){
			var formElement = $(this);
			if(formElement.attr(opts.replaceLocationURLFormAttr) !== null && formElement.attr(opts.replaceLocationURLFormAttr) !== undefined){
				$.ajax({
					url: formElement.attr(opts.replaceLocationURLFormAttr),
					data: formElement.serialize(),
					success: function(data){ $(formElement.data(opts.replaceLocation)).html(data + " Fired from Submit event handler."); },
					type: opts.ajaxType
				});
				event.preventDefault();
			}
		},
		'click': function(event){
			if(event.target.nodeName !== "SELECT" || event.target.nodeName !== "OPTION"){
				var formElement = $(this);
				if(formElement.attr(opts.replaceLocationURLAttr) !== null && formElement.attr(opts.replaceLocationURLAttr) !== undefined){
					$.ajax({
						url: formElement.attr(opts.replaceLocationURLAttr),
						data: formElement.serialize(),
						success: function(data){ $(formElement.data(opts.replaceLocation)).html(data + " Fired from Click event handler."); },
						type: opts.ajaxType
					});
					event.preventDefault();
				}
			}
		}
	});
};})(jQuery);