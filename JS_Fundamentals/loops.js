// // FOR LOOP 

// // for(let i = 0; i < 10; i++){
// //   console.log('Number ' + i); // this instruction will run 9 times since it's in a loop. 
// // }

// // i++ means i = i + 1 will add 1 to whatever i is. It will increase by one each loop until 10.

// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     console.log('2 is my favorite number');
//     continue; // this will keep the loop from printing 'Number 2' and move on to i = 3
//   }

//   if(i === 5){
//     console.log('Stop the loop');
//     break;
//   }

//   console.log('Number ' + i);
// }

// // WHILE LOOP 
// let j = 0;

// while(j < 10){
//   console.log('Number ' + j)
//   j++;
// }

// // DO WHILE

// let i = 0;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota', 'GM', 'Nissan'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]); // this notation gives acccess to the cars array & i will specify which index number & that determines which car is printed to the screen. 
// }

// FOREACH is the best choice for iterating through an array
cars.forEach(function(car,index,array){
  console.log(`${index} : ${car}`);
  console.log(array)
})

// MAP is great for iterating through an array of objects
const users = [
  {id:1, name:'John'},
  {id:2, name: 'Sara'},
  {id:3, name: 'Karen'},
  {id:4, name: 'Steve'}
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);

// FOR IN LOOP is great to iterate through an object

const user = {
  firstName: 'Andrew ',
  lastName: 'Talle',
  age: 29
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}

// here x is the key part of key value pairs with objects 

