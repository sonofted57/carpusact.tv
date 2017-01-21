$(function() {


var homePageItems = [];
$.getJSON('assets/json/data.json', function(data) {
   $.each(data.homePagePosts, function(index, value) {
     var thumbnail =
     "<article"
     + " "
     + "class='thumb'>"
     + "<a href='"
     + value.a
     + "'"
     + " "
     + "class='image'>"
     + "<img"
     + " "
     + "src='"
     + value.imgSrc
     + "'"
     + "alt='"
     + value.h2
     + "'/></a>"
     + "<h2>"
     + value.h2
     + "</h2>"
     + "<p>"
     + value.p
     + "</p>"
       $(thumbnail).appendTo("#main");
 });

});

});
