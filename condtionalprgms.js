//if else condition
let name = 'john';
if(name.length >=3){
    console.log("hello" + name);
}else if (name.length >= 0) {
    console.log('keep typing!');
  } else {
    console.log('please enter a name');
  }

  //Switch case

  let color = 'orange';
  switch (color){
    case 'red':
        console.log('Go Red');
        break;
    case 'Blue':
        console.log('Go Blue');
        break;
    case 'Orange':
            console.log('go orange!');
            break;
    default:
            console.log("sorry, that's not a valid color");
  }


//Ternary same as if condition with different syntax
  var age = 26;
  var beverage = (age >= 21) ? "Beer" : "Juice";
  console.log(beverage); 


  function greeting(person) {
    var name = person ? person.name : "stranger";
    return "Howdy, " + name;
}

console.log(greeting( {name :'Alice'})); 
console.log(greeting(null));  

   