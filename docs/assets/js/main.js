/*
-------------------------------------------------------------------------
* Template Name    : AFC                                                *
* Author           : Nifty Theme - Osama Bakri                          *
* Version          : 1.0.0                                              *
* Created          : July 2018                                          *
* File Description : Main Js file of the template                       *
*------------------------------------------------------------------------
*/

/*global WOW, window, document, jQuery */

(function ($) {

    'use strict';

    // ==== wow animation ==== //
    new WOW().init();

    if($(window).width() < 768) {
        $('body').find('.wow').removeClass('wow');
    }
    // ----------------------------------------------------------------

    // ==== scroll to top ==== //
	$(window).on('beforeunload', function () {
        $(window).scrollTop(0);
	});
    // ----------------------------------------------------------------

        // ==== Loading Page ==== //
	$(window).on('load', function () {
        $('body .loading').fadeOut(1000);
        $('html').css('overflow-y', 'visible');
    });
    // ----------------------------------------------------------------

    // ==== NavBar ==== //
    // Toggle NavBar
    $('.nav-btn').on('click', function () {
        $(this).toggleClass('open');
        $('.nav-contain').toggleClass('show');
        $('.nav-contain > div').toggleClass('show');
        $('.nav-contain .nav-elements ul').toggleClass('show');
    });
    // ----------------------------------------------------------------

    // ==== Header Background ==== //
    $(document).ready(function () {
        if($(window).width() > 768) {
            $(function () {
                var $el = $('header, .why-us, #gallery, .company-profile');
                $(window).on('scroll', function () {
                    var scroll = $(document).scrollTop();
                    $el.css({
                        'background-position': '50% ' + (-'.4' * scroll) + 'px'
                    });
                });
            });
        } else {
            $(function () {
                var $el = $('header, .why-us, #gallery, .company-profile');
                $(window).on('scroll', function () {
                    var scroll = $(document).scrollTop();
                    $el.css({
                        'background-position': '50% ' + ('0' * scroll) + 'px'
                    });
                });
            });
        };
    });

    $(window).on('resize', function() {
        if($(window).width() > 768) {
            $(function () {
                var $el = $('header, .why-us, #gallery, .company-profile');
                $(window).on('scroll', function () {
                    var scroll = $(document).scrollTop();
                    $el.css({
                        'background-position': '50% ' + (-'.4' * scroll) + 'px'
                    });
                });
            });
        } else {
            $(function () {
                var $el = $('header, .why-us, #gallery, .company-profile');
                $(window).on('scroll', function () {
                    var scroll = $(document).scrollTop();
                    $el.css({
                        'background-position': '50% ' + ('0' * scroll) + 'px'
                    });
                });
            });
        };
    });
    // ----------------------------------------------------------------

    // ==== OWL Carousel ==== //
    $(document).ready(function carouselFun() {
        $('.owl-carousel').owlCarousel({
            loop: false,
            margin: 10,
            autoplay: false,
            duration: 5000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,	// Number Of Item In Extra Small Screen
                    nav: true,
                },
                500: {
                    items: 1,	// Number Of Item In Medium Screen
                    nav: true
                },
                768: {
                    items: 2,	// Number Of Item In Average Screen
                    nav: false
                },
                1000: {
                    items: 3,	// Number Of Item In Large Screen
                    nav: true,
                    loop: false,
                    margin: 20
                }
            }
        });
    });

    // ----------------------------------------------------------------

    // ==== Smooth Scroll ==== //
    $("nav li a").click(function () {
        $('.nav-btn').removeClass('open');
        $('nav .nav-contain').removeClass('show');
        $('.nav-contain > div').removeClass('show');
        $('.nav-contain .nav-elements ul').removeClass('show');
    });
    // ----------------------------------------------------------------

    // ==== Smooth Scroll ==== //
    $("nav li a").click(function () {
        $('html, body').animate({	// Scroll To " Element Which Has The Same id "
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 50
        }, 2000);        
    });
    // ----------------------------------------------------------------

    // ==== Contact Form ==== //
    // Hover Effect
    $('#contact .contact-body').hover(function () {
        $('#contact .logo').addClass('hover');
    });

    // Contact Items
    $('#contact .item').hide();
    $('#contact #clock').show();
    $('#contact .contact-head a').on('click', function () {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        $('#contact .item').hide();
        $($(this).data('show')).fadeIn();
    });

    // Change Button name
    $("#contact .show-btn").click(function () {
        $(this).text(function (i, text) {
            return text === "close" ? "contact" : "close";
        });
    });

    // ==== Language Form ==== //
    // Show and Hide Contact form
    $('#lang .show-btn').on('click', function () {
        $('#lang').toggleClass('show');
    });
    // ----------------------------------------------------------------

    // ==== Gallery Page ==== //
    // Filter Buttons
    $('#gallery .filter-item').hide();
    $('#gallery .photo-gallery').show();
    $('#gallery .filter li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('#gallery .filter-item').hide();
        $($(this).data('filter')).fadeIn();
    });
    
    // ==== Video Modal ==== // 
    $(function(){
        $('.modal').modal({
            show: false
        }).on('hidden.bs.modal', function(){
            $(this).find('iframe')[0].pause();
        });
    });

    $(window).on('scroll', function () {
        if($(window).scrollTop() > $('header').height()) {
            $('.video-btn').addClass('hide');
        } else {
            $('.video-btn').removeClass('hide');
        }
    });

}(jQuery));