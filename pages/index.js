export default function Home() {
  return (
    <div className="bg-red-500">
      <div className="bg-gray-900 flex flex-col h-screen w-screen">
        <div className="bg-gray-950 flex w-full  h-[6%] justify-between ">
          <div className="flex">0</div>
            {/* searchbar */}
            <div className="flex items-center justify-center w-full">
            <div className="relative w-full max-w-lg">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <input
                type="text"
                className="w-full pl-12 pr-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Search for songs, artists ..."
              />
              {(
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
          <div className="flex">0</div>
        </div>
        <div className="bg-gray-950 flex w-full flex-row h-[85%]">
          <div className="bg-gray-950 flex w-[18rem] h-full flex-col p-2">
            <div className="bg-gray-900 flex w-full justify-between ">
              <div className="flex bg-gray-900 h-full p-3">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                    <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clip-rule="evenodd" />
                    <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
                  </svg>

                </div>
                <div className="bg-gray-900 flex text-3xl p-3 lato-bold">PLaylists</div>
              </div>
              <div className="flex bg-gray-900 h-full items-center pr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
                </svg>

              </div>
            </div>
           
            <div className="bg-gray-900 flex h-full flex-col overflow-scroll bg-scroll " style={{scrollbarWidth: "none"}}>
              {Array.from({length: 20}).map((_,index)=>{
                return <PlaylistCard key={index} name={`playlist${index+1}`} image="https://picsum.photos/100/100" length={Math.floor(Math.random() * 100)}/>
              })}
            </div>
          </div>
          <div className="bg-gray-950 flex flex-grow  h-full flex-col p-2">
              <div className="flex bg-gray-900 flex-col">
                <div className="flex bg-gray-900 justify-start items-center ml-12 mb-8 mt-8 ">
                  <div className="flex text-green-500 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6" className="w-16">
                      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex text-5xl p-5 lato-black">MDAR Musics</div>
                </div>
                <div className="flex bg-gray-900">
                  <div className="flex bg-blue-100 bg-transparent w-[5%] justify-end pr-4">#</div>
                  <div className="flex bg-blue-900 bg-transparent w-[5%]">title</div>
                  <div className="flex bg-blue-300 bg-transparent w-[30%]"></div>
                  <div className="flex bg-blue-500 bg-transparent w-[50%]">artist</div>
                  <div className="flex bg-blue-800 bg-transparent w-[10%]">time</div>
                </div>
              </div>
              <div className="flex bg-gray-900 flex-grow flex-col overflow-scroll bg-scroll " style={{scrollbarWidth: "none"}}>
                {Array.from({length: 20}).map((_,index)=>{
                  return <SongCard id={index} name={`song${index+1}`} image="https://picsum.photos/100/100" artist={`artist${index+1}`} time={`${Math.floor(Math.random() * 100)}min`}/>
                })}
              </div>
          </div>
        </div>
        <div className="bg-gray-950 flex w-full h-[9%] justify-between">
          <div className="flex bg-blue-300">0</div>
          <div className="flex  justify-center items-center">
            <div className="flex mr-2 ml-2">🔀</div>
            <div className="flex mr-2 ml-2">⏮</div>
            <div className="flex mr-2 ml-2">▶</div>
            <div className="flex mr-2 ml-2">⏭</div>
            <div className="flex mr-2 ml-2">➿</div>
          </div>
          <div className="flex bg-blue-900">0</div>
        </div>
      </div>
    </div>
  )
}

const PlaylistCard = ({image, name, length}) =>{
  return (
    <div className="bg-gray-900 flex m-1 items-center h-16 hover:bg-gray-800">
      <div className="flex h-full p-2">
        <img src={image} alt="image" className="h-full w-full"></img>
      </div>
      <div className="flex flex-col">
        <div className=" flex">{name}</div>
        <div className=" flex">{length} songs</div>
      </div>
    </div>
  )
}
const SongCard = ({id, image, name, artist, time}) =>{
  return (
    <div className="bg-gray-900 flex m-1 items-center h-16 hover:bg-gray-800">
      <div className=" flex w-[5%] justify-end pr-4">{id}</div>
      <div className="flex h-full w-[5%]">
        <img src={image} alt="image" className="h-full w-full"></img>
      </div>
        <div className=" flex w-[30%] pl-2">{name}</div>
        <div className=" flex w-[50%]">{artist}</div>
        <div className=" flex w-[10%]">{time}</div>
    </div>
  )
}