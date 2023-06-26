$(document).ready(function(){

bb=true;
$(".quickbody").click(function(){

  if(bb){
    $(".quickbody").stop(true,true).animate({"bottom":"0px"},500,"easeOutBack");
    $(".quick_icon .icon4").stop(true,true).delay(100).animate({"bottom":"110px","left":"220px","opacity":"1"},500,"easeOutBack");
    $(".quick_icon .icon3").stop(true,true).delay(100).animate({"bottom":"200px","left":"150px","opacity":"1"},500,"easeOutBack");
    $(".quick_icon .icon2").stop(true,true).delay(100).animate({"bottom":"200px","left":"50px","opacity":"1"},500,"easeOutBack");
    $(".quick_icon .icon1").stop(true,true).delay(100).animate({"bottom":"110px","left":"-20px","opacity":"1"},500,"easeOutBack");
    
    bb=false;
  }else{
    $(".quickbody").stop(true,true).animate({"bottom":"-75px"},500,"easeOutBack");
    $(".quick_icon li").stop(true,true).animate({"bottom":"0px","left":"50%","opacity":"0"},200);

    bb=true;
  }
});

$( '.icontop' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );

  });