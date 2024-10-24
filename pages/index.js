import SearchBar from "./components/searchBar";
import Center from "./components/center";
import PlayBar from "./components/playBar";
export default function Home() {
  return (
    <div className="bg-red-500">
      <div className="bg-gray-900 flex flex-col h-screen w-screen">
        <SearchBar/>
        <Center/>
        <PlayBar/>
      </div>
      {/* <div className="flex justify-center items-center w-[400px] h-[600px] bg-red-400 centermodal"></div> */}
    </div>
  )
}