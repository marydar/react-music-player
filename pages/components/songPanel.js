import SongCard from "./songCard";
import { allSongs } from "@/lib/data";
import useMusicStore from "@/lib/store";
import { useEffect } from "react";
import {Playlist} from "@/lib/playlist";
export default function SongPanel() {
  const  selectedSong = useMusicStore((state) => state.selectedSong);
  const  setSelectedSong = useMusicStore((state) => state.setSelectedSong);
  const selectedPlaylist = useMusicStore((state) => state.selectedPlaylist);
  const setIsPlaying = useMusicStore((state) => state.setIsPlaying);
  
  return (
    <div className="bg-gray-950 flex flex-grow  h-full flex-col p-2">
      <div className="flex bg-gray-900 flex-col maryam-shadow">
        <div className="flex bg-gray-900 justify-start items-center ml-12 mb-2 mt-2 ">
          {/* play top */}
          <div className="flex text-green-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
              className="w-16"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="flex text-5xl p-5 lato-black">{selectedPlaylist.name}</div>
          {/* <div className="flex text-5xl p-5 lato-black">MDAR Musics</div> */}
        </div>
        <div className="flex bg-gray-900 mb-4">
          <div className="flex bg-blue-100 bg-transparent w-[5%] justify-end pr-4 lato-bold text-2xl">
            #
          </div>
          <div className="flex bg-blue-900 bg-transparent w-[5%] lato-bold text-2xl">
            Title
          </div>
          <div className="flex bg-blue-300 bg-transparent w-[30%]"></div>
          <div className="flex bg-blue-500 bg-transparent w-[50%] lato-bold text-2xl">
            Artist
          </div>
          <div className="flex bg-blue-800 bg-transparent w-[10%] lato-bold text-2xl">
            Duration
          </div>
        </div>
      </div>
      <div
        className="flex bg-gray-900 flex-grow flex-col overflow-scroll bg-scroll "
        style={{ scrollbarWidth: "none" }}
      >
        {/* {Array.from({length: 20}).map((_,index)=>{
                  return <SongCard key={index} id={index} name={`song${index+1}`} image="https://picsum.photos/100/100" artist={`artist${index+1}`} time={`${Math.floor(Math.random() * 100)}min`}/>
                })} */}
        {selectedPlaylist.displayAll().map((song, index) => {
          return (
            <div key={index} className="cursor-pointer" onClick={()=>{setSelectedSong(song); setIsPlaying(true); selectedPlaylist.setCurrent(index);}}>
                <SongCard
                id={index}
                name={song.title}
                image={song.imgAddress}
                artist={song.artistName}
                time={`${Math.floor(Math.random() * 100)}min`}
                />
            </div>
          );
        })}
      </div>
    </div>
  );
}
