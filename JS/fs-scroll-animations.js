    /*
      HOW TO USE "Full-Steck Scroll Animation"
        sa_EleId           = (REQUIRED)
        sa_TopEleId        = (REQUIRED)
        sa_AnimationIn     = (REQUIRED)
        sa_BottomEleId     =
        sa_AnimationOut    =
        sa_TimeDelay       =
        sa_RepeatAnimation = 
    */
    
  var sa_CenterScreenCalc;
  function scrollAnimationActivate() { sa_CenterScreenCalc = $(window).scrollTop() + ($(window).height() / 2); }

  function scrollAnimationGetWindow(sa_TopEleId, sa_BottomEleId){
      try  { var sa_TopEleIndicator = $(sa_TopEleId).offset().top; }
      catch{ var sa_TopEleIndicator = 0; }
      var sa_BottomEleIndicator = $(sa_BottomEleId).offset().top + $(sa_BottomEleId).height();

      return (sa_BottomEleIndicator >= sa_CenterScreenCalc) && (sa_TopEleIndicator <= sa_CenterScreenCalc)
  }
  
  function scrollAnimation(obj) {
    // Variables
      let sa_EleId           = obj.sa_EleId;
      let sa_TopEleId        = obj.sa_TopEleId;
      let sa_AnimationIn     = obj.sa_AnimationIn;
      let sa_BottomEleId     = (obj.sa_BottomEleId)     ? obj.sa_BottomEleId     : 'body';
      let sa_AnimationOut    = (obj.sa_AnimationOut)    ? obj.sa_AnimationOut    : '';
      let sa_TimeDelay       = (obj.sa_TimeDelay)       ? obj.sa_TimeDelay       : 300;
      let sa_RepeatAnimation = (obj.sa_RepeatAnimation) ? obj.sa_RepeatAnimation : 0;
    // Variables

    if(sa_EleId && sa_TopEleId && sa_AnimationIn){
      // Add Animation (With Delay)
        // setTimeout(function(){ 
          if(scrollAnimationGetWindow(sa_TopEleId, sa_BottomEleId)) {
              $(sa_EleId).removeClass(sa_AnimationOut).addClass(sa_AnimationIn);
          }
        // }, sa_TimeDelay);
      // Add Animation

      // Remove Animation
        if(sa_RepeatAnimation){ // Extra 'IF' to remove optional calc
          if(!scrollAnimationGetWindow(sa_TopEleId, sa_BottomEleId)) {
              $(sa_EleId).removeClass(sa_AnimationIn).addClass(sa_AnimationOut);
          }
        }
      // Remove Animation
    } else { 
      // Error Message
        console.log(`Scroll Animation: Required Param Not Set. sa_EleId: "${sa_EleId}", sa_TopEleId: "${sa_TopEleId}", sa_AnimationIn: "${sa_AnimationIn}"`);
      // Error Message
    }
  }