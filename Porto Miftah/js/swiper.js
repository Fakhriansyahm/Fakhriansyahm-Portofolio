
    // slider main
    var swiper =  new Swiper(".mainslider", {
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 500,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    // carousel
    var swiper =  new Swiper(".carousel", {
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
        navigation: {
            clickable: true,
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
    // carousel style 2
    var swiper =  new Swiper(".carousel-style-2", {
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
            clickable: true,
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
    // carousel style 3
    var swiper =  new Swiper(".carousel-style-3", {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
    });

    // sliver coverflow
    var swiper =   new Swiper(".swiper-coverflow", {
        effect: "coverflow",
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        loop: true,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 90,
        grabCursor: true,
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 90,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 90,
            },
        },
    });
    // slider vertical
    var swiper =  new Swiper(".sliver-vertical", {
        direction: 'vertical',
        spaceBetween: 0,
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        navigation: {
            clickable: true,
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            clickable: true,
            el: ".swiper-pagination",
        },

    });