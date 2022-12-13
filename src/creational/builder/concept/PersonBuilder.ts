import { Person } from './Person';

// Concrete builder (person)
export class PersonBuilder {
  private person = new Person();

  newPerson(): void {
    this.person = new Person();
  }

  setName(name: string): this {
    this.person.name = name;
    return this;
  }

  setAge(age: number): this {
    this.person.age = age;
    return this;
  }

  getResult(): Person {
    return this.person;
  }
}

const personBuilder = new PersonBuilder();

// Method chaining
const person1 = personBuilder.setName('Gabriel').setAge(21).getResult();

personBuilder.newPerson();
const person2 = personBuilder.setName('Marcos').setAge(60).getResult();

console.log(person1.name);
console.log(person2.name);
