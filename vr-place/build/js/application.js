$(document).ready(function () {
    $('.j-willanim').addClass('j-css3');

    $('.j-wooshow').click(function(){
        $('.vrPopup-hld').addClass('j-show');
        $('.vrPopup').addClass('j-popup-anim');

        $('.vrPopup-hld').click(function(){
            $(this).removeClass('j-show');
            $('.vrPopup').removeClass('j-popup-anim');
        });
        return false;
    });

});

// (() => {
//     'use strict';
//     // Page is loaded
//     const objects = document.getElementsByClassName('asyncImage');
//     Array.from(objects).map((item) => {
//         // Start loading image
//         const img = new Image();
//         img.src = item.dataset.src;
//         // Once image is loaded replace the src of the HTML element
//         img.onload = () => {
//             item.classList.remove('asyncImage');
//             return item.nodeName === 'IMG' ?
//                 item.src = item.dataset.src :
//                 item.style.backgroundImage = `url(${item.dataset.src})`;
//         };
//     });
// })();