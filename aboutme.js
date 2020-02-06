$('.movie-list li').hover(function(){
  $(this).find('a').css('display', 'block');
});
$('.movie-list li').on('mouseleave', function(){
  $(this).find('a').css('display', 'none');
});
