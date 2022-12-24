import {playButton, playPng, audioElement} from './dom.js'

// Defining my variables
let AudioContext;  
let audioContext;
let track;
let analyserNode;
let bufferLength;
let dataArray;
let canvas;
let canvasCtx;

//will need to be modified so when i click on another mix it auto plays 
audioElement.addEventListener(
  "ended",
  () => {
    playButton.dataset.playing = "false";
  },
  false
);

function playMix (){
    //Initializing the player

    if(!audioContext){
        createAudioCtx();
        draw();
    } 

    // Check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
        audioContext.resume();
    };
    
    //Always play track on click
    playButton.dataset.playing = "true";
    audioElement.play();
    playPng.src = '../assets/img/pause.png';
};
  

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



export {AudioContext, audioContext, audioElement, track, playButton, playMix, createAudioCtx, analyserNode, bufferLength, dataArray, canvas, canvasCtx,draw}