const audio = document.getElementById("audio");

const playAudioButton = document.getElementById("playAudio");

playAudioButton.addEventListener("click", function() {
    // Check if the audio is paused, and if so, play it
    if (audio.paused) {
        audio.play()
            .then(() => {
                console.log("Audio played successfully");
            })
            .catch((error) => {
                console.error("Error playing audio:", error);
            });
    }
});

const playButton = document.getElementById("playGame")
playButton.addEventListener("click", playGame) 

function playGame(){
    window.location.href = "index.html";
}