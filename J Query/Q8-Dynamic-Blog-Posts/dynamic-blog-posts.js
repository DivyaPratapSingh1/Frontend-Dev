// Q8: Dynamic Blog Posts
// Add, prepend, remove posts; add tags using before/after; highlight posts by keyword.

$(function(){
  $('#addPost').on('click', function(){
    var title = prompt('Title of new post:','New Post');
    if(!title) return;
    $('#posts').append($('<li class="post">'+title+'</li>'));
  });

  $('#prependFeatured').on('click', function(){
    var title = prompt('Featured post title:','Featured Post');
    if(!title) return;
    $('#posts').prepend($('<li class="post featured">'+title+' <em>(Featured)</em></li>'));
  });

  $('#removeLast').on('click', function(){
    $('#posts .post').last().remove();
  });

  // Add tags to posts using before/after
  $('#posts').on('click', '.post', function(){
    $(this).after('<div class="tags">Tags: <span>example</span></div>');
  });

  // Highlight posts with specific keywords dynamically
  function highlightKeyword(kw){
    $('#posts .post').each(function(){
      if($(this).text().toLowerCase().indexOf(kw.toLowerCase()) !== -1){
        $(this).css('background','#fffae6');
      }
    });
  }
  highlightKeyword('react');
});
