const audio = document.getElementById("audio");

const playAudioButton = document.getElementById("playAudio");

playAudioButton.addEventListener("click", function() {
    // Check if the audio is paused, and if so, play it
    if (audio.paused) {
        audio.play()
            // .then(() => {
            //     console.log("Audio played successfully");
            // })
            // .catch((error) => {
            //     console.error("Error playing audio:", error);
            // });
    }
});

const stopAudioButton = document.getElementById("stopAudio");

stopAudioButton.addEventListener("click", function() {
    // if (audio.play) {
    //     audio.pause()
    // }
    audio.pause()
});


const playAgainButton = document.getElementById("playAgain")
playAgainButton.addEventListener("click", playAgain) 

function playAgain(){
    window.location.href = "start.html";
}