import { useMutation, useQueryClient } from 'react-query'
import { fetcherPost } from 'src/utils/network/fetcher'
import { Bookmark } from 'src/utils/types'
import { useSession } from '../auth/useSession'

export const useMutateBookmarks = () => {
  const { token } = useSession()
  const queryClient = useQueryClient()
  const getCurrentQueryData = () => {
    return queryClient.getQueryData<Bookmark[]>(['bookmarks'])
  }
  const createBookmarkMutate = useMutation(
    async (bookmark: Omit<Bookmark, 'id'>) => {
      const { data, err } = await fetcherPost<Bookmark>(
        '/bookmarks',
        bookmark,
        token,
      )
      if (err) throw new Error(err.message)

      return data
    },
    {
      onSuccess: (res) => {
        const previousBookmarks = getCurrentQueryData()
        if (previousBookmarks) {
          queryClient.setQueryData(['bookmarks'], [...previousBookmarks, res])
        }
      },
      onError: (err) => {
        console.log(err)
      },
    },
  )

  return { createBookmarkMutate }
}
