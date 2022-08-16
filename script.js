// root API
var BASE_MUSIC_URL = 'https://musicovery.com/api/V6/playlist.php'

// searching for a specific url with varying valence and arousal
// var url = `${BASE_MUSIC_URL}?fct=getfrommood&trackvalence=${trackValance}&trackarousal=${trackArousal}&resultsnumber=6&listenercountry=gb`;
// console.log(url)

// various moods with different levels of valence and arousal
var moods = {
    // dark: {valance: 1, arousal: 100000}, 
    // calm: {valance: 10, arousal: 10000},
    // energetic: {valance: 100, arousal: 1000},
    // cleaningTheHouse: {valance: 1000, arousal: 100},
    // danceEuphorical: {valance: 10000, arousal: 10},
    // happy: {valance: 100000, arousal: 1},

    0: {valance: 1, arousal: 100000}, 
    1: {valance: 10, arousal: 10000},
    2: {valance: 100, arousal: 1000},
    3: {valance: 1000, arousal: 100},
    4: {valance: 10000, arousal: 10},
    5: {valance: 100000, arousal: 1},
}
console.log(JSON.stringify(moods[1]));
console.log(moods[1].valance);

// getting song information based on mood input
function getMoodResults(moodKey) {
    var moodObj = moods[moodKey];
    var url = `${BASE_MUSIC_URL}?fct=getfrommood&trackvalence=${moodObj.valance}&trackarousal=${moodObj.arousal}&resultsnumber=6&listenercountry=gb`;
    console.log(url);
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);

            for (var i=0; i<data.tracks.length; i++){
            console.log(data.tracks[i].track.title)
            }
        })
}

// getMoodResults('happy');

// var mood1 = document.getElementById("mood1").addeventlister("click")
// var mood2 = document.getElementById("mood2").addeventlister("click")
// var mood3 = document.getElementById("mood3").addeventlister("click")
// var mood4 = document.getElementById("mood4").addeventlister("click")

var find = document.getElementById("find")

find.addEventListener("click", function(){
    var moodKey = moodOption.value;
    console.log(moodKey);

    getMoodResults(moodKey);

})

