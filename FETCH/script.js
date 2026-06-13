// fetch("https://randomuser.me/api/?results=15")
// .then((res)=> (res.json()))
// .then((data)=> {
//     console.log(data.results);
// })
// .catch((err) => console.log(err));

const Num = 5;

async function getData(num) {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=${num}`);
        return await response.json();
    } catch (err) {
        console.error("Fetch failed:", err);
    }
}

// STEP 1: Create the layout framework ONCE outside the loop
const appShell = document.createElement('section');
appShell.className = 'app-shell';
appShell.innerHTML = `
    <div class="toolbar">
        <div>
            <h1>Users</h1>
            <p>Minimal glassmorphism cards with subtle hover micro interactions.</p>
        </div>
        <button id="refreshBtn" class="refresh-btn" type="button">Refresh</button>
    </div>
    <div id="userContainer" class="user-grid"></div>
`;
document.body.prepend(appShell);

// Grab the container target just once
const userContainer = document.getElementById('userContainer');

function renderSkeletons(num){
    userContainer.innerHTML = "";
    for(let i = 0; i < num; i++){
        const skeletonCard = document.createElement('article');
        skeletonCard.className = 'user-card skeleton';

        const avatarSkeleton = document.createElement('div');
        avatarSkeleton.className = 'avatar-skeleton';

        const userTitleSkeleton = document.createElement('div');
        userTitleSkeleton.className = 'user-title-skeleton';

        const nameSkeleton = document.createElement('div');
        nameSkeleton.className = 'name-skeleton';

        const emailSkeleton = document.createElement('div');
        emailSkeleton.className = 'email-skeleton';

        const chipSkeleton = document.createElement('div');
        chipSkeleton.className = 'chip-skeleton';

        const bioSkeleton = document.createElement('div');
        bioSkeleton.className = 'bio-skeleton';

        userTitleSkeleton.appendChild(nameSkeleton);
        userTitleSkeleton.appendChild(emailSkeleton);
        userTitleSkeleton.appendChild(chipSkeleton);

        skeletonCard.appendChild(avatarSkeleton);
        skeletonCard.appendChild(userTitleSkeleton);
        skeletonCard.appendChild(bioSkeleton);

        userContainer.appendChild(skeletonCard);
    }
}

// STEP 2: Handle data and loop safely inside the async block
const run = async function () {
    renderSkeletons(6);
    const data = await getData(Num); 
    if (!data || !data.results) return; // Safety check in case API fails
    userContainer.innerHTML = '';
    // The loop belongs here where 'data' actually exists and is ready!
    for (let i = 0; i < data.results.length; i++) {
        const user = data.results[i]; // Cleaner shortcut variable

        // Create the main card container element
        const userCard = document.createElement('article');
        userCard.className = 'user-card';

        // Create and configure the dynamic Avatar image
        const avatarImg = document.createElement('img');
        avatarImg.className = 'avatar';
        avatarImg.src = user.picture.large;

        // Create the text content elements
        const userTitle = document.createElement('div');
        userTitle.className = 'user-title';

        const nameEmailContainer = document.createElement('div');

        const nameHeader = document.createElement('h2');
        nameHeader.className = 'user-name';
        nameHeader.textContent = `${user.name.first} ${user.name.last}`;

        const emailPara = document.createElement('p');
        emailPara.className = 'user-email';
        emailPara.textContent = user.email;

        const chipSpan = document.createElement('span');
        chipSpan.className = 'user-chip';
        chipSpan.textContent = user.login.username;

        const bioPara = document.createElement('p');
        bioPara.className = 'user-bio';
        bioPara.textContent = `${user.location.city}, ${user.location.country}`;

        // Build the structural tree 
        nameEmailContainer.appendChild(nameHeader);
        nameEmailContainer.appendChild(emailPara);

        userTitle.appendChild(nameEmailContainer);
        userTitle.appendChild(chipSpan);

        userCard.appendChild(avatarImg);
        userCard.appendChild(userTitle);
        userCard.appendChild(bioPara);

        // Inject the finished card into the structural layout grid
        userContainer.appendChild(userCard);
    }
};

document.getElementById('refreshBtn').addEventListener('click', () => {
    run();
});