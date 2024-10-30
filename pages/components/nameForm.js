import PlaylistCard from "./playlistCard";
import { allSongs, playlists } from "@/lib/data";
import useMusicStore from "@/lib/store";
import { Playlist } from "@/lib/playlist";
import { useEffect, useRef } from "react";
export default function PlaylistNameForm() {

    const inputRef = useRef(null);
  
    const toggleCreatePlaylist = useMusicStore(
      (state) => state.toggleCreatePlaylist
    );
    let newPlaylist = new Playlist(" ");
    const handleCreatePlaylist = (e) => {
      e.preventDefault();
      let name = inputRef.current.value;
      if (name == "") {
        newPlaylist.changeName("new playlist");
      } else {
        newPlaylist.changeName(name);
      }
      inputRef.current.value = "";
      toggleCreatePlaylist();
      playlists.push(newPlaylist);
      return (
        <div key={playlists.length} className="cursor-pointer">
          {/* onClick={()=>{setSelectedPlaylist(playlists[index]); setOriginalPlaylist(playlists[index]) }} */}
          <PlaylistCard
            name={newPlaylist.name}
            image="https://picsum.photos/100/100"
            length={newPlaylist.dll.getSize()}
            />
        </div>
      );
    };
    return (
      <div className="flex flex-col items-center justify-center  bg-gray-950 h-[100%] rounded-3xl">
        <h1 className="color-white text-center text-3xl font-bold p-2">
          Create Playlist
        </h1>
        <form
          onSubmit={handleCreatePlaylist}
          className="flex flex-col items-center justify-center gap-3"
        >
          <input
            ref={inputRef}
            className="color-white w-full bg-slate-900 p-5 pr-5 pl-5 rounded-2xl border border-gray-950"
            type="text"
            placeholder="Enter playlist name"
          />
          <button
            className="px-20 py-3 text-white bg-gray-700 rounded-md cursor-pointer text-base hover:bg-gray-900 transition-colors duration-300"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    );
  }