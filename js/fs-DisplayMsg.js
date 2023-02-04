class DisplayMsg{
  /*  --- DisplayMsg NOTES ---
    Description:  
    File Type:    
    
    Accept Params:
      - User Selected Files
    Executes:
      - Displays Message To User
  */


  // Globals
    // Colors
      static colorSuccess = '#28a745';
      static colorInfo    = '#0dcaf0';
      static colorWarning = '#fd7e14';
      static colorDanger  = '#dc3545';
      static colorAlert   = '#ffda07';
    // Colors
  // Globals


  // Constructs Passed Variables to Params Needed for Popup Message
  static construct(obj, funcType) {
    // Variables
      let snackbarId    = "snackbar-container-"+Math.floor(Math.random() * 2040);
      let msg           = obj.msg;
      let defaultStyle  = (obj.defaultStyle) ? obj.defaultStyle : 0;
      // let stayOnScreen  = (obj.stayOnScreen) ? obj.stayOnScreen : 1;
      let bgColor       = '#333';
      let fontColor     = '#fff';
      let borderSide    = '-left';
      let borderStyle   = 'solid';
      let borderWidth   = '0px';
      let borderColor   = '#28a745'; 
      let position      = 'bottom-middle';
      let clickRemove   = 0;
      let delay         = (obj.delay)         ? obj.delay       : 3000;
      let collapseBox   = 0;
      let timeStamp     = 0;
      let animationIn   = 0


      // Default Styles
        if(defaultStyle){
          borderWidth = '18px',
          borderColor = this.textToColor(defaultStyle);
          msg         = defaultStyle;
        }
      // Default Styles      

      // Overwrite Variables/Defaults
        msg         = (obj.msg)           ? obj.msg                           : msg;
        bgColor     = (obj.bgColor)       ? this.textToColor(obj.bgColor)     : bgColor;
        fontColor   = (obj.fontColor)     ? obj.fontColor                     : fontColor;
        borderSide  = (obj.borderSide)    ? '-'+obj.borderSide                : borderSide;
        borderStyle = (obj.borderStyle)   ? obj.borderStyle                   : borderStyle;
        borderWidth = (obj.borderWidth)   ? obj.borderWidth                   : borderWidth;
        borderColor = (obj.borderColor)   ? this.textToColor(obj.borderColor) : borderColor;
        position    = (obj.position)      ? obj.position                      : position;
        clickRemove = (obj.clickRemove)   ? obj.clickRemove                   : clickRemove;
        collapseBox = (obj.collapseBox)   ? obj.collapseBox                   : collapseBox;
        timeStamp   = (obj.timeStamp)     ? obj.timeStamp                     : timeStamp;
        animationIn = (obj.animationIn)   ? obj.animationIn                   : animationIn;
      // Overwrite Variables/Defaults
    // Variables

    // Snackbar Construction
      let snackbarContainer = $('<div></div>');
      let snackbarMessage   = $('<p class="snackbar-message">Snackbar msg</p>')

      let snackbarTimeStamp = $('<h6 class="snackbar-timestamp desc-sub-xs"></h6>');
      let removeSnackbarBtn = $('<button class="snackbar-remove-btn" onClick="removeParentElement(this)">x</button>');
      let snackbarPosition  = (funcType.toLowerCase() == 'toast') ? '' : 'position-'+position;

              
      // Base Attributes & Properties
        snackbarContainer.attr({
          id: snackbarId,
          class: 'snackbar-container fortFade '+snackbarPosition,
          style: 'background-color:'+bgColor+
                ';color:'+fontColor+
                ';border'+borderSide+':'+borderStyle+
                ';border-width:'+borderWidth+
                ';border-color:'+borderColor
        });
      // Base Attributes & Properties
      
      // (position.includes('right')) ? ';margin-right: 0;' : 'unset'
      // (position.includes('left')) ? ';margin-left: 0;' : 'unset'


      // Side Specific Settings
        /* Handles The Following:
            - Default Animations
            - Margin for Alignment
        */

        if(!animationIn){
          animationIn = 'fortFade-';

          if(position      == 'bottom-middle') { 
            animationIn += 'Up'; 
          }
          else if(position == 'top-middle')    { 
            animationIn += 'Down'; 
          }
          else if(position.includes('left'))   { 
            animationIn += 'Left'; 
            snackbarContainer.css('margin-left', 0);
          }
          else if(position.includes('right'))  { 
            animationIn += 'Right';
            snackbarContainer.css('margin-right', 0);
          }
        }
        snackbarContainer.addClass(animationIn);
      // Side Specific Settings


      // Add Specified Message
        // If over 35 characters, left position text and add line breaks
        if(msg.length > 35){
          snackbarMessage.css('text-align', 'left');
          msg = msg.replace(/(.{35})/g,"$&" + "<br>")
        }

        snackbarMessage.html(msg);
        snackbarContainer.append(snackbarMessage);
      // Add Specified Message
      
      // Optional Snackbar Additions
        // Timestamp
          if(timeStamp){ 
            const now              = new Date();
            const currentTimeStamp = now.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit' });
            snackbarTimeStamp.html(currentTimeStamp);
            snackbarContainer.append(snackbarTimeStamp);
          }
        // Timestamp 

        // Remove Snackbar Button
        if(clickRemove){snackbarContainer.append(removeSnackbarBtn);}
      // Optional Snackbar Additions
    // Snackbar Construction

    return{
      params: {
        clickRemove : clickRemove,
        delay       : delay,
        position    : position,
        animationIn : animationIn
      },
      snackbar: {
        id          : snackbarId,
        container   : snackbarContainer
      }
    }
  }

  // Converts Text to Color 
  static textToColor(text){
    switch(text.toLowerCase()){
      case 'success':
        return this.colorSuccess;
      case 'info':
        return this.colorInfo;
        
      case 'warning':
        return this.colorWarning;
      case 'danger':
        return this.colorDanger;
      case 'alert':
        return this.colorAlert;
      default:
        return text;
    }
  }

  // Call to create Snackbar Message
  static snackbar(obj) {
    let thisObj           = this.construct(obj, 'snackbar');
    let delay             = thisObj['params']['delay'];
    let clickRemove       = thisObj['params']['clickRemove'];
    let animationIn       = thisObj['params']['animationIn'];
    let snackbarId        = thisObj['snackbar']['id'];
    let snackbarContainer = thisObj['snackbar']['container'];

    snackbarContainer.appendTo('body');

    if(!clickRemove){
      setTimeout(function(){ snackbarContainer.removeClass("show"); snackbarContainer.remove(); }, delay);
    }
    
    // Set Fort Fade Animation
    setTimeout(function(){
      fortFade({
        ff_EleId:          '#'+snackbarId
        ,ff_FadeInOnEleId: '#body'
        ,ff_AnimationIn:   animationIn});
    }, 200);
  }

  // Call to create Toast Message
  static toast(obj) {
    let thisObj           = this.construct(obj, 'toast');
    let delay             = thisObj['params']['delay'];
    let clickRemove       = thisObj['params']['clickRemove'];
    let animationIn       = thisObj['params']['animationIn'];
    let snackbarId        = thisObj['snackbar']['id'];
    let snackbarContainer = thisObj['snackbar']['container'];
    

    let position          = thisObj['params']['position'];
    let toastId           = 'fs-toast-container-'+position;

    // Ensure Specified Toast Container Exists
      if(!$('#'+toastId).length){
        let toastContainer = $('<div class="fs-toast-container"></div>');
        toastContainer.attr({
          id: toastId,
          class: 'fs-toast-container show position-'+position
        });
        toastContainer.appendTo('body');
      }
    // Ensure Specified Toast Container Exists


    snackbarContainer.appendTo('#'+toastId);
    if(!clickRemove){
      setTimeout(function(){ snackbarContainer.removeClass("show"); snackbarContainer.remove(); }, delay);
    }

    // Set Fort Fade Animation
    setTimeout(function(){
      fortFade({
        ff_EleId:          '#'+snackbarId
        ,ff_FadeInOnEleId: '#body'
        ,ff_AnimationIn:   animationIn});
    }, 200);
  }
}

function removeParentElement(elem){ $(elem).parent('div').remove(); }