

$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
   var scrolled =document.getElementsByName('inner-parallax').length - $(window).scrollTop(); 
   $('.inner-parallax').css('top',(0-(scrolled*.15))+'px');
  
//    $('.overlay-image2').css('top',(0+(scrolled *0.7 ))+'px');
}

