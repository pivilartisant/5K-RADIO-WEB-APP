import { audioElement } from "./player.js";

const audioCtx = new AudioContext();
const source = audioCtx.createMediaElementSource(audioElement);
const analyserNode = audioCtx.createAnalyser();


analyserNode.fftSize = 1024;
const bufferLength = analyserNode.frequencyBinCount;
const dataArray = new Float32Array(bufferLength);

source.connect(analyserNode);
analyserNode.connect(audioCtx.destination);

const canvas = document.getElementById('audio_canvas')
const canvasCtx = canvas.getContext("2d");
canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

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
  draw();

  export {audioCtx, source, analyserNode, bufferLength, dataArray, canvas, canvasCtx,draw}