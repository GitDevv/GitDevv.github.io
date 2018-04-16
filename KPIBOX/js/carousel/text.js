$(document).ready(function() {
//Get the number of items in the gallery
galItems = $('#gallery li').size();
for(i=0;i<galItems;i++)
{
//SET EVENT HANDLERS for each of the gallery items
$('#gallery li:eq('+i+')').hover(function(){
ci =$('#gallery li').index(this); //get which li is hovered
//Translate the image inside the list item to the upper and outer regions of the list item view port by moving it on -ve y axis so that it is not visible
$('#gallery li:eq('+ci+') img').css('-ms-transform','translate(0,-25px)');
$('#gallery li:eq('+ci+') img').css('-o-transform','translate(0,-25px)');
$('#gallery li:eq('+ci+') img').css('-webkit-transform','translate(0,-25px)');
$('#gallery li:eq('+ci+') img').css('-moz-transform','translate(25px)');
$('#gallery li:eq('+ci+') img').css('transform','translate(0,-25px)');
//Translate the DIV containg the gallery content to the list item view port by moving it on -ve y axis so that it is made visible
$('#gallery li:eq('+ci+') div').css('-ms-transform','translate(0,-60px)');
$('#gallery li:eq('+ci+') div').css('-o-transform','translate(0,-60px)');
$('#gallery li:eq('+ci+') div').css('-webkit-transform','translate(0,-60px)');
$('#gallery li:eq('+ci+') div').css('-moz-transform','translate(0,-60px)');
$('#gallery li:eq('+ci+') div').css('transform','translate(0,-60px)');
},function(){
//Reverse the positions of both the image and DIV on mouse out
$('#gallery li:eq('+ci+') img').css('-ms-transform','translate(0,0)');
$('#gallery li:eq('+ci+') img').css('-o-transform','translate(0,0)');
$('#gallery li:eq('+ci+') img').css('-webkit-transform','translate(0,0)');
$('#gallery li:eq('+ci+') img').css('-moz-transform','translate(0,0)');
$('#gallery li:eq('+ci+') img').css('transform','translate(0,0)');
$('#gallery li:eq('+ci+') div').css('-ms-transform','translate(0,0)');
$('#gallery li:eq('+ci+') div').css('-o-transform','translate(0,0)');
$('#gallery li:eq('+ci+') div').css('-webkit-transform','translate(0,0)');
$('#gallery li:eq('+ci+') div').css('-moz-transform','translate(0,0)');
$('#gallery li:eq('+ci+') div').css('transform','translate(0,0)');
});
}
}); 