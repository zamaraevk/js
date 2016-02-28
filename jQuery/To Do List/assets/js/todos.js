//Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});
//Click on X to delete ToDo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})
$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        //grabbing new todo text from input
       var todoText = $(this).val();
        $(this).val("");//clear input after hit Enter
        //create a new li and add to ul
        $("ul").append("<li><span><i class=\"fa fa-trash\"></i> </span> " + todoText + "</li>");
    }
})
$(".fa-plus").click(500, function(){
    $("input[type='text']").fadeToggle();
})