$(document).ready(function(){
    $(".dropdown").click(function(event){
        event.preventDefault();
        $(".dropdownlist").toggleClass("open");
        $(this).toggleClass("active");
        $(this).parent().siblings().find(".dropdownlist").removeClass("open")
        $(this).parent().siblings().find(".dropdown").removeClass("active")
    })
    $(".dropdown").hover(function(event){
        $(this).parent().siblings().find(".dropdownlist").removeClass("open")
        $(this).parent().siblings().find(".dropdown").removeClass("active")
    })

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        autoplay: {
            delay: 2000,
          },      

      });

      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })


      $(".up a").click(function(){
        event.preventDefault();
        $("html,body").animate({scrollTop:0},600);
      })
})

