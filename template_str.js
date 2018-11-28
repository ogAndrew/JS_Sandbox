const name = 'Kelsey';
const age = '2932';
const job = 'Disney Enthusiast';
const city = 'Columbus'; 

// Without template strings (es5)
html = '<ul><li>Name: ' + name + '<li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: '+ city +' </li></ul>';

html = '<ul>' + 
       '<li>Name: ' + name + '<li>' + 
       '<li>Age: ' + age + ' </li>' +
       '<li>Job: ' + job + ' </li>' +
       '<li>City: '+ city +' </li>';

function hey() {
  return 'hey Kelsey';
}

// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hey()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
  `;
document.body.innerHTML = html;   