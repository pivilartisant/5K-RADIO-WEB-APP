import {audioElement, playMix} from './player.js'

/*========
VARIABLES
========*/

//Declaring my variables
const mixCover = document.getElementsByClassName('cover-image');
const mixLibrary= [];
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

//HTML collection to array
function setMixToArr(){
    for (let i = 0; i < mixCover.length; i++){
        mixLibrary.push(mixCover.item(i))
    }
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