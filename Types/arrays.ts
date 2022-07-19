let arraTy: string[] = []
let arrayTy: Array<string> = []

let ageArray: Array<number> = [45, 56, 85, 89]


// Multi-dimensional Arrays

const ages : number[] = [12, 1, 5, 9, 10]
const gameBoards: string[][] = [
    [   'Ram', 'Kumar' ],
    [   'Dr', 'Kumar' ],
]

type Product = {
    name: string;
    price: number;
}

function getTotal(products: Product[]): number {
    let total = 0;
    for(let product of products) {
        total += product.price
    }
    return total
}
