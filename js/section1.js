$(document).ready(function(){

  $(".thumbs>div>a").click(function(){
    let path=$(this).attr("href");
    $("#largeImg>img").attr({"src" : path}).hide().fadeIn(300);

    return false;
  });

  $(".button>a>img").click(function(){
    let path=$(this).attr("href");
    $("#largeImg>img").attr({"src" : path}).hide().fadeIn(1300);
    $(".thumbs").toggleClass("active");
    $("#largeImg").toggleClass("active");
    $("#gallery>h1").toggleClass("active");
    $(".button").toggleClass("active");
    $(".aside").toggleClass("active").delay(1000).animate({opacity:"1"},500);
    $("#largeImg.active").stop().animate({top:"19%"},1000);

    return false;
  });


});