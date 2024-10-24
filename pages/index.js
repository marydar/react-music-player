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
            <div className="bg-gray-900 flex w-full justify-between maryam-shadow">
              <div className="flex bg-gray-900 h-full p-3">
                {/* lib icon */}
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                    <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clip-rule="evenodd" />
                    <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
                  </svg>

                </div>
                <div className="bg-gray-900 flex text-3xl p-3 lato-bold">PLaylists</div>
              </div>
              {/* add playlist */}
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
              <div className="flex bg-gray-900 flex-col maryam-shadow">
                <div className="flex bg-gray-900 justify-start items-center ml-12 mb-2 mt-2 ">
                  {/* play top */}
                  <div className="flex text-green-500 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6" className="w-16">
                      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex text-5xl p-5 lato-black">MDAR Musics</div>
                </div>
                <div className="flex bg-gray-900 mb-4">
                  <div className="flex bg-blue-100 bg-transparent w-[5%] justify-end pr-4 lato-bold text-2xl">#</div>
                  <div className="flex bg-blue-900 bg-transparent w-[5%] lato-bold text-2xl">Title</div>
                  <div className="flex bg-blue-300 bg-transparent w-[30%]"></div>
                  <div className="flex bg-blue-500 bg-transparent w-[50%] lato-bold text-2xl">Artist</div>
                  <div className="flex bg-blue-800 bg-transparent w-[10%] lato-bold text-2xl">Duration</div>
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
          <div className="flex ">0</div>
          <div className="flex  justify-center items-center">
            {/* shuffle */}
            <div className="flex mr-2 ml-2">
              <svg fill="currentColor" className="w-6" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path><path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path></svg>
            </div>
            {/* previous */}
            <div className="flex mr-2 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6" className="w-8">
                <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
              </svg>

            </div>
            {/* play */}
            <div className="flex mr-2 ml-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6" className="w-12">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd" />
              </svg>

            </div>
            {/* next */}
            <div className="flex mr-2 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6" className="w-8">
                <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
              </svg>

            </div>
            {/* loop */}
            <div className="flex mr-2 ml-2">
              <svg fill="currentColor" className="w-6" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg>
            </div>
          </div>
          <div className="flex ">0</div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center w-[400px] h-[600px] bg-red-400 centermodal"></div> */}
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
        <div className=" flex lato-bold text-xl">{name}</div>
        <div className=" flex text-gray-400">{length} songs</div>
      </div>
    </div>
  )
}
const SongCard = ({id, image, name, artist, time}) =>{
  return (
    <div className="bg-gray-900 flex m-1 items-center h-16 hover:bg-gray-800">
      <div className=" flex w-[5%] justify-end pr-6 text-gray-400">{id}</div>
      <div className="flex h-full w-[5%]">
        <img src={image} alt="image" className="h-full w-full"></img>
      </div>
        <div className=" flex w-[30%] pl-2 text-xl lato-bold">{name}</div>
        <div className=" flex w-[50%] text-gray-400">{artist}</div>
        <div className=" flex w-[10%] text-gray-400">{time}</div>
    </div>
  )
}


