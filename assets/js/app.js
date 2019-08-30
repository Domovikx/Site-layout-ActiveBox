$(() => {

    const header = $('#header')
    const intro = $('#intro')

    /** header--fixed */
    $(window).on('scroll load resize', () => {
        const introH = intro.innerHeight()
        const scrollTop = $(this).scrollTop()

        if (scrollTop > introH) {
            header.addClass('header--fixed')
        } else {
            header.removeClass('header--fixed')
        }
    })

    /** Smooth scroll*/
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault()
        const elementId = $(this).data('scroll')
        const offset = $(elementId).offset()

        elementId === '#features' ? height = 1 : height = -40
        $('html, body').animate({
            scrollTop: offset.top + height
        }, 1000)
    })
})