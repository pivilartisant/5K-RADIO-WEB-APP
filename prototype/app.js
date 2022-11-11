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
    // console.log(radioData);
    // getInfo(radioData)
    getImg(radioData)
  }



//create a function that displays each title in radioData array

// function getInfo(data){ 
//   for (let i = 0; i< data.length; i++){
//     // console.log(data[i].TITRE)
//     const newDiv = document.createElement('div')
//     newDiv.innerHTML = `${data[i].TITRE} - ${data[i].ARTISTE} `

//     document.body.appendChild(newDiv)
//   }
// }

//refactor the get info function to show the mix covers instead of the title 

//add IF statement that checks to see if the jpg exists


function getImg(data){ 
  for (let i = 0; i< data.length; i++){
    // console.log(data[i].TITRE)
  //  const newDiv = document.createElement('div')
   const img = document.createElement('img')
   img.src = `assets/${data[i].DIR}.jpg`
   img.setAttribute('class', 'cover-image')
   img.alt = `${data[i].TITRE} could not be loaded`
  //  newDiv.appendChild(img)
  //  coverImgContainer.appendChild(newDiv)
   coverImgContainer.appendChild(img)
  }
}

// function getImg(data){ 
//    // console.log(data[i].TITRE)
//    const newDiv = document.createElement('div')
//    const img = document.createElement('img')
//    img.src = `assets/${data[i].DIR}.jpg`
//    newDiv.appendChild(img)

//    document.body.appendChild(newDiv)
// }


