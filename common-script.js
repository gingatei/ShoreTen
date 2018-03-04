

/* ヘッダーをWindowの下に常に表示 */
$(function(){
	var wH = $(window).height();
	$("#main-container").css("height",(wH-150));

	$(window).resize(function() {
		var wH = $(window).height();
		$("#main-container").css("height",(wH-150));

	});

});



