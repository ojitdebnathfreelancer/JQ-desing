$(document).ready(function(){
    //nav class add
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 100){
        $(" nav").addClass("navFixed");
    }

    else{
        $("nav").removeClass("navFixed");
    }
});

    // banner slides
    $(".banner-slide").slick({
        autoplay:true,
        autoplaySpeed:3000,
        // arrows:false,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:false,
        dots:true,
        prevArrow:'<i class="fas fa-chevron-left slick-prev left-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right slick-next right-arrow"></i>',
    });

    $(".img-slider").slick({
        arrows:false,
        slidesToShow:3,
        centerMode:true,
        centerPadding:"0px",
        autoplay:true,
    });

    $(".text-slider").slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        asNavFor:".person-slider",
    });

    $(".person-slider").slick({
        arrows:false,
        autoplay:true,
        slidesToShow:3,
        centerMode:true,
        centerPadding:"0px",
        pauseOnHover:false,
        asNavFor:".text-slider",
    });

    var mixer = mixitup('.galery-slider');
    $(".menu-container ul li").on("click",function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 100){
            $(".back-top").fadeIn();
        }
        else{
            $(".back-top").fadeOut();
        }
    });

    $(".back-top").on("click",function(){
        $("html,body").animate({
            scrollTop:"0px",
        });
    })

    $(".venobox").venobox({
        arrowsColor:"orange",
        closeColor:"white",
        closeBackground:"orange",
        overlayColor:"rgba(0,0,0,0.7)",
        spinner:"cube-grid",
        
    });

});


