## Follow the steps

- mkdir your-folder name
- code .
- npm i -g typescript
- make the file index.ts
- run the command tsc index.ts for compiling the ts file.
- for more setting like use module etc
- run the command tsc --init
- change the config setting whatever you want.

## Types in Javascript

- number
- string
- boolean
- null
- undefined
- object
- Symbol

## Types in Typescript

- any
- unknown
- never
- enum
- tuple

## Type Declaration

let num: number = 12;
let name: string = "Muhammad Raza Bangi";
let isActive: boolean = true;
let salaryBetween: number[] = [240000, 1500000];
let designations: string[] = ["Software Engineer", "Principle Software Engineer"];
let bio: [number, string] = [09, "Muhammad Raza Bangi"];
enum Size { Small = 's', Medium = 'm', Large = 'l' } // let mySize: Size = Size.Medium // return m
let info = (name: string, id: number): any => {
    let arr: any[] = [];
    arr.push(name);
    return arr;
}
