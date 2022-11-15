//Declaring my variables
let radioData;
const coverImgContainer = document.getElementById('cover_image_container');

//My request URL
const reqUrl = 'data/db.json'; 

//Fetch call 
getData(reqUrl);

//getData Fetch function
async function getData(url){
    const request = new Request(url)
    const response = await fetch(request)
    radioData = await response.json()
    getImg(radioData)
  }

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

const player = document.getElementById('player_container')
const testBtn = document.getElementById('logo')
const backBtn = document.getElementById('back_btn')

testBtn.addEventListener('click', ()=>{
  player.setAttribute('class','player-container-active')
  console.log('click')
})

backBtn.addEventListener('click', ()=>{
  player.setAttribute('class','player-container')
  console.log('click')
})


export {radioData, coverImgContainer, reqUrl, getData, getImg, player, testBtn, backBtn}
