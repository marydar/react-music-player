import useMusicStore from "@/lib/store";
import{useRef} from "react";
import { useEffect } from "react";
export default function PlayBar() {
  const selectedSong = useMusicStore((state) => state.selectedSong);
  const selectedPlaylist = useMusicStore((state) => state.selectedPlaylist);
  const audioRef = useRef(null);
  const setPlayFunction = useMusicStore((state) => state.setPlayFunction);
  // const play = () => {
  //   audioRef.current.play();
  // };
  // setPlayFunction(play);

  useEffect(() => {
    const play = () => {
      audioRef.current.play();
    };
    setPlayFunction(play);
  }, []);

  return (
    <div className="bg-gray-950 flex w-full h-[9%] justify-between">
      <audio src={selectedSong.link} ref={audioRef}></audio>
      <div className="flex flex-col w-[30%] justify-center pl-8">
        <div className="flex lato-bold">{selectedSong.title}</div>
        <div className="flex lato-bold">{selectedPlaylist.name}</div>
      </div>
      <div className="flex  justify-center items-center w-[30%]">
        {/* shuffle */}
        <div className="flex mr-2 ml-2">
          <svg
            fill="currentColor"
            className="w-6"
            viewBox="0 0 16 16"
            class="size-6"
          >
            <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
            <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
          </svg>
        </div>
        {/* previous */}
        <div className="flex mr-2 ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
            className="w-8"
          >
            <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
          </svg>
        </div>
        {/* play */}
        <div
          className="flex mr-2 ml-2 cursor-pointer"
          onClick={() => {
            play();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
            className="w-12"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        {/* next */}
        <div className="flex mr-2 ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
            className="w-8"
          >
            <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
          </svg>
        </div>
        {/* loop */}
        <div className="flex mr-2 ml-2">
          <svg
            fill="currentColor"
            className="w-6"
            viewBox="0 0 16 16"
            class="size-6"
          >
            <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
          </svg>
        </div>
      </div>
      <div className="flex w-[30%]"> </div>
    </div>
  );
}
