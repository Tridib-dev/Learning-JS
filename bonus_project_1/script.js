const usersSection = document.querySelector(".users-section");
const usersCount = document.querySelector(".users-count");



const users = [
  {
    name: "amisha rathore",
    pic: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone"
  },
  {
    name: "kiara mehta",
    pic: "https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhY2V8ZW58MHx8MHx8fDA%3D",
    bio: "main character energy 🎬 | coffee > everything ☕✨"
  },
  {
    name: "rohan sharma",
    pic: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    bio: "chasing pixels and dreamscapes 🌌 | code by night 💻"
  },
  {
    name: "ananya iyer",
    pic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    bio: "lost in the pages of a vintage book 📖🍂 | part-time realist"
  },
  {
    name: "kabir thakur",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    bio: "late night drives & lo-fi beats 🎧🚗 | unfiltered thoughts"
  }
];

function showUsers(arr){

    usersSection.innerHTML = "";

    usersCount.textContent = `${arr.length} users found`;

    arr.forEach(function(user){

        // Card
        const card = document.createElement("div");
        card.classList.add("card");

        // Image
        const img = document.createElement("img");
        img.src = user.pic;
        img.alt = user.name;
        img.classList.add("bg-img");

        // Blur Layer
        const blurLayer = document.createElement("div");
        blurLayer.classList.add("blurred-layer");

        // Content
        const content = document.createElement("div");
        content.classList.add("content");

        // Heading
        const h3 = document.createElement("h3");
        h3.textContent = user.name;

        // Paragraph
        const p = document.createElement("p");
        p.textContent = user.bio;

        // Build hierarchy
        content.appendChild(h3);
        content.appendChild(p);

        card.appendChild(img);
        card.appendChild(blurLayer);
        card.appendChild(content);

        usersSection.appendChild(card);
    });

}


showUsers(users)

searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input",() => {
  let newUser = users.filter((user)=>{
    return user.name.toLowerCase().startsWith(searchInput.value.toLowerCase());
  })
  showUsers(newUser)
})