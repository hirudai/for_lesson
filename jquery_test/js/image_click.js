$("li[data-imagename]").on("click", function(){
  var img_src = $(this).attr("data-imagename");
  console.log(img_src);
  $("#image_display").attr("src","image/"+img_src)
});

