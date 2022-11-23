import {mixInfo, getImg} from './mixLoad.js'

//Declaring my variables
const mixLibrary= [];
//My request URL
const reqUrl = 'data/db.json'; 

// Fetch json function
function getData(url){
      fetch(reqUrl)
        .then(res => res.json())
        .then(data => { data.forEach(element => {
            getImg(element)
            mixLibrary.push(element)
        });
    })  
}

export { reqUrl, mixLibrary, getData}
