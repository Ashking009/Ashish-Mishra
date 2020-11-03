
const navBtn = document.querySelector('.nav-btn');
// const navlinks = document.getElementsByClassName('hidelinks');
navBtn.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open');
});

$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
    var scr = $(window).scrollTop();
    var nel = $("#about").offset().top -$("#hero-img").height()
    
    var scrolled = $('#hero-img').length - $(window).scrollTop();
   var scrolled1 =$('inner-parallax').length - $(window).scrollTop();
//    var scrolled =document.getElementsByName('hero-img').length - $(window).scrollTop();  
   $('.inner-parallax').css('top',(0-(scrolled1*.23))+'px');
   if(scr< nel){
       $('.hero-img').css('top',(0-(scrolled*1))+'px');
       $('.hero-img').css('right',(0-(scrolled*.3))+'px');
    }
   
    {
        $('.hero-img').css('top',('top'-(scrolled*1))+'px');
        $('.hero-img').css('right',('right'-(scrolled*.3))+'px');
    }
   
  
//    $('.hero-img').css('width',('width' - (scrolled*0.001))+'px');
//    $('.hero-img').css('width =40%', '40% ' + parseInt(-scrolled) + 'px' + ', 0% ' + parseInt(-scrolled / 2) + 'px, center top');
  
  
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   
  if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
    document.getElementById("header-wrapper").style.height = "50px";
    document.getElementById("logo").style.width = "60px";
    document.getElementById("logo").style.padding = "5px 0";
    
    // document.getElementById("hero-img").style.width = "50px";

  } else {
    document.getElementById("header-wrapper").style.height = "100px";
    document.getElementById("logo").style.width = "120px";
    document.getElementById("logo").style.padding = "10px 0";
  }
}


 
  var nav_sections = $('section');
  var main_nav = $('.nav-bar, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom ) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-bar ul:first li:first").addClass('active');
      }
    });
  });


  !(function($) {
    "use strict";
$(document).ready(function(){
    $(".nav-bar .links a").click(function(){
      $("body").removeClass("nav-open");
    });
  });

})(jQuery);

