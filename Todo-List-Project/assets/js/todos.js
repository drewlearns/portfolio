// CHECK OFF SPECIFIC TODOS BY CLICKING
$("ul").on("click", "li", function(){
	$(this).toggleClass("checked");
})
//DELETE WHEN CLICKING TRASHCAN ICON
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(600, function(){
		$(this).remove();});
		event.stopPropagation();
})
//PRESS ENTER TO ADD TO THE LIST
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var li = $(this).val();
		var trashcan = "<i class=\"fas fa-dumpster-fire\"></i>"
		$(this).val("");
		$("ul").append("<li><span>" + trashcan + "</span>" + li + "</li>")
		$("h1 span").fadeToggle();
		};
	});
//TOGGLE THE INPUT MENU
$("input[type='text']").fadeToggle();
$("h1 span").click(function(){
	$("input[type='text']").fadeToggle();
	$("h1 span").fadeToggle();
}
	);