var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 5000,
    loop: true,
});

$(document).ready(function () {
    $(".fancybox").fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });



});