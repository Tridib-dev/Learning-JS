// import readline from "readline/promises";
// import { stdin as input, stdout as output } from "process";
// import { randomInt } from "node:crypto";
// import { devNull } from "node:os";
// import { count } from "node:console";


// var b = 12
// var name = "harsh"
// name = "tridib"
// let b = 12
// const a = 65
// console.log(name)
// console.log(a)
// b = 134
// a = 32

// let a = 12
// console.log(a)


//  ==========================================

// Temporal Dead Zone
// console.log(a)
// let a = 13


// let a;
// a = 10000000
// console.log(a)


//  ==========================================

// Hoisting per type

//  var/let/const ->  happens


//  bigint:

// let a = 9007199254740991n
// console.log(a+69n)



//  ===============================================


//  Control Flow 

// let a = {
//     "name" : "Tridib",
//     "loggedIN" : true,
//     "admin" : false,
// },b = {
//     "name" :  "Arunima",
//     "loggedIN" : false,
//     "admin" : true,
// },c = {
//     "name" :  "Tathay",
//     "loggedIN" : false,
//     "admin" : true,
// },d = {
//     "name" :  "Nandini",
//     "loggedIN" : false,
//     "admin" : true,
// },e = {
//     "name" :  "Sweetheart",
//     "loggedIN" : false,
//     "admin" : true,
// }
// let error;

// try{
//     if (a.loggedIN && a.admin){
//         console.log("A is loggedin and he is the Admin")
//     }
//     else if (a.loggedIN){
//         console.log("A is loggedin but he is not the Admin")
//     }
//     else if (a.admin){
//         console.log("A is the Admin but not logged in")
//     }

//     if (b.loggedIN && b.admin){
//         console.log("B is loggedin and he is the Admin")
//     }
//     else if (b.loggedIN){
//         console.log("B is loggedin but he is not the Admin")
//     }
//     else if (b.admin){
//         console.log("B is the Admin but not logged in")
//     }
// }
// catch{
//     console.error("None of the is logged in or not the admin")
// }


// ====================================================

// import readline from "readline/promises";
// import { stdin as input, stdout as output } from "process";

// function getVals(val) {
//     if (val <= 100 && val >= 90) {
//         return "A";
//     } else if (val < 90 && val >= 80) {
//         return "B";
//     } else if (val < 80 && val >= 70) {
//         return "C";
//     } else {
//         return "D";
//     }
// }

// const rl = readline.createInterface({ input, output });

// const grade = Number(await rl.question("Enter your grade: "));

// console.log(getVals(grade));

// rl.close();


// ======================================================================

//  Rock - Paper - Scissor :
// import readline from "readline/promises";
// import { stdin as input, stdout as output } from "process";
// import { randomInt } from "crypto";

// function rps(user, comp) {
//     if (user === comp) return "Draw";
//     if (user === "Rock" && comp === "Paper") return "comp";
//     if (user === "Scissor" && comp === "Rock") return "comp";
//     if (user === "Paper" && comp === "Scissor") return "comp";
//     return "user";
// }

// const order = {
//     1: "Rock",
//     2: "Paper",
//     3: "Scissor",
// };

// function random_comp() {
//     const a = randomInt(1, 4); // randomInt returns a number, no need for Number()
//     return order[a]; // Use brackets [] to access by variable key
// }

// // Wrap top-level await in an async function if not using .mjs or "type": "module"
// // But since you are fixing the module error, top-level await is fine.
// const rl = readline.createInterface({ input, output });

// try {
//     const user = await rl.question("What will you choose ('Rock'/'Paper'/'Scissor')? ");
//     const comp = random_comp();
    
//     console.log(`You chose: ${user}`);
//     console.log(`Computer chose: ${comp}`);
//     console.log("Winner =>", rps(order[user], comp));
// } finally {
//     rl.close();
// }   



//  ==============================================================================


// for (let i = 1 ; i <= 10 ; i++){
//     console.log(i)
// }

// let i = 1
// while(i < 100){
//     console.log(i);
//     i++;
// }

// let i = 1
// do{
//     console.log(i);
//     i++;
// }while(i <= 100);


// //  ====================================================================
// // function expression 
// let fnc = function(){
//     console.log("hello! hallelulai");
// }

// fnc();

// //  ====================================================================


// // fat arrow function
// let courage = () => {
//     console.log("Nasamj Doggy");
// }


// //  =======================================================================

// // rest parameters

// let a = function (...val){
//     console.log(val);
// }

// a(1,2,33,5,6,67,679)


// // ============================================================================

// // IIFE(immediately invoked function)
// (function(){
//     console.log("Hello");
// })();

//  ============================================================================


// //  BMI calculator:



// let calc = function (w,h){
//     return w/(h**2)
// }

// let evaluation = (w,h) => {
//     if (calc(w,h) < 18.5){
//         console.log("Underweight");
//     }
//     else if (18.5 <= calc(w,h) < 25){
//         console.log("Normal");
//     }
//     else if (25 <= calc(w,h) < 30){
//         console.log("Overweight");
//     }
//     else{
//         console.log("Obese");
//     }
// }

// let rl = readline.createInterface({input,output});

// try{
//     let weight = Number(await rl.question("Enter your weight in kg: "));
//     let height = Number(await rl.question("Enter your height in m: "));
//     evaluation(weight,height);
// }
// finally{
//     rl.close();
// }


//  =====================================================

// //  creating a counter using closure 

// function counter(){
//     let a = 0;
//     return function () {
//         a++;
//         return a;
//     }
// }


// let count = counter()
// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())


//  ========================================================================

// let arr = [11,14,67,34,34];

// arr.forEach(function(val){
//     console.log(val+5);
// })
// console.log("----------------------")
// arr.forEach(function(val){
//     val+=3;
// })
// arr.forEach(function(val){
//     console.log(val)
// })


// ========================================================================

// // objects

// let obj = {
//     name : "Tridib",
//     age : 17,
//     email : "test@test.com",
//     address : {
//         state : "West Bengal",
//         city : "Asansol",
//     }
// }

// // let obj2 = {admin : true,...obj}

// let obj2 = JSON.stringify(obj)
// obj2 = JSON.parse(obj2)
// obj2.address.city = "Kolkata"
// console.log(obj2)
// console.log(obj)


// ==========================================================================

