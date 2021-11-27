//! Смена языка в header 

$('#indexHeaderLanguageRU').on('click', function() {
    $(this).addClass('ind-header__menu-language-active')
    $('#indexHeaderLanguageEN').removeClass('ind-header__menu-language-active')
});

$('#indexHeaderLanguageEN').on('click', function() {
    $(this).addClass('ind-header__menu-language-active')
    $('#indexHeaderLanguageRU').removeClass('ind-header__menu-language-active')
});



//! Слайдер наград 

var indexSliderReward = new Swiper(".indexSliderReward", {
    navigation: {
        nextEl: ".ind-reward__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".ind-reward__block-slider .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
    slidesPerView: 4,
    spaceBetween: 29,
});


//! Слайдер описания 

var indexDescriptionSlider = new Swiper(".indexDescriptionSlider", {
    pagination: {
        el: ".ind-description__block-slider .swiper-controls .swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".ind-description__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".ind-description__block-slider .swiper-controls .swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 0,
});



// var timeout, timeover;
// document.onmouseover = function(){
//     clearTimeout(timeover);
//     timeover = setTimeout(function(){
//         $('.ind-header__info-description').addClass('opacity')
//         $('.ind-header__info-tabs').addClass('opacity')
//         $('.ind-header__info-line').addClass('opacity')
//     }, 2000);
// }
// document.mousemove = function(){
//     clearTimeout(timeout);
//     timeout = setTimeout(function(){
//         $('.ind-header__info-description').removeClass('opacity')
//         $('.ind-header__info-tabs').removeClass('opacity')
//         $('.ind-header__info-line').removeClass('opacity')
//     }, 0);
// }

// $('body').onmouseover(function() {
//     $('.ind-header__info-description').addClass('opacity')
//     $('.ind-header__info-tabs').addClass('opacity')
//     $('.ind-header__info-line').addClass('opacity')
// })


var items_1 = $('.ind-header__info-description'),
    items_2 = $('.ind-header__info-tabs'),
    items_3 = $('.ind-header__info-line'),
    timeout,
    wait = 2000; // ms, сколько можно не двигать мышь

function alive(){ // убрать напоминалку и выставить таймер
    clearTimeout(timeout);
    items_1.css('opacity', '1')
    items_2.css('opacity', '1')
    items_3.css('opacity', '1')
    timeout = setTimeout(remind, wait);
}

function remind(){
    items_1.css('opacity', '0')
    items_2.css('opacity', '0')
    items_3.css('opacity', '0')
}

// поехали!
items_1.css('opacity', '1')
items_2.css('opacity', '1')
items_3.css('opacity', '1')
document.addEventListener( 'mousemove', alive);
timeout = setTimeout(remind, wait);


$('body').on("mousemove", function() {
    $('.ind-header__info-description').removeClass('opacity')
    $('.ind-header__info-tabs').removeClass('opacity')
    $('.ind-header__info-line').removeClass('opacity')
})
