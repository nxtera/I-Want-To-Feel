var dropdown = document.getElementById("ui-dropdown");
var button = document.getElementById("find-search");
const inputBox = document.getElementById('search-input-box');
const searchForm = document.getElementById('search-form');
const youtubeVideosDiv = document.getElementById('youtube-videos');
const API_KEY = '866d1f37186fa72dd4052dc20a0be354'
/* Haruka YouTube API */
//const YOUTUBE_API_KEY = 'AIzaSyDqVtLW99QeZ0tyRWwesne5DWa8j7QyGEQ'
/* Ashleigh YouTube API Key */
// const YOUTUBE_API_KEY = 'AIzaSyARnHZxWwT1oqpKXyFipYb2JxsTGHDprQ4'
/* Ashleigh 2nd YouTube API Key */
//const YOUTUBE_API_KEY = 'AIzaSyClfGzPB5mmYoKxsJFRe4rfuHBCdKcyvcM'
/* Ashleigh 3rd YouTube API Key */
const YOUTUBE_API_KEY = 'AIzaSyCuAF2JksdsM-MWNb3K62MHTaBFiPS94Qk'
var BASE_MUSIC_URL = `https://ws.audioscrobbler.com/2.0/?limit=5&method=tag.gettoptracks&api_key=${API_KEY}&format=json`


// getting song information based on mood input
function getMoodResults(mood) {
    var url = `${BASE_MUSIC_URL}&tag=${mood}`;
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        const tracks = data.tracks.track;
        if(tracks.length > 0) {
            for (let i = 0; i < tracks.length; i++) {
                const trackObject = tracks[i];
                const artist = trackObject.artist.name;
                const title = trackObject.name;
                const query = `${artist} ${title}`
                getYoutubeVideoId(query, i);
            }
        } else {
            alert('No result found');
        }
     })
}

function getYoutubeVideoId(query, i) {
    const YOUTUBE_VIDEO_ID_BASE = 'https://youtube.googleapis.com/youtube/v3/search';
    const url = `${YOUTUBE_VIDEO_ID_BASE}?part=id&q=${query}&key=${YOUTUBE_API_KEY}`;
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        const items = data.items;
        if(items.length > 0) {
            const videoId = items[0].id.videoId;
            // console.log(items[0])
            // console.log(items[1])
            // console.log(items[2])
            // console.log(items[3])
            // console.log(items[4])
            createIframe(videoId, i)
        } else {
            alert('No result found');
        }
     })
}

function createIframe(videoId, i) {

    const srcUrl = `https://www.youtube.com/embed/${videoId}`
    console.log(srcUrl)
    //for (i = 0; i < 5; i++) {
        document.getElementById("result" + (i + 1)).src = srcUrl
      //  }
    
    }
        
    

    

// function createIframe(videoId) {
//     const srcUrl = `https://www.youtube.com/embed/${videoId}`
//     const iframe = document.createElement('iframe');
//     iframe.setAttribute('src', srcUrl);
//     iframe.setAttribute('width', '420');
//     iframe.setAttribute('height', '345');
//     iframe.setAttribute('allow', 'encrypted-media');
//     youtubeVideosDiv.appendChild(iframe);

    //const iframe = document.getElementById("result1");
    //iframe.setAttribute('src', srcUrl);
// getMoodResults from Drop Down


button.onclick = function() {
    var printText = dropdown.value;
    getMoodResults(printText)

}

// function getData(event) {
//     event.preventDefault();
//     const inputText = inputBox.value;
//     inputBox.value = '';
//     getMoodResults(inputText);
// }

//searchForm.addEventListener('submit', getData);




// Drop Down

// var moodOne = document.getElementById("mood-1");
// var moodTwo = document.getElementById("mood-2");
//var value = dropdown.options[dropdown.selectedIndex].text;




    // if (printText =="dark") {
    //     console.log("Its dark")
    // }
    // else if (printText =="calm") {
    //     console.log("Its calm")
    // }
    // else if (printText =="energetic") {
    //     console.log("Its energetic")
    // }
    // else if (printText =="cleaningTheHouse") {
    //     console.log("Its cleaningTheHouse")
    // }

    // else if (printText == "danceEuphorical") {
    //     console.log ("It's danceEuphorical")
    // }
    // else {console.log("It's happy")}


