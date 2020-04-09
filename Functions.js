// its used for reusing the code again;
function add(arg1, arg2) {
    return arg1 + arg2;
  }
  
  const subtract = function(arg1, arg2) {
    return arg1 - arg2;
  };
  
  console.log(add(2, 1)); // 3
  console.log(subtract(4,4));


  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  console.log(toCelsius(18));


  //Arrow Functions
  const add1 = (arg1, arg2) => {
    return arg1 + arg2;
  }; 
  
  const subtract1 = (arg1, arg2) => arg1 - arg2;
  
  const square = num => num * num;
  console.log(add1(1,2));
  console.log(square(7));
