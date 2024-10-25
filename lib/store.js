import { create } from 'zustand'
import { allSongs } from "@/lib/data";
const useMusicStore = create((set) => ({
    selectedPlaylist: allSongs,
    selectedSong: allSongs.dll.head.next.data,
    setSelectedPlaylist: (playlist) => set({ selectedPlaylist: playlist}),
    setSelectedSong: (song) => set({ selectedSong: song}),
    playFunction: null,
    setPlayFunction: (playFunction) => set({ playFunction: playFunction}),
    isPlaying: false,
    setIsPlaying: (isPlaying) => set({isPlaying: isPlaying}),
    toggleIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
    originalPlaylist: allSongs,
    setOriginalPlaylist: (playlist) => set({ originalPlaylist: playlist}),
    isLooping: false,
    toggleIsLooping: () => set((state) => ({ isLooping: !state.isLooping })),
    isShuffling: false,
    toggleIsShuffling: () => set((state) => ({ isShuffling: !state.isShuffling })),
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
}))
export default useMusicStore;