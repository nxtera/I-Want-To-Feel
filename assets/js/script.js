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
// const YOUTUBE_API_KEY = 'AIzaSyCuAF2JksdsM-MWNb3K62MHTaBFiPS94Qk'
/* Ashleigh 4th YouTube API Key */
//const YOUTUBE_API_KEY = 'AIzaSyD6JjlHCShI8GfsGBRFQ_xKRWTq_OCOLlM'
/* Ashleigh 5th YouTube API Key */
const YOUTUBE_API_KEY = 'AIzaSyD7uXIB14u9MlReHOZnj7--AN_p3HPN3sY'
var BASE_MUSIC_URL = `https://ws.audioscrobbler.com/2.0/?limit=5&method=tag.gettoptracks&api_key=${API_KEY}&format=json`


button.onclick = function() {
    var printText = dropdown.value;
    getMoodResults(printText)
}

// getting song information based on mood input
function getMoodResults(printText) {
    var url = `${BASE_MUSIC_URL}&tag=${printText}`;
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
            createIframe(videoId, i)
        } else {
            window.alert('No result found')
        }
     })
}

function createIframe(videoId, i) {
    const srcUrl = `https://www.youtube.com/embed/${videoId}`
        document.getElementById("result" + (i + 1)).src = srcUrl
    }
        



