import { NextPage } from 'next'
import { useWordSearch } from 'src/components/hooks/useWordSearch'
import { Link } from 'src/components/ui-elements/Link'
import { ArticleCard } from 'src/components/ui-parts/ArticleCard'
import { WordSearchForm } from 'src/components/ui-parts/form/WordSearchForm'
import { DefaultLayout } from 'src/components/ui-parts/layout/DefaultLayout'
import { NoDataMessage } from 'src/components/ui-parts/NoDataMessage'

const MyPage: NextPage = () => {
  // 自分が登録したブックマークを全件取得する
  // TODO: Pagination作成
  // TODO: 検索フォームを作成

  const { searchedBookmarks } = useWordSearch()

  return (
    <DefaultLayout title="マイページ">
      <div className="container">
        <div className="mt-12 flex justify-center gap-16 ">
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
        <WordSearchForm />
        {/* <LoginForm /> */}
        <div className="mt-16 flex flex-wrap justify-center gap-12">
          {searchedBookmarks.length > 0 ? (
            searchedBookmarks?.map((bookmark, i) => (
              <ArticleCard bookmark={bookmark} key={bookmark.id + i} />
            ))
          ) : (
            <NoDataMessage />
          )}
        </div>
      </div>
    </DefaultLayout>
  )
}

export default MyPage
