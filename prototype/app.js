import { reqUrl, getData,setMixToArr, mixLibrary} from './modules/getRequest.js';

<<<<<<< Updated upstream
import  {mixCover, mixLibrary, mixSrc, setMixToArr, getMp3Src, assignMp3} from './modules/clickEventToSrc.js';
=======
import  {mixCover,coverImgContainer, mixSrc,getImg, assignMp3} from './modules/mixLoad.js';
>>>>>>> Stashed changes

import {AudioContext, audioContext, audioElement, track, playButton, playMix} from './modules/player.js'; 

import {audioCtx, source, analyserNode, bufferLength, dataArray, canvas, canvasCtx, draw} from './modules/visualiser.js'

<<<<<<< Updated upstream
=======
/*==============
CALLING FUNCTIONS
================*/

//Fetch call to get image 
getData(reqUrl, setMixToArr)

//Timeout function do get my async data
setTimeout(getImg,100, mixLibrary)
>>>>>>> Stashed changes
