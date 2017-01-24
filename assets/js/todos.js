$("ul").on("click", "li", function(){

	$(this).toggleClass("done");

});

$("ul").on("click", "span", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li>" + "<span><i class='fa fa-trash-o'></i></span> " + todoText + "</li>");
	}
	
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle(1000);
});