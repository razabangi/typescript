let num = 12;
let name = "Muhammad Raza Bangi";
let isActive = true;
let salaryBetween = [240000, 1500000];
let designations = ["Software Engineer", "Principle Software Engineer"];
let bio = [9, "Muhammad Raza Bangi"];
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
let info = (name, id) => {
    let arr = [];
    arr.push(name);
    return arr;
};
console.log(num, name, isActive, salaryBetween, designations, bio, mySize, info("raza", 9));
export {};
