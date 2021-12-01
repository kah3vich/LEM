$(function() {
    if(window.innerWidth <= 1100) {
        $('.ind-header__info-description-add').addClass('opacity')
    }
})



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
    breakpoints: {
        1300: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        1000: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        600: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    }
});


//! Слайдер описания 

var indexDescriptionSlider = new Swiper(".indexDescriptionSlider", {
    pagination: {
        el: ".ind-description__block-slider .swiper-controls .swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".ind-description__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".ind-description__block-slider .swiper-controls .swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    scrollbar: {
        el: ".ind-description__block-slider .swiper-scrollbar"
    },
    breakpoints: {
        1380: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        1000: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        700: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    }
});


//! Авто-скрытие блока 

var items_1 = $('.ind-header__info-description'),
    items_2 = $('.ind-header__info-tabs'),
    // items_3 = $('.ind-header__info-line'),
    timeout,
    wait = 2000;

function alive(){ 
    clearTimeout(timeout);
    if(window.innerWidth >= 1100) {
        items_1.css('opacity', '1')
        items_2.css('opacity', '1')
    }
    timeout = setTimeout(remind, wait);
}

function remind(){
    if(window.innerWidth >= 1100) {
        items_1.css('opacity', '0')
        items_2.css('opacity', '0')
    }
}

if(window.innerWidth >= 1100) {
    items_1.css('opacity', '1')
    items_2.css('opacity', '1')
}
document.addEventListener( 'mousemove', alive);
timeout = setTimeout(remind, wait);


$('body').on("mousemove", function() {
    $('.ind-header__info-description').removeClass('opacity')
    $('.ind-header__info-tabs').removeClass('opacity')
    $('.ind-header__info-line').removeClass('opacity')
})



//! Слайдер - slider


let sliderIndexActiveContent = 0
let sliderIndexContentCount = 4

$('#SliderButtonNext').on('click', function() {
    sliderIndexSlider('next')
})

$('#SliderButtonPrev').on('click', function() {
    sliderIndexSlider('prev')
})

function sliderIndexSlider(id) { 
    if(id === 'next') {
        sliderIndexActiveContent++
        if (sliderIndexActiveContent === sliderIndexContentCount) {
            sliderIndexActiveContent = 0
        } 
    } else if (id === 'prev') {
        sliderIndexActiveContent--
        if (sliderIndexActiveContent < 0) {
            sliderIndexActiveContent = sliderIndexContentCount - 1
        }
    }
    if(sliderIndexActiveContent == 0) {
        $('.ind-slider__wrapper-slide-count p').html('01')
        $('.ind-slider__wrapper-info-text').html('«Модернизация электросетевого хозяйства страны – стратегическое направление деятельности нашей компании.»')
    }
    if(sliderIndexActiveContent == 1) {
        $('.ind-slider__wrapper-slide-count p').html('02')
        $('.ind-slider__wrapper-info-text').html('«2 Модернизация электросетевого хозяйства страны – стратегическое направление деятельности нашей компании.»')
    }
    if(sliderIndexActiveContent == 2) {
        $('.ind-slider__wrapper-slide-count p').html('03')
        $('.ind-slider__wrapper-info-text').html('«3 Модернизация электросетевого хозяйства страны – стратегическое направление деятельности нашей компании.»')
    }
    if(sliderIndexActiveContent == 3) {
        $('.ind-slider__wrapper-slide-count p').html('04')
        $('.ind-slider__wrapper-info-text').html('«4 Модернизация электросетевого хозяйства страны – стратегическое направление деятельности нашей компании.»')
    }
}



//! Слайдер - Header 

$('#indexHeaderTabsButton-1').on('click', function() {
    indexHeaderSlider(0)
})
$('#indexHeaderTabsButton-2').on('click', function() {
    indexHeaderSlider(1)
})
$('#indexHeaderTabsButton-3').on('click', function() {
    indexHeaderSlider(2)
    $(this).addClass('ind-header__info-tabs-items-active')
    $('#indexHeaderTabsButton-2').removeClass('ind-header__info-tabs-items-active')
    $('#indexHeaderTabsButton-1').removeClass('ind-header__info-tabs-items-active')
    $('#indexHeaderTabsButton-4').removeClass('ind-header__info-tabs-items-active')
})
$('#indexHeaderTabsButton-4').on('click', function() {
    indexHeaderSlider(3)
    $(this).addClass('ind-header__info-tabs-items-active')
    $('#indexHeaderTabsButton-2').removeClass('ind-header__info-tabs-items-active')
    $('#indexHeaderTabsButton-3').removeClass('ind-header__info-tabs-items-active')
    $('#indexHeaderTabsButton-1').removeClass('ind-header__info-tabs-items-active')
})



let indexHeaderActiveSlider = 0
let indexHeaderSliderCount = 4

$('.ind-header__info-description-add-slider-next').on('click', function() {
    indexHeaderSlider('next')
})

$('.ind-header__info-description-add-slider-prev').on('click', function() {
    indexHeaderSlider('prev')
})

function indexHeaderSlider(id) { 
    if(id === 'next') {
        indexHeaderActiveSlider++
        if (indexHeaderActiveSlider === indexHeaderSliderCount) {
            indexHeaderActiveSlider = 0
        } 
    } else if (id === 'prev') {
        indexHeaderActiveSlider--
        if (indexHeaderActiveSlider < 0) {
            indexHeaderActiveSlider = indexHeaderSliderCount - 1
        }
    }
    if(indexHeaderActiveSlider == 0) {
        $('#indexHeaderTabsButton-1').addClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-2').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-3').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-4').removeClass('ind-header__info-tabs-items-active')
        $('.ind-header__info-description-add-banner').html(15)
        $('.ind-header__info-description-add-title').html('Годовой оборот')
    }
    if(indexHeaderActiveSlider == 1) {
        $('#indexHeaderTabsButton-2').addClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-1').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-3').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-4').removeClass('ind-header__info-tabs-items-active')
        $('.ind-header__info-description-add-banner').html(7.5)
        $('.ind-header__info-description-add-title').html('Месячный оборот')
    }
    if(indexHeaderActiveSlider == 2) {
        $('#indexHeaderTabsButton-3').addClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-1').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-2').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-4').removeClass('ind-header__info-tabs-items-active')
        $('.ind-header__info-description-add-banner').html(21)
        $('.ind-header__info-description-add-title').html('Месячный оборот')
    }
    if(indexHeaderActiveSlider == 3) {
        $('#indexHeaderTabsButton-4').addClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-1').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-2').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-3').removeClass('ind-header__info-tabs-items-active')
        $('.ind-header__info-description-add-banner').html(33)
        $('.ind-header__info-description-add-title').html('Месячный оборот')
    }
    if(id == 0) {
        indexHeaderActiveSlider = 0
        $('#indexHeaderTabsButton-1').addClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-2').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-3').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-4').removeClass('ind-header__info-tabs-items-active')
        $('.ind-header__info-description-add-banner').html(15)
        $('.ind-header__info-description-add-title').html('Годовой оборот')
    }
    if(id == 1) {
        indexHeaderActiveSlider = 1
        $('#indexHeaderTabsButton-2').addClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-1').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-3').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-4').removeClass('ind-header__info-tabs-items-active')
        $('.ind-header__info-description-add-banner').html(7.5)
        $('.ind-header__info-description-add-title').html('Месячный оборот')
    }
    if(id == 2) {
        indexHeaderActiveSlider = 2
        $('#indexHeaderTabsButton-3').addClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-1').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-2').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-4').removeClass('ind-header__info-tabs-items-active')
        $('.ind-header__info-description-add-banner').html(21)
        $('.ind-header__info-description-add-title').html('Месячный оборот')
    }
    if(id == 3) {
        indexHeaderActiveSlider = 3
        $('#indexHeaderTabsButton-4').addClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-1').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-2').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-3').removeClass('ind-header__info-tabs-items-active')
        $('.ind-header__info-description-add-banner').html(33)
        $('.ind-header__info-description-add-title').html('Месячный оборот')
    }
}


//! Вкладки - process

$('#indexProcessTabs-1').on('click', function() {
    $(this).addClass('ind-process__block-tabs-active')
    $('#indexProcessTabs-2').removeClass('ind-process__block-tabs-active')
    $('#indexProcessTabs-3').removeClass('ind-process__block-tabs-active')
    $('#indexProcessTabs-4').removeClass('ind-process__block-tabs-active')
    $('#indexProcessTabsList-1').removeClass('display-n')
    $('#indexProcessTabsList-2').addClass('display-n')
    $('#indexProcessTabsList-3').addClass('display-n')
    $('#indexProcessTabsList-4').addClass('display-n')
})
$('#indexProcessTabs-2').on('click', function() {
    $(this).addClass('ind-process__block-tabs-active')
    $('#indexProcessTabs-1').removeClass('ind-process__block-tabs-active')
    $('#indexProcessTabs-3').removeClass('ind-process__block-tabs-active')
    $('#indexProcessTabs-4').removeClass('ind-process__block-tabs-active')
    $('#indexProcessTabsList-2').removeClass('display-n')
    $('#indexProcessTabsList-1').addClass('display-n')
    $('#indexProcessTabsList-3').addClass('display-n')
    $('#indexProcessTabsList-4').addClass('display-n')
})
$('#indexProcessTabs-3').on('click', function() {
    $(this).addClass('ind-process__block-tabs-active')
    $('#indexProcessTabs-1').removeClass('ind-process__block-tabs-active')
    $('#indexProcessTabs-2').removeClass('ind-process__block-tabs-active')
    $('#indexProcessTabs-4').removeClass('ind-process__block-tabs-active')
    $('#indexProcessTabsList-3').removeClass('display-n')
    $('#indexProcessTabsList-1').addClass('display-n')
    $('#indexProcessTabsList-2').addClass('display-n')
    $('#indexProcessTabsList-4').addClass('display-n')
})
$('#indexProcessTabs-4').on('click', function() {
    $(this).addClass('ind-process__block-tabs-active')
    $('#indexProcessTabs-1').removeClass('ind-process__block-tabs-active')
    $('#indexProcessTabs-3').removeClass('ind-process__block-tabs-active')
    $('#indexProcessTabs-2').removeClass('ind-process__block-tabs-active')
    $('#indexProcessTabsList-4').removeClass('display-n')
    $('#indexProcessTabsList-1').addClass('display-n')
    $('#indexProcessTabsList-3').addClass('display-n')
    $('#indexProcessTabsList-2').addClass('display-n')
})


$('.ind-header__info-media-wrapper').on('click', function() {
    $('.ind-header__info-media-arrow').toggleClass('rotate-arrow')
    $('.ind-header__info-description-add').toggleClass('opacity')
    $('.ind-header__info-play').toggleClass('display-n')
});