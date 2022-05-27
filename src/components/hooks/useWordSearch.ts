import { FormEvent, useEffect, useState } from 'react'
import useStore from 'src/store'
import { useQueryBookmarks } from './reactQuery/useQueryBookmarks'

export const useWordSearch = () => {
  const { data: bookmarks } = useQueryBookmarks()
  const searchedBookmarks = useStore((state) => state.searchedBookmarks)
  const setSearchedBookmarks = useStore((state) => state.setSearchedBookmarks)
  const searchWord = useStore((state) => state.searchWord)
  const setSearchWord = useStore((state) => state.setSearchWord)
  const deleteSearchWord = useStore((state) => state.deleteSearchWord)

  useEffect(() => {
    setSearchedBookmarks(bookmarks)

    return () => deleteSearchWord()
  }, [])

  // 検索処理
  const wordSearch = () => {
    // タイトルから検索
    const titleFilteredList = bookmarks.filter((data) =>
      data.title.toUpperCase().includes(searchWord.toUpperCase()),
    )

    // カテゴリから検索
    const categoryFilteredList = bookmarks.filter((data) =>
      data.categories.some(
        (category) => category.label.toUpperCase() === searchWord.toUpperCase(),
      ),
    )
    // マージし、重複を取り除く
    const mergeList = [...titleFilteredList, ...categoryFilteredList]
    const resultList = Array.from(
      mergeList
        .reduce((map, current) => map.set(current.id, current), new Map())
        .values(),
    )
    setSearchedBookmarks(resultList)
  }

  // onSubmitでの検索処理
  const submitWordSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    wordSearch()
  }

  return {
    submitWordSearch,
    wordSearch,
    searchWord,
    setSearchWord,
    searchedBookmarks,
  }
}
