// body = document.querySelector("body");

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


// const func = () => {
//     inp.click();
// };


// const btn = document.querySelector("#btn");
// const inp = document.querySelector("#inp");
// const fileInfo = document.querySelector("#fileInfo");

// btn.addEventListener("click",func);

// inp.addEventListener("change", (event) => {
//     const file = event.target.files[0]; 
//     fileInfo.setAttribute("aria-disabled",false);

//     if (!file) return;

//     fileInfo.innerHTML = `
//         <p><strong>Name:</strong> ${file.name}</p>
//         <p><strong>Size:</strong> ${(file.size / 1024).toFixed(2)} KB</p>
//         <p><strong>Last Modified:</strong> ${new Date(file.lastModified).toLocaleString()}</p>
//     `;
//     btn.removeEventListener("click",func);
//     btn.id = "clicked_button";
//     btn.textContent="File Uploaded";
// });


//  ==========================================================================================================


// const form = document.querySelector("form");
// const main = document.querySelector("#main");

// const func = (params) => {
//     params.preventDefault();
//     let name = (params.srcElement[0].value);
//     let description =(params.srcElement[1].value);
//     let occupation= (params.srcElement[2].value);
//     let profile_pic= (params.srcElement[3].value);
//     console.log("Form Submitted !..");

//     const card = document.createElement("div");
//     card.classList.add("card");

//     const profile = document.createElement("div");
//     profile.classList.add("profile");

//     const img = document.createElement("img");
//     img.src=profile_pic;
//     img.alt=`Profile icture of ${name}`;
//     profile.appendChild(img);

//     card.appendChild(profile);


//     const h3 = document.createElement("h3");
//     h3.textContent = name;
//     const h5 = document.createElement("h5");
//     h5.textContent = occupation;
//     const p = document.createElement("p")
//     p.textContent = description

//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);

//     main.appendChild(card);

//     let form = main.querySelector("form");
//     form.hidden = true;
// }
// form.addEventListener("submit",func)



//  ==========================================================================================================

// const follower = document.querySelector("#follower");


// window.addEventListener("mousemove",(params) =>{
//     console.log(params.clientX,params.clientY);
//     follower.style.left = params.clientX+"px";
//     follower.style.top = params.clientY+"px";
// });


// ============================================================================================

const item = document.querySelector("ul")
console.log(item)

item.addEventListener("click",(params)=>{
    params.target.classList.toggle("lt")
});