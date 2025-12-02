// Q2: Product Highlight
// Click to highlight product, hover to show details, toggle favorite, style discounted products, alert if out of stock.

$(function(){
  // Clicking a product highlights it (ignore clicks on fav button)
  $('#products').on('click', '.product', function(e){
    if($(e.target).is('.fav')) return; // don't trigger when clicking fav
    $('.product').removeClass('highlight');
    $(this).addClass('highlight');

    // Alert if out of stock using data attribute
    var stock = parseInt($(this).data('stock'), 10);
    if(stock === 0){
      alert('Sorry — this product is out of stock.');
    }
  });

  // Hover to show details
  $('#products').on('mouseenter', '.product', function(){
    $(this).find('.details').show();
  }).on('mouseleave', '.product', function(){
    $(this).find('.details').hide();
  });

  // Favorite icon toggles selected class
  $('#products').on('click', '.fav', function(e){
    e.stopPropagation(); // prevent parent click handler
    $(this).toggleClass('selected');
    $(this).closest('.product').toggleClass('selected');
  });

  // Apply different style to discounted products using attribute selector
  $('#products').find('[data-discount]').addClass('discount');
});
