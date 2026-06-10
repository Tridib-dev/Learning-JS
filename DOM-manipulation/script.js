let a,b,c,d,e,f;


// // Using document.getElementById
// a = document.getElementById("abcd");
// console.dir(a);

// // Using document.getElementsByClassName
// b = document.getElementsByClassName("abcd");
// console.dir(b)

// // Using document.querySelector
// c = document.querySelector("h1")
// console.dir(c)

// // Using document.querySelectorAll
// d = document.querySelectorAll("h1")
// console.dir(d)

// =============================================================================================================


// // Using document.querySelectorAll
// d = document.querySelectorAll("h1")
// console.dir(d)
// d[0].innerHTML = "<i> Chup rhe Bharwe </i>";


//  ===========================================================================================================

// a = document.querySelector("a");
// a.href = "https:/www.google.com";
// console.dir(a);
// a.setAttribute("href","https://www.facebook.com");
// console.dir(a);

//  ==========================================================================================================


// a = document.querySelector("a");
// a.href = "https:/www.google.com";
// href = a.getAttribute("href")
// console.log(href);

//  ==========================================================================================================

// // Creating element
// let g = document .createElement(tagName="h1")
// g.innerHTML = "<i> Hey Babe ! </i>"

// // Appending or prepending the element
// document.body.prepend(g)

//  ==========================================================================================================


// a = document.createElement("h1");
// a.innerHTML = "<i> Hey baby !... </i>"
// document.querySelector("div").appendChild(a)
// console.dir(a)
// a.style.color = "red"
// b = a.querySelector("i")
// b.style.fontFamily =  "Montserrat";


//  ==========================================================================================================

// a = document.createElement("div");
// c = document.createElement("h1");
// c.classList.add("madarchod")
// c.innerHTML = "Hey Jude !...."

// a.appendChild(c);

// b = document.querySelector("body");
// b.appendChild(a);


//  ==========================================================================================================

// let p = document.querySelector("p");
// p.innerHTML =  "<b>Updated</b> by JavaScript"


//  ==========================================================================================================


// a = document.createElement("img")
// a.src = "https://plus.unsplash.com/premium_photo-1780924628283-86406246af91?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// a.height = 250;
// a.width = 444;
// a.alt = "Brain-Image"
// document.querySelector("body").prepend(a)

// console.log("SRC : ",a.getAttribute("src"))
// console.log("ALT : ",a.getAttribute("alt"))

//  ==========================================================================================================

// a = document.querySelector("a");
// a.setAttribute("href","https://plus.unsplash.com/premium_photo-1780608833808-4ee1edecd417?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
// a.setAttribute("alt","Brain-MRI")
// a.textContent = "High Quality Brain MRI"
// a.classList.toggle("madarchod")
// a.title = "BHIKARI SALA AGYA FOKAT KA MAL DEKHNE"


//  ==========================================================================================================

// a = document.querySelector("button");
// console.dir(a);
// a.disabled = false


//  ==================================


// a = document.querySelector("body");
// b = document.createElement("ul");
// a.prepend(b);

// ELEMENTS_COUNT = 8;

// for(let i = 1; i <= ELEMENTS_COUNT ; i++){
//     ne = document.createElement("li");
//     ne.textContent = ("Item "+ i)
//     ne.classList.toggle("madarchod")
//     b.appendChild(ne)
// }

//  ==========================================================================================================

// src = "https://plus.unsplash.com/premium_photo-1780924628283-86406246af91?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
// alt = "";
// title = "";
// a = document.querySelector("body");
// b = document.createElement("div");
// c = document.createElement("img");
// c.setAttribute("src",src);
// c.setAttribute("alt",alt);
// c.setAttribute("title",title);
// c.classList.add("placeholder");

// let p = document.createElement("p");
// p.textContent = "Advanced-MRI-imaging";


// b.append(p);
// a.prepend(b);
// b.prepend(c);

//  ==========================================================================================================


// const body = document.querySelector("body");
// // create a div
// const div = document.createElement("div");
// body.prepend(div)
// // create a ul
// const ul = document.createElement("ul");
// div.prepend(ul);

// const  LIST_COUNT = 10;

// // create 5 li's inside ul 

// for (let i = 1 ; i <= LIST_COUNT ; i++){
//     const li = document.createElement("li");
//     li.textContent = ("Item " + i);
//     if (i%2 === 0){
//         li.classList.toggle("highlight");
//     }
//     else{
//         li.classList.toggle("bara");
//     }
//     ul.appendChild(li);
// }


//  ==========================================================================================================





