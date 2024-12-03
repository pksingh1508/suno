import { create } from 'zustand'

interface SongCategoryStore {
    category: string;
    setCategory: (category: string) => void;
}

export const useSongCategoryStore = create<SongCategoryStore>((set) => ({
    category: 'Hindi',
    setCategory: (newCategory: string) => set({ category: newCategory })
}))