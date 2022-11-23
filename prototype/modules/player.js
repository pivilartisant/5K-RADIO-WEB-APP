// Select our play button
const playButton = document.getElementById("play_button");
const playBtn = document.getElementById('playBtn')

// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

// get the audio element
let audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);

//Play button on click sideffects
playButton.addEventListener("click", () => {playMix()},false);

function playMix (){
  // Check if context is in suspended state (autoplay policy)
  if (audioContext.state === "suspended") {
    audioContext.resume();
    console.log('resume state')
  }
  
  // Play or pause track depending on state
  if (playButton.dataset.playing === "false") {
    audioElement.play();
    playButton.dataset.playing = "true";
    playBtn.src = './ressources/image/pause.png'
    console.log('playing')
  } else if (playButton.dataset.playing === "true") {
    audioElement.pause();
    playButton.dataset.playing = "false";
    playBtn.src = './ressources/image/play.png'
    console.log('pause')
  }
}

//Mix cover on click side effect
//will need to be modified so when i click on another mix it auto plays 

audioElement.addEventListener(
  "ended",
  () => {
    playButton.dataset.playing = "false";
  },
  false
);

export {AudioContext, audioContext, audioElement, track, playButton, playMix}