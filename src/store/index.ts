import { Session } from '@supabase/supabase-js'
import { Bookmark } from 'src/utils/types'
import create from 'zustand'

type State = {
  session: Session | null
  setSession: (payload: Session | null) => void
  userId: string | undefined
  setUserId: (payload: string | undefined) => void
  standBy: boolean | null
  setStandBy: (payload: boolean) => void
  token: string
  setToken: (payload: string) => void
  searchWord: string
  setSearchWord: (payload: string) => void
  deleteSearchWord: () => void
  searchedBookmarks: Bookmark[]
  setSearchedBookmarks: (payload: Bookmark[]) => void
  deleteSearchedBookmarks: () => void
  editedBookmark: Omit<Bookmark, 'id'>
  setEditedBookmark: (payload: Omit<Bookmark, 'id'>) => void
  deleteEditedBookmark: () => void
}

const useStore = create<State>((set) => ({
  session: null,
  setSession: (payload) => set({ session: payload }),
  userId: '',
  setUserId: (payload) => set({ userId: payload }),
  standBy: false,
  setStandBy: (payload) => set({ standBy: payload }),
  token: '',
  setToken: (payload) => set({ token: payload }),
  searchWord: '',
  setSearchWord: (payload) => set({ searchWord: payload }),
  deleteSearchWord: () => set({ searchWord: '' }),
  searchedBookmarks: [],
  setSearchedBookmarks: (payload) => set({ searchedBookmarks: [...payload] }),
  deleteSearchedBookmarks: () => set({ searchedBookmarks: [] }),
  editedBookmark: {
    url: '',
    title: '',
    categories: [],
    isRead: false,
    comprehension: 0,
    memo: '',
  },
  setEditedBookmark: (payload) =>
    set({
      editedBookmark: {
        url: payload.url,
        title: payload.url,
        categories: [...payload.categories],
        isRead: payload.isRead,
        comprehension: payload.comprehension,
        memo: payload.memo,
      },
    }),
  deleteEditedBookmark: () =>
    set({
      editedBookmark: {
        url: '',
        title: '',
        categories: [],
        isRead: false,
        comprehension: 0,
        memo: '',
      },
    }),
}))

export default useStore
