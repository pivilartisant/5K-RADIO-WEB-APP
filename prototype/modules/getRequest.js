import {mixInfo, getImg} from './mixLoad.js'

//Declaring my variables
const mixLibrary= [];
//My request URL
const reqUrl = 'data/db.json'; 

//getData Fetch function
async function getData(url){
    await fetch(reqUrl)
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
            mixLibrary.push(element)});    
    })  
    await shuffle(mixLibrary)
    getImg(mixLibrary)
    console.log(mixLibrary)
    console.log(mixLibrary[0])
}

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

 

export { reqUrl, mixLibrary, getData}
