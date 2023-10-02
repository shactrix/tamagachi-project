document.addEventListener("DOMContentLoaded", function(){

class Tamagotchi {
    constructor(name) {
      this.name = name;
      this.hunger = 0;      // Initial hunger level
      this.sleepiness = 0;  // Initial sleepiness level
      this.boredom = 0;     // Initial boredom level
      this.age = 0;         // Initial age
    }
}

const petName = prompt(`What would you like to name your pet?`).toUpperCase()
const newPet = new Tamagotchi(petName);



    // Feed the Tamagotchi, decreasing hunger
    function feed() {
      if (this.hunger > 0) {
        this.hunger--;
        console.log(`${this.name} has been fed. Hunger level: ${this.hunger}`);
      } else {
        console.log(`${this.name} is not hungry.`);
      }
    }

    // Put the Tamagotchi to sleep, decreasing sleepiness
    function sleep() {
      if (this.sleepiness > 0) {
        this.sleepiness--;
        console.log(`${this.name} has slept. Sleepiness level: ${this.sleepiness}`);
      } else {
        console.log(`${this.name} is not sleepy.`);
      }
    }
  
    // Play with the Tamagotchi, decreasing boredom
    function play() {
      if (this.boredom > 0) {
        this.boredom--;
        console.log(`${this.name} has played. Boredom level: ${this.boredom}`);
      } else {
        console.log(`${this.name} is not bored.`);
      }
    }
  
    // Increase the age of the Tamagotchi
    function increaseAge() {
      this.age++;
      console.log(`${this.name} has aged. Age: ${this.age}`);
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
  