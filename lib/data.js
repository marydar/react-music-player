const {DoublyLinkedList} = require("./linked_list.js");
const {Playlist} = require("./playlist.js");
const {Song} = require("./song.js");

//https://dl.tiktokmusics.ir/music/Blue%20Bird%20By%20Ikimono%20gakar.mp3

let song1 = new Song("Giorno's Theme", "https://picsum.photos/100/100", "https://ts9.tarafdari.com/contents/user765402/content-sound/giorno_s_theme_jay_d_remixmp3_128k_1.mp3", "lyric", "JoJo's Bizzare Adventrue");
let song2 = new Song("Hikaru Nara (Your Lie in April)", "https://picsum.photos/100/100", "http://bayanbox.ir/download/8928353119777677371/Opening-Shigatsu-wa-Kimi-no-Uso-1-Full-Lyrics-HD.mp3", "lyric", "Hikaru Nara");

let song3 = new Song("Mohtaj", "https://picsum.photos/100/100", "https://mehrdl.musicmelnet.com/Music/A/B/New/05%20Mohtaj.mp3", "lyric", "Ebi");
let song4 = new Song("Navazesh", "https://picsum.photos/100/100", "https://mehrdl.musicmelnet.com/Music/A/A/Album/Ebi%20-%20Hesse%20Tanhaee/07%20Navazesh.mp3", "lyric", "Ebi");
let song5 = new Song("Boghz", "https://picsum.photos/100/100", "https://mehrdl.musicmelnet.com/Music/A/A/Album/Ebi%20-%20Jane%20Javani/04%20Boghz.mp3", "lyric", "Ebi");
let song6 = new Song("Pichak", "https://picsum.photos/100/100", "https://mehrdl.musicmelnet.com/Music/A/F/Ebi-shabzadeh/03%20-%20Pichak.mp3", "lyric", "Ebi");
let song7 = new Song("آخه مگه فرشته هم", "https://picsum.photos/100/100", "https://mehrdl.musicmelnet.com/Music/A/A/Album/Ebi%20-%20Yadegari/01%20Ebi%20-%20Kamran%20and%20Hooman%20-%20Mageh%20Fereshteh%20Ham%20Badeh.mp3", "lyric", "Ebi ft. Kamran & Hooman");
let song8 = new Song("Ki Ashkato Pak Mikone?", "https://picsum.photos/100/100", "https://mehrdl.musicmelnet.com/Music/A/G/Jadid/Googoosh%20Ft.%20Ebi%20-%20Ki%20Ashkato%20Pak%20Mikone%20[320]%20(1)%20(1).mp3", "lyric", "Ebi ft. Googoosh");
let song9 = new Song("Nazi Naz Kon!", "https://picsum.photos/100/100", "https://mehrdl.musicmelnet.com/Music/A/F/ebi-nazinazkon/01%20-%20Naazi%20Naaz%20Kon.mp3", "lyric", "Nara Hikaru");
let song10 = new Song("Noon O Paneer O Sabzi","https://picsum.photos/100/100", "https://mehrdl.musicmelnet.com/Music/A/F/Ebi-Setarehayesorbi/09%20Noon%20o%20Panir%20o%20Sabzi.mp3", "lyric", "Ebi");

let song11 = new Song("Sadness and Sorrow","https://picsum.photos/100/100", "https://dl.psarena.ir/wp-content/uploads/2021/06/08.-Sadness-and-Sorrow.mp3", "lyric", "Toshiro Masuda");
let song12 = new Song("The Rising Fighting Spirit","https://picsum.photos/100/100", "https://dl.psarena.ir/wp-content/uploads/2021/06/07.-The-Rising-Fighting-Spirit.mp3", "lyric", "Musashi Project");
let song13 = new Song("Akatsuki's Theme","https://picsum.photos/100/100", "https://dl.psarena.ir/wp-content/uploads/2021/06/10.-Akatsuki.mp3", "lyric", "Yasuhara Takanashi");
let song14 = new Song("Oruchimaru's Theme","https://picsum.photos/100/100", "https://dl.psarena.ir/wp-content/uploads/2021/06/13.-Orochimarus-Theme.mp3", "lyric", "Toshiro Masuda");
let song15 = new Song("Experienced Many Battles","https://picsum.photos/100/100", "https://dl.psarena.ir/wp-content/uploads/2021/06/04.-Experienced-Many-Battles.mp3", "lyric", "Yasuhara Takanashi");
let song16 = new Song("Obito's Theme","https://picsum.photos/100/100", "https://dl.psarena.ir/wp-content/uploads/2021/06/19.-Obitos-Theme.mp3", "lyric", "Yaiba & Yasuhara Takanashi");
let song17 = new Song("Departure to the Front Lines","https://picsum.photos/100/100", "https://dl.psarena.ir/wp-content/uploads/2021/06/08.-Departure-to-the-Front-Lines.mp3", "lyric", "Yasuhara Takanashi");
let song18 = new Song("Blue Bird","https://picsum.photos/100/100", "https://dl.tiktokmusics.ir/music/Blue%20Bird%20By%20Ikimono%20gakar.mp3", "lyric", "Ikimono-Gakari");
let songs = [song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16, song17, song18]

let allSongs = new Playlist("All songs");
for(let i = 1; i < songs.length+1; i++){
    allSongs.addSong(songs[i-1].title, songs[i-1].imgAddress, songs[i-1].link, songs[i-1].lyric, songs[i-1].artistName)
}

let playlist1 = new Playlist("Ebi");
for(let i of [3,4,5,6,7,8,9,10]){
    playlist1.addSong(songs[i-1].title, songs[i-1].imgAddress, songs[i-1].link, songs[i-1].lyric, songs[i-1].artistName)
}

let playlist2 = new Playlist("Naruto");
for(let i of [11, 12, 13, 14, 15, 16, 17, 18]){
    playlist2.addSong(songs[i-1].title, songs[i-1].imgAddress, songs[i-1].link, songs[i-1].lyric, songs[i-1].artistName)
}

let playlist3 = new Playlist("Great Ninja War");
for(let i of [12, 13, 15, 17]){
    playlist3.addSong(songs[i-1].title, songs[i-1].imgAddress, songs[i-1].link, songs[i-1].lyric, songs[i-1].artistName)
}

let playlist4 = new Playlist("Japanese");
for(let i of [1, 2, 11, 12, 13, 14, 15, 16, 17, 18]){
    playlist4.addSong(songs[i-1].title, songs[i-1].imgAddress, songs[i-1].link, songs[i-1].lyric, songs[i-1].artistName)
}

let playlist5 = new Playlist("Persian");
for(let i of [7,9, 8, 10,3,4,5,6]){
    playlist5.addSong(songs[i-1].title, songs[i-1].imgAddress, songs[i-1].link, songs[i-1].lyric, songs[i-1].artistName)
}

let playlist6 = new Playlist("Yasuhara Takanashi");
for(let i of [17, 13, 15, 16]){
    playlist6.addSong(songs[i-1].title, songs[i-1].imgAddress, songs[i-1].link, songs[i-1].lyric, songs[i-1].artistName)
}


let playlist11 = new Playlist("Ebi");
for(let i of [3,4,5,6,7,8,9,10]){
    playlist11.addSong(songs[i-1].title, songs[i-1].imgAddress, songs[i-1].link, songs[i-1].lyric, songs[i-1].artistName)
}

let playlist12 = new Playlist("Naruto");
for(let i of [11, 12, 13, 14, 15, 16, 17, 18]){
    playlist12.addSong(songs[i-1].title, songs[i-1].imgAddress, songs[i-1].link, songs[i-1].lyric, songs[i-1].artistName)
}

let playlist13 = new Playlist("Great Ninja War");
for(let i of [12, 13, 15, 17]){
    playlist13.addSong(songs[i-1].title, songs[i-1].imgAddress, songs[i-1].link, songs[i-1].lyric, songs[i-1].artistName)
}

let playlist14 = new Playlist("Japanese");
for(let i of [1, 2, 11, 12, 13, 14, 15, 16, 17, 18]){
    playlist14.addSong(songs[i-1].title, songs[i-1].imgAddress, songs[i-1].link, songs[i-1].lyric, songs[i-1].artistName)
}

let playlist15 = new Playlist("Persian");
for(let i of [7,9, 8, 10,3,4,5,6]){
    playlist15.addSong(songs[i-1].title, songs[i-1].imgAddress, songs[i-1].link, songs[i-1].lyric, songs[i-1].artistName)
}

let playlist16 = new Playlist("Yasuhara Takanashi");
for(let i of [17, 13, 15, 16]){
    playlist16.addSong(songs[i-1].title, songs[i-1].imgAddress, songs[i-1].link, songs[i-1].lyric, songs[i-1].artistName)
}


let playlists = [playlist1, playlist2, playlist3, playlist4, playlist5, playlist6,
    playlist11, playlist12, playlist13, playlist14, playlist15, playlist16
]

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

