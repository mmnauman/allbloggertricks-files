// Starting http://www.allbloggertricks.com/ Widget Script

function trendingWidgets(json){   
var pageNum, thumbnail, trueThumbnail;
var ul_list = document.getElementById('latest_posts_list');  
var name;  
        
for (var a = 0; a < 10; a++) { 
    for (var b = 0; b < json.feed.entry[a].link.length; b++) { 
        if(json.feed.entry[a].link[b].rel == 'alternate'){
            break;
        }
  }
        
var get_url = json.feed.entry[a].link[b].href;

if(json.feed.entry[a].link !== null){
        var ListTitle = json.feed.entry[a].title.$t; 
}   
    
// Meta Information by http://www.trendingwidgets.com/
var labels = json.feed.entry[a].category[0].term;
    
var listing = "<li class='slides'><div class='slide'><div class='meta-tags'><span id='labels'><a href='"+blogLink+"/search/label/WordPress%20Guide' target='_blank'>"+labels+"</a></span></div><h3><a class='trendingWidgetstitle' href='" 
+get_url+ 
"'target='_blank'> - " 
 +ListTitle+
"</a></h3></li></div>";
    
    ul_list.innerHTML += listing;

}                 
    
$(document).ready(function(){
    
$(".slides").first().addClass("active");

$(".slides").hide();
        
$(".active").show();
      
$(".directionsBtn #next").on("click", nextSlides);
$(".directionsBtn #previous").on("click", prevSlides);   
        
function nextSlides(){
            
$(".active").removeClass("active").addClass('wasActive');
    
if($(".wasActive").is(':last-child')) {
    
    $('.slides').first().addClass('active');
    
}else{
    
    $(".wasActive").next().addClass('active');  
}   
   
$('.wasActive').removeClass('wasActive');
  $('.slides').fadeOut(1000);  
$('.active').fadeIn(1000);     
            
            
}
        
function prevSlides(){
            
$(".active").removeClass("active").addClass('wasActive');
    
if($(".wasActive").is(':first-child')) {
    $('.slides').last().addClass('active');  
}else{ 
    $(".wasActive").prev().addClass('active');
}   
   
$('.wasActive').removeClass('wasActive');
  $('.slides').fadeOut('1000');  
$('.active').fadeIn('1000');     
            
            
}
        
var autoSlide = setInterval(nextSlides, 3000);  
        
$('#pauseTicker').click(function() {
    
   clearInterval(autoSlide) ;  

    $(this).hide();
    $('#playTicker').show();
});

$('#playTicker').click(function() { 
autoSlide = setInterval(nextSlides, 3000); 
   $('#playTicker').hide();
   $('#pauseTicker').show();    
}); 
       
      
});

} 
      
function SimpleResponsiveStyles(){
var width = $(document).width();    
    if(width < 800){  
      $("#main-heading").text('Latest');}     
if(width < 700){
document.getElementById('#main-heading').innerHTML = '';}}
window.onresize = function(){
SimpleResponsiveStyles(); 
};
window.onload = function(){
    SimpleResponsiveStyles(); 
};
