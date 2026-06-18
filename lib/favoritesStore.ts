import { create } from "zustand"
import { persist } from "zustand/middleware"

type FavoritesStore = {
  favorites: string[]
  toggleFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (id) => {
        const { favorites } = get()
        set({
          favorites: favorites.includes(id)
            ? favorites.filter((coinId) => coinId !== id)
            : [...favorites, id],
        })
      },

      isFavorite: (id) => get().favorites.includes(id),
    }),
    {
      name: "favorites",
    }
  )
)