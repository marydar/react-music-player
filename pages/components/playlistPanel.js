import PlaylistCard from "./playlistCard";
import {allSongs, playlists} from "@/lib/data";
import useMusicStore from "@/lib/store";
export default function PlaylistPanel(){
    const  selectedPlaylist = useMusicStore((state) => state.selectedPlaylist);
    const  setSelectedPlaylist = useMusicStore((state) => state.setSelectedPlaylist);
  return(
    <div className="bg-gray-950 flex w-[18rem] h-full flex-col p-2">
            <div className="bg-gray-900 flex w-full justify-between maryam-shadow">
              <div className="flex bg-gray-900 h-full p-3">
                {/* lib icon */}
                <div className="flex items-center cursor-pointer" onClick={()=>{setSelectedPlaylist(allSongs)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                    <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clip-rule="evenodd" />
                    <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
                  </svg>
                </div>
                <div className="bg-gray-900 flex text-3xl p-3 lato-bold">Playlists</div>
              </div>
              {/* add playlist */}
              <div className="flex bg-gray-900 h-full items-center pr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
                </svg>

              </div>
            </div>
           
            <div className="bg-gray-900 flex h-full flex-col overflow-scroll bg-scroll " style={{scrollbarWidth: "none"}}>
              {/* {Array.from({length: 20}).map((_,index)=>{
                return <PlaylistCard key={index} name={`playlist${index+1}`} image="https://picsum.photos/100/100" length={Math.floor(Math.random() * 100)}/>
              })} */}
              {playlists.map((_,index)=>{
                return (
                    <div key={index} className="cursor-pointer" onClick={()=>{setSelectedPlaylist(playlists[index])}}>
                        <PlaylistCard name={playlists[index].name} image="https://picsum.photos/100/100" length={playlists[index].dll.getSize()}/>
                    </div>
                )
              })}
            </div>
          </div>
  )
}