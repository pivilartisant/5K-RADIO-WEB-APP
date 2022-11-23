import {mixInfo} from './mixLoad.js'

//Declaring my variables
let radioData;

const coverImgContainer = document.getElementById('cover_image_container');

const player = document.getElementById('player_container');

const testBtn = document.getElementById('logo');
const backBtn = document.getElementById('back_btn');

//My request URL
const reqUrl = 'data/db.json'; 

//getData Fetch function
async function getData(url, fn){
    const request = new Request(url);
    const response = await fetch(request);
    radioData = await response.json()
    fn(radioData)
  }


//create a function that displays each title in radioData array
function getImg(data){ 
  for (let i = 0; i< data.length; i++){
  // const div = document.createElement('div')
  const img = document.createElement('img')
  img.src = `assets/${data[i].DIR}.jpg`
  // div.setAttribute('class','temp-class')
  img.setAttribute('class', 'cover-image')
  // div.appendChild(img)
  coverImgContainer.appendChild(img)
  img.alt = `${data[i].ID}`
  }
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


 
//Modal popup in mobile format
testBtn.addEventListener('click', ()=>{
  player.setAttribute('class','player-container-active')
  console.log('click')
})

backBtn.addEventListener('click', ()=>{
  player.setAttribute('class','player-container')
  console.log('click')
})


export {radioData, coverImgContainer, reqUrl, getData, getImg,getInfo,assignInfo, player, testBtn, backBtn}
