$(() => {

    const header = $('#header')
    const intro = $('#intro')
    const nav = $('#nav')
    const burger_menu = $('#burger_menu')

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

        nav.removeClass('show')

        elementId === '#features' ? height = 1 : height = -40
        $('html, body').animate({
            scrollTop: offset.top + height
        }, 1000)
    })

    /** burger_menu toogle */
    burger_menu.on('click', function (event) {
        event.preventDefault()
        nav.toggleClass('show')
    })

    /** slider - fade - http://kenwheeler.github.io/slick/ */
    const reviews__slider = $('#reviews__slider')
    reviews__slider.slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });
})