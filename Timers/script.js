// let count = 10;
// tm = setInterval(() => {
    
//     if (count !== 0){
//         console.log(count);
//         count--;
//     }
//     else{
//         clearInterval(tm)
//         console.log("Timer Finished");
//     }
// },250);

// =================================================================

const fill_bar = document.querySelector(".progress-fill") ;
const fill_percent = document.querySelector("#percentage");
const status_bar = document.querySelector("#status");
let count = 0;
let seconds = 10;

tm = setInterval(()=>{
    if (count <= 99){
        count++;
        fill_bar.style.width = `${count}%`;
        fill_percent.textContent= `${count}%`;
        status_bar.textContent = "Downloading";
    }
    else{
        status_bar.textContent = "Downloaded";
        clearInterval(tm);
    }
},(seconds*1000)/100)