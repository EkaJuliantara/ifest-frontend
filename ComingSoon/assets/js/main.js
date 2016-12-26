
$(document).ready(function(){

  var h = $(window).height();
  $('#content').css({'height':h});
  var pt = (($(window).height() - $('#content .container').height()) / 3);
  $('.container').css({'padding-top':pt});

  $('#clock').countdown('2016/12/31', function(event) {
    var $this = $(this).html(event.strftime(''
    + '<div class="box-time"><div class="item-time">%d</div> HARI </div>'
    + '<div class="box-time"><div class="item-time">%H</div> JAM </div>'
    + '<div class="box-time"><div class="item-time">%M</div> MENIT </div>'
    + '<div class="box-time"><div class="item-time">%S</div> DETIK </div>'  ));
  });

  // $(window).resize(function(){
  //   var h = $(window).height();
  //   $('#content').css({'height':h});
  // });
});

$(window).resize(function(){
  var h = $(window).height();
  $('#content').css({'height':h});

  var pt = (($(window).height() - $('#content .container').height()) / 2);
  $('.container').css({'padding-top':pt});
});
