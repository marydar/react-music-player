import PlaylistPanel from "./playlistPanel";
import SongPanel from "./songPanel";
import PlaylistNameForm from "./nameForm";
export default function Center(){
  return(
    <div className="bg-gray-950 flex w-full flex-row h-[85%]">
      <PlaylistPanel/>
      <SongPanel/>
    </div>
  )
}