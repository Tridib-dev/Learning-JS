const body = document.querySelector("body");

function Chracter(name,health,ability,DickSize){
    this.name = name;
    this.health = health;
    this.ability = ability;
    this.DickSize = DickSize;
}

function write(){
    const h1 = document.createElement("h1");
    const div = document.createElement("div");

     
    if (this.DickSize <= 5){
        h1.style.color = "pink";
        h1.textContent = `you mf , i am ${this.name}, i am a coward , I am not a real man Oh yeaah ,💄 🏳️‍🌈🏳️‍🌈  i only eat 🍔🍟🍕`
    }

    else{
        h1.style.color = "maroon";
        h1.textContent = `Hey mr. i am ${this.name} i have to go to war , I dont have the time for this nonsense ♂️👑🪖 i  eat real food : 🥩🍗🥓🍞🫜🥦🥬🥒🌰🧅`
    }

    div.appendChild(h1);
    body.appendChild(div)
}

const character1 = new Chracter("John",100,"Fireball",4);
const character2 = new Chracter("Mike",150,"Ice Blast",6);

write.call(character1);
write.call(character2);
