console.log("welcome to spotify");
//initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName= document.getElementById('masterSongName');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
{songName: "Jab saiyaan", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
{songName: "Deewani Mastani", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
{songName: "Barso re megha", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
{songName: "Dhak baja Kashor baja", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
{songName: "Param Sundari", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
{songName: "Tujhmein Rab Dikhta Hai", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"}
]

songItems.forEach((element, i)=>{
element.getElementsByTagName('img')[0].src=songs[i].coverPath
element.getElementsByClassName('songName')[0].innerText=songs[i].songName
console.log(element,i);   
})

// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
    }

})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6) {
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1) {
        songIndex=6;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})