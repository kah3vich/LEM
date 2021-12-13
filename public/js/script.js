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
    slidesPerView: 5,
    spaceBetween: 0,
    breakpoints: {
        1300: {
            slidesPerView: 5,
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
    // slidesPerView: 4,
    // spaceBetween: 0,
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
    timeout,
    wait = 10000;

function alive(){ 
    if(window.innerWidth >= 1100) {
        items_1.css('opacity', '1')
        items_2.css('opacity', '1')
    }
    // timeout = setTimeout(remind, wait);
}

function remind(){
    if(window.innerWidth >= 1100) {
        console.log('wow')
        items_1.css('opacity', '0')
        items_2.css('opacity', '0')
    }
}

// if(window.innerWidth >= 1100) {
//     items_1.css('opacity', '1')
//     items_2.css('opacity', '1')
// }
// document.addEventListener( 'mousemove', alive);

// $('.ind-header__info-description').hover(function() {
//     alive()
// })
// $('.ind-header__info-tabs').hover(function() {
//     alive()
// })

// $('body').on('mousemove', function() {
//     if($('.ind-header__info').is(':hover')) {
//         console.log('1')
//         clearTimeout(timeout)
//         timeout = null;
//         alive()
//         // timeout = setTimeout(remind, wait)
//     } else {
//         console.log('2')
//         timeout = setTimeout(remind, wait)
//     }
// });

$('.ind-header__info').on({
    mouseenter: function () {
        console.log(1)
        clearTimeout(timeout)
        timeout = null;
        alive()
    }, 
    mouseleave: function () {
        console.log(2)
        timeout = setTimeout(remind, wait)
    }
});
timeout = setTimeout(remind, wait)





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

        $('#indexHeaderSliderTitle-1').removeClass('display-n')
        $('#indexHeaderSliderTitle-2').addClass('display-n')
        $('#indexHeaderSliderTitle-3').addClass('display-n')
        $('#indexHeaderSliderTitle-4').addClass('display-n')

        $('#indexHeaderSliderCount-1').removeClass('display-n')
        $('#indexHeaderSliderCount-2').addClass('display-n')
        $('#indexHeaderSliderCount-3').addClass('display-n')
        $('#indexHeaderSliderCount-4').addClass('display-n')

        $('#indexHeaderSliderText-1').removeClass('display-n')
        $('#indexHeaderSliderText-2').addClass('display-n')
        $('#indexHeaderSliderText-3').addClass('display-n')
        $('#indexHeaderSliderText-4').addClass('display-n')
    }
    if(indexHeaderActiveSlider == 1) {
        $('#indexHeaderTabsButton-2').addClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-1').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-3').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-4').removeClass('ind-header__info-tabs-items-active')

        $('#indexHeaderSliderTitle-2').removeClass('display-n')
        $('#indexHeaderSliderTitle-1').addClass('display-n')
        $('#indexHeaderSliderTitle-3').addClass('display-n')
        $('#indexHeaderSliderTitle-4').addClass('display-n')

        $('#indexHeaderSliderCount-2').removeClass('display-n')
        $('#indexHeaderSliderCount-1').addClass('display-n')
        $('#indexHeaderSliderCount-3').addClass('display-n')
        $('#indexHeaderSliderCount-4').addClass('display-n')

        $('#indexHeaderSliderText-2').removeClass('display-n')
        $('#indexHeaderSliderText-1').addClass('display-n')
        $('#indexHeaderSliderText-3').addClass('display-n')
        $('#indexHeaderSliderText-4').addClass('display-n')
    }
    if(indexHeaderActiveSlider == 2) {
        $('#indexHeaderTabsButton-3').addClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-1').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-2').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-4').removeClass('ind-header__info-tabs-items-active')

        $('#indexHeaderSliderTitle-3').removeClass('display-n')
        $('#indexHeaderSliderTitle-2').addClass('display-n')
        $('#indexHeaderSliderTitle-1').addClass('display-n')
        $('#indexHeaderSliderTitle-4').addClass('display-n')

        $('#indexHeaderSliderCount-3').removeClass('display-n')
        $('#indexHeaderSliderCount-2').addClass('display-n')
        $('#indexHeaderSliderCount-1').addClass('display-n')
        $('#indexHeaderSliderCount-4').addClass('display-n')

        $('#indexHeaderSliderText-3').removeClass('display-n')
        $('#indexHeaderSliderText-2').addClass('display-n')
        $('#indexHeaderSliderText-1').addClass('display-n')
        $('#indexHeaderSliderText-4').addClass('display-n')
    }
    if(indexHeaderActiveSlider == 3) {
        $('#indexHeaderTabsButton-4').addClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-1').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-2').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-3').removeClass('ind-header__info-tabs-items-active')
        
        $('#indexHeaderSliderTitle-4').removeClass('display-n')
        $('#indexHeaderSliderTitle-2').addClass('display-n')
        $('#indexHeaderSliderTitle-3').addClass('display-n')
        $('#indexHeaderSliderTitle-1').addClass('display-n')

        $('#indexHeaderSliderCount-4').removeClass('display-n')
        $('#indexHeaderSliderCount-2').addClass('display-n')
        $('#indexHeaderSliderCount-3').addClass('display-n')
        $('#indexHeaderSliderCount-1').addClass('display-n')

        $('#indexHeaderSliderText-4').removeClass('display-n')
        $('#indexHeaderSliderText-2').addClass('display-n')
        $('#indexHeaderSliderText-3').addClass('display-n')
        $('#indexHeaderSliderText-1').addClass('display-n')
    }
    if(id == 0) {
        indexHeaderActiveSlider = 0
        $('#indexHeaderTabsButton-1').addClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-2').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-3').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-4').removeClass('ind-header__info-tabs-items-active')
        
        $('#indexHeaderSliderTitle-1').removeClass('display-n')
        $('#indexHeaderSliderTitle-2').addClass('display-n')
        $('#indexHeaderSliderTitle-3').addClass('display-n')
        $('#indexHeaderSliderTitle-4').addClass('display-n')

        $('#indexHeaderSliderCount-1').removeClass('display-n')
        $('#indexHeaderSliderCount-2').addClass('display-n')
        $('#indexHeaderSliderCount-3').addClass('display-n')
        $('#indexHeaderSliderCount-4').addClass('display-n')

        $('#indexHeaderSliderText-1').removeClass('display-n')
        $('#indexHeaderSliderText-2').addClass('display-n')
        $('#indexHeaderSliderText-3').addClass('display-n')
        $('#indexHeaderSliderText-4').addClass('display-n')
    }
    if(id == 1) {
        indexHeaderActiveSlider = 1
        $('#indexHeaderTabsButton-2').addClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-1').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-3').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-4').removeClass('ind-header__info-tabs-items-active')
        
        $('#indexHeaderSliderTitle-2').removeClass('display-n')
        $('#indexHeaderSliderTitle-1').addClass('display-n')
        $('#indexHeaderSliderTitle-3').addClass('display-n')
        $('#indexHeaderSliderTitle-4').addClass('display-n')

        $('#indexHeaderSliderCount-2').removeClass('display-n')
        $('#indexHeaderSliderCount-1').addClass('display-n')
        $('#indexHeaderSliderCount-3').addClass('display-n')
        $('#indexHeaderSliderCount-4').addClass('display-n')

        $('#indexHeaderSliderText-2').removeClass('display-n')
        $('#indexHeaderSliderText-1').addClass('display-n')
        $('#indexHeaderSliderText-3').addClass('display-n')
        $('#indexHeaderSliderText-4').addClass('display-n')
    }
    if(id == 2) {
        indexHeaderActiveSlider = 2
        $('#indexHeaderTabsButton-3').addClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-1').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-2').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-4').removeClass('ind-header__info-tabs-items-active')
        
        $('#indexHeaderSliderTitle-3').removeClass('display-n')
        $('#indexHeaderSliderTitle-2').addClass('display-n')
        $('#indexHeaderSliderTitle-1').addClass('display-n')
        $('#indexHeaderSliderTitle-4').addClass('display-n')

        $('#indexHeaderSliderCount-3').removeClass('display-n')
        $('#indexHeaderSliderCount-2').addClass('display-n')
        $('#indexHeaderSliderCount-1').addClass('display-n')
        $('#indexHeaderSliderCount-4').addClass('display-n')

        $('#indexHeaderSliderText-3').removeClass('display-n')
        $('#indexHeaderSliderText-2').addClass('display-n')
        $('#indexHeaderSliderText-1').addClass('display-n')
        $('#indexHeaderSliderText-4').addClass('display-n')
    }
    if(id == 3) {
        indexHeaderActiveSlider = 3
        $('#indexHeaderTabsButton-4').addClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-1').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-2').removeClass('ind-header__info-tabs-items-active')
        $('#indexHeaderTabsButton-3').removeClass('ind-header__info-tabs-items-active')
        
        $('#indexHeaderSliderTitle-4').removeClass('display-n')
        $('#indexHeaderSliderTitle-2').addClass('display-n')
        $('#indexHeaderSliderTitle-3').addClass('display-n')
        $('#indexHeaderSliderTitle-1').addClass('display-n')

        $('#indexHeaderSliderCount-4').removeClass('display-n')
        $('#indexHeaderSliderCount-2').addClass('display-n')
        $('#indexHeaderSliderCount-3').addClass('display-n')
        $('#indexHeaderSliderCount-1').addClass('display-n')

        $('#indexHeaderSliderText-4').removeClass('display-n')
        $('#indexHeaderSliderText-2').addClass('display-n')
        $('#indexHeaderSliderText-3').addClass('display-n')
        $('#indexHeaderSliderText-1').addClass('display-n')
    }
}


//! Вкладки - process

$('#indexProcessTabs-1').on('click', function() {
    $(this).addClass('process__block-tabs-active')
    $('#indexProcessTabs-2').removeClass('process__block-tabs-active')
    $('#indexProcessTabs-3').removeClass('process__block-tabs-active')
    $('#indexProcessTabs-4').removeClass('process__block-tabs-active')
    $('#indexProcessTabsList-1').removeClass('display-n')
    $('#indexProcessTabsList-2').addClass('display-n')
    $('#indexProcessTabsList-3').addClass('display-n')
    $('#indexProcessTabsList-4').addClass('display-n')
})
$('#indexProcessTabs-2').on('click', function() {
    $(this).addClass('process__block-tabs-active')
    $('#indexProcessTabs-1').removeClass('process__block-tabs-active')
    $('#indexProcessTabs-3').removeClass('process__block-tabs-active')
    $('#indexProcessTabs-4').removeClass('process__block-tabs-active')
    $('#indexProcessTabsList-2').removeClass('display-n')
    $('#indexProcessTabsList-1').addClass('display-n')
    $('#indexProcessTabsList-3').addClass('display-n')
    $('#indexProcessTabsList-4').addClass('display-n')
})
$('#indexProcessTabs-3').on('click', function() {
    $(this).addClass('process__block-tabs-active')
    $('#indexProcessTabs-1').removeClass('process__block-tabs-active')
    $('#indexProcessTabs-2').removeClass('process__block-tabs-active')
    $('#indexProcessTabs-4').removeClass('process__block-tabs-active')
    $('#indexProcessTabsList-3').removeClass('display-n')
    $('#indexProcessTabsList-1').addClass('display-n')
    $('#indexProcessTabsList-2').addClass('display-n')
    $('#indexProcessTabsList-4').addClass('display-n')
})
$('#indexProcessTabs-4').on('click', function() {
    $(this).addClass('process__block-tabs-active')
    $('#indexProcessTabs-1').removeClass('process__block-tabs-active')
    $('#indexProcessTabs-3').removeClass('process__block-tabs-active')
    $('#indexProcessTabs-2').removeClass('process__block-tabs-active')
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



var t1 = new TimelineMax({paused: true});

// t1.to(".menu", 0.9, {
//         autoAlpha: 1
// });

// $('.main-menu-item:nth-child(1)').on('click', function() {
//         alert(1)
// });

t1.from(".menu", 0.9, {
    autoAlpha: 0
});


t1.reverse();

$("#menu-open").on("click", function() {
    t1.reversed(!t1.reversed());
    $('.header__nav-logo').css('opacity', '0')
    $('body').css('overflow', 'hidden')
    $('.header__nav-burger svg').css('opacity', '0')
});

$("#menu-close").on("click", function() {
    t1.reversed(!t1.reversed());
    $('.header__nav-logo').css('opacity', '1')
    $('body').css('overflow', 'visible')
    $('.header__nav-burger svg').css('opacity', '1')
});


$('#menuItems-1').on('click', function() {
    $('#menuItems-1 svg').toggleClass('rotate-45')
    $('#menuItems-2 svg').removeClass('rotate-45')
    $('ul.menu__block-list-items-content').slideToggle('normal');
    $('ul.menu__block-list-items-sliders').slideUp('normal');
});

$('#menuItems-2').on('click', function() {
    $('#menuItems-2 svg').toggleClass('rotate-45')
    $('#menuItems-1 svg').removeClass('rotate-45')
    $('ul.menu__block-list-items-sliders').slideToggle('normal');
    $('ul.menu__block-list-items-content').slideUp('normal');
});





var menuSliders = new Swiper(".menuSliders", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: ".menu__block-list-items-sliders .swiper-controls .swiper-button-next",
        prevEl: ".menu__block-list-items-sliders .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".menu__block-list-items-sliders .swiper-controls .swiper-pagination",
    },
    keyboard: true,
    breakpoints: {
        800: {
            slidesPerView: 3,
            spaceBetweenSlides: 20
        },
        800: {
            slidesPerView: 2,
            spaceBetweenSlides: 60,
            spaceBetween: 60,
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0,
            spaceBetween: 0,
        }
    }
});


var indexObjectsSlider = new Swiper(".indexObjectsSlider", {
    navigation: {
        nextEl: ".ind-objects__slider .swiper-controls .swiper-button-next",
        prevEl: ".ind-objects__slider .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".ind-objects__slider .swiper-controls .swiper-pagination",
    },
    keyboard: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});






$('#newProcessTabs-1').on('click', function() {
    $(this).addClass('new-process__block-tabs-active')
    $('#newProcessTabs-2').removeClass('new-process__block-tabs-active')
    $('#newProcessTabs-3').removeClass('new-process__block-tabs-active')
    $('#newProcessTabs-4').removeClass('new-process__block-tabs-active')
    $('#newProcessTabsList-1').removeClass('display-n')
    $('#newProcessTabsList-2').addClass('display-n')
    $('#newProcessTabsList-3').addClass('display-n')
    $('#newProcessTabsList-4').addClass('display-n')
})
$('#newProcessTabs-2').on('click', function() {
    $(this).addClass('new-process__block-tabs-active')
    $('#newProcessTabs-1').removeClass('new-process__block-tabs-active')
    $('#newProcessTabs-3').removeClass('new-process__block-tabs-active')
    $('#newProcessTabs-4').removeClass('new-process__block-tabs-active')
    $('#newProcessTabsList-2').removeClass('display-n')
    $('#newProcessTabsList-1').addClass('display-n')
    $('#newProcessTabsList-3').addClass('display-n')
    $('#newProcessTabsList-4').addClass('display-n')
})
$('#newProcessTabs-3').on('click', function() {
    $(this).addClass('new-process__block-tabs-active')
    $('#newProcessTabs-1').removeClass('new-process__block-tabs-active')
    $('#newProcessTabs-2').removeClass('new-process__block-tabs-active')
    $('#newProcessTabs-4').removeClass('new-process__block-tabs-active')
    $('#newProcessTabsList-3').removeClass('display-n')
    $('#newProcessTabsList-1').addClass('display-n')
    $('#newProcessTabsList-2').addClass('display-n')
    $('#newProcessTabsList-4').addClass('display-n')
})
$('#newProcessTabs-4').on('click', function() {
    $(this).addClass('new-process__block-tabs-active')
    $('#newProcessTabs-1').removeClass('new-process__block-tabs-active')
    $('#newProcessTabs-3').removeClass('new-process__block-tabs-active')
    $('#newProcessTabs-2').removeClass('new-process__block-tabs-active')
    $('#newProcessTabsList-4').removeClass('display-n')
    $('#newProcessTabsList-1').addClass('display-n')
    $('#newProcessTabsList-3').addClass('display-n')
    $('#newProcessTabsList-2').addClass('display-n')
})

var companySecretSlider = new Swiper(".companySecretSlider", {
    navigation: {
        nextEl: ".comp-secret__slider-block .swiper-controls .swiper-button-next",
        prevEl: ".comp-secret__slider-block .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".comp-secret__slider-block .swiper-controls .swiper-pagination",
    },
    keyboard: true,
    slidesPerView:5,
    breakpoints: {
        1400: {
            slidesPerView: 5,
            spaceBetweenSlides: 0
        },
        950: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        720: {
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



var companySliders = new Swiper(".companySliders", {
    loop: true,
    navigation: {
        nextEl: ".comp-slider__block-controls-arrow-next",
        prevEl: ".comp-slider__block-controls-arrow-prev",
    },
    pagination: {
        el: ".comp-slider__block-sliders .swiper-controls .swiper-pagination",
    },
    keyboard: true,
    breakpoints: {
        1255: {
            slidesPerView: 3,
            spaceBetweenSlides: 40
        },
        850: {
            slidesPerView: 3,
            spaceBetweenSlides: 40
        },
        550: {
            slidesPerView: 2,
            spaceBetweenSlides: 40
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 40
        }
    }
});


var companyCareerSlider = new Swiper(".companyCareerSlider", {
    pagination: {
        el: ".comp-career__content-slider .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        1050: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        900: {
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

let activeContentObject = 0
let elementContentCountObject = 15

$('#objectsBlock-1').removeClass('display-n')

for ( let i = 1; i <= 15; i++ ) {
    $(`#objectButtonPrev-${i}`).on('click', function() {
        changeSlide('prev')
    })
}

for ( let i = 1; i <= 15; i++ ) {
    $(`#objectButtonNext-${i}`).on('click', function() {
        changeSlide('next')
    })
}

function changeSlide(id) { 
    if(id === 'next') {
        activeContentObject++
        if (activeContentObject === elementContentCountObject) {
            activeContentObject = 0
        } 
    } else if (id === 'prev') {
        activeContentObject--
        if (activeContentObject < 0) {
            activeContentObject = elementContentCountObject - 1
        }
    }
    for ( let i = 0; i <= elementContentCountObject; i++ ) {
        if(activeContentObject == i) {
            for ( let j = 1; j <= elementContentCountObject; j++ ) {
                $(`#objectsBlock-${j}`).addClass('display-n')
            }
            $(`#objectsBlock-${i + 1}`).removeClass('display-n')
        }
    }
}