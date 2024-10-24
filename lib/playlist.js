const {DoublyLinkedList, Node} = require("./linked_list.js");
const {Song} = require("./song.js");

class Playlist {

	constructor(name) {
		this.name = name
        this.dll = new DoublyLinkedList()
        this.current = null
	}
    changeName(new_name){
        if(new_name){
            this.name = new_name
        }
    }
    addSong(title, imgAddress, link, lyric, artistName){
        let song = new Song(title, imgAddress, link, lyric, artistName)
        if(this.exist(song)){
            //error
            return false
        }
        this.dll.addItem(song)
        if(this.current.data == null){
            this.current = this.dll.head.next
            console.log("pppp", this.current.data)
        }
        return true

    }
    exist(song){
        if(this.dll.getSize() == 0){
            return false
        }
        let temp = this.dll.head.next
        while(temp!=this.dll.tail){
            if(temp.data.link == song.link){
                return true
            }
            temp = temp.next
        }
        return false
    }
    deleteSong(title){
        let temp = this.dll.head.next
        while(temp){
            if(temp.data.title == title){
                this.dll.removeItem(temp)
                return true
            }
            temp = temp.next
        }
        return false
    }
    search(key){
        let temp = this.dll.head.next
        let nll = new DoublyLinkedList()
        while(temp!=this.dll.tail){
            if(temp.data.title == key || temp.data.artistName == key){
                nll.addItem(temp.data)
            }
            temp = temp.next
        }
        return nll
    }
    nextSong(shuffle, loop){
        if(shuffle){
            let node = shuffle()
            return node.song
        }
        this.current = this.current.next
        if(this.current == this.dll.tail && loop){
            this.current = this.dll.head.next
            return this.current.data
        }
        return null
    }
    previousSong(shuffle, loop){
        if(shuffle){
            let node = shuffle()
            this.current = node 
            return this.current.data
        }
        this.current = this.current.prev
        if(this.current == this.dll.head && loop){
            this.current = this.dll.tail.prev
            return this.current.data
        }
        return null
    }

    shuffle(){
        let rand = this.getRandom()
        let temp = this.current
        if(rand>0){
            for(let i = 0; i < rand; i++){
                temp = temp .next
                if(temp == this.dll.tail){
                    temp = this.dll.head.next
                }
            }
            return temp

        }
        if(rand<0){
            rand = rand*-1
            for(let i = 0; i < rand; i++){
                temp = temp.prev
                if(temp == this.dll.head){
                    temp = this.dll.tail.prev
                }
            }
            return temp

        }
    }
    getRandom(){
        let length = this.dll.getSize()
        let max = Math.floor(length/2)
        let min = Math.floor(length/2)*-1
        let rand = 0
        while(rand == 0){
            rand = Math.floor(Math.random() * (max - min) + min); 
        }
        return rand
    }
   

    displayAll(){
        let temp = this.dll.head.next
        let songs = []
        while(temp){
            if(temp!=this.dlltail){
                songs.push(temp.data)
            }
            temp = temp.next
        }
        return songs
    }
    printAll(){
        let temp = this.dll.head.next
        console.log("printing all")
        while(temp!=this.dll.tail){
            console.log("---", temp.data.title)
            temp = temp.next
        }
        console.log();
        
    }


}
module.exports = {Playlist}