let x = "hello"; //used to store values and  reassign but not redefine
x = 'goodbye';
x =1;
//let x = 'potato';not valid

console.log(x);

const con = 'Good evening'; // Read only value

// con='qwert'; is not valid

//Exception: object and arrays - 
//can modify them but you can't reassign them
const y = [];
y.push('hello!');
y.push('beautiful') ;
// VALID

const z = {};
z.hello = true; 
z.name = 'kav'// VALID

console.log(con);
console.log(y,z);