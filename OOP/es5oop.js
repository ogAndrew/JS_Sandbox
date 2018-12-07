const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }, 
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

// Object.create will take in prototypes
const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

console.log(mary.greeting());

const andrew = Object.create(personPrototypes, {
  firstName: {value: 'Andrew'},
  lastName: {value: 'Talle'},
  age: {value: 29}
});

console.log(andrew);

console.log(andrew.greeting());

// All these methods were used in ES5 syntax.  ES6 is much different using classes. 