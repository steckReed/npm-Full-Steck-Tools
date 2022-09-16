$(".dropdown-menu-btn").click(function() {
  $(this).siblings('.dropdown-menu').toggleClass('show');
  $(this).siblings('.dropdown-menu').toggleClass('hide');
});

$(".dropdown-menu-item").click(function() {
  $(this).parent('.dropdown-menu').toggleClass('show');
  $(this).parent('.dropdown-menu').toggleClass('hide');
});


$(".fs-selection-btn-toggle").click(function() {
  let dropdownMenuSelected = $(this).siblings('.dropdown-menu-btn').children('.dropdown-menu-selected').attr('fs-dropdown-menu-selected');

  $('#'+dropdownMenuSelected).trigger("click");
  console.log($('#'+dropdownMenuSelected));
});



    
// let isActive = thisEle.parent().parent('.btn-group-container').children('.fs-selection-btn-toggle').hasClass('active');
// console.log(isActive);



function setDropdownMenuSelected(thisEle, newContents){
  // Set Contents of Selected Icon
  let dropdownMenuSelected = thisEle.parent('.dropdown-menu').siblings('.dropdown-menu-btn').children('.dropdown-menu-selected');
  dropdownMenuSelected.html(newContents);
  dropdownMenuSelected.attr('fs-dropdown-menu-selected', thisEle.attr('id'))

  // Set Button to 'active'
  thisEle.parent().parent('.btn-group-container').children('.fs-selection-btn-toggle').addClass('active');
}