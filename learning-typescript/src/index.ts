let num: number = 12;
let name: string = "Muhammad Raza Bangi";
let isActive: boolean = true;
let salaryBetween: number[] = [240000, 1500000];
let designations: string[] = ["Software Engineer", "Principle Software Engineer"];
let bio: [number, string] = [9, "Muhammad Raza Bangi"];
enum Size { Small = 's', Medium = 'm', Large = 'l' };
let mySize: Size = Size.Medium;

let info = (name: string, id: number): any => {
    let arr: any[] = [];
    arr.push(name);
    return arr;
}

console.log(
    num,
    name,
    isActive,
    salaryBetween,
    designations,
    bio,
    mySize,
    info("raza", 9),
);
