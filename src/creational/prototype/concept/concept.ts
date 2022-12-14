interface Prototype {
  clone(): Prototype;
}

class Person implements Prototype {
  constructor(public name: string, public age: number) {}

  clone(): this {
    // Isto não é um clone!
    // Estamos apenas criando um novo objeto que tem esse objeto como protótipo
    const newPerson = Object.create(this);
    return newPerson;
  }
}

const person1 = new Person('Luiz', 30);
const person2 = person1.clone();

console.log(person1.name); // Luiz
console.log(person2.name); // Luiz
