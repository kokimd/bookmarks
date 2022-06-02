import { useQuery } from 'react-query'
import { API } from 'src/utils/network/config'
import { fetcherGet } from 'src/utils/network/fetcher'
import { Bookmark } from 'src/utils/types'

export const useQueryBookmarks = () => {
  // 全件のブックマークを取得する処理
  // const data = [
  //   {
  //     id: `id1`,
  //     url: '1',
  //     title: '【React TypeScript Next.js】ログイン認証実装の際のメモ',
  //     categories: [
  //       { value: '1', label: 'JavaScript' },
  //       { value: '2', label: 'TypeScript' },
  //     ],
  //     isRead: true,
  //     comprehension: 3,
  //     memo: 'aaaaaa ',
  //   },
  //   {
  //     id: `id2`,
  //     url: '2',
  //     title: '3',
  //     categories: [{ value: '1', label: 'JavaScript' }],
  //     isRead: true,
  //     comprehension: 3,
  //     memo: 'aaaaaa ',
  //   },
  //   {
  //     id: `id3`,
  //     url: '3',
  //     title: '3',
  //     categories: [{ value: '3', label: 'React' }],
  //     isRead: true,
  //     comprehension: 3,
  //     memo: 'aaaaaa ',
  //   },
  //   {
  //     id: `id4`,
  //     url: '4',
  //     title: '4',
  //     categories: [{ value: '1', label: 'JavaScript' }],
  //     isRead: true,
  //     comprehension: 3,
  //     memo: 'aaaaaa ',
  //   },
  //   {
  //     id: `id5`,
  //     url: '5',
  //     title: '5',
  //     categories: [
  //       { value: '1', label: 'JavaScript' },
  //       { value: '2', label: 'TypeScript' },
  //       { value: '3', label: 'React' },
  //     ],
  //     isRead: true,
  //     comprehension: 3,
  //     memo: 'aaaaaa ',
  //   },
  // ]

  const getAllBookmarks = async (): Promise<Bookmark[]> => {
    const { data } = await fetcherGet<Bookmark[]>('/bookmarks')
    return data
  }

  return useQuery<Bookmark[], Error>({
    queryKey: ['bookmarks'],
    queryFn: getAllBookmarks,
    staleTime: 5000,
  })
}
