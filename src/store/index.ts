import { Bookmark } from 'src/utils/types'
import create from 'zustand'

type State = {
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
  searchWord: '',
  setSearchWord: (payload) => set({ searchWord: payload }),
  deleteSearchWord: () => set({ searchWord: '' }),
  searchedBookmarks: [],
  setSearchedBookmarks: (payload) => set({ searchedBookmarks: [...payload] }),
  deleteSearchedBookmarks: () => set({ searchedBookmarks: [] }),
  editedBookmark: {
    url: '',
    title: '',
    categories: [{ value: '', label: '' }],
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
        categories: [{ value: '', label: '' }],
        isRead: false,
        comprehension: 0,
        memo: '',
      },
    }),
}))

export default useStore
