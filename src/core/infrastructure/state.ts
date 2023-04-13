import { create } from 'zustand';

interface PodcastState {
  podcast: {
    artist: string | null,
    description: string | null,
    filteredTitles: number,
    id: string | null,
    image: any,
    loaded: boolean,
    title: string | null
  },
  setPodcast: (Id: string | null, Image: any, Title: string | null, Artist: string | null, Description: string | null) => void,
  setLoaded: (boolean: boolean) => void,
  setFilteredTitles: (Number: number) => void
}

const usePodcastStore = create<PodcastState>((set) => ({
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
    ...state.podcast,
    podcast: {
      artist: Artist,
      description: Description,
      id: Id,
      image: Image,
      title: Title
    } as PodcastState['podcast']
  })),
  setLoaded: (boolean) => set((state) => ({
    ...state.podcast,
    podcast: { loaded: boolean } as PodcastState['podcast']
  })),
  setFilteredTitles: (Number) => set((state) => ({
    ...state.podcast,
    podcast: { filteredTitles: Number } as PodcastState['podcast']
  }))
}));

export default usePodcastStore;
