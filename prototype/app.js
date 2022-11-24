import {reqUrl, getData} from './modules/getRequest.js';

import  {mixCover,coverImgContainer, mixInfo,shuffle, getImg, assignMp3, assignInfo} from './modules/mixLoad.js';

import {AudioContext, audioContext, audioElement, track, playButton, playMix} from './modules/player.js'; 

import {audioCtx, source, analyserNode, bufferLength, dataArray, canvas, canvasCtx, draw} from './modules/visualiser.js'

//Fetch call to get image
window.addEventListener('load', ()=> {
    getData(reqUrl);
})


