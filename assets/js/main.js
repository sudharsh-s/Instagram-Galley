//Grid Image Gallery Start
$(document).ready(function () {
    if (typeof Swiper !== 'undefined') {
        var galleryTop = new Swiper('.grid_gallery_pro', {
            watchSlidesProgress: true,
            spaceBetween: 0,
            initialSlide: 10000,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        var galleryThumbs = new Swiper('.projets-thumbs', {
            slidesPerView: 3,
            slidesPerColumn: 3,
            spaceBetween: 0,
            breakpoints: {
                400: {
                    slidesPerView: 1,
                    slidesPerColumn: 9
                },
                800: {
                    slidesPerView: 2,
                    slidesPerColumn: 5
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerColumn: 3
                }
            }
        });
        galleryThumbs.on('tap', function () {
            galleryTop.slideTo(galleryThumbs.clickedIndex);
        });
        var $modal = $('.grid_gallery');
        $modal.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
            if ($modal.hasClass('close')) {
                $modal.removeClass('close');
                e.preventDefault();
            }
        });
        $('.grid_gallery_close').on('click', function (ev) {
            $modal.removeClass('grid_gallery_modal').addClass('close');
            ev.preventDefault();
        });
        $('.projets-thumbs .swiper-slide').on('click', function (er) {
            if ($modal.hasClass('grid_gallery_modal')) {
                $modal.removeClass('grid_gallery_modal').addClass('close');
            } else {
                $modal.removeClass('close').addClass('grid_gallery_modal');
            }
            er.preventDefault();
        });
    }
});
$(document).ready(function () {
    if (typeof Swiper !== 'undefined') {
        var nestedSwiper = new Swiper('.grid_gallery_inside', {
            navigation: {
                nextEl: '.grid_gallery_inside_next',
                prevEl: '.grid_gallery_inside_prev',
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                768: {
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                },
                769: {
                    pagination: false,
                },
            },
        });
    }
});
//Grid Image Gallery End

//Grid Video Gallery Start
$(document).ready(function () {
    if (typeof Swiper !== 'undefined') {
        var galleryTop = new Swiper('.grid_gallery_pro_video', {
            watchSlidesProgress: true,
            spaceBetween: 0,
            initialSlide: 10000,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        var galleryThumbs = new Swiper('.projets-thumbs-video', {
            slidesPerView: 3,
            slidesPerColumn: 3,
            spaceBetween: 0,
            breakpoints: {
                400: {
                    slidesPerView: 1,
                    slidesPerColumn: 9
                },
                800: {
                    slidesPerView: 2,
                    slidesPerColumn: 5
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerColumn: 3
                }
            }
        });
        galleryThumbs.on('tap', function () {
            galleryTop.slideTo(galleryThumbs.clickedIndex);
        });
        var $modal = $('.grid_gallery_video');
        $modal.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
            if ($modal.hasClass('close')) {
                $modal.removeClass('close');
                e.preventDefault();
            }
        });
        $('.grid_gallery_close_video').on('click', function (ev) {
            $modal.removeClass('grid_gallery_modal_video').addClass('close');
            ev.preventDefault();
        });
        $('.projets-thumbs-video .swiper-slide').on('click', function (er) {
            if ($modal.hasClass('grid_gallery_modal_video')) {
                $modal.removeClass('grid_gallery_modal_video').addClass('close');
            } else {
                $modal.removeClass('close').addClass('grid_gallery_modal_video');
            }
            er.preventDefault();
        });
    }
});
$(document).ready(function () {
    if (typeof Swiper !== 'undefined') {
        var nestedSwiper = new Swiper('.grid_gallery_inside_video', {
            navigation: {
                nextEl: '.grid_gallery_inside_next_video',
                prevEl: '.grid_gallery_inside_prev_video',
            },
        });
        $('.grid_gallery_arrow_video.swiper-button-next, .grid_gallery_arrow_video.swiper-button-prev, .grid_gallery_close_video').click(function () {
            var iframes = $('.grid_gallery_img_box_video iframe');
            iframes.each(function (index) {
                var iframe = $(this)[0];
                if (iframe && iframe.contentWindow) {
                    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                }
            });
        });
    }
});

//Grid Video Gallery End    