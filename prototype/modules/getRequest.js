<<<<<<< Updated upstream
//Declaring my variables
let radioData;

const coverImgContainer = document.getElementById('cover_image_container');

const mixTitle = document.getElementById('title');
const mixArtist = document.getElementById('artist');

const player = document.getElementById('player_container');

const testBtn = document.getElementById('logo');
const backBtn = document.getElementById('back_btn');

=======
import {mixInfo, getImg} from './mixLoad.js'
const mixLibrary= [];
>>>>>>> Stashed changes
//My request URL
const reqUrl = 'data/db.json'; 

//Fetch call to get image 
getData(reqUrl, getImg);

//getData Fetch function
async function getData(url,fn){
    fetch(reqUrl)
    .then(res => res.json())
    .then(data => {fn(data)})
  }

<<<<<<< Updated upstream

//create a function that displays each title in radioData array
function getImg(data){ 
  for (let i = 0; i< data.length; i++){
   const img = document.createElement('img')
   img.src = `assets/${data[i].DIR}.jpg`
   img.setAttribute('class', 'cover-image')
   coverImgContainer.appendChild(img)
   img.alt = `${data[i].TITRE} could not be loaded`
  }
}

//Function that when called displays the mix info into the player info section 

// function getInfo(data){ 
//   mixTitle.textContent = `assets/${data[i].TITRE}`;
//   mixArtist.textContent = `assets/${data[i].ARTISTE}`; 
// }

//Modal popup in mobile format
testBtn.addEventListener('click', ()=>{
  player.setAttribute('class','player-container-active')
  console.log('click')
})

backBtn.addEventListener('click', ()=>{
  player.setAttribute('class','player-container')
  console.log('click')
})


export {radioData, coverImgContainer, reqUrl, getData, getImg, player, testBtn, backBtn}
=======
function setMixToArr(data){
    for (let i = 0; i < data.length-1; i++){
        mixLibrary.push(data[i])
  }
}

//Function that when called displays the mix info into the player info section
function getInfo(index){
  fetch(reqUrl)
      .then(res => res.json())
      .then(data => {assignInfo(data[index])})
}

function assignInfo (data){
  mixInfo.textContent = `${data.TITRE} - ${data.ARTISTE}`
}

export {reqUrl, getData,setMixToArr ,getInfo, assignInfo, mixLibrary}
>>>>>>> Stashed changes
