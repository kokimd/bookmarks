import { NextPage } from 'next'
import { Link } from 'src/components/ui-elements/Link'
import { ArticleCard } from 'src/components/ui-parts/ArticleCard'
import { DefaultLayout } from 'src/components/ui-parts/layout/DefaultLayout'

const MyPage: NextPage = () => {
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
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default MyPage
