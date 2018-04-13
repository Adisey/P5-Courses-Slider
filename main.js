'use strict';
var picturesLib = [
    ["Slide 01", "http://adisey-ru.1gb.ru/photos/panorams/data/DSC4344_P-th1.jpg"],
    ["Slide 02", "http://adisey-ru.1gb.ru/photos/panorams/data/dsc_0893_1000.jpg"],
    ["Slide 03", "http://adisey-ru.1gb.ru/photos/panorams/data/DSC3044_Panorama-2.jpg"],
    ["Slide 04", "http://adisey-ru.1gb.ru/photos/panorams/data/DSC4344_P-2000.jpg"],
    ["Slide 05", "http://adisey-ru.1gb.ru/photos/panorams/data/p4_ps.jpg"],
    ["Slide 06", "http://adisey-ru.1gb.ru/photos/panorams/data/img_1747_p-1200.jpg"],
    ["Slide 07", "http://adisey-ru.1gb.ru/photos/panorams/data/img_1682-w.jpg"],
    ["Slide 08", "http://adisey-ru.1gb.ru/photos/panorams/data/img_1337-p17.jpg"],
    ["Slide 09", "http://adisey-ru.1gb.ru/photos/panorams/data/img_1326-30-3.jpg"],
    ["Slide 10", "http://adisey-ru.1gb.ru/photos/panorams/data/img_1057_8_9-w.jpg"],
    ["Slide 11", "http://adisey-ru.1gb.ru/photos/panorams/data/Smotruh1_w.jpg"],
    ["Slide 12", "http://adisey-ru.1gb.ru/photos/panorams/data/kp01-w.jpg"],
    ["Slide 13", "http://adisey-ru.1gb.ru/photos/panorams/data/p2-1-25_th500.jpg"],
    ["Slide 14", "http://adisey-ru.1gb.ru/photos/panorams/data/p2-1-25.jpg"],
    ["Slide 15", "http://adisey-ru.1gb.ru/photos/panorams/data/img_9079-p.jpg"],
    ["Slide 16", "http://adisey-ru.1gb.ru/photos/panorams/data/p5-w4.jpg"]
];
var slideCurrent=1, slideCount;

$(document).ready(function () {
    slideCount =  $("#slidewrapper").children().length;
    console.log(slideCount);

    prevBtn.onclick = function(){
        previousSlide();
    };

    nextBtn.onclick = function() {
        nextSlide();
    };

    function nextSlide() {
        var slideOld=slideCurrent;
        slideCurrent++;
        slideCurrent = (slideCurrent>slideCount || slideCurrent<1) ? 1: slideCurrent;
        console.log(slideCurrent);
        console.log($("#slidewrapper").children(0));
        HideShowPic(slideOld, slideCurrent);
        console.log($("#slidewrapper").children(0));

        // goToSlide(currentSlide + 1);
    };
    function previousSlide() {
        var slideOld=slideCurrent;
        slideCurrent--;
        slideCurrent = (slideCurrent>slideCount || slideCurrent<1) ? 4:slideCurrent;
        console.log(slideCurrent);
        // goToSlide(currentSlide - 1);
    };

function HideShowPic(hide, show) {
    $("#slidewrapper").children(0).eq(hide-1).addClass('slide');
    $("#slidewrapper").children(0).eq(hide-1).removeClass('slideView');
    $("#slidewrapper").children(0).eq(show-1).addClass('slideView');
    $("#slidewrapper").children(0).eq(show-1).removeClass('slide');
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