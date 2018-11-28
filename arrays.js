// Create some arrays 
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(33,55,2,22,77);  
const fruit = ['Avacado','Kiwi', 'Banana', 'Orange', 'Strawberry'];
const mixed = [32, 'Hell0', true, undefined, null, {c: 1, f:1}, new Date()];

let val; 

// Get array length 
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(22);

// MUTATING ARRAYS
// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop(); // 250 is gone now
// Take off from front
numbers.shift(); // 120 is gone
// Splice values
numbers.splice(1,3); // Where we gonna start & end
// Reverse 
numbers.reverse(); // reverse order of array

// Concatenate array 
val = numbers.concat(numbers2);

// Sorting arrays numerically or Alphabetically
val = fruit.sort(); 
val = numbers.sort();

// Use the "compare function"
val = numbers.sort(function(x,y){
  return x - y;
});

// Reverse Sort 
val = numbers.sort(function(x,y){
  return y - x;
});

// Find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);

// Not all of these will work properly due to the face of many mutations in the code.  But if one comments out mutations or sorts the functions here at the bottom will work. 
