body = document.querySelector("body");

//  ==========================================================================================================



// div= document.createElement("div");
// body.appendChild(div);

// inp = document.createElement("input");
// inp.placeholder = "Name"
// div.prepend(inp);

// inp.addEventListener("input",function(params){
//     if (params.data !== null &&  params.data !==  " "){
//         console.log(params.data)  
//     }
// })


//  ==========================================================================================================


// chosen = body.querySelector("select");
// chosen.addEventListener("change",function(params){
//     val = params.target.value
//     h3 = body.querySelector("#Device");
//     h3.textContent = "Selected "+val;
//     h3.classList.add("bara");
//     console.log("Selected Device :",val);
// })


//  ==========================================================================================================



// document.addEventListener("keydown",function (params){
//     console.log(params.key);
//     div = document.querySelector("#main");
//     h1 = div.querySelector("h1")
//     if (params.key === " "){
//         h1.textContent = "SPACE"     
//     }
//     else{
//         h1.textContent =  `${params.key}`
//     }
// })

//  ==========================================================================================================


const func = () => {
    inp.click();
};


const btn = document.querySelector("#btn");
const inp = document.querySelector("#inp");
const fileInfo = document.querySelector("#fileInfo");

btn.addEventListener("click",func);

inp.addEventListener("change", (event) => {
    const file = event.target.files[0]; 
    fileInfo.setAttribute("aria-disabled",false);

    if (!file) return;

    fileInfo.innerHTML = `
        <p><strong>Name:</strong> ${file.name}</p>
        <p><strong>Size:</strong> ${(file.size / 1024).toFixed(2)} KB</p>
        <p><strong>Last Modified:</strong> ${new Date(file.lastModified).toLocaleString()}</p>
    `;
    btn.removeEventListener("click",func);
    btn.id = "clicked_button";
    btn.textContent="File Uploaded";
});