'use strict';
{
    $(function () {
        $('.menu__btn').on('click', function () {
            $('.nav').toggleClass('active');
        });

        $('.close__btn, .nav__item a').on('click', function () {
            $('.nav').removeClass('active');
        });
    });
}