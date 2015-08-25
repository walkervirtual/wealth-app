// set the current question to one
cq = 1;

function focusOn(el, id) {
    $("."+el).addClass("h");
    $("."+el+"#"+el+id).removeClass("h");
}

$(".submit").click(function(){
  cq++;
  focusOn("q", cq);
  console.log(cq);
});

$(".b").click(function(){
  var cl = $(this).parent().parent().attr("id");
  var id = $(this).attr("id");
  var mv = $("#"+cl+"#"+id).attr("data-m");
  
});




