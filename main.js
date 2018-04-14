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

    slideItem.onclick = function () {
        console.log('+');

    };


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
        $("#slidewrapper").children(0).eq(hide - 1).addClass('slide');
        $("#slidewrapper").children(0).eq(hide - 1).removeClass('slideView');
        $("#slidewrapper").children(0).eq(show - 1).addClass('slideView');
        $("#slidewrapper").children(0).eq(show - 1).removeClass('slide');
        $("#slideName").text("Slide 0" + show);
    }


    // function preloadPic() {
    //     $("#slideName").text(picturesLib[0][0]);
    //     $('#currentPic').attr("alt", picturesLib[0][0]);
    //     $('#currentPic').attr("src", picturesLib[0][1]);
    // }

    // function loadImeges() {
    //     // var primeItem = $("#slides-list").children();
    //     // var primeA = $(primeItem).children;
    //     //
    //     // primeA.text = picturesLib[0][0];
    //     // // console.log(primeEMenu);
    //     // var newElems = $(primeA).clone();
    //     // // console.log(newElems);
    //     // $(".slide-item").clone().appendTo(".slides-list");
    //
    //     var aaa = $("#slides-list").children(0);
    //     var newItem = $("aaa").clone();
    //     newItem.appendTo(".slides-list");
    //
    //     // var bbb = aaa.children();
    //     // .text = '123';
    //
    //
    //
    //
    //     // var newItem = $(".slide-item").clone();
    //     // newItem.appendTo(".slides-list");
    //
    //
    //


    //    }


    // preloadPic();
    // loadImeges();

});