console.log('js');

$(document).ready();

// setting global information
let employeeList = [];
let monthlyCosts = 0;
let employee = '';

// function($'holdFormInformation').submit(insertEmployeeData);
$(document).on('click', '#addItemBtn', addItemBtn);
$(document).on('click', '#delItemBtn', delItemBtn);

function addItemBtn(event) {
  event.preventDefault();
  // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  // don't let the form resubmit the page.
  console.log('logging employee data..');
}
//verifying button press sends a message.

let firstName = $('#fnameInput').val();
let lastName = $('#lnameInput').val();
let jobTitle = $('#jobTitle').val();
let employeeID = $('#employeeID').val();
let salary = $('#salaryInput').val();

//Grab employee data from the DOM.

// $('#tableStorage').append(
//  <td class=
// );
// $('#storage').empty();
// $('#storage').append(`$${}`)
employeeList.push(employee);
console.log('EMPLOYEE LIST logged');
// pushing employee data to the DOM
function delItemBtn(event) {
  event.preventDefault();
  console.log('delete employee data..');
}
// verifying button press deploys message.

// function deleteEmployee()

// </script>// $(this).parent.parent
