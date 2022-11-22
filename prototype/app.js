import {radioData, coverImgContainer, reqUrl, getData, getImg, player, testBtn, backBtn} from './modules/getRequest.js';

import  {mixCover, mixLibrary, mixSrc, setMixToArr, getMp3Src, assignMp3} from './modules/mixLoad.js';

import {AudioContext, audioContext, audioElement, track, playButton, playMix} from './modules/player.js'; 

import {audioCtx, source, analyserNode, bufferLength, dataArray, canvas, canvasCtx, draw} from './modules/visualiser.js'

/*==============
CALLING FUNCTIONS
================*/

//Fetch call to get image 
getData(reqUrl, getImg);

//Timeout function do get my async data
setTimeout(setMixToArr,1000)
setTimeout(getMp3Src,2000, mixLibrary)