//Spread'...' This syntax allows us to copy values over easily without having to define each one
const obj1 = { dog: 'woof', bird:'chirp'};
const obj2 = { cat: 'meow' };
console.log({ ...obj1, ...obj2 }); 


//template literals are used for adding dynamic content and writing strings that bridge multiple lines.
const firstName = 'James';
const lastName = 'Bond';

const legacyGreeting =
  'The name is ' + lastName + ', ' + firstName + ' ' + lastName;
const greeting = `The name is ${lastName}, ${firstName}, ${lastName} and  I am a detective`;

console.log(legacyGreeting); 
console.log(greeting); 
