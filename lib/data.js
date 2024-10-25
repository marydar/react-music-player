const {DoublyLinkedList} = require("./linked_list.js");
const {Playlist} = require("./playlist.js");
const {Song} = require("./song.js");

//https://dl.tiktokmusics.ir/music/Blue%20Bird%20By%20Ikimono%20gakar.mp3
//https://ts9.tarafdari.com/contents/user765402/content-sound/giorno_s_theme_jay_d_remixmp3_128k_1.mp3

let song1 = new Song("Giorno's Theme", "https://picsum.photos/100/100", "https://ts9.tarafdari.com/contents/user765402/content-sound/giorno_s_theme_jay_d_remixmp3_128k_1.mp3", "lyric", "Beethoven");
let song2 = new Song("Hikaru Nara (Your Lie in April)", "https://picsum.photos/100/100", "https://dl.tiktokmusics.ir/music/Blue%20Bird%20By%20Ikimono%20gakar.mp3", "lyric", "Sasy");
let song3 = new Song("GO!!!", "https://picsum.photos/100/100", "mhttps://ts9.tarafdari.com/contents/user765402/content-sound/giorno_s_theme_jay_d_remixmp3_128k_1.mp3", "lyric", "Yas");
let song4 = new Song("Blue Bird", "https://picsum.photos/100/100", "mhttps://dl.tiktokmusics.ir/music/Blue%20Bird%20By%20Ikimono%20gakar.mp3", "lyric", "Mohammadreza Shajarian");
let song5 = new Song("Night Flower", "https://picsum.photos/100/100", "nhttps://ts9.tarafdari.com/contents/user765402/content-sound/giorno_s_theme_jay_d_remixmp3_128k_1.mp3", "lyric", "Uchiha Itachi");
let song6 = new Song("Miss Korea", "https://picsum.photos/100/100", "nhttps://dl.tiktokmusics.ir/music/Blue%20Bird%20By%20Ikimono%20gakar.mp3", "lyric", "Lionel Messi");
let song7 = new Song("Judas", "https://picsum.photos/100/100", "jhttps://ts9.tarafdari.com/contents/user765402/content-sound/giorno_s_theme_jay_d_remixmp3_128k_1.mp3", "lyric", "Michael Jackson");
let song8 = new Song("Tainted Love", "https://picsum.photos/100/100", "jhttps://dl.tiktokmusics.ir/music/Blue%20Bird%20By%20Ikimono%20gakar.mp3", "lyric", "Adele");
let song9 = new Song("He's a Pirate", "https://picsum.photos/100/100", "khttps://ts9.tarafdari.com/contents/user765402/content-sound/giorno_s_theme_jay_d_remixmp3_128k_1.mp3", "lyric", "Nara Hikaru");
let song10 = new Song("Avengers Main Theme","https://picsum.photos/100/100", "khttps://dl.tiktokmusics.ir/music/Blue%20Bird%20By%20Ikimono%20gakar.mp3", "lyric", "Giovani Giorno");

let songs = [song1, song2, song3, song4, song5, song6, song7, song8, song9, song10]

let allSongs = new Playlist("All songs");
for(let i = 0; i < songs.length; i++){
    allSongs.addSong(songs[i].title, songs[i].imgAddress, songs[i].link, songs[i].lyric, songs[i].artistName)
}

let playlist1 = new Playlist("Japanese mix");
for(let i of [0,1,2,3]){
    playlist1.addSong(songs[i].title, songs[i].imgAddress, songs[i].link, songs[i].lyric, songs[i].artistName)
}
let playlist2 = new Playlist("Hollywood");
for(let i of [0,1,3,4,9]){
    playlist2.addSong(songs[i].title, songs[i].imgAddress, songs[i].link, songs[i].lyric, songs[i].artistName)
}

let playlist3 = new Playlist("Bollywood");
for(let i of [1,2,3]){
    playlist3.addSong(songs[i].title, songs[i].imgAddress, songs[i].link, songs[i].lyric, songs[i].artistName)
}

let playlist4 = new Playlist("Asian/Kpop");
for(let i of [0,1,2,3,4,5,6,7,8,9]){
    playlist4.addSong(songs[i].title, songs[i].imgAddress, songs[i].link, songs[i].lyric, songs[i].artistName)
}

let playlist5 = new Playlist("Dance/Party");
for(let i of [4,9]){
    playlist5.addSong(songs[i].title, songs[i].imgAddress, songs[i].link, songs[i].lyric, songs[i].artistName)
}

let playlists = [playlist1, playlist2, playlist3, playlist4, playlist5]

// console.log("-----------------------")
// console.log(playlist1.current)
// playlist1.nextSong(true, false)
// console.log(playlist1.current)

// playlist1.nextSong(true, false)
// console.log(playlist1.current)

// playlist1.nextSong(true, false)
// console.log(playlist1.current)

// playlist1.nextSong(true, false)
// console.log(playlist1.current)

// playlist1.nextSong(true, false)
// console.log(playlist1.current)

// playlist1.nextSong(true, false)
// console.log(playlist1.current)


export {allSongs, playlists}

