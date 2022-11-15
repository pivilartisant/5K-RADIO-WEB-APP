import {radioData, coverImgContainer, reqUrl, getData, getImg, player, testBtn, backBtn} from './modules/getdata.js'


const mixCover = document.getElementsByClassName('cover-image');
const mixLibrary= [];
let mixMp3;

//This would be called in my app.js 

setTimeout(getMp3,1000)
setTimeout(testFunction,2000, mixLibrary)

function getMp3(){
    for (let i = 0; i < mixCover.length; i++){
        mixLibrary.push(mixCover.item(i))
    }
}

function testFunction (arr){
    arr.forEach(element => {
        element.addEventListener('click', ()=> console.log(element))
    });
}

function assignMp3 (arr) {
   console.log(arr)
}

// coverImg.addEventListener('click',() =>{console.log('click')})