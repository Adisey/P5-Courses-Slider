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
var slideNow = 1;
var slideCount = 0;

var translateWidth = 0;
var slideInterval = 2000;

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}


$(document).ready(function () {
    slideCount =  $('#slidewrapper').children().length;
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function(){
        clearInterval(switchInterval);
    },function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });








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