// let pr = new Promise(function (res,rej){
//     setTimeout(() => {
//         const rn = Math.floor(Math.random()*10);
//         if (rn >= 5) res(rn);
//         else rej("Error: Number is less than 5");
//     }, 1000);
// });

// async function getRandNum(){
//     try{
//         let num = await pr;
//         console.log("Accepted random Number: " + num);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// getRandNum();