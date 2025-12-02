// Q1: Welcome Greeting
// Uses jQuery to set greeting based on local time, change text, toggle visibility and show an alert.

$(document).ready(function(){
  // Determine time of day and set greeting on page load
  var now = new Date();
  var hour = now.getHours();
  var greetingText = 'Hello!';

  if(hour >= 5 && hour < 12){
    greetingText = 'Good Morning';
  } else if(hour >= 12 && hour < 17){
    greetingText = 'Good Afternoon';
  } else {
    greetingText = 'Good Evening';
  }

  $('#greeting').text(greetingText + ', visitor!');

  // Alert when greeting is clicked
  $('#greeting').on('click', function(){
    alert('You clicked the greeting: ' + $(this).text());
  });

  // Change greeting button -> motivational quote
  $('#changeGreeting').on('click', function(){
    $('#greeting').text('Keep going — small steps every day!');
  });

  // Toggle welcome message
  $('#toggleWelcome').on('click', function(){
    $('#welcomeMsg').toggle();
  });
});
