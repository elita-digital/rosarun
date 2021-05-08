var $offsetNav, $main = $('body');

$(document).ready(function () {
	$('body')
		.on('click', '.count-inputs a.pl', function (e) {
			e.preventDefault();
			$(this).parent().find('.min').removeClass('disabled');
			var curVal = parseInt($(this).parent().find('input').val()) + 1;
			$(this).parent().find('input').val(curVal);
		})
		.on('click', '.count-inputs a.min', function (e) {
			event.preventDefault();
			var curVal = parseInt($(this).parent().find('input').val()) - 1;
			if (curVal < 2) {
				curVal = 1;
				$(this).addClass('disabled')
			}
			$(this).parent().find('input').val(curVal);
		})
		.on('click', '.select-gender', function (e) {
			e.preventDefault()
			$(this).find('span').toggleClass('active')
		})
		.on('click', function (e) {
			if ($(e.target).closest('.dropdown-menu').size() > 0)
				e.stopImmediatePropagation();
		})
		.on('click', '.button-menu-wrap', function (e) {
			e.preventDefault();
			$('body').toggleClass('menu-opened')
		})
		.on('click', '.fancybox', function (e) {
			e.preventDefault();
			var targ = $(this).attr('href');
			$.fancybox.close();

			$.fancybox.open({
				src: targ,
				type: 'ajax',
				afterShow: function () {
					$("[type='tel']").intlTelInput();

					$(".datepicker").datepicker({
						format: "dd/mm/yyyy",
						language: "ru",
						autoclose: true,
					});
				}
			})
		})
		.on('click', '.gallery-hashtag a', function (e) {
			e.preventDefault();
			$('.gallery-hashtag a').removeClass('active');
			$(this).addClass('active');
			$('.gallery-slider').slick('slickUnfilter').slick('slickFilter', $(this).attr('data-filter'));
		})
		.on('click', '.track-header a', function (e) {
			e.preventDefault();
			$('.track-header a').removeClass('active');
			$(this).addClass('active');
			$('.track-slider').slick('slickUnfilter').slick('slickFilter', $(this).attr('data-filter'));
		})
		.on('click', '.food-header a', function (e) {
			e.preventDefault();
			$('.food-header a').removeClass('active');
			$(this).addClass('active');
			$('.food-slider').slick('slickUnfilter').slick('slickFilter', $(this).attr('data-filter'));
		})
		.on('click', '.logo a', function (e) {
			e.preventDefault();
			$('body').removeClass('menu-opened');
			$('.main-wrap-wrap').animate({
				scrollTop: 0
			}, 1000);
		})
		.on('click', '.wrap-icon a', function (e) {

			if (!$(this).hasClass('lk-enter')) {
				e.preventDefault();
				var targ = $(this).attr('href');

				$('body').removeClass('menu-opened').scrollTo(targ, 600);
			}

		})
		.on('click', '.scrollTo', function (e) {
			e.preventDefault();
			var targ = $(this).attr('href');
			$('body').scrollTo(targ, 600);
		})
		.on('click', '.shadow', function () {
			$('body').removeClass('menu-opened');
		})
	/*
		.on('change','input[type=file]',function () {
			var fullPath = $(this).val();
			if (fullPath) {
				var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
				var filename = fullPath.substring(startIndex);
				if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
					filename = filename.substring(1);
				}
				$(this).parent('.type-file').find('img').html(filename)
			}
		})
	.on('click',function(e){
		if( $(e.target).closest('.datepicker-dropdown').size()>0 ){

			$('.datepicker').datepicker('hide');
			console.log(1)
		}
	})*/


	var $regSlider = $('.reg-slider');
	$regSlider.slick({
		dots: false,
		arrows: true,
		infinite: false,
		autoplay: false,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 600,
			settings: {
				arrows: false,
				dots: true,
			}
		}]
	});

	var $program = $('.program-slider');
	$program.slick({
		dots: false,
		arrows: true,
		infinite: false,
		autoplay: false,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 1500,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			}, {
				breakpoint: 639,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			}
		]
	})

	var $food = $('.food-slider');
	$food.slick({
		dots: false,
		arrows: true,
		infinite: false,
		autoplay: false,
		speed: 400,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [{
			breakpoint: 1000,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
			}
		}]
	});

	$('.activities__slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		autoplay: true,
		speed: 240,
		autoplaySpeed: 2400,
		fade: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 640,
			settings: {
				arrows: false,
				dots: true,
			}
		}]
	});

	$('.partners__slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		speed: 2400,
		autoplaySpeed: 2400,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 991,
				settings: {
					// slidesToShow: 2,
					arrows: false
				}
			},
			{
				breakpoint: 640,
				settings: 'unslick'
			},
		]
	});

	$('.js-show-all-program').on('click', function () {
		if (!$(this).hasClass('black-button')) {
			$('html, body').animate({
				scrollTop: $('.program').offset().top
			}, {
				duration: 240
			})
		}
		$(this).text() == 'свернуть' ? $(this).text('смотреть полностью') : $(this).text('свернуть');
		$(this).toggleClass('black-button');
		$('.program-block').toggleClass('--active');
		$('.program-schedule').css()
	})

	offsetNextBlock();

	$main.scrollspy({
		target: '.scrollspy',
		offset: $offsetNav
	});

	tableHead();

	$(".chosen-select").chosen({
		disable_search_threshold: 10
	});

	$("[type='tel']").intlTelInput();

	$(".datepicker").datepicker({
		format: "dd/mm/yyyy",
		language: "ru",
	});
});

function offsetNextBlock() {
	$offsetNav = $(window).height() * (0.4);
}

var rtime;
var timeout = false;
var delta = 200;
$(window).resize(function () {
	rtime = new Date();
	if (timeout === false) {
		timeout = true;
		setTimeout(resizeend, delta);
	}
});

function resizeend() {
	if (new Date() - rtime < delta) {
		setTimeout(resizeend, delta);
	} else {
		timeout = false;
		// сюда помещаем свой функционал
		tableHead();
		offsetNextBlock();
		//menuOffsets();
	}
}

/*
$(window).load(function(){
	menuOffsets();
})
function menuOffsets() {
	$( ".wrap-icon li" ).each(function() {
		targ = $(this).find('a').attr('href');
		elTop = parseInt($(targ).offset().top);
		$(this).find('a').attr('data-offset', elTop);
		console.log( targ + ' : ' +elTop)
	});
}
*/

function tableHead() {
	if (Modernizr.touchevents && $(window).width() < 600) {
		$(".fixTable").tableHeadFixer({
			"head": false,
			"left": 0
		});
	} else {
		$(".fixTable").tableHeadFixer({
			"head": true,
			"left": 1
		});
	}
}

let tabLinks = document.querySelectorAll(".main__tabs-link");
let tabContent = document.querySelectorAll(".main__tabs-content");
if (tabLinks) {

	for (let i = 0; i < tabLinks.length; i++) {

		tabLinks[i].addEventListener("click", function (e) {
			e.preventDefault();
			let activeTabAttr = e.target.getAttribute("data-tab");

			for (let j = 0; j < tabLinks.length; j++) {
				let contentAttr = tabContent[j].getAttribute("data-tab-content");

				if (activeTabAttr === contentAttr) {
					tabContent[j].classList.add("--active");
					tabLinks[j].classList.add("active");
				} else {
					tabContent[j].classList.remove("--active");
					tabLinks[j].classList.remove("active");
				}
			};
		});
	}
}

$(function () {
	$('.run-slider__inner').slick({
		prevArrow: '<button type="button" class="run-slider__slick-btn --slick-prev"><i class="icon-prev"></i></button>',
		nextArrow: '<button type="button" class="run-slider__slick-btn --slick-next"><i class="icon-next"></button>',
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true
	});

	$('.run-slider__nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.run-slider__inner',
		focusOnSelect: true
	});

	$(window).on('load resize orientationchange', function () {
		if (window.matchMedia("(max-width: 639px)").matches) {
			$('.info__cards').slick({
				slidesToShow: 1,
				dots: true,
				arrows: false,
				infinite: false,
				asNavFor: '.info__fake-nav'
			});
			$('.info__fake-nav').slick({
				slidesToShow: 6,
				dots: false,
				arrows: false,
				infinite: false,
				asNavFor: '.info__cards'
			});
		} else {
			$('.info__cards').slick('unslick');
		}
	});

	$('.header__burger').on('click', function () {
		$('.header__mobile').slideToggle(240);
		$(this).toggleClass('--close');
	});

	$('.info__cards').on('afterChange', function (event, slick, currentSlide, nextSlide) {
		let links = $('.info__event-link'),
			activeSlide = $(slick.$slides.get(currentSlide)).data('slick-index');
		links.removeClass('--active');
		$(links[activeSlide]).addClass('--active');
	})

	let slideHeight = $('.info__card.card').height(),
		sectionHeight = $('.info__wrapper').height();
	const date = ['01.05.2021', '02.05.2021', '03.05.2021', '04.05.2021', '04.05.2021', '04.05.2021'],
		name = ['ROSA	PEAK', 'ROSA QUEST', 'ROSA CARNIVAL ', 'ROSA GREEN TRAIL', 'ROSA RED TRAIL ', 'ROSA KIDS'];

	$(window).on('load scroll', function () {
		if (takeSlide() !== undefined) {
			if ($('.js-change-name').text() !== name[takeSlide()]) {
				$('.js-change-date').text(date[takeSlide()]);
				$('.js-change-name').text(name[takeSlide()]);
				$('.js-change-name').parents('.info__mountain').addClass('--changed');
				setTimeout(() => {
					$('.js-change-name').parents('.info__mountain').removeClass('--changed');
				}, 240);
			}
		}
		if (window.matchMedia('(min-width: 1024px)').matches) {
			document.querySelectorAll('.info__card').forEach(el => {
				if ((-el.getBoundingClientRect().bottom + $(window).height() * 1.25) > 0) {
					$(el).removeClass('--right');
				}
			});
		}
	});

	function takeSlide() {
		if (
			document.querySelector('.info__cards').getBoundingClientRect().top <= 0 &&
			document.querySelector('.info__cards').getBoundingClientRect().top >= -sectionHeight
		) {
			return Math.round(
				(
					($('.info__mountain').offset().top - $('.info__cards').offset().top) / (sectionHeight / 6)
				) - 0.5)
		}
	};

	$('a[data-slide]').click(function (e) {
		e.preventDefault();
		let top = $('.info__cards').offset().top;
		$('.info__cards').slick('slickGoTo', $(this).data('slide'));
		$('body,html').animate({
			scrollTop: top - $('.header').height()
		}, 500, );
	});

});