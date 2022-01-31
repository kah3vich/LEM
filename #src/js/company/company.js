var companySecretSlider = new Swiper('.companySecretSlider', {
	navigation: {
		nextEl: '.comp-secret__slider-block .swiper-controls .swiper-button-next',
		prevEl: '.comp-secret__slider-block .swiper-controls .swiper-button-prev',
	},
	pagination: {
		el: '.comp-secret__slider-block .swiper-controls .swiper-pagination',
	},
	keyboard: true,
	slidesPerView: 5,
	breakpoints: {
		1400: {
			slidesPerView: 5,
			spaceBetweenSlides: 0,
		},
		950: {
			slidesPerView: 4,
			spaceBetweenSlides: 0,
		},
		720: {
			slidesPerView: 3,
			spaceBetweenSlides: 0,
		},
		600: {
			slidesPerView: 2,
			spaceBetweenSlides: 0,
		},
		0: {
			slidesPerView: 2,
			spaceBetweenSlides: 26,
		},
	},
})

var companySliders = new Swiper('.companySliders', {
	loop: true,
	navigation: {
		nextEl: '.comp-slider__block-controls-arrow-next',
		prevEl: '.comp-slider__block-controls-arrow-prev',
	},
	pagination: {
		el: '.comp-slider__block-sliders .swiper-controls .swiper-pagination',
	},
	keyboard: true,
	breakpoints: {
		1255: {
			slidesPerView: 3,
			spaceBetweenSlides: 40,
		},
		850: {
			slidesPerView: 3,
			spaceBetweenSlides: 40,
		},
		550: {
			slidesPerView: 2,
			spaceBetweenSlides: 40,
		},
		0: {
			slidesPerView: 1,
			spaceBetweenSlides: 40,
		},
	},
})

var companyCareerSlider = new Swiper('.companyCareerSlider', {
	pagination: {
		el: '.comp-career__content-slider .swiper-controls .swiper-pagination',
	},
	mousewheel: true,
	keyboard: true,
	breakpoints: {
		1050: {
			slidesPerView: 4,
			spaceBetweenSlides: 0,
		},
		900: {
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

let companyCountCollection = $('.comp-own__block-items-img').length

for (let i = 1; i <= companyCountCollection; i++) {
	$(`.comp-own__block-items-img:nth-child(${i})`).on(
		'click',
		() => {
			var companyCollection = new Swiper('.companyCollection', {
				navigation: {
					nextEl: '.modelCompanyCollection__wrapper   .swiper-controls .swiper-button-next',
					prevEl: '.modelCompanyCollection__wrapper   .swiper-controls .swiper-button-prev',
				},
				keyboard: true,
				effect: 'fade',
				fadeEffect: {
					crossFade: true,
				},
				initialSlide: i - 1,
			})
			$('.modelCompanyCollection').removeClass('display-n')
			$('body').css('overflow', 'hidden')
		}
	)
}
$('.modelCompanyCollection__close').on('click', () => {
	$('.modelCompanyCollection').addClass('display-n')
	$('body').css('overflow', 'visible')
})

// $(() => {
// 	var selected = $('.comp-own__block-items-wrapper img')
// 		.map(function () {
// 			if ($(this).attr('src')) return $(this).attr('src')
// 		})
// 		.get()
// 	$.each(selected, function (index, value) {
// 		let newElementBlock = document.createElement('div')
// 		newElementBlock.classList.add('swiper-slide')
// 		newElementBlock.innerHTML = `
// 		<div class="modelCompanyCollection__wrapper-items">
// 			<img src="${value}" alt="img" />
// 		</div>
// 		`
// 		document.getElementById('companyCollection').appendChild(newElementBlock)
// 	})
// })

let companyCountTex = $('.comp-own__blocks-items-img').length

for (let i = 1; i <= companyCountTex; i++) {
	$(`.comp-own__blocks-items-img:nth-child(${i})`).on(
		'click',
		() => {
			var companyTex = new Swiper('.companyTex', {
				navigation: {
					nextEl: '.modelCompanyTex__wrapper   .swiper-controls .swiper-button-next',
					prevEl: '.modelCompanyTex__wrapper   .swiper-controls .swiper-button-prev',
				},
				keyboard: true,
				effect: 'fade',
				fadeEffect: {
					crossFade: true,
				},
				initialSlide: i - 1,
			})
			$('.modelCompanyTex').removeClass('display-n')
			$('body').css('overflow', 'hidden')
		}
	)
}
$('.modelCompanyTex__close').on('click', () => {
	$('.modelCompanyTex').addClass('display-n')
	$('body').css('overflow', 'visible')
})

// $(() => {
// 	var selected = $('.comp-own__blocks-items-wrapper img')
// 		.map(function () {
// 			if ($(this).attr('src')) return $(this).attr('src')
// 		})
// 		.get()
// 	$.each(selected, function (index, value) {
// 		let newElementBlock = document.createElement('div')
// 		newElementBlock.classList.add('swiper-slide')
// 		newElementBlock.innerHTML = `
// 		<div class="modelCompanyTex__wrapper-items">
// 			<img src="${value}" alt="img" />
// 		</div>
// 		`
// 		document.getElementById('companyTex').appendChild(newElementBlock)
// 	})
// })
