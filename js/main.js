var $ = jQuery.noConflict();

$(document).ready(function () {

	//SLIDER

	$('.wrapper_slider').each(function (index_2) {
		var count_2 = index_2 + 1;
		var swiper_2 = new Swiper(".slider_2_" + count_2 + "", {
			slidesPerView: 1,
			spaceBetween: 0,
			watchOverflow: true,
			loop: false,

			navigation: {
				nextEl: ".swiper-btn-next_" + count_2 + "",
				prevEl: ".swiper-btn-prev_" + count_2 + "",
			},
			pagination: {
				el: ".swiper-pagination_" + count_2 + "",
				type: "fraction"
			},
		});
	});


//POPUP

	$('.open-popup-link').magnificPopup({
		type: 'inline',
		midClick: true,
		removalDelay: 300,
		mainClass: 'mfp-fade',
		fixedContentPos: true,
		fixedBgPos: true,
		callbacks: {
			open: function () {

			},
			close: function () {

			},
			afterClose: function () {

			}
		}
	});

//SCROLL

	if ($('.scroll_box').length > 0) {
		$('.scroll_box').each(function (index, el) {
			new SimpleBar(el);
		});

		let horizontalElements = document.querySelectorAll('.scroll_box_f');
		for (let element of horizontalElements)
			element.onwheel = (event) => {
				event.preventDefault();
				let elementToScroll = element.querySelector('.simplebar-content-wrapper');

				clearTimeout(elementToScroll.timer);
				elementToScroll.timer = setTimeout(() => {
					elementToScroll.scrollTo({
						left: event.deltaY > 0 ? elementToScroll.scrollLeft + 250 : elementToScroll.scrollLeft - 250,
						behavior: 'smooth'
					});
				}, 20);
			};
	}

	$(".accordion__title").on("click", function (e) {

		e.preventDefault();
		var $this = $(this);

		$this.toggleClass("accordion-active");
		$this.next().slideToggle(300);
		$('.accordion__arrow', this).toggleClass('accordion__rotate');
	});

	$('.close_popup').on("click", function () {
		$.magnificPopup.close();
	});

});

window.onload = function () {
	Coloris({
		alpha: true,
		format: 'rgb',
	});
}
