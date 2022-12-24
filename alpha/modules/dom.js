//Declaring variables
const coverImgContainer = document.getElementById('cover_image_container');
const mixCover = document.getElementsByClassName('cover-image');
const mixInfo = document.getElementById('mix_info');

const audioElement = document.querySelector("audio");
const playButton = document.getElementById("play_button");
const playPng = document.getElementById('playBtn');

const player = document.getElementById('player_container');
const backBtn = document.getElementById('back_btn');
const width = window.innerWidth;

//Play button on click 
playButton.addEventListener("click", () => {playPause()}, false);

function playPause(){
// Play or pause track depending on state
if (playButton.dataset.playing === "true") {
    playButton.dataset.playing = "false";
    audioElement.pause();
    playPng.src = '../assets/img/play.png';
  } else if (playButton.dataset.playing === "false"){
    playButton.dataset.playing = "true";
    audioElement.play();
    playPng.src = '../assets/img/pause.png';
  }
} 

function setState(){
    if (width<=480){
      player.setAttribute('class','player-container-active')
    }
  }

  backBtn.addEventListener('click', ()=>{
    player.setAttribute('class','player-container')
  })


export {coverImgContainer, mixCover, mixInfo, audioElement, playButton, playPng, setState}