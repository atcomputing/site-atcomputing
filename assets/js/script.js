(function () {
    // Element toggle.
    let $toggle = $('.at-collapse .at-collapse-toggle')

    $toggle.click(function () {
        $(this).parent('.at-collapse').toggleClass('at-collapse-open')
    })

    // Disabled hero video when not on live domain.
    if (window.location.hostname !== 'www.atcomputing.nl') {
        const $video = $('video')
        if ($video.length) {
           $video.get(0).pause()
       }
    }

    // Scroll to hashtag on page.
    $('a').click(function (event) {
        let href = $(this).attr('href');
        if (href.startsWith('/#')) {
            href = href.substring(1)
        }

        if (href.startsWith('#')) {
            const $target = $(href)
            if ($target.length) {
                event.preventDefault()

                $([document.documentElement, document.body]).animate({
                    scrollTop: $target.offset().top - 16 // Keep 16 pixels spacing to target top.
                }, 500)
            }
        }
    })
})()
