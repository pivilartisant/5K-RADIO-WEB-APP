//Declaring my variables
let radioData;

const coverImgContainer = document.getElementById('cover_image_container');

const mixTitle = document.getElementById('title');
const mixArtist = document.getElementById('artist');

const player = document.getElementById('player_container');

const testBtn = document.getElementById('logo');
const backBtn = document.getElementById('back_btn');

//My request URL
const reqUrl = 'data/db.json'; 

//Fetch call to get image 
getData(reqUrl, getImg);

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
