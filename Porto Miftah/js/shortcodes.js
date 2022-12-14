/**
  * flatSpacer
  * flatContentBox
  * flatProgressBar
  * flatCounter
  * headerMenu
  * popUpLightBox
  * cloneButtonSlide
  * hideInput
  * swiperSlide
  * Parallax
  * inViewport
  * pageLoad
  * wowAnimation
*/

; (function ($) {

    "use strict";

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var flatSpacer = function () {
        $(window).on('load resize', function () {
            var mode = 'desktop';
            if (matchMedia('only screen and (max-width: 991px)').matches)
                mode = 'mobile';
            if (matchMedia('only screen and (max-width: 767px)').matches)
                mode = 'smobile';
            $('.themesflat-spacer').each(function () {
                if (mode === 'desktop') {
                    $(this).attr('style', 'height:' + $(this).data('desktop') + 'px')
                } else if (mode == 'mobile') {
                    $(this).attr('style', 'height:' + $(this).data('mobile') + 'px')
                } else {
                    $(this).attr('style', 'height:' + $(this).data('smobile') + 'px')
                }
            });
        });
    };

    var Parallax = function () {
        if ($().parallax && isMobile.any() == null) {
            $('.parallax-1').parallax("50%", 0.1);
            $('.parallax-3').parallax("50%", 0.1);
            $('.parallax-4').parallax("50%", 0.1);
        }
    };

    var inViewport = function () {
        $('[data-inviewport="yes"]').waypoint(function () {
            $(this).trigger('on-appear');
        }, { offset: '90%', triggerOnce: true });

        $(window).on('load', function () {
            setTimeout(function () {
                $.waypoints('refresh');
            }, 100);
        });
    };

    var flatContentBox = function () {
        $(window).on('load resize', function () {
            var mode = 'desktop';
            if (matchMedia('only screen and (max-width: 1199px)').matches)
                mode = "mobile";
            $('.themesflat-content-box').each(function () {
                var margin = $(this).data('margin');
                if (margin) {
                    if (mode === 'desktop') {
                        $(this).attr('style', 'margin:' + $(this).data('margin'))
                    } else if (mode === 'mobile') {
                        $(this).attr('style', 'margin:' + $(this).data('mobilemargin'))
                    }
                }
            });
        });
    };

    var flatProgressBar = function () {
        if ($().waypoint) {
            $('.progress-bg').on('on-appear', function () {
                $(this).each(function () {
                    var percent = parseInt($(this).data('percent'));

                    $(this).find('.progress-animate').animate({
                        "width": percent + '%'
                    }, 1000, "easeInCirc");

                    $(this).parent('.themesflat-progress').find('.perc').addClass('show').animate({
                        "width": percent + '%'
                    }, 1000, "easeInCirc");
                });
            });
        }
    };

    var flatCounter = function () {
        if ($().countTo) {
            $('.themesflat-counter').on('on-appear', function () {
                $(this).find('.number').each(function () {
                    var to = $(this).data('to'),
                        speed = $(this).data('speed');

                    $(this).countTo({
                        to: to,
                        speed: speed
                    });
                });
            });
        }
    };

    var headerMenu = function () {
        $(".header-menu").on("click", function () {
            $(".side-menu__block").addClass("active");
        });

        $(".side-menu__block-overlay,.side-menu__toggler, .scrollToLink").on("click", function (e) {
            $(".side-menu__block").removeClass("active");
            e.preventDefault();
        }
        );
    };

    var popUpLightBox = function () {
        if ($(".lightbox-image").length) {
            $(".lightbox-image").fancybox({
                openEffect: "fade",
                closeEffect: "fade",
                helpers: {
                    media: {}
                }
            });
        }
    };

    var cloneButtonSlide = function () {
        $('.clone-btn-next').add('#button-team-next').add('.clone-main-btn-next').on('click', function () {
            $('.swiper-button-next').click();
        });
        $('.clone-btn-prev').add('#button-team-prev').add('.clone-main-btn-prev').on('click', function () {
            $('.swiper-button-prev').click();
        });
    };

    var pageLoad = function () {
        $(window).load(function () {
            $('#preload').delay(1000).fadeOut('fast', function () {
                $('body').removeClass('preloading');
            });
        });
    }

    var hideInput = function () {
        $('#checkbox').click(function () {
            if (document.getElementById('checkbox').checked) {
                $('#email').get(0).type = 'password';
            } else {
                $('#email').get(0).type = 'text';
            }
        });
    };

    var wowAnimation = function () {
        new WOW().init();   
    }

    // Dom Ready
    $(function () {
        flatSpacer();
        flatContentBox();
        flatProgressBar();
        flatCounter();
        headerMenu();
        popUpLightBox();
        cloneButtonSlide();
        hideInput();
        wowAnimation();
        $(window).load(function () {
            Parallax();
            inViewport();
        });
        pageLoad();
    });

})(jQuery);

