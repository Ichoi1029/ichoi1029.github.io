'use strict';

$(function(){
    /* ================= change theme ===================== */
    $('#buttonDark').click(function(){
        $(this).hide();
        $('body').addClass('dark-theme');
        $('#buttonLight').show();
    })
    $('#buttonLight').click(function(){
        $('body').removeClass('dark-theme');
        $('#buttonDark').show();
        $(this).hide();
    })

    /* ================= navbar ===================== */
    var $navItem = $('.nav__item');
    $navItem.click(function(e){
        e.preventDefault();
        var link = $(this).children('a').attr('data-link');
        var $target = $(link);
        var distance = $target.offset().top;
        $('html, body').animate({scrollTop: distance});
        $('.nav__container').removeClass('visible');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })

    /* nav toggle */
    $('#navToggle, .nav__close').click(function(){
        $('.nav__container').toggleClass('visible');
    })

    /* ================= skill tabs ================= */
    $('.skills__header').click(function(){
        $(this).children('.skill__icon--arrow').toggleClass('active');
        $(this).siblings('.skill__data').stop().slideToggle();
    })

    /* ================= product ================= */
    var $modal = $('.modal');
    var $overlay = $('.overlay');
    var $btn = $('button');
    var $btnClose = $('.close__modal');
    
        $overlay.hide();
        $btn.click(function(){
            $overlay.fadeIn();
        })
        $btnClose.click(function(){
            $overlay.fadeOut();
        });
        $overlay.click(function(e){
            // target은 내가 클릭한 객체
            // currentTarget은 이벤트가 발생한 객체
            if(e.target == e.currentTarget){
                $(this).fadeOut();
            }
        })   
    /* ================= portfolio ================= */
    $('.custom__slider').slick({
        dots:true,
        /* autoplay: true,
        autoplaySpeed: 2000, */
    });

    /* ================= scroll up ================= */
    var skillsDistance = $('#skills').offset().top;
    var $scrollUp = $('.scrollup');
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if( scrollTop > skillsDistance ){
            $scrollUp.addClass('visible');
        }else{
            $scrollUp.removeClass('visible');
        }
    })
    $scrollUp.click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 0});
    })


})



