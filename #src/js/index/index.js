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


//! Авто-скрытие блока 

var items_1 = $('.ind-header__info-description'),
    items_2 = $('.ind-header__info-tabs'),
    items_3 = $('.ind-header__info-line'),
    timeout,
    wait = 2000;

function alive(){ 
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