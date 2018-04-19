'use strict';
var slideCurrent = 1, slideCount;

$(document).ready(function () {
    slideCount = $("#slidewrapper").children().length;
    console.log(slideCount);

    prevBtn.onclick = function () {
        previousSlide();
    };

    nextBtn.onclick = function () {
        nextSlide();
    };

    $('ul.slidesList li').click(function () {
        var slideOld = slideCurrent;
        slideCurrent = $(this).index() + 1;
        HideShowPic(slideOld, slideCurrent);
    });

    function nextSlide() {
        var slideOld = slideCurrent;
        slideCurrent++;
        slideCurrent = (slideCurrent > slideCount || slideCurrent < 1) ? 1 : slideCurrent;
        HideShowPic(slideOld, slideCurrent);

    };

    function previousSlide() {
        var slideOld = slideCurrent;
        slideCurrent--;
        slideCurrent = (slideCurrent > slideCount || slideCurrent < 1) ? slideCount : slideCurrent;
        HideShowPic(slideOld, slideCurrent);
    };

    function HideShowPic(hide, show) {
        $(".slideLink").each(function (i, elem) {
            switch (i + 1) {
                case hide: {
                    $(elem).children(0).addClass('snb');
                    $(elem).children(0).removeClass('snbA');
                    break;
                }
                    ;
                case show: {
                    $(elem).children(0).addClass('snbA');
                    $(elem).children(0).removeClass('snb');
                    break;
                }
                    ;
            }
            ;
        });

        if (hide < show) {
            console.log('Next Slide');
            $("#slidewrapper").children(0).eq(hide - 1).removeClass();
            $("#slidewrapper").children(0).eq(hide - 1).addClass('slideTop');
            $("#slidewrapper").children(0).eq(show - 1).removeClass();
            $("#slidewrapper").children(0).eq(show - 1).addClass('slideView');
        } else {
            console.log('Prev Slide');
            $("#slidewrapper").children(0).eq(hide - 1).removeClass();
            $("#slidewrapper").children(0).eq(hide - 1).addClass('slideBottom');
            $("#slidewrapper").children(0).eq(show - 1).removeClass();
            $("#slidewrapper").children(0).eq(show - 1).addClass('slideView');
        }
        ;
        // $("#slidewrapper").each(function (i, elem) {
        //     var ii = i++;
        //     console.log(ii);
        //     console.log($(this));
        // console.log($(elem).children(0));

        // if (ii==show) {
        //     $(elem).removeClass();
        //     $(elem).addClass('slideView');
        //   };
        // if (ii<show) {
        //     $(elem).removeClass();
        //     $(elem).addClass('slideTop');
        //   };
        // if (ii>show) {
        //     $(elem).removeClass();
        //     $(elem).addClass('slideBottom');
        //   };
        // });

        // $("#slidewrapper").children(0).eq(hide - 1).addClass('slide');
        // $("#slidewrapper").children(0).eq(hide - 1).removeClass('slideView');
        // $("#slidewrapper").children(0).eq(show - 1).addClass('slideView');
        // $("#slidewrapper").children(0).eq(show - 1).removeClass('slide');
        $("#slideName").text("Slide 0" + show);
    }

    $('#main').bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            previousSlide();
            console.log('scrolling up !');
        }
        else {
            nextSlide();
            console.log('scrolling down !');
        }
    });
});
