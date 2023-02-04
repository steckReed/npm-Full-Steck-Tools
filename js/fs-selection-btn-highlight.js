$(".fs-selection-btn").click(function(){
  $('.fs-selection-btn').removeClass('active');
  $(this).addClass('active');
});


$(".fs-selection-btn-toggle").click(function() {
  $(this).toggleClass('active');
});