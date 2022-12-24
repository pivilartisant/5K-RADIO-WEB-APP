//Importing my classes 
import {Mix, Library} from './modules/data.js'

//Creating my mix Library
let mixCollection = new Library;

//Calling getData method and sets creates independant mix classes

// window.addEventListener('load', ()=> {
//     mixCollection.getData('./data/db.json');
// }
// );

mixCollection.getData('./data/db.json');



