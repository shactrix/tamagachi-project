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
const newPet = new Tamagotchi(petName); // instantiates a new tamagotchi with users pet name
const nameId = document.getElementById("name") // search html for element with this id
nameId.innerHTML = `${petName}` // inserts the user input into html

// let audio = document.getElementById("audio")
// audio.play()

const audio = document.getElementById("audio");

// window.addEventListener("load", function() { // blocked by browser bc it's intrusive
//     audio.play()
//         .then(() => {
//             console.log("Audio played successfully");
//         })
//         .catch((error) => {
//             console.error("Error playing audio:", error);
//         });
// });
//wanted to play music automaticly but browser wouldnt let me so instead i added a button.

const playAudioButton = document.getElementById("playAudio");

playAudioButton.addEventListener("click", function() {
    // if (audio.paused) {
    //     audio.play()
    // }
    audio.play()
});
const stopAudioButton = document.getElementById("stopAudio");

stopAudioButton.addEventListener("click", function() {
    // if (audio.play) {
    //     audio.pause()
    // }
    audio.pause()
});



    // Feed the Tamagotchi, decreasing hunger
function getHungry() {
    newPet.hunger--; //decressed by 1 stepwise
    document.getElementById("foodLevel").innerHTML = newPet.hunger //filling in the new hunger lvl in html
    if (newPet.hunger === 5) {
        alert('FEED ME!') //alerts if hunger has reached 5
        let breadAudio = document.getElementById("breadAudio")
        breadAudio.play()
    } else if(newPet.hunger <= 0){
        alert(`${petName} starved to death :C `)
        gameOver() //dies if reached 0
    } 
    // else if (newPet.hunger >9){
    //     document.getElementById("foodButton").style.cursor = "not-allowed"
    //     document.getElementById("foodButton").style.background = "rgb(67, 67, 67)"
    //     document.getElementById("foodButton").style.pointerEvent = "none"
    // }
} setInterval(getHungry, 3000) //every 3 seconds executes the fuction

// Put the Tamagotchi to sleep, decreasing sleepiness
function getSleepy() {
    newPet.sleepiness--;
    document.getElementById("sleepLevel").innerHTML = newPet.sleepiness
    if (newPet.sleepiness === 5) {
        
        alert(`I'm tired of this grandpa!!!`)
        let tiredAudio = document.getElementById("tiredAudio")
        tiredAudio.play()
    } else if(newPet.sleepiness <= 0){
        alert(`${petName} died of exhaustion :C `)
        gameOver() //dies if reached 0
    }
} setInterval(getSleepy, 3000)

// Play with the Tamagotchi, decreasing boredom
function getBored() {
    newPet.boredom--;
    document.getElementById("boredLevel").innerHTML = newPet.boredom
    if (newPet.boredom === 5) {
        alert('I am so very very very bored.')
        let havingFunAudio = document.getElementById("havingFunAudio")
        havingFunAudio.play()
    } else if(newPet.boredom <= 0){
        alert(`${petName} died of boredom :C `)
        gameOver() //dies if reached 0
    }
} setInterval(getBored, 3000)

// Increase the age of the Tamagotchi
function increaseAge() {
    newPet.age++;
    document.getElementById('age').innerHTML = newPet.age
    evolvePet()
    // console.log(`${newPet.name} has aged. Age: ${newPet.age}`);
} setInterval(increaseAge, 3000)
  

function feedPet(){
    newPet.hunger++ // increased by 1 stepwise
    document.getElementById("foodLevel").innerHTML = newPet.hunger //filling in the new hunger lvl into html
}

function sleepPet(){
    newPet.sleepiness++
    document.getElementById("sleepLevel").innerHTML = newPet.sleepiness
}

function entertainPet(){
    newPet.boredom++
    document.getElementById("boredLevel").innerHTML = newPet.boredom
}

const foodButton = document.getElementById("foodButton") 
foodButton.addEventListener("click", feedPet) //adding a click event listener to button to execute the feed pet function

const sleepButton = document.getElementById("sleepButton")
sleepButton.addEventListener("click", sleepPet)

const funButton = document.getElementById("funButton") 
funButton.addEventListener("click", entertainPet)

function evolvePet(){
    let age = newPet.age 
    if (age === 7) { //at 7 pet will evolve 1st image will hide and 2nd image will be revealed and same for the next one but at 14.
        alert(`I'm evolving!`)
        document.querySelector(".squirtle").style.visibility = "hidden"
        document.querySelector(".wartortle").style.visibility = "visible"
    } else if(age === 14){
        alert(`I'm evolving!`)
        document.querySelector(".wartortle").style.visibility = "hidden"
        document.querySelector(".blastoise").style.visibility = "visible"
    }
} 

function gameOver(){
    window.location.href = "gameover.html"; // telling computer to change window to the location with the specified href
}

})