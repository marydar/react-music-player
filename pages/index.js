export default function Home() {
  return (
    <div className="bg-red-500">
      <div className="bg-blue-400 flex flex-col h-screen w-screen">
        <div className="bg-gray-900 flex w-full  h-[6%] justify-between">
          <div className="flex">0</div>
            {/* searchbar */}
            <div className="flex items-center justify-center w-full ">
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
        <div className="bg-yellow-600 flex w-full flex-row h-[85%]">
          <div className="bg-blue-300 flex w-[18rem] h-full flex-col">
            <div className="bg-green-400 flex w-full justify-between">
              <div className="flex bg-red-500 h-full">
                <div className="bg-blue-200 flex">🤍</div>
                <div className="bg-blue-900 flex">playlists</div>
              </div>
              <div className="flex bg-red-300 h-full">➕</div>
            </div>
            <div className="bg-green-900 flex h-full flex-col overflow-scroll bg-scroll " style={{scrollbarWidth: "none"}}>
              {Array.from({length: 20}).map((_,index)=>{
                return <PlaylistCard key={index} name={`playlist${index+1}`} image="https://picsum.photos/100/100" length={Math.floor(Math.random() * 100)}/>
              })}
            </div>
          </div>
          <div className="bg-blue-400 flex flex-grow  h-full flex-col">
              <div className="flex bg-red-500 flex-col">
                <div className="flex bg-red-700">
                  <div className="flex bg-blue-900">❤</div>
                  <div className="flex bg-blue-950">playlistname</div>
                </div>
                <div className="flex bg-red-900">
                  <div className="flex bg-blue-100 bg-transparent w-[5%] justify-end pr-4">#</div>
                  <div className="flex bg-blue-900 bg-transparent w-[5%]">title</div>
                  <div className="flex bg-blue-300 bg-transparent w-[30%]"></div>
                  <div className="flex bg-blue-500 bg-transparent w-[50%]">artist</div>
                  <div className="flex bg-blue-800 bg-transparent w-[10%]">time</div>
                </div>
              </div>
              <div className="flex bg-red-950 flex-grow flex-col overflow-scroll bg-scroll " style={{scrollbarWidth: "none"}}>
                {Array.from({length: 20}).map((_,index)=>{
                  return <SongCard id={index} name={`song${index+1}`} image="https://picsum.photos/100/100" artist={`artist${index+1}`} time={`${Math.floor(Math.random() * 100)}min`}/>
                })}
              </div>
          </div>
        </div>
        <div className="bg-gray-900 flex w-full h-[9%] justify-between">
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
    <div className="bg-red-700 flex m-2 items-center h-16">
      <div className="flex h-full p-2">
        <img src={image} alt="image" className="h-full w-full"></img>
      </div>
      <div className="flex flex-col">
        <div className="bg-yellow-400 flex">{name}</div>
        <div className="bg-yellow-600 flex">{length} songs</div>
      </div>
    </div>
  )
}
const SongCard = ({id, image, name, artist, time}) =>{
  return (
    <div className="bg-red-700 flex m-1 items-center h-16">
      <div className="bg-black bg-transparent flex w-[5%] justify-end pr-4">{id}</div>
      <div className="flex h-full w-[5%]">
        <img src={image} alt="image" className="h-full w-full"></img>
      </div>
        <div className="bg-yellow-400 opac bg-transparent flex w-[30%] pl-2">{name}</div>
        <div className="bg-yellow-600 opac bg-transparent flex w-[50%]">{artist}</div>
        <div className="bg-yellow-900 opac bg-transparent flex w-[10%]">{time}</div>
    </div>
  )
}