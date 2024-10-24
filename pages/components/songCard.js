
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

export default SongCard;