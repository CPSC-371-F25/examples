export interface Person {
    name: string;
    age: number;
}

export interface Vehicle {
    name: string;
    age: number;
}

export function greet(person: Person): string {
    // console.log(person.bad);
    return `Hello, ${person.name}! You are ${person.age} years old.`;
}