type Point = {
    x: number;
    y: number;
}
type Person = {
    first: string, last: string
}

function printName(person: Person): string {
    return person.first + ' ' + person.last
}

printName({ first: 'Ram', last: 'Kumar' })

let coordinates: Point = { x: 1, y: 2 }

function randomName(): Point {
    return { x: Math.random(), y: Math.random() }
}

function doublePoints(points: Point): Point {
    return { x: points.x * 2, y: points.y * 2 }
}

//  Nested Objects

//  Readonly KeyWord

type User = {
    readonly id: number;
    name: string;
}

const person : User = {
    id: 1,
    name: 'Ram'
}

// person.id = 10 // Error

// Intersection of multiple types
type Radius = {
    radius: number;
}

type Color = {
    color: string;
}

type ColorFulCircle = Radius & Color;

const color: ColorFulCircle = {
    radius: 10,
    color: 'red',
}

type Movie = {
    readonly title: string;
    originalTitle?: string;
    director?: string;
    releaseYear: number;
    boxOffice: {
        budget: number;
        grossUS: number;
        grossWorldwide: number;
    }
}

const movieTypeDune: Movie = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};

const animalTypeCat: Movie = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};

function getProfit({ boxOffice: { grossWorldwide, budget }}: Movie): number {
    return grossWorldwide - budget; 
}

console.log(getProfit(movieTypeDune))
console.log(getProfit(animalTypeCat))