const testBtn = document.getElementById('logo');
const backBtn = document.getElementById('back_btn');
const player = document.getElementById('player_container');
const width = window.innerWidth;

//Modal popup in mobile format
testBtn.addEventListener('click', ()=>{
    setState(player)
  })

  backBtn.addEventListener('click', ()=>{
    player.setAttribute('class','player-container')
  })

  function setState(elm){
    if (width<=480){
      elm.setAttribute('class','player-container-active')
      console.log('setState function')
    }
  }

  export {testBtn, backBtn, setState, player}