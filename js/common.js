
$(document).ready(function(){
    $('.call-callback').on('click', function () {
        $('.callback').addClass('showed');
        $('.overlay').addClass('showed');
    });
    $('.close-callback').on('click', function () {
        $('.callback').removeClass('showed');
        $('.overlay').removeClass('showed');
    });
    $('.overlay').on('click', function () {
        $('.callback').removeClass('showed');
        $('.search-popup').removeClass('showed');
        $('.overlay').removeClass('showed');
    });
    $('.call-search').on('click', function () {
        $('.search-popup').addClass('showed');
        $('.overlay').addClass('showed');
    });



 // var li = $(".slider-main .slick-dots li");
 // console.log(li);
    // if($('.slider-main .slick-dots li').hasClass("slick-active")){
    //     // $('.slick-dots .slick-active button').after("<div class=\"lds-cover\"><div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div></div>")
    //     $(this).find("button").after("<div class=\"lds-cover\"><div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div></div>");
    // }
    // else {
    //     $(this).find("div.lds-cover").remove();
    // }
    // ;

        // $(this).addClass('lds-ring');
        // console.log(this);
//         .addClass('lds-ring');
// <div class="lds"><div></div><div></div><div></div><div></div></div>
    //wow
    new WOW().init();

});

//  SLIDER-REF
$('.slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    centerMode: false,
    fade: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

//  SLIDER-REF
$('.sl-news').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: false,
    responsive: [
        {
            breakpoint: 1190,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
// $(function () {
//     $(".slider-main .slick-dots li").each(function () {
//         // // $(this).find("button").after("<div class=\"lds-cover\"><div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div></div>");
//         // if($(this).hasClass("slick-active")){
//         //     // $('.slick-dots .slick-active button').after("<div class=\"lds-cover\"><div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div></div>")
//         //     $(this).hasClass("slick-active").find("button").after("<div class=\"lds-cover\"><div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div></div>");
//         // }
//         // else {
//         //     $(this).find("div.lds-cover").remove();
//         // }
//         // console.log($(this));
//
//         if($(this).hasClass("slick-active")){
//             $(this).find("button").after("<div class=\"lds-cover\"><div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div></div>");
//         }else {
//                 $(this).find("div.lds-cover").remove();
//             }
//     });
// })




