$(document).ready(function() {
  // URL Param Highlights
    const queryString     = window.location.search;
    const urlParams       = new URLSearchParams(queryString);
    const urlPageParam    = urlParams.get('page');

    $('#'+urlPageParam+'-tabs-btn').addClass('active');
  // URL Param Highlights

  // User Option Input (User Page)
    const userOptionInput = $('.user-option-input');

    // On Load
    userOptionInput.each(function(){
      let thisEle               = $(this);
      let toggleBtn             = thisEle.parent().parent().parent('.user-option-toggle-btn');
      let toggleBtnActiveToggle = ( toggleBtn.attr('active-toggle') ) ? toggleBtn.attr('active-toggle') : 'active';
      
      setTimeout(() => {
        if(this.checked) {
          toggleBtn.addClass(toggleBtnActiveToggle);
        }
        else {
          toggleBtn.removeClass(toggleBtnActiveToggle);
        } 
      }, 300);
    });
    
    // On Change
    userOptionInput.change(function() {
      let thisEle               = $(this);
      let toggleBtn             = thisEle.parent().parent().parent('.user-option-toggle-btn');
      let toggleBtnActiveToggle = ( toggleBtn.attr('active-toggle') ) ? toggleBtn.attr('active-toggle') : 'active';

      if(this.checked) {
        toggleBtn.addClass(toggleBtnActiveToggle);
      }
      else {
        toggleBtn.removeClass(toggleBtnActiveToggle);
      } 
    });
  // User Option Input (User Page)
});