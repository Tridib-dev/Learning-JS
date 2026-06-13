// function func(fnc){
//     setTimeout(fnc , 3000);
// }

// func(function(){
//     console.log("Hello World");
// })

// function rofileFetcher(userName,age,ARRinMil,fnc){
//     setTimeout(() => {
//        fnc({userName,age,ARRinMil}); 
//     }, 3000);
// }

// function GetPosts(params){
//     breakpoint;
// }

// profileFetcher("Tridib",18,65,function (params){
//     console.log(params);
// });


let pr = new Promise(function(res,rej){
    setTimeout(() => {
        rn  = Math.floor(Math.random()*10);
        if (rn >= 5){
            res("Accepetd with "+rn);
        }
        else{
            rej("Rejected with "+rn)
        }
    }, 1000);
})

pr.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})