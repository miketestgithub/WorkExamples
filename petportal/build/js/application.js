;(function($) {
    // DOM Ready

    $(function() {
        // SHOP CARD ANIMATIONS
        // $('.header-navbar__itm').mouseenter(function(){
        //     $(this).find('.j-submenushow').addClass('j-popshow_anim');
        // });
        // $('.header-navbar__itm').mouseleave(function(){
        //     $(this).find('.j-submenushow').removeClass('j-popshow_anim');
        // });

        if($('#menu-header-menu li').find('.submenu').length) {
            $('.submenu').parent().addClass('j-hide-lnk');
        }
        $('.rating-fieldset label').click(function(){
            $(this).prev('.rating-checkbox').prop('checked', true);
            $(this).parent().addClass("active");
            var ratingElem = $('.rating input[name="star"]');

            ratingElem.change(function() {
                if (this.checked) {
                    $(this).parent().addClass("active");
                }
            });
            return false;
        });
        $('.header-profile').mouseenter(function(){
            $(this).find('.header-profile-menu').addClass('active');
            $(this).addClass('hovered');
        });
        $('.header-profile').mouseleave(function(){
            $(this).find('.header-profile-menu').removeClass('active');
            $(this).removeClass('hovered');
        });
        $('.header-navbar li').mouseenter(function(){
            $(this).find('.j-submenushow').addClass('j-popshow_anim');
        });
        $('.header-navbar li').mouseleave(function(){
            $(this).find('.j-submenushow').removeClass('j-popshow_anim');
        });

        $('.burger-menu').click(function(){
            if($(this).hasClass('burger-menu_act')){
                $(this).removeClass('burger-menu_act');            
                $('.header').removeClass('header_open');
                $('.header-before').fadeOut();
            }
            else {
                $(this).addClass('burger-menu_act');  
                $('.header-before').fadeIn();
                $('.header').addClass('header_open');
            }
        });
        $(".linking-name").on("keyup paste", function() {
            $(".link-name")
                .text($(this).val())
                .addClass('link-name_act');

        });
        $(".linking-weight").on("keyup paste", function() {
            $(".link-weight").val($(this).val() + ' lb');
        });
        $("#apt").on("keyup paste", function() {
            $(".link-flat").text($(this).val());
        });
        // $(".linking-addr").on("keyup paste", function() {
        //     $(".link-addr").text($(this).val()).addClass('filled');
        // });
        $('.switch-toggle input').change(function(){
            
            if($(this).hasClass('linking-type')){
                $('.link-type').val($(this).next('label').text());
            }
            else if($(this).hasClass('linking-gender')){
                $('.link-gender').val($(this).next('label').text());
            }   
        });
        $('input[type=file]').change(function () {
            var mmmm = $(this).val();
            $('.petidcard-imgbx__img').attr('src', 'images/dog-ava@2x.png');
        });
        

    });
    $(document).ready(function(){
        $('.subscribe-form__submit').click(function(){
            var newMessage = $('<label class="subscribe-form__lbl">Thank you for your subscription!</label>');
            $('.subscribe-form *').fadeOut();
            $('.subscribe-form')
                .html(newMessage)
                .addClass('subscribe_new');
        });
        $('.j-cancel').click(function(){
            $('body').removeClass('overbody');
        });
    });

})(jQuery);