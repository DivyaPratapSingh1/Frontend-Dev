// Q3: Interactive FAQ
// Click to toggle, hover to change color, dblclick to collapse all, focus/blur input highlight parent.

$(function(){
  // Click question toggles its answer
  $('#faq').on('click', '.question', function(){
    $(this).next('.answer').slideToggle();
  });

  // Hover changes question color
  $('#faq').on('mouseenter', '.question', function(){
    $(this).css('color','teal');
  }).on('mouseleave', '.question', function(){
    $(this).css('color','');
  });

  // Double-click collapses all answers
  $('#faq').on('dblclick', '.question', function(){
    $('#faq .answer').slideUp();
  });

  // Focus on input highlights parent question
  $('#faq').on('focus', '.answer-input', function(){
    $(this).closest('.qwrap').find('.question').addClass('focused');
  });

  // Blur resets background color
  $('#faq').on('blur', '.answer-input', function(){
    $(this).closest('.qwrap').find('.question').removeClass('focused');
  });
});
