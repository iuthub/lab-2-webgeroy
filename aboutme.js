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
