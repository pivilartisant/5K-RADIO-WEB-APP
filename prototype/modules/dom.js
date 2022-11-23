//declaring my variables
const testBtn = document.getElementById('logo');
const backBtn = document.getElementById('back_btn');

//Modal popup in mobile format
testBtn.addEventListener('click', ()=>{
    player.setAttribute('class','player-container-active')
    console.log('click')
  })
  
  backBtn.addEventListener('click', ()=>{
    player.setAttribute('class','player-container')
    console.log('click')
  })
  