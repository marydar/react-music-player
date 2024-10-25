import { create } from 'zustand'
import { allSongs } from "@/lib/data";
const useMusicStore = create((set) => ({
    selectedPlaylist: allSongs,
    selectedSong: allSongs.dll.head.next.data,
    setSelectedPlaylist: (playlist) => set({ selectedPlaylist: playlist}),
    setSelectedSong: (song) => set({ selectedSong: song}),
    playFunction: null,
    setPlayFunction: (playFunction) => set({ playFunction: playFunction}),
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
}))
export default useMusicStore;