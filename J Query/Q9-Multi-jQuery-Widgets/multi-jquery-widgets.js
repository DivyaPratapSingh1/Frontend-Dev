// Q9: Multi-jQuery Widgets (using noConflict)
// Capture both versions and assign to local vars so they don't conflict.

var jqNew = jQuery.noConflict(true); // releases global jQuery for the old one
var jqOld = window.jQuery.noConflict(true);

var $v1 = jqOld; // older v1 handlers (carousel)
var $v2 = jqNew; // newer v3 handlers (modals/tooltips)

// Version 1 handles carousel rotation and active highlighting
$v1(function(){
  var i = 0;
  var messages = ['Slide A','Slide B','Slide C'];
  setInterval(function(){
    $v1('#carousel').text(messages[i]);
    i = (i + 1) % messages.length;
  }, 3000);

  // highlight active widget (toggle)
  $v1('#widgetsList').on('click', function(){
    $v1(this).toggleClass('active');
  });
});

// Version 2 handles modal popups and tooltips
$v2(function(){
  $v2('#modalArea').on('click', function(){
    var modal = $v2('<div class="modal">Notification: Hello! <button class="close">Close</button></div>')
      .css({position:'fixed',left:'20%',top:'20%',padding:'12px',background:'#fff',border:'1px solid #ccc'});
    $v2('body').append(modal);
    modal.find('.close').on('click', function(){ modal.remove(); });
  });

  // Tooltips on hover
  $v2('#tooltips').on('mouseenter', function(){
    var tip = $v2('<div class="tip">Tooltip info</div>').css({position:'absolute',left: $v2(this).offset().left + 10, top: $v2(this).offset().top + 30, padding:'6px', border:'1px solid #ccc', background:'#fff'});
    $v2('body').append(tip);
    $v2(this).data('tip', tip);
  }).on('mouseleave', function(){
    var tip = $v2(this).data('tip');
    if(tip) tip.remove();
  });
});
