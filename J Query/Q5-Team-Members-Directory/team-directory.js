// Q5: Team Members Directory
// Click manager to highlight reports, hover employee to show contact using .next(), click department to style children, random select highlights siblings, collapse/expand.

$(function(){
  // Click a manager -> highlight direct reports using .next()
  $('.manager').on('click', function(){
    $(this).next('.members').find('.member').addClass('highlight');
  });

  // Append contact info after each member (for demo) and show on hover using .next()
  $('.member').each(function(){
    $(this).after('<span class="contact" style="display:none;margin-left:8px"> (email:'+ $(this).text().toLowerCase() +'@example.com)</span>');
  });
  $('.members').on('mouseenter', '.member', function(){
    $(this).next('.contact').show();
  }).on('mouseleave', '.member', function(){
    $(this).next('.contact').hide();
  });

  // Click department -> change background of members using .children()
  $('.department').on('click', function(){
    $(this).children('.members').find('.member').css('background','#f9f9f9');
  });

  // Select random employee -> highlight siblings
  $('#randomEmployee').on('click', function(){
    var members = $('.member');
    var rand = Math.floor(Math.random() * members.length);
    var chosen = $(members[rand]);
    chosen.siblings().addClass('highlight');
    chosen.addClass('highlight');
  });

  // Collapse/expand teams using .parent() and .find()
  $('#toggleTeam').on('click', function(){
    $('.department').each(function(){
      $(this).find('.members').slideToggle();
    });
  });
});
