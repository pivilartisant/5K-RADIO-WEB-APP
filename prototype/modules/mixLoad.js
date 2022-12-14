import {audioElement, playMix} from './player.js';
import {mixLibrary} from './getRequest.js';

//Declaring my variables
const coverImgContainer = document.getElementById('cover_image_container');
const mixCover = document.getElementsByClassName('cover-image');
const mixInfo = document.getElementById('mix_info');


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
//create a function that displays each title in radioData array
// function getImg(data){ 
//     let img = document.createElement('img')
//     img.src = `assets/${data.DIR}.jpg`
//     img.alt = `${data.ID}`
//     img.setAttribute('class', 'cover-image')
//     img.addEventListener('click', ()=> assignMp3(img))
//     coverImgContainer.appendChild(img)
// };

function getImg(data){ 
    data.forEach(element => {
    let img = document.createElement('img')
    img.src = `assets/${element.DIR}.jpg`
    img.alt = data.indexOf(element)
    img.setAttribute('class', 'cover-image')
    img.addEventListener('click', ()=> assignMp3(img))
    coverImgContainer.appendChild(img)
    });
};

//Assign sthe mp3 src to my audio element & play mix
function assignMp3 (data) {
    audioElement.src  = `${data.src.slice(0, -3)}mp3`;
    console.log(data.alt)
    assignInfo(mixLibrary[data.alt])
    playMix();
}

//injects mix info to the dom
function assignInfo (data){
    mixInfo.textContent = `${data.TITRE} - ${data.ARTISTE}`
};

export {mixCover,coverImgContainer, mixInfo,shuffle, getImg, assignMp3, assignInfo};