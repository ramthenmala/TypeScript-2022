# TypeScript-2022
Things included in the Repo

- The TypeScript type system
- Union Types
- Intersection Types
- Tuples and Enums
- Interfaces
- The TypeScript compiler and how to configure it
- Working with the DOM and TypeScript
- TypeScript Classes
- Generics
- Type Narrowing
- Type Declarations
- Working with 3rd party libraries
- Webpack + TypeScript workflows
- Integrating React and TypeScript
- TypeScript’s Module System

## Playground
[Typescript](https://www.typescriptlang.org/play)

## How we use TypeScript
anything with ```.ts, .tsx``` is a typescript file.

## Type Annotation

```var add: Type = true```
```var add: TypeAnnotation = true```

## Type Inference
Refers to the typescript compiler's ability to infer types from certain values in your code.

## The :any Type
- doesn't do any type checking

## functions

In typescript we can specify the type of function parameters in a function definition. 

Typing parameters is like typing variables.

### return type Annotation
We can specify the type returned by a function.

## void type
Void is a return type for functions that don't return anything.
returns null or undefined, which is technically a value.

## never
The never type represents values that never occur.

## Objects
Objects can be typed by declaring what the object should look like in the annotation.

## Type Alias
Instead of writing out object types in an annotation, we can declare them separately in a type alias.

## Union Types
Union types allow us to give a value few different possible ways.

## Literal Types
Literal types are not just types - but the values themselves too.

On it's own, thats not super helpful. But combine it with something like unions and you can have very fine-tuned type options for typescript to enforce.