import {audioElement, playMix} from './player.js';
import {mixLibrary} from './getRequest.js';

//Declaring my variables
const coverImgContainer = document.getElementById('cover_image_container');
const mixCover = document.getElementsByClassName('cover-image');
const mixInfo = document.getElementById('mix_info');


//create a function that displays each title in radioData array
function getImg(data){ 
    let img = document.createElement('img')
    img.src = `assets/${data.DIR}.jpg`
    img.alt = `${data.ID}`
    img.setAttribute('class', 'cover-image')
    img.addEventListener('click', ()=> assignMp3(img))
    coverImgContainer.appendChild(img)
};

//Funcitions 
function assignMp3 (data) {
    audioElement.src  = `${data.src.slice(0, -3)}mp3`;
    assignInfo(mixLibrary[data.alt])
    playMix();
}

function assignInfo (data){
    mixInfo.textContent = `${data.TITRE} - ${data.ARTISTE}`
};

export {mixCover,coverImgContainer, mixInfo, getImg, assignMp3, assignInfo};