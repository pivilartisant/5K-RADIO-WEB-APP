import {audioElement, playMix} from './player.js'
<<<<<<< Updated upstream:prototype/modules/clickEventToSrc.js
=======
import { reqUrl, getInfo, assignInfo, mixLibrary } from './getRequest.js';
>>>>>>> Stashed changes:prototype/modules/mixLoad.js

/*========
VARIABLES
========*/

//Declaring my variables
const mixCover = document.getElementsByClassName('cover-image');
<<<<<<< Updated upstream:prototype/modules/clickEventToSrc.js
const mixLibrary= [];
=======
const coverImgContainer = document.getElementById('cover_image_container');
const mixInfo = document.getElementById('mix_info')
>>>>>>> Stashed changes:prototype/modules/mixLoad.js
let mixSrc;

/*==============
CALLING FUNCTIONS
================*/

//Timeout function do get my async data
setTimeout(setMixToArr,1000)
setTimeout(getMp3Src,2000, mixLibrary)

/*========
FUNCTIONS
=========*/ 

//create a function that displays each title in radioData array
function getImg(data){ 
    for (let i = 0; i< data.length; i++){
    const img = document.createElement('img')
    img.src = `assets/${data[i].DIR}.jpg`
    img.alt = `${data[i].ID}`
    img.setAttribute('class', 'cover-image')
    img.addEventListener('click', ()=> assignMp3(img))
    coverImgContainer.appendChild(img)
    }
<<<<<<< Updated upstream:prototype/modules/clickEventToSrc.js
}

//Event listener that retrieves src and formats the data to recompose the mp3 link 
function getMp3Src (arr){
    arr.forEach(element => {
        element.addEventListener('click', ()=> assignMp3(element))
    });
}

function assignMp3 (data) {
    audioElement.src= `${data.src.slice(0, -3)}mp3`;
    playMix();
}

// coverImg.addEventListener('click',() =>{console.log('click')})

export {mixCover, mixLibrary, mixSrc, setMixToArr, getMp3Src, assignMp3}
=======
  }

function assignMp3 (data) {
    audioElement.src = `${data.src.slice(0, -3)}mp3`;
    getInfo(data.alt);
    playMix();
}

export {mixCover,getImg,mixSrc, coverImgContainer, mixInfo, assignMp3}
>>>>>>> Stashed changes:prototype/modules/mixLoad.js
