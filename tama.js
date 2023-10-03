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
    document.getElementById("foodLevel").innerHTML = newPet.hunger
    if (this.hunger <= 5) {
        alert('FEED ME!')
    } else if(newPet.hunger === 0){
        alert(`${petName} starved to death :C `)
    }
} setInterval(getHungry, 1000)

// Put the Tamagotchi to sleep, decreasing sleepiness
function getSleepy() {
    this.sleepiness--;
    document.getElementById("sleepLevel").innerHTML = newPet.sleepiness
    if (this.sleepiness <= 5) {
        alert(`I'm tired of this grandpa!!!`)
    } else if(newPet.sleepiness === 0){
        alert(`${petName} died of exhaustion :C `)
    }
} setInterval(getSleepy, 1000)

// Play with the Tamagotchi, decreasing boredom
function getBored() {
    this.boredom--;
    document.getElementById("boredLevel").innerHTML = newPet.boredom
    if (this.boredom <= 5) {
        alert('I am so very very very bored.')
    } else if(newPet.boredom === 0){
        alert(`${petName} died of boredom :C `)
    }
} setInterval(getBored, 1000)

// Increase the age of the Tamagotchi
function increaseAge() {
    this.age++;
    console.log(`${petName.name} has aged. Age: ${petName.age}`);
} setInterval(increaseAge, 3000)


})
  