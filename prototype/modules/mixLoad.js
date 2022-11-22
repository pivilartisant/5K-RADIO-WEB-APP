import {audioElement, playMix} from './player.js'
import { reqUrl } from './getRequest.js';

/*========
VARIABLES
========*/

//Declaring my variables
const mixCover = document.getElementsByClassName('cover-image');
// const mixTitle = document.getElementById('title')
// const mixArtist = document.getElementById('artist')
const mixInfo = document.getElementById('mix_info')
const mixLibrary= [];
let mixSrc;


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
    mixSrc = `${data.src.slice(0, -3)}mp3`;
    audioElement.src = mixSrc;
    console.log(data.alt)
    getInfo(data.alt);
    playMix();
}

//Function that when called displays the mix info into the player info section

function getInfo(index){
    fetch(reqUrl)
        .then(res => res.json())
        .then(json => {assignInfo(json[index])})
}

function assignInfo (data){
    // mixTitle.textContent = data.TITRE
    // mixArtist.textContent = data.ARTISTE
    mixInfo.textContent = `${data.TITRE} - ${data.ARTISTE}`
}

// coverImg.addEventListener('click',() =>{console.log('click')})

export {mixCover, mixLibrary, mixSrc, setMixToArr, getMp3Src, assignMp3}