// Q6: Event Subscription Panel
// Subscribe/unsubscribe, dynamically add topics (delegated events), detach event handlers and show success message.

$(function(){
  function showMessage(msg){
    $('#messages').stop(true,true).text(msg).addClass('success').fadeIn().delay(800).fadeOut();
  }

  // Delegate subscribe/unsubscribe
  $('#topics').on('click', '.subscribe', function(){
    $(this).closest('.topic').data('subscribed', true).css('font-weight','700');
    showMessage('Subscribed successfully');
  });

  $('#topics').on('click', '.unsubscribe', function(){
    $(this).closest('.topic').data('subscribed', false).css('font-weight','');
    showMessage('Unsubscribed');
  });

  // Add new topic dynamically - delegated handlers above will apply
  $('#addTopic').on('click', function(){
    var name = $('#newTopic').val().trim();
    if(!name) return;
    var node = $('<div class="topic">'+name+' <button class="subscribe">Subscribe</button> <button class="unsubscribe">Unsubscribe</button></div>');
    $('#topics').append(node);
    $('#newTopic').val('');
    showMessage('Topic added');
  });

  // Remove specific subscription - demo: remove handlers for topic with text 'Offers'
  $('#topics').on('click', '.unsubscribe-offers', function(){
    $('#topics .topic').filter(function(){ return $(this).text().indexOf('Offers') !== -1; }).off('click');
    showMessage('Removed event handlers for Offers');
  });
});
