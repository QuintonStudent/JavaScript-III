/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: `this` refers to the window. i.e. it refers to the object where all of javascript is contained
* 2. Implicit Binding: `this` refers to the object before the '.'
* 3. New Binding: `this` refers to the object that is returned by a constructor function
* 4. Explicit Binding: `this` refers to the object that is being used by the 'apply' or 'call' methods
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function displayObjectWindow() {
  console.log(this);
}

displayObjectWindow();

// Principle 2
// code example for Implicit Binding
const myObj = {
  firstName: 'Quinton',
  lastName: 'McNamee',
  highFive: function(name) {
    console.log(`${name} highfives ${this.firstName} ${this.lastName}!`)
    console.log(this); //outputs myObj in this case because when the function highFive is called on line 31, myObj comes before the '.'
  }
};

myObj.highFive('Gandalf');

// Principle 3
// code example for New Binding
function MyConstructor(person) {
  this.person = person;
  this.backFlip = function() {
    console.log(`${this.person} does a backflip`);
  },
  this.jumpingJacks = function() {
    console.log(`${this.person} does 10 jumping jacks`)
  },
  this.pushUps = function() {
    console.log(`${this.person} does 10 push-ups`)
  };
}

const bilbo = new MyConstructor('Bilbo');

bilbo.backFlip();
bilbo.jumpingJacks();
bilbo.pushUps();

// Principle 4
// code example for Explicit Binding
const weatherObj = {
  sunny: 'sunny',
  rainy: 'rainy',
  cloudy: 'cloudy'
};

function typesOfWeather() {
  return `${this.sunny} days are hot, ${this.rainy} days are wet, and ${this.cloudy} days are humid.`
}

console.log(typesOfWeather.apply(weatherObj));
