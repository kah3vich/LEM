$(() => {
	if (window.innerWidth <= 1100) {
		$('.ind-header__info-description-add').addClass('opacity')
	}
})

var wow = new WOW({
	mobile: false,
})
wow.init()

$(window).width(() => {
	if ($(window).width() < 992) {
		$('.animated').removeClass('animated')
	}
})

// jQuery(function ($) {
// 	$('video').lazy()
// })

//! Смена языка в header

$('#indexHeaderLanguageRU').on('click', function () {
	$(this).addClass('ind-header__menu-language-active')
	$('#indexHeaderLanguageEN').removeClass('ind-header__menu-language-active')
})

$('#indexHeaderLanguageEN').on('click', function () {
	$(this).addClass('ind-header__menu-language-active')
	$('#indexHeaderLanguageRU').removeClass('ind-header__menu-language-active')
})

//! Слайдер наград

var indexSliderReward = new Swiper('.indexSliderReward', {
	navigation: {
		nextEl: '.ind-reward__block-slider .swiper-controls .swiper-button-next',
		prevEl: '.ind-reward__block-slider .swiper-controls .swiper-button-prev',
	},
	keyboard: true,
	slidesPerView: 5,
	spaceBetween: 0,
	breakpoints: {
		1300: {
			slidesPerView: 5,
			spaceBetweenSlides: 0,
		},
		1000: {
			slidesPerView: 3,
			spaceBetweenSlides: 0,
		},
		600: {
			slidesPerView: 2,
			spaceBetweenSlides: 0,
		},
		0: {
			slidesPerView: 1,
			spaceBetweenSlides: 0,
		},
	},
})

//! Слайдер описания

var indexDescriptionSlider = new Swiper('.indexDescriptionSlider', {
	pagination: {
		el: '.sliders__block-slider .swiper-controls .swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.sliders__block-slider .swiper-controls .swiper-button-next',
		prevEl: '.sliders__block-slider .swiper-controls .swiper-button-prev',
	},
	// slidesPerView: 4,
	// spaceBetween: 0,
	slidesPerGroupSkip: 1,
	grabCursor: true,
	scrollbar: {
		el: '.sliders__block-slider .swiper-controls .swiper-scrollbar',
	},
	breakpoints: {
		1380: {
			slidesPerView: 4,
			spaceBetweenSlides: 0,
		},
		1000: {
			slidesPerView: 3,
			spaceBetweenSlides: 0,
		},
		700: {
			slidesPerView: 2,
			spaceBetweenSlides: 0,
		},
		0: {
			slidesPerView: 1,
			spaceBetweenSlides: 0,
		},
	},
})

//! Авто-скрытие блока

var items_1 = $('.ind-header__info-description'),
	items_2 = $('#indexHeaderTabs'),
	timeout,
	wait = 10000

function alive() {
	if (window.innerWidth >= 1100) {
		items_1.css('opacity', '1')
		items_2.css('opacity', '1')
	}
	// timeout = setTimeout(remind, wait);
}

function remind() {
	if (window.innerWidth >= 1100) {
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
		clearTimeout(timeout)
		timeout = null
		alive()
	},
	mouseleave: function () {
		timeout = setTimeout(remind, wait)
	},
})
timeout = setTimeout(remind, wait)

//! Слайдер - slider

let sliderIndexActiveContent = 0
let sliderIndexContentCount = 4

$('#SliderButtonNext').on('click', function () {
	sliderIndexSlider('next')
})

$('#SliderButtonPrev').on('click', function () {
	sliderIndexSlider('prev')
})

function sliderIndexSlider(id) {
	if (id === 'next') {
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
	if (sliderIndexActiveContent == 0) {
		$('.ind-slider__wrapper-slide-count p').html('01')
		$('#indexSliderTitle-1').removeClass('display-n')
		$('#indexSliderTitle-2').addClass('display-n')
		$('#indexSliderTitle-3').addClass('display-n')
		$('#indexSliderTitle-4').addClass('display-n')
		$('#indexSliderText-1').removeClass('display-n')
		$('#indexSliderText-2').addClass('display-n')
		$('#indexSliderText-3').addClass('display-n')
		$('#indexSliderText-4').addClass('display-n')
	}
	if (sliderIndexActiveContent == 1) {
		$('.ind-slider__wrapper-slide-count p').html('02')
		$('#indexSliderTitle-2').removeClass('display-n')
		$('#indexSliderTitle-1').addClass('display-n')
		$('#indexSliderTitle-3').addClass('display-n')
		$('#indexSliderTitle-4').addClass('display-n')
		$('#indexSliderText-2').removeClass('display-n')
		$('#indexSliderText-1').addClass('display-n')
		$('#indexSliderText-3').addClass('display-n')
		$('#indexSliderText-4').addClass('display-n')
	}
	if (sliderIndexActiveContent == 2) {
		$('.ind-slider__wrapper-slide-count p').html('03')
		$('#indexSliderTitle-3').removeClass('display-n')
		$('#indexSliderTitle-2').addClass('display-n')
		$('#indexSliderTitle-1').addClass('display-n')
		$('#indexSliderTitle-4').addClass('display-n')
		$('#indexSliderText-3').removeClass('display-n')
		$('#indexSliderText-2').addClass('display-n')
		$('#indexSliderText-1').addClass('display-n')
		$('#indexSliderText-4').addClass('display-n')
	}
	if (sliderIndexActiveContent == 3) {
		$('.ind-slider__wrapper-slide-count p').html('04')
		$('#indexSliderTitle-4').removeClass('display-n')
		$('#indexSliderTitle-2').addClass('display-n')
		$('#indexSliderTitle-3').addClass('display-n')
		$('#indexSliderTitle-1').addClass('display-n')
		$('#indexSliderText-4').removeClass('display-n')
		$('#indexSliderText-2').addClass('display-n')
		$('#indexSliderText-3').addClass('display-n')
		$('#indexSliderText-1').addClass('display-n')
	}
}

//! Слайдер - Header

$('#indexHeaderTabsButton-1').on('click', function () {
	indexHeaderSlider(0)
})
$('#indexHeaderTabsButton-2').on('click', function () {
	indexHeaderSlider(1)
})
$('#indexHeaderTabsButton-3').on('click', function () {
	indexHeaderSlider(2)
	$(this).addClass('ind-header__info-tabs-items-active')
	$('#indexHeaderTabsButton-2').removeClass(
		'ind-header__info-tabs-items-active'
	)
	$('#indexHeaderTabsButton-1').removeClass(
		'ind-header__info-tabs-items-active'
	)
	$('#indexHeaderTabsButton-4').removeClass(
		'ind-header__info-tabs-items-active'
	)
})
$('#indexHeaderTabsButton-4').on('click', function () {
	indexHeaderSlider(3)
	$(this).addClass('ind-header__info-tabs-items-active')
	$('#indexHeaderTabsButton-2').removeClass(
		'ind-header__info-tabs-items-active'
	)
	$('#indexHeaderTabsButton-3').removeClass(
		'ind-header__info-tabs-items-active'
	)
	$('#indexHeaderTabsButton-1').removeClass(
		'ind-header__info-tabs-items-active'
	)
})

let indexHeaderActiveSlider = 0
let indexHeaderSliderCount = 4

$('.ind-header__info-description-add-slider-next').on('click', function () {
	indexHeaderSlider('next')
})

$('.ind-header__info-description-add-slider-prev').on('click', function () {
	indexHeaderSlider('prev')
})

function indexHeaderSlider(id) {
	if (id === 'next') {
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
	if (indexHeaderActiveSlider == 0) {
		$('#indexHeaderTabsButton-1').addClass('ind-header__info-tabs-items-active')
		$('#indexHeaderTabsButton-2').removeClass(
			'ind-header__info-tabs-items-active'
		)
		$('#indexHeaderTabsButton-3').removeClass(
			'ind-header__info-tabs-items-active'
		)
		$('#indexHeaderTabsButton-4').removeClass(
			'ind-header__info-tabs-items-active'
		)

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
	if (indexHeaderActiveSlider == 1) {
		$('#indexHeaderTabsButton-2').addClass('ind-header__info-tabs-items-active')
		$('#indexHeaderTabsButton-1').removeClass(
			'ind-header__info-tabs-items-active'
		)
		$('#indexHeaderTabsButton-3').removeClass(
			'ind-header__info-tabs-items-active'
		)
		$('#indexHeaderTabsButton-4').removeClass(
			'ind-header__info-tabs-items-active'
		)

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
	if (indexHeaderActiveSlider == 2) {
		$('#indexHeaderTabsButton-3').addClass('ind-header__info-tabs-items-active')
		$('#indexHeaderTabsButton-1').removeClass(
			'ind-header__info-tabs-items-active'
		)
		$('#indexHeaderTabsButton-2').removeClass(
			'ind-header__info-tabs-items-active'
		)
		$('#indexHeaderTabsButton-4').removeClass(
			'ind-header__info-tabs-items-active'
		)

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
	if (indexHeaderActiveSlider == 3) {
		$('#indexHeaderTabsButton-4').addClass('ind-header__info-tabs-items-active')
		$('#indexHeaderTabsButton-1').removeClass(
			'ind-header__info-tabs-items-active'
		)
		$('#indexHeaderTabsButton-2').removeClass(
			'ind-header__info-tabs-items-active'
		)
		$('#indexHeaderTabsButton-3').removeClass(
			'ind-header__info-tabs-items-active'
		)

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
	if (id == 0) {
		indexHeaderActiveSlider = 0
		$('#indexHeaderTabsButton-1').addClass('ind-header__info-tabs-items-active')
		$('#indexHeaderTabsButton-2').removeClass(
			'ind-header__info-tabs-items-active'
		)
		$('#indexHeaderTabsButton-3').removeClass(
			'ind-header__info-tabs-items-active'
		)
		$('#indexHeaderTabsButton-4').removeClass(
			'ind-header__info-tabs-items-active'
		)

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
	if (id == 1) {
		indexHeaderActiveSlider = 1
		$('#indexHeaderTabsButton-2').addClass('ind-header__info-tabs-items-active')
		$('#indexHeaderTabsButton-1').removeClass(
			'ind-header__info-tabs-items-active'
		)
		$('#indexHeaderTabsButton-3').removeClass(
			'ind-header__info-tabs-items-active'
		)
		$('#indexHeaderTabsButton-4').removeClass(
			'ind-header__info-tabs-items-active'
		)

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
	if (id == 2) {
		indexHeaderActiveSlider = 2
		$('#indexHeaderTabsButton-3').addClass('ind-header__info-tabs-items-active')
		$('#indexHeaderTabsButton-1').removeClass(
			'ind-header__info-tabs-items-active'
		)
		$('#indexHeaderTabsButton-2').removeClass(
			'ind-header__info-tabs-items-active'
		)
		$('#indexHeaderTabsButton-4').removeClass(
			'ind-header__info-tabs-items-active'
		)

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
	if (id == 3) {
		indexHeaderActiveSlider = 3
		$('#indexHeaderTabsButton-4').addClass('ind-header__info-tabs-items-active')
		$('#indexHeaderTabsButton-1').removeClass(
			'ind-header__info-tabs-items-active'
		)
		$('#indexHeaderTabsButton-2').removeClass(
			'ind-header__info-tabs-items-active'
		)
		$('#indexHeaderTabsButton-3').removeClass(
			'ind-header__info-tabs-items-active'
		)

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

$('#indexProcessTabs-1').on('click', function () {
	$(this).addClass('process__block-tabs-active')
	$('#indexProcessTabs-2').removeClass('process__block-tabs-active')
	$('#indexProcessTabs-3').removeClass('process__block-tabs-active')
	$('#indexProcessTabs-4').removeClass('process__block-tabs-active')
	$('#indexProcessTabsList-1').removeClass('display-n')
	$('#indexProcessTabsList-2').addClass('display-n')
	$('#indexProcessTabsList-3').addClass('display-n')
	$('#indexProcessTabsList-4').addClass('display-n')
})
$('#indexProcessTabs-2').on('click', function () {
	$(this).addClass('process__block-tabs-active')
	$('#indexProcessTabs-1').removeClass('process__block-tabs-active')
	$('#indexProcessTabs-3').removeClass('process__block-tabs-active')
	$('#indexProcessTabs-4').removeClass('process__block-tabs-active')
	$('#indexProcessTabsList-2').removeClass('display-n')
	$('#indexProcessTabsList-1').addClass('display-n')
	$('#indexProcessTabsList-3').addClass('display-n')
	$('#indexProcessTabsList-4').addClass('display-n')
})
$('#indexProcessTabs-3').on('click', function () {
	$(this).addClass('process__block-tabs-active')
	$('#indexProcessTabs-1').removeClass('process__block-tabs-active')
	$('#indexProcessTabs-2').removeClass('process__block-tabs-active')
	$('#indexProcessTabs-4').removeClass('process__block-tabs-active')
	$('#indexProcessTabsList-3').removeClass('display-n')
	$('#indexProcessTabsList-1').addClass('display-n')
	$('#indexProcessTabsList-2').addClass('display-n')
	$('#indexProcessTabsList-4').addClass('display-n')
})
$('#indexProcessTabs-4').on('click', function () {
	$(this).addClass('process__block-tabs-active')
	$('#indexProcessTabs-1').removeClass('process__block-tabs-active')
	$('#indexProcessTabs-3').removeClass('process__block-tabs-active')
	$('#indexProcessTabs-2').removeClass('process__block-tabs-active')
	$('#indexProcessTabsList-4').removeClass('display-n')
	$('#indexProcessTabsList-1').addClass('display-n')
	$('#indexProcessTabsList-3').addClass('display-n')
	$('#indexProcessTabsList-2').addClass('display-n')
})

$('.ind-header__info-media-wrapper').on('click', function () {
	$('.ind-header__info-media-arrow').toggleClass('rotate-arrow')
	$('.ind-header__info-description-add').toggleClass('opacity')
	$('.ind-header__info-play').toggleClass('display-n')
})

var t1 = new TimelineMax({ paused: true })

t1.from('.menu', 0.9, {
	autoAlpha: 0,
})

t1.reverse()

$('#menu-open').on('click', function () {
	t1.reversed(!t1.reversed())
	$('body').css('overflow', 'hidden')
	$('.header__nav-burger svg').css('opacity', '0')
	// $('.menu').removeClass('display-n')
})

$('#menu-close').on('click', function () {
	t1.reversed(!t1.reversed())
	$('body').css('overflow', 'visible')
	$('.header__nav-burger svg').css('opacity', '1')
	// setTimeout(() => {
	// 	$('.menu').addClass('display-n')
	// }, 2000);
})

// $('#menuItems-1').on('click', function() {
//     $('#menuItems-1 svg').toggleClass('rotate-45')
//     $('#menuItems-2 svg').removeClass('rotate-45')
//     $('ul.menu__block-list-items-content').slideToggle('normal');
//     $('ul.menu__block-list-items-sliders').slideUp('normal');
// });

// $('#menuItems-2').on('click', function() {
//     $('#menuItems-2 svg').toggleClass('rotate-45')
//     $('#menuItems-1 svg').removeClass('rotate-45')
//     $('ul.menu__block-list-items-sliders').slideToggle('normal');
//     $('ul.menu__block-list-items-content').slideUp('normal');
// });

var menuSliders = new Swiper('.menuSliders', {
	slidesPerView: 3,
	spaceBetween: 20,
	navigation: {
		nextEl:
			'.menu__block-list-items-sliders .swiper-controls .swiper-button-next',
		prevEl:
			'.menu__block-list-items-sliders .swiper-controls .swiper-button-prev',
	},
	pagination: {
		el: '.menu__block-list-items-sliders .swiper-controls .swiper-pagination',
	},
	keyboard: true,
	breakpoints: {
		800: {
			slidesPerView: 3,
			spaceBetweenSlides: 20,
		},
		600: {
			slidesPerView: 2,
			spaceBetweenSlides: 60,
		},
		0: {
			slidesPerView: 1,
			spaceBetweenSlides: 0,
			spaceBetween: 0,
		},
	},
})

var indexObjectsSlider = new Swiper('.indexObjectsSlider', {
	navigation: {
		nextEl: '.ind-objects__slider .swiper-controls .swiper-button-next',
		prevEl: '.ind-objects__slider .swiper-controls .swiper-button-prev',
	},
	pagination: {
		el: '.ind-objects__slider .swiper-controls .swiper-pagination',
	},
	keyboard: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
})

$('.ind-header__info-play').on('click', () => {
	$('.modelVideo').removeClass('display-n')
	$('body').css('overflow', 'hidden')
})
$('.modelVideo__close').on('click', () => {
	$('.modelVideo').addClass('display-n')
	$('body').css('overflow', 'visible')
	document.getElementById('modelVideo').pause()
})

$('.ind-object__block-btn').on('click', () => {
	$('#indexObjectAdd').removeClass('display-n')
})

let indexCountReward = $('.indexSliderReward .swiper-slide').length

for (let i = 1; i <= indexCountReward; i++) {
	$(`.ind-reward__block-slider .swiper-slide:nth-child(${i})`).on(
		'click',
		() => {
			var indexModalReward = new Swiper('.indexModalReward', {
				navigation: {
					nextEl: '.modelReward__wrapper  .swiper-controls .swiper-button-next',
					prevEl: '.modelReward__wrapper  .swiper-controls .swiper-button-prev',
				},
				keyboard: true,
				effect: 'fade',
				fadeEffect: {
					crossFade: true,
				},
				initialSlide: i - 1,
			})
			$('.modelReward').removeClass('display-n')
			$('body').css('overflow', 'hidden')
		}
	)
}
$('.modelReward__close').on('click', () => {
	$('.modelReward').addClass('display-n')
	$('body').css('overflow', 'visible')
})

$(() => {
	var selected = $('.indexSliderReward img')
		.map(function () {
			if ($(this).attr('src')) return $(this).attr('src')
		})
		.get()
	$.each(selected, function (index, value) {
		let newElementBlock = document.createElement('div')
		newElementBlock.classList.add('swiper-slide')
		newElementBlock.innerHTML = `
		<div class="modelReward__wrapper-items">
			<img src="${value}" alt="img" />
		</div>
		`
		document.getElementById('indexModalReward').appendChild(newElementBlock)
	})
})
$(() => {
	for (let i = 1; i <= $('.ind-object__block-btn').length; i++) {
		$(`#indexListObject-${i} .ind-object__block-table-items`)
			.not('.ind-object__block-table-items-v')
			.hide()
		$(`#indexBtnObject-${i}`).on('click', () => {
			$(`#indexListObject-${i} .ind-object__block-table-items`).show()
		})
	}
})
