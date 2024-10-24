const {DoublyLinkedList} = require("./linked_list.js");
const {Playlist} = require("./playlist.js");
const {Song} = require("./song.js");

// import { DoublyLinkedList } from "./linked_list"
console.log("hi")

let dll = new DoublyLinkedList();
dll.addItem(1)
dll.addItem(2)
dll.addItem(3)

// temp = dll.head.next
// dll.removeItem(temp)

dll.display();

let song = new Song("title", "imgAddress", "link", "lyric", "artistName");
let playlist = new Playlist();
playlist.addSong("t1", song.imgAddress, "link1", song.lyric, song.artistName);
playlist.addSong("t2", song.imgAddress, "link2", song.lyric, song.artistName);
playlist.addSong("t3", song.imgAddress, "link3", song.lyric, song.artistName);
playlist.addSong("t4", song.imgAddress, "link4", song.lyric, song.artistName);
playlist.addSong("t5", song.imgAddress, "link1", song.lyric, song.artistName);

playlist.printAll();
playlist.deleteSong("t1");
playlist.printAll();

search1 = playlist.search("t2")
search1.display()
searc2 = playlist.search("artistName")
searc2.display()
console.log("00000",playlist.current.data.name)
