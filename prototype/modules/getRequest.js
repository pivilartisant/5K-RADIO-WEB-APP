import {mixInfo,shuffle, getImg} from './mixLoad.js'

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
}

export { reqUrl, mixLibrary, getData}
