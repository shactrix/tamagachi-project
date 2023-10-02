document.addEventListener("DOMContentLoaded", function(){

class Tamagotchi {
    constructor(name) {
      this.name = name;
      this.hunger = 10;      // Initial hunger level
      this.sleepiness = 10;  // Initial sleepiness level
      this.boredom = 10;     // Initial boredom level
      this.age = 0;         // Initial age
    }
}

const petName = prompt(`What would you like to name your pet?`).toUpperCase()
const newPet = new Tamagotchi(petName);
const nameId = document.getElementById("name")
nameId.innerHTML = `${petName}`


    // Feed the Tamagotchi, decreasing hunger
function getHungry() {
    this.hunger--;
    if (this.hunger <= 5) {
        alert('FEED ME!')
    } else if(newPet.hunger === 0){
        alert(`${petName} starved to death :C `)
    }
}

// Put the Tamagotchi to sleep, decreasing sleepiness
function getSleepy() {
    this.sleepiness--;
    if (this.sleepiness <= 5) {
        alert(`I'm tired of this grandpa!!!`)
    } else if(newPet.sleepiness === 0){
        alert(`${petName} died of exhaustion :C `)
    }
}

// Play with the Tamagotchi, decreasing boredom
function getBored() {
    this.boredom--;
    if (this.boredom <= 5) {
        alert('I am so very very very bored.')
    } else if(newPet.boredom === 0){
        alert(`${petName} died of boredom :C `)
    }
}

// Increase the age of the Tamagotchi
function increaseAge() {
    this.age++;
    console.log(`${petName.name} has aged. Age: ${petName.age}`);
}



// Display initial metrics
console.log(`${myTamagotchi.name}'s Metrics:`);
console.log(`Hunger: ${myTamagotchi.hunger}`);
console.log(`Sleepiness: ${myTamagotchi.sleepiness}`);
console.log(`Boredom: ${myTamagotchi.boredom}`);
console.log(`Age: ${myTamagotchi.age}`);

// Interact with the Tamagotchi
myTamagotchi.feed();
myTamagotchi.sleep();
myTamagotchi.play();
myTamagotchi.increaseAge();
//   This code defines a Tamagotchi class with methods to feed, put to sleep, play with, and increase the age of the Tamagotchi. You can create an instance of the class and interact with it to see how its metrics change.




})
  