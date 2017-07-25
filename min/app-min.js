// Puppy images fade in
$('main img').css('display', 'none').fadeIn(1600);

// 'Selected' puppies are visually different from unselected puppies
$('.card').on('click', function() {
  $(this).toggleClass('selected');
});



// Possible bonus goals:
  // Make the "Adopt!" buttons on the homepage open a modal?
  // Require the checkbox on the form
  // Only enable the checkbox once its link has been clicked


