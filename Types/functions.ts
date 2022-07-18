const log = console.log

function sum(num: number): number{
    return num * num
}
function greeting(person: string): string {
    return `Hi my name is ${person}`
}
const doSomething = (name: string, age: number, isHuman: boolean): void => {

}
// Set Default Values
function greetPerson(person: string ='Tony'): string {
    return `Hi my name is ${person}`
}

function returnTwice(msg: string): void{
    log(msg)
    log(msg)
}
function twoFer(name: string): string {
    return `one for ${name}, one for me`
}
function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
sum(3)
greeting('Ram')
doSomething('Ram', 23, true)
greetPerson()