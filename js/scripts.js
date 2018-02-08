// Business or (back-end) logic:
// Equilateral: All sides are equal.
// Isosceles: Exactly 2 sides are equal.
// Scalene: No sides are equal.
// NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side
// function to check if 3 values of a number are a triangle
function checkTriangle(a, b, c) {
  // check if value are numbers
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return 'Please Enter Numbers to check your triangle';
  }
  // check if Not a triangle
  if (a + b <= c) {
    return 'NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side';
  }
  // check if equilateral
  else if (a === b && b === c && a === c) {
    return 'Equilateral: All sides are equal.';
  }
  // check if isosceles
  else if (a === b || b === c || a === c) {
    return 'Isosceles: Exactly 2 sides are equal.';

  }
  // check if scalene
  else if (a !== b && b !== c && a !== c) {
    return 'Scalene: No sides are equal.'
  }
}

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
