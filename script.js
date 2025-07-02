$(document).ready(function () {
    // Sticky navbar
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Scroll-up button
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll to top
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 }, 'slow');
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll on menu click
    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle navbar
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typed.js animations
    if ($(".typing").length) {
        new Typed(".typing", {
            strings: ["FullStack Developer"],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true
        });
    }

    if ($(".typing-2").length) {
        new Typed(".typing-2", {
            strings: ["FullStack Developer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    if ($(".typing-3").length) {
        new Typed(".typing-3", {
            strings: ["Connect with me on :)"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    // Owl Carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });
});
