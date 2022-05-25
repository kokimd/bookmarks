import { NextPage } from 'next'
import { Link } from 'src/components/ui-elements/Link'
import { ArticleCard } from 'src/components/ui-parts/ArticleCard'
import { DefaultLayout } from 'src/components/ui-parts/layout/DefaultLayout'

const MyPage: NextPage = () => {
  // 自分が登録したブックマークを全件取得する
  // TODO: Pagination作成
  // TODO: 検索フォームを作成

  //@ts-ignore
  const dummyData = [...Array(6).keys()].map((val) => {
    return {
      id: `id ${val}`,
      url: 'https://zenn.dev/furai_mountain/scraps/225734efc9ab7d',
      title: '【React TypeScript Next.js】ログイン認証実装の際のメモ',
      categories: [
        { value: '1', label: 'JavaScript' },
        { value: '2', label: 'TypeScript' },
        { value: '3', label: 'React' },
      ],
      isRead: true,
      comprehension: 3,
      memo: 'aaaaaa ',
    }
  })
  return (
    <DefaultLayout title="マイページ">
      <div className="container">
        <div className="mt-16 flex justify-center gap-16 ">
          <Link
            href="/mypage/bookmarks"
            classes={['text-2xl text-gray-600 cursor-pointer']}
          >
            Bookmark
          </Link>
          <Link
            href="/mypage/profile"
            classes={['text-2xl text-gray-600 cursor-pointer']}
          >
            Profile
          </Link>
          <Link
            href="/mypage/settings"
            classes={['text-2xl text-gray-600 cursor-pointer']}
          >
            Setting
          </Link>
        </div>

        <div className="p-8">
          <div className="mt-20 flex flex-wrap justify-center gap-12">
            {dummyData.map((bookmark, i) => (
              <ArticleCard bookmark={bookmark} key={bookmark.id + i} />
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default MyPage
