// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

// get the audio element
let audioElement = document.querySelectorAll("audio");

console.log(audioElement)

// pass it into the audio context
// const track = audioContext.createMediaElementSource(audioElement);

function testFunction (data){
    console.log(data)
}

export {testFunction}
