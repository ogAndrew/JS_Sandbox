const firstName = 'Andrew';
const lastName = 'Talle';
const age = 29;
const str = 'Hello mate my name is Andrew';
const tags = 'web dev, js dev, bootstrap, react';

let val; 

val = firstName + lastName;

// Concatenation 
val = firstName + ' ' + lastName;

// Append 
val = 'Andrew';
val += ' ' + 'Talle';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping 
val = 'That\'s brilliant mate, I can\'t I don\'t I won\'t'; // Or use double qoutes

// Length 
val = firstName.length; // number of characters in a string

// concat()
val = firstName.concat(' ', lastName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase(); 

val = firstName[2]; // to find the character in a string

// indexOf()
val = firstName.indexOf('1');
val = firstName.lastIndexOf('1');

// charAt()
val = firstName.charAt('3'); // gives character at index number
// get last char
val = firstName.charAt(firstName.length - 1);

// substring ()
val = firstName.substring(0,4);

// slice()
val = firstName.slice(0,4); // very similar to substring
val = firstName.slice(-3); // backwards chars

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Andrew', 'Jack'); // first arg is current string, second arg is new str

// includes()
val = str.includes('Hello'); // returns a boolean based on what arg was passed in

console.log(val);