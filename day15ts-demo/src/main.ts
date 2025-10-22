import { greet } from './person.ts';
import type { Person, Vehicle } from './person.ts';
import { greet as greetJS } from './person.js';

const car: Vehicle = { name: "Subaru", age: 10 };
const user: Person = { name: "Alice", age: 30 };
let x: number = 4;
let y: string = "hello";


console.log(greet(user));
console.log(greet(car));

// console.log(greetJS(user));

