class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Tejaswini", 19);
person1.greet(); 

const person2 = new Person("Reshma", 30);
person2.greet(); 
