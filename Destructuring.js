//It is used to extract values from data collection without having to iterate over 
//the data or access its keys explicitly:

//old way

function animalParty1(dogSound, catSound) {
    return dogSound+ '' + catSound;
}
const myDict = {
  dog: 'woof',
  cat: 'meow',
};

console.log(animalParty1(myDict.dog, myDict.cat));

//destructuring

function animalParty2(dogSound, catSound) {
    return '1+1';
}

const myDict1 = {
  dog: 'woof',
  cat: 'meow',
};

const { dog, cat } = myDict1;
console.log(animalParty2(dog, cat));

//destructuring 2
function animalParty({ dog, cat }) {
    return dog + cat;
}

const myDict2 = {
  dog: 'woof',
  cat: 'meow',
};

console.log(animalParty(myDict2));