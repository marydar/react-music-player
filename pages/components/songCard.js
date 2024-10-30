import { allSongs } from "@/lib/data";
import useMusicStore from "@/lib/store";
const SongCard = ({ id, image, name, artist, time }) => {
  const selectedPlaylist = useMusicStore((state) => state.selectedPlaylist);
  const setSelectedPlaylist = useMusicStore(
    (state) => state.setSelectedPlaylist
  );
  const setReload = useMusicStore((state) => state.setReload);
  const addToList = useMusicStore((state) => state.toggleAddToList);
  const toggleAddToList = useMusicStore((state) => state.toggleAddToList);
  const songForAddToList = useMusicStore((state) => state.songForAddToList);
  const setSongForAddToList = useMusicStore(
    (state) => state.setSongForAddToList
  );

  return (
    <div className="bg-gray-900 flex m-3 items-center h-16 hover:bg-gray-800">
      <div className=" flex w-[5%] justify-end pr-6 text-gray-400">
        {id + 1}
      </div>
      <div className="flex h-full w-[5%] ">
        <img
          src={image}
          alt="image"
          className="h-full w-full rounded-md overflow-hidden"
        ></img>
      </div>
      <div className=" flex w-[30%] pl-2 text-xl lato-bold">{name}</div>
      <div className=" flex w-[50%] text-gray-400">{artist}</div>
      <div
        className=" flex w-[5%] text-gray-400"
        onClick={(e) => {
          e.stopPropagation();
          selectedPlaylist.deleteSong(name);
          // setSelectedPlaylist(allSongs)
          setSelectedPlaylist(selectedPlaylist);
          setReload();

          //reload
        }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z" clip-rule="evenodd" />
            </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          toggleAddToList();
          // alert(selectedPlaylist.getSong(id).title)
          setSongForAddToList(selectedPlaylist.getSong(id));
          // alert(songForAddToList.title)
        }}
        className=" flex w-[5%] text-gray-400"
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default SongCard;
