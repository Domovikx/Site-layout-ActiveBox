$(() => {

    const header = $('#header')
    const intro = $('#intro')

    $(window).on('scroll load resize', () => {
        const introH = intro.innerHeight()
        const scrollTop = $(window).scrollTop()

        if (scrollTop > introH) {
            header.addClass('header--fixed')
        } else {
            header.removeClass('header--fixed')
        }
    })
})