$(document).ready(function(){
    $(".open").click(function(){
      event.preventDefault();
      $("body").addClass("openmenu")
    })

    $(".close").click(function(){
      event.preventDefault();
      $("body").removeClass("openmenu")
    })


    $(".menuopen").click(function(){
      event.preventDefault();
      $("body").toggleClass("showmenu")
    })
    
    
    lightbox.option({
      'resizeDuration': 1000,
      'wrapAround': true
    })
  
})