
// // Create Spellcheck Container
  //   // Variables
  //     let fsSpellcheckContainer      = $('<grid id="fs-spellcheck-container"></grid>');
  //     let fsSpellcheckDropdownOption = $('<div class="dropdown-menu"><i class="fa-solid fa-angle-down"></i></div>');


  //     let fsSpellcheckIndividualBtn = $('<a id="fs-spellcheck-individual-btn" class="btn btn-primary fs-selection-btn"></a>');
  //     let fsSpellcheckCollectiveBtn = $('<a id="fs-spellcheck-collective-btn" class="btn btn-primary fs-selection-btn"></a>');

  //     let fsSpellcheckIcon          = $('<i class="fa-solid fa-spell-check"></i>');
  //     let fsSpellcheckSquarePenIcon = $('<i class="fa-regular fa-pen-to-square"></i>');
  //   // Variables

  //   // {/* <i class="fa-regular fa-object-group"></i> */}

  //   fsSpellcheckIndividualBtn.append(fsSpellcheckIcon);
  //   fsSpellcheckCollectiveBtn.append(fsSpellcheckSquarePenIcon);
    
  //   fsSpellcheckContainer.append(fsSpellcheckDropdownOption);
  //   fsSpellcheckContainer.append(fsSpellcheckIndividualBtn);
  //   fsSpellcheckContainer.append(fsSpellcheckCollectiveBtn);

  //   fsSpellcheckContainer.appendTo($('html'));
// // Create Spellcheck Container

// Button Event Listeners
  $( "#fs-spellcheck-individual-btn" ).click(function() {
    let thisEle = $(this);

    // Collective Off
      $('body').attr('contenteditable',        null);
      $('body').attr('spellcheck',             null);
    // Collective Off
    
    // Individual Toggle
      $('h1').parent().attr('contenteditable', (_, attr) => attr ? null : true);
      $('h1').parent().attr('spellcheck',      (_, attr) => attr ? null : true);

      $('h2').parent().attr('contenteditable', (_, attr) => attr ? null : true);
      $('h2').parent().attr('spellcheck',      (_, attr) => attr ? null : true);
      
      $('h3').parent().attr('contenteditable', (_, attr) => attr ? null : true);
      $('h3').parent().attr('spellcheck',      (_, attr) => attr ? null : true);

      $('h4').parent().attr('contenteditable', (_, attr) => attr ? null : true);
      $('h4').parent().attr('spellcheck',      (_, attr) => attr ? null : true);

      $('h5').parent().attr('contenteditable', (_, attr) => attr ? null : true);
      $('h5').parent().attr('spellcheck',      (_, attr) => attr ? null : true);

      $('h6').parent().attr('contenteditable', (_, attr) => attr ? null : true);
      $('h6').parent().attr('spellcheck',      (_, attr) => attr ? null : true);

      $('p' ).parent().attr('contenteditable', (_, attr) => attr ? null : true);
      $('p' ).parent().attr('spellcheck',      (_, attr) => attr ? null : true);

      $('a' ).attr('contenteditable',          (_, attr) => attr ? null : true);
      $('a' ).attr('spellcheck',               (_, attr) => attr ? null : true);
      $('a' ).attr('disable',                  (_, attr) => attr ? null : true);
      
      $('button').attr('contenteditable',      (_, attr) => attr ? null : true);
      $('button').attr('spellcheck',           (_, attr) => attr ? null : true);
      $('button').attr('disable',              (_, attr) => attr ? null : true);
    // Individual Toggle
    
    fsNoEditSpellcheckBtns();
    setDropdownMenuSelected(thisEle, $('<i class="fa-regular fa-pen-to-square"></i>'));
  });

  $( "#fs-spellcheck-collective-btn" ).click(function() {
    let thisEle = $(this);

    // Individual Off
      $('h1').parent().attr('contenteditable', null);
      $('h1').parent().attr('spellcheck',      null);

      $('h2').parent().attr('contenteditable', null);
      $('h2').parent().attr('spellcheck',      null);
      
      $('h3').parent().attr('contenteditable', null);
      $('h3').parent().attr('spellcheck',      null);

      $('h4').parent().attr('contenteditable', null);
      $('h4').parent().attr('spellcheck',      null);

      $('h5').parent().attr('contenteditable', null);
      $('h5').parent().attr('spellcheck',      null);

      $('h6').parent().attr('contenteditable', null);
      $('h6').parent().attr('spellcheck',      null);

      $('p' ).parent().attr('contenteditable', null);
      $('p' ).parent().attr('spellcheck',      null);

      $('a' ).attr('contenteditable',          null);
      $('a' ).attr('spellcheck',               null);
      $('a' ).attr('disable',                  null);
      
      $('button').attr('contenteditable',      null);
      $('button').attr('spellcheck',           null);
      $('button').attr('disable',              null);
    // Individual Off

    // Collective Toggle
      $('body').attr('contenteditable',        (_, attr) => attr ? null : true);
      $('body').attr('spellcheck',             (_, attr) => attr ? null : true);
    // Collective Toggle
    
    fsNoEditSpellcheckBtns();
    setDropdownMenuSelected(thisEle, $('<i class="fa-regular fa-file"></i>'));
  });
// Button Event Listeners

// Ensure user cannot edit spellcheck buttons text
function fsNoEditSpellcheckBtns(){
  $('#fs-spellcheck-individual-btn').attr('contenteditable', null);
  $('#fs-spellcheck-individual-btn').attr('spellcheck',      null);
  $('#fs-spellcheck-individual-btn').attr('disable',         null);

  $('#fs-spellcheck-collective-btn').attr('contenteditable', null);
  $('#fs-spellcheck-collective-btn').attr('spellcheck',      null);
  $('#fs-spellcheck-collective-btn').attr('disable',         null);
}