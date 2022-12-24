

// Select our play button
const playButton = document.getElementById("play_button");
const playBtn = document.getElementById('playBtn')

// for legacy browsers
let AudioContext;  
let audioContext;

// get the audio element
let audioElement = document.querySelector("audio");

// pass it into the audio context
let track;

let analyserNode;

let bufferLength;

let dataArray;

let canvas;

let canvasCtx;

//Play button on click sideffects
playButton.addEventListener("click", () => {playMix()},false);


//Mix cover on click side effect
//will need to be modified so when i click on another mix it auto plays 

audioElement.addEventListener(
  "ended",
  () => {
    playButton.dataset.playing = "false";
  },
  false
);

function createAudioCtx(){
AudioContext = window.AudioContext || window.webkitAudioContext;
audioContext = new AudioContext();
track = audioContext.createMediaElementSource(audioElement);
track.connect(audioContext.destination);

analyserNode = audioContext.createAnalyser();

analyserNode.fftSize = 1024;
bufferLength = analyserNode.frequencyBinCount;
dataArray = new Float32Array(bufferLength);

track.connect(analyserNode);
analyserNode.connect(audioContext.destination);

canvas = document.getElementById('audio_canvas')
canvasCtx = canvas.getContext("2d");
canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  //Schedule next redraw
  requestAnimationFrame(draw);

  //Get spectrum data
  analyserNode.getFloatFrequencyData(dataArray);

  //Draw black background
  canvasCtx.fillStyle = "rgb(0, 0, 0)";
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  //Draw spectrum
  const barWidth = (canvas.width / bufferLength) * 2.5;
  let posX = 0;
  for (let i = 0; i < bufferLength; i++) {
    const barHeight = (dataArray[i] + 140) * 2;
    canvasCtx.fillStyle = `rgb(${Math.floor(barHeight + 60)},0, 255)`;
    canvasCtx.fillRect(
      posX,
      canvas.height - barHeight / 2,
      barWidth,
      barHeight / 2
    );
    posX += barWidth + 1;
  }
}

function playMix (){
  if(!audioContext){
  createAudioCtx();
  draw();
  }
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

export {AudioContext, audioContext, audioElement, track, playButton, playMix, createAudioCtx, analyserNode, bufferLength, dataArray, canvas, canvasCtx,draw}