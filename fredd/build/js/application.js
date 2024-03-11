document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;
  
    const lazyLoad = function() {
      if (active === false) {
        active = true;
  
        setTimeout(function() {
          lazyImages.forEach(function(lazyImage) {
            if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.classList.remove("lazy");
  
              lazyImages = lazyImages.filter(function(image) {
                return image !== lazyImage;
              });
  
              if (lazyImages.length === 0) {
                document.removeEventListener("scroll", lazyLoad);
                window.removeEventListener("resize", lazyLoad);
                window.removeEventListener("orientationchange", lazyLoad);
              }
            }
          });
  
          active = false;
        }, 200);
      }
    };
  
    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
  });
$(function() {
    if ($(window).width() >= 1025) {
        $.scrollify({        
            section : ".scroll-sect",
            interstitialSection : "",
            easing: "swing",
            scrollSpeed: 1100,
            offset : 0,
            scrollbars: true,
            standardScrollElements: "",
            setHeights: false,
            overflowScroll: true,
            updateHash: false,
            touchScroll:true,
            before:function() {},
            after:function() {},
            afterResize:function() {},
            afterRender:function() {}
        });
        
        $('.scroll-sect:not(.hero-video) .c-but_fill').click(function(){
            $.scrollify.move('#formEnter');
        });
    } 
    else if ($(window).width() < 1025) {
        
        $('.scroll-sect:not(.hero-video) .c-but_fill').click(function(){
            var neededForm = $('.foodcoins-section .txtbx');
            var offset = neededForm.offset();
            var finalTop = offset.top - 100;
            $("html, body").animate({ scrollTop: finalTop }, 2000);
        });    
    }
    
    
});
$(document).ready(function () {
    
    $('.j-animate').addClass('j-css3');
    
    
    var video = document.getElementById('myVideo');
    
    if ($(window).width() >= 1025) {
        video.addEventListener("timeupdate", function() {
            if (this.currentTime >= 3.800 && this.currentTime < 6.700) {
                
                $('.logo-center__img').addClass('j-css3');
            }
            else if (this.currentTime >= 6.700 && this.currentTime < 12.400) {
                $('.header').addClass('j-css3');
                $('.hero-video .txtbox').addClass('j-css3');
                $('.user-arrow-down').addClass('j-css3');

            }
            else if (this.currentTime >= 12.500) {
                this.currentTime = 7.100;  
            }
        }, false);
    }
    else if($(window).width() >= 767 && $(window).width() <= 1025) {
        var video = $('.hero-video__vid.tablet-only');    
        $('.logo-center__img').addClass('j-css3');
        setTimeout(function(){ 
            $('.header').addClass('j-css3');
            $('.hero-video .txtbox').addClass('j-css3'); 
            $('.hero-video .hidden-blocks__itm').addClass('j-css3');
                        
            video.fadeOut(800);
        }, 3000);
            
    }
    else if($(window).width() <= 767) {
        var video = $('.hero-video__vid.mobile-only');    
        $('.logo-center__img').addClass('j-css3');
        setTimeout(function(){ 
            
            $('.header').addClass('j-css3');
            $('.hero-video .txtbox').addClass('j-css3'); 
            $('.hero-video .hidden-blocks__itm').addClass('j-css3');
            
            video.fadeOut(800);       
        }, 2000);      
    }
    
    
    
    


    // SCROLLING ANIMATION

    var scrolled = false;
    var myHeight1 = $('.heart-section').height() - $('.heart-section').height()/1.2;       
    var myHeight2 = myHeight1 + $('.help-section').height() + 100;
    var myHeight3 = myHeight2 + $('.invite-section').height() + 100;
    var myHeight4 = myHeight3 + $('.foodcoins-section').height() + 100;


    
    $(window).scroll(function () {
        scrollDeal();
    });
    

    scrollDeal();

    
    function scrollDeal(){
        if ($(window).scrollTop() > 0 && $(window).scrollTop() < myHeight2){
            var myscroll = $(window).scrollTop();
            if (myscroll > myHeight1) {
                $('.heart-section .dec1').addClass('j-css3');
                $('.heart-section .dec2').addClass('j-css3');
                $('.heart-section .txtbox_type2').addClass('j-css3');
                $('.boxset').addClass('j-css3');
                $('.boxset-itm_open').addClass('j-css3');
                $('.boxset-itm').addClass('j-css3');
                $('.heart-section .boxset-itm_open .heartblk').addClass('j-css3');
                
                // scrolled = true;
            } 
            
        }
        else if ($(window).scrollTop() > myHeight2 && $(window).scrollTop() < myHeight3) {
            $('.help-section .dec1').addClass('j-css3');
            $('.help-section .txtbox_type2').addClass('j-css3');
            $('.help-section .right-blk').addClass('j-css3');
            $('.help-section .likeblk').addClass('j-css3');
            $('.help-section .longblk').addClass('j-css3'); 
        }
        else if ($(window).scrollTop() > myHeight3 && $(window).scrollTop() < myHeight4) { 
            $('.invite-section .txtbox_type2').addClass('j-css3');            
            $('.invite-section .longblk-dec').addClass('j-css3');
            var rainVideo = $('#rain')[0];
            var rainVideoBx = $('#rain');

            var iterations = 0;
            rainVideo.addEventListener('ended', function () {    

                if (iterations > 1 && iterations < 2) {       
                    this.currentTime = 0;
                    this.play();
                    iterations ++;
                }   
                this.currentTime = 0.800;
                rainVideoBx.fadeOut(400);
                
            }, false);
            
            
        }   
        else if ($(window).scrollTop() > myHeight4 && $(window).scrollTop() < 9999) { 
            $('.coin').addClass('j-css3');            
            $('.coin-shadow').addClass('j-css3');
        }        
        else if ($(window).scrollTop() == 0) {
            scrolled = false;
        }
    }
    
 }); 

; (function ($) {
    // DOM Ready

    var scrolled = false;

    $(window).scroll(function () {

        //if I scroll more than 1000px...
        if ($(window).scrollTop() > 100 && scrolled == false) {
            $('.header').addClass('j-header_active');
            scrolled = true;
        } else if ($(window).scrollTop() == 0) {
            $('.header').removeClass('j-header_active');
            scrolled = false;
        }
    });
})(jQuery);
$(function() {
    // if ($(window).width() >= 1025) {
    //     var videoHeight = $('#myVideo').height();
    //     $('.video-hld').height(videoHeight);
    // }
});

$(function() {
    jQuery('#j-sendform1').validate({
        submitHandler: function(form) {
            $('body').addClass('over-hidden');
            $('.popup-hld').addClass('j-fadein');
            $('.popup').addClass('j-animshow');

            $('.popup-hld .ok-blk').addClass('active');
            // form.submit();
        }
        
    });
    jQuery('#j-sendform2').validate({
        submitHandler: function(form) {
            $('body').addClass('over-hidden');
            $('.popup-hld').addClass('j-fadein');
            $('.popup').addClass('j-animshow');

            $('.popup-hld .ok-blk').addClass('active');
            // form.submit();
        }
    });


    $('.j-close').click(function(){
        $('body').removeClass('over-hidden');
        $('.popup-hld').removeClass('j-fadein');
        $('.popup').removeClass('j-animshow');
        $('.popup__validate > div').removeClass('active');
        return false;
    });
});











