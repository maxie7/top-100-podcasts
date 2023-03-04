import { create } from 'zustand';

const usePodcastStore = create((set) => ({
  podcast: {
    artist: null,
    description: null,
    filteredTitles: 100,
    id: null,
    image: null,
    loaded: false,
    title: null
  },
  setPodcast: (Id, Image, Title, Artist, Description) => set((state) => ({
    ...state,
    podcast: {
      artist: Artist,
      description: Description,
      id: Id,
      image: Image,
      title: Title
    }
  })),
  setLoaded: (boolean) => set((state) => ({
    ...state,
    podcast: { loaded: boolean }
  })),
  setFilteredTitles: (Number) => set((state) => ({
    ...state,
    podcast: { filteredTitles: Number }
  }))
}));

export default usePodcastStore;
