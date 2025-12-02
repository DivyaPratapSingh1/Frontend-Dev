// Q4: Special Offer Banner
// Controls to hide/show banners, slide, fade and auto-rotate every 5 seconds.

$(function(){
  var banners = $('#banners .banner');

  // Hide/Show
  $('#hide').on('click', function(){ banners.hide(); });
  $('#show').on('click', function(){ banners.show(); });

  // Slide up / down
  $('#slideUp').on('click', function(){ banners.slideUp(); });
  $('#slideDown').on('click', function(){ banners.slideDown(); });

  // Fade in / fade out
  $('#fadeOut').on('click', function(){ banners.fadeOut(); });
  $('#fadeIn').on('click', function(){ banners.fadeIn(); });

  // Auto-rotate banners every 5 seconds using fadeIn/fadeOut
  var index = 0;
  function rotateBanners(){
    banners.fadeOut(400);
    $(banners[index]).fadeIn(400);
    index = (index + 1) % banners.length;
  }
  banners.hide().first().show();
  setInterval(rotateBanners, 5000);
});
