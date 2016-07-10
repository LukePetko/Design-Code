$(window).scroll(function(){

  var wScroll = $(this).scrollTop();


  $('.logo').css({

      'transform' : 'translate(0, '+ wScroll/12 +'%)'

  });


});

$(function(){

  $('.flower-box').hide(0).fadeIn(4000);

  $('.macro-photo').fadeOut(1000, function(){

    $(this).attr('src', '../images/flower_3.jpg').fadeIn(1000);

  });

});
