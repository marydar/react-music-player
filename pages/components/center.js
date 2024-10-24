import PlaylistPanel from "./playlistPanel";
import SongPanel from "./songPanel";
export default function Center(){
  return(
    <div className="bg-gray-950 flex w-full flex-row h-[85%]">
      <PlaylistPanel/>
      <SongPanel/>
    </div>
  )
}