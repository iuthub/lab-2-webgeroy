$('.movie-list li').hover(function(){
  $(this).find('a').css('display', 'block');
});
$('.movie-list li').on('mouseleave', function(){
  $(this).find('a').css('display', 'none');
});
var intervalId;
$('.neighbour-list li').mouseenter(function(){
  var p = $(this).find('p');
  if(intervalId){
    clearInterval(intervalId);
  }
  changeColor(p);
  intervalId = setInterval(changeColor, 1000, p);
})
$('.neighbour-list li').mouseleave(function(){
  clearInterval(intervalId);
  $(this).find('p').slideDown(500);
  $(this).find('p').css('color', 'rgb(255, 255, 255)');
})
function changeColor(p){
  var r = Math.floor(Math.random()*5 + 250);
  var g = Math.floor(Math.random()*60 + 120);
  var b = Math.floor(Math.random()*60 + 120);
  p.slideDown(500);
  p.css('color', format('rgb({0}, {1}, {2})', [r, g, b]));
  p.slideUp(500);
}
function format(source, params) {
    $.each(params,function (i, n) {
        source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
    })
    return source;
}
var $animation_element = $('footer');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_element, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
