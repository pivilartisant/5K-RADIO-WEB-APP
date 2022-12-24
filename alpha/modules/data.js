import {coverImgContainer, mixCover, mixInfo, audioElement, setState} from './dom.js'
import {playMix} from './player.js'

//CLASSES
class Mix {
    constructor(id, title, artist, path){
        this.id = id;
        this.title = title; 
        this.artist = artist;
        this.cover = `../data/${path}.jpg`;
        this.mp3 = `../data/${path}.mp3`;
    };

    assignTrack(){
        audioElement.src  =  this.mp3;
        mixInfo.textContent = `${this.title} - ${this.artist}`;
        playMix();
    };
};

class Library {
    constructor(){
        this.dataSet = [];
    };
    newMix(id, title, artist, cover){
        let mix = new Mix(id, title, artist, cover);
        this.dataSet.push(mix);
        return mix;
    };

    async getData(reqUrl){
        await fetch(reqUrl)
                .then(res => res.json())
                .then(data => {
                    data.forEach(element => {
                    this.newMix(element.ID,element.TITRE, element.ARTISTE, element.DIR)});
                    this.shuffle(this.dataSet)
                });
            await this.displayImg(this.dataSet);
        };

    async displayImg(data){ 
        data.forEach(element => {
            let img = document.createElement('img');
            img.src = element.cover;
            img.alt = element.id;
            img.setAttribute('class', 'cover-image');
            img.addEventListener('click', ()=> element.assignTrack());
            img.addEventListener('click', ()=> setState());
            coverImgContainer.appendChild(img); 
        });    
    };

    shuffle(array) {
        let currentIndex = array.length,  randomIndex;
            // While there remain elements to shuffle.
            while (currentIndex != 0) {
                // Pick a remaining element.
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;
                // And swap it with the current element.
                    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        };

    return array;
};
};

export {Mix, Library}