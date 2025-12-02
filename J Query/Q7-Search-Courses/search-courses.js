// Q7: Search Courses
// Real-time filtering with keyup, highlight matched text, toggle visibility, show count, clear search.

$(function(){
  var $courses = $('#courses .course');

  function updateCount(n){ $('#count').text('Matched: ' + n); }

  $('#search').on('keyup', function(){
    var term = $(this).val().trim();
    var matched = 0;

    $courses.each(function(){
      var text = $(this).text();
      if(term === '' || text.toLowerCase().indexOf(term.toLowerCase()) !== -1){
        if(term !== ''){
          var regex = new RegExp('('+term+')','ig');
          $(this).html(text.replace(regex, '<span class="highlight">$1</span>'));
        } else {
          $(this).text(text);
        }
        $(this).show();
        matched++;
      } else {
        $(this).hide();
      }
    });

    updateCount(matched);
  });

  $('#clearSearch').on('click', function(){
    $('#search').val('');
    $courses.show().each(function(){ $(this).text($(this).text()); });
    updateCount($courses.length);
  });

  updateCount($courses.length);
});
