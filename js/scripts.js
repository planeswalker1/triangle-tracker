// User-interface or (front-end) logic:

// form submit event listener
$('#form').on('submit', function(event) {
  // prevent default form submission
  event.preventDefault();
  console.log('form submitted');
});
