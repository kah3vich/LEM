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
            slidesPerView: 2,
            spaceBetweenSlides: 26
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