import { create } from "zustand";

interface SingleTrack {
    name: string;
    duration: string;
    url: string;
    imageUrl: string;
}

interface TrackState {
    currentTrack: SingleTrack;
    setCurrentTrack: ({ name, duration, url, imageUrl }: { name: string, duration: string, url: string, imageUrl: string }) => void;
    reset: () => void;
}

export const useTrack = create<TrackState>((set) => ({
    currentTrack: { name: '', duration: '', url: '', imageUrl: '' },
    setCurrentTrack: ({ name, duration, url, imageUrl }) => set((state) => ({
        currentTrack: {
            name,
            duration,
            url,
            imageUrl
        }
    })),
    reset: () => set({
        currentTrack: {
            name: '',
            duration: '',
            url: '',
            imageUrl: ''

        }
    })
}))