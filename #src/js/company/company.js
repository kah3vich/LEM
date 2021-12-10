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
        1: {
            slidesPerView: 5,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 5,
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
        1: {
            slidesPerView: 3,
            spaceBetweenSlides: 40
        },
        0: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        }
    }
});
