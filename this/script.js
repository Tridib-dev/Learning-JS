// function alpha() {
//     console.log(this);
// }  

// alpha() // Returns window object in non-strict mode and undefined in strict mode.

// console.log(this)  // Returns window object in non-strict mode and undefined in strict mode.



// const obj = {
//     Name : Tridib,
//     SayName : function () {
//         console.log(this.Name);  // returns the obj's name
//     }                            // But dont use arrow func here or it will return a wndow object.
// }

// obj.SayName() // Prints the objects name


// const obj = {
//     Name : "Tridib",
//     Sayname : function(){
//         (() => {
//             console.log(this.Name); // returns the obj's name as arrow func inherits the this from its parent function.
//         })(); //and always call the function directly just after creating
//     }
// } 

// obj.Sayname();


// //  USing call:
// // ============

// const obj = {
//     Name : "Tridib",
//     Age : 25,
// }

// function func(){
//     console.log(this.Age);
// }

// func.call(obj)