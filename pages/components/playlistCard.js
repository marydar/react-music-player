const PlaylistCard = ({image, name, length}) =>{
    return (
      <div className="bg-gray-900 flex m-1 items-center h-16 hover:bg-gray-800">
        <div className="flex h-full p-2">
          <img src={image} alt="image" className="h-full w-full rounded-full overflow-hidden"></img>
        </div>
        <div className="flex flex-col">
          <div className=" flex lato-bold text-xl">{name}</div>
          <div className=" flex text-gray-400">{length} songs</div>
        </div>
      </div>
    )
}
export default PlaylistCard;