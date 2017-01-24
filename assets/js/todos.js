$("ul").on("click", "li", function(){

	$(this).toggleClass("done");

});

$("span").on("click", function(event){
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
		$("ul").append("<li>" + "<span>X</span> " + todoText + "</li>");
	}
	
});