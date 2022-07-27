// Type Narrowing
function taxCalculator(price: number | string, tax: number){
    if(typeof price === 'string'){
        price = parseFloat(price.replace('$', ''));
    }
    return (price * tax);
}

// Union Types and Arrays
const stuff: (number|string)[] = [1, 'hello'];
const stuff1: number[] | string[] = [1, 2];
const stuff2: number[] | string[] = ['hello'];

// Literal Types
const giveAnswer = (answer: "Yes" | "No" | "Maybe") => {
    return `The answer is ${answer}`;
}

// Create a variable called highScore that can be a number OR a boolean
const highScore: number | boolean = 10;

let stuffMe: number[] | string[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
stuffMe = ['apple', 'banana', 'orange', 'pear'];

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: 'Ski' | 'Snowboard';
    level: SkillLevel;
}

type rgbColor = {
    r: number;
    g: number;
    b: number;
};

type hslColor = {
    h: number;
    s: number;
    l: number;
}

const colorrss: (rgbColor | hslColor)[] = [];

const greet = (person: string | string[]): void => {
    if(typeof person === 'string'){
        console.log(`Hello ${person}`);
    } else {
        person.forEach(p => {
            console.log(`Hello ${p}`);
        });
    }
}