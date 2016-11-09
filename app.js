$(document).ready(function(){
	$(".text p").click(function() {
		$(this).replaceWith('<textarea>' + this.innerHTML + '</textarea>')
		$("textarea").css("resize","none");
		$("textarea").css("height","60%");
	});
});
