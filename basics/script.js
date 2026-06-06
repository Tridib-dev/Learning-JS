import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
import { randomInt } from "node:crypto";


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

function rps(user, comp) {
    if (user === comp) return "Draw";
    if (user === "Rock" && comp === "Paper") return "comp";
    if (user === "Scissor" && comp === "Rock") return "comp";
    if (user === "Paper" && comp === "Scissor") return "comp";
    return "user";
}

const order = {
    1: "Rock",
    2: "Paper",
    3: "Scissor",
};

function random_comp() {
    const a = randomInt(1, 4); // randomInt returns a number, no need for Number()
    return order[a]; // Use brackets [] to access by variable key
}

// Wrap top-level await in an async function if not using .mjs or "type": "module"
// But since you are fixing the module error, top-level await is fine.
const rl = readline.createInterface({ input, output });

try {
    const user = await rl.question("What will you choose ('Rock'/'Paper'/'Scissor')? ");
    const comp = random_comp();
    
    console.log(`You chose: ${user}`);
    console.log(`Computer chose: ${comp}`);
    console.log("Winner =>", rps(order[user], comp));
} finally {
    rl.close();
}   