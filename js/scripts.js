// User-interface or (front-end) logic:

// form submit event listener
$('#form').on('submit', function(event) {
  // prevent default form submission
  event.preventDefault();

  // Variable with all inputs id
  let inputs = ['side-1', 'side-2', 'side-3'];

  // variable with inputs' value
  let inputValue = [];

  // for each loop to loop throught inputs, select each input, get their value, and push their value into inputValue array
  inputs.forEach(function(input) {
    let userInput = parseInt($('#' + input).val());
    inputValue.push(userInput);
  });

  console.log(inputValue);
});
