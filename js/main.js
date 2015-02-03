$(function() {
  var phi = 1.61803398875;
  var phiInv = 1/phi;
  var golden = $('.golden');
  
  $('.golden-panel').click(function(e) {
    var clicked = $(this);
    var parents = clicked.parents('.golden-panel');
    
    var scale = 0;
    var translate = 0;
    var rotate = 0;
    
    var transform = '';
    for (var i = 0; i < parents.length; i++) {
      transform += ' scale(1.618044431500) translateY(1.61803em) rotateZ(-90deg)';
    }
    
    golden.css('transform', transform);
    
    e.stopPropagation();
  });
});