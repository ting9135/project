$(document).ready(function(){
    $(".xmark").hide()
    $(".menuopen").click(function(){
        event.preventDefault();
        $("body").toggleClass("showmenu");
        $(".bars").fadeIn(1000)
        $(".showmenu .bars").hide()
        $(".xmark").hide()
        $(".showmenu .xmark").show()
    })
    $(".heart").click(function(){
        event.preventDefault();
        $(this).parent().find(".heart-solid").attr("style","display:block");
        $(this).hide();
    })
    $(".heart-solid").click(function(){
        event.preventDefault();
        $(this).parent().find(".heart").show()
        $(this).hide();
    })
})