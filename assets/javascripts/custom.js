$(document).ready(function() {

    $('#open-nav-button').on('click', function(e) {
        e.preventDefault()
        $('nav#main-nav').toggleClass('open')

		// Change aria-pressed value when toggling the navigation via the nav toggle buttons on a mobile view
		if ($('nav#main-nav').hasClass('open')) {
            $('#open-nav-button').attr("aria-pressed","true")
            $('#close-nav-button').attr("aria-pressed","false")
		} else {
            $('#open-nav-button').attr("aria-pressed","false")
            $('#close-nav-button').attr("aria-pressed","true")
		}
    })

	// Initialize slick slideshow banner
	$('#slick-slideshow-banner').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		cssEase: 'linear',
		dots: true,
		lazyLode: 'progressive',
		mobileFirst: true,
	})

	// Initialize instagram feed if related element is present
	if('#instafeed') {
        let feed = new Instafeed({
            get: 'user',
            userId: '4794113063',
            accessToken: '4794113063.1677ed0.dbb0971a61bd491aa2f389d45bdc2ba4',
            limit: '18',
			resolution: 'low_resolution',
            sortBy: 'most-liked'
        })
        feed.run()
	}

    // Check breakpoint for activating testimonial slider on doc load
    CheckBreakpoints()

    // Trigger functions on window resize
    $(window).resize(function(){
        CheckBreakpoints()
    })


    // // Find overflowing elements
    // var docWidth = document.documentElement.offsetWidth;
    //
    // [].forEach.call(
    //     document.querySelectorAll('*'),
    //     function(el) {
    //         if (el.offsetWidth > docWidth) {
    //             console.log(el)
    //         }
    //     }
    // )
})

function CheckBreakpoints() {
    let sst = $('#slick-slideshow-testimonials')

    if (window.matchMedia('(min-width: 992px)').matches) {
        if(sst.hasClass('slick-initialized')) {
            sst.slick('unslick')
        }
    } else if (!(sst.hasClass('slick-initialized'))) {
        // Initialize slick slideshow for testimonials on mobile
        sst.slick({
            autoplay: false,
            arrows: true,
            cssEase: 'linear',
            dots: true,
            lazyLode: 'progressive',
            mobileFirst: true
        })
    }
}
