const person = {
  name: 'Luiz',
  age: 30,
};

const anotherPerson = Object.create(person);

console.log(person.name); // Luiz
console.log(anotherPerson.name); // Luiz

// person é o prototype de anotherPerson
console.log(person === Object.getPrototypeOf(anotherPerson)); // true
