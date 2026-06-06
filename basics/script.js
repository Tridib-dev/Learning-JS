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

let a = {
    "name" : "Tridib",
    "loggedIN" : true,
    "admin" : false,
},b = {
    "name" :  "Arunima",
    "loggedIN" : false,
    "admin" : true,
},c = {
    "name" :  "Tathay",
    "loggedIN" : false,
    "admin" : true,
},d = {
    "name" :  "Nandini",
    "loggedIN" : false,
    "admin" : true,
},e = {
    "name" :  "Sweetheart",
    "loggedIN" : false,
    "admin" : true,
}
let error;

try{
    if (a.loggedIN && a.admin){
        console.log("A is loggedin and he is the Admin")
    }
    else if (a.loggedIN){
        console.log("A is loggedin but he is not the Admin")
    }
    else if (a.admin){
        console.log("A is the Admin but not logged in")
    }

    if (b.loggedIN && b.admin){
        console.log("B is loggedin and he is the Admin")
    }
    else if (b.loggedIN){
        console.log("B is loggedin but he is not the Admin")
    }
    else if (b.admin){
        console.log("B is the Admin but not logged in")
    }
}
catch{
    console.error("None of the is logged in or not the admin")
}


