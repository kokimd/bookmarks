import type { NextPage } from 'next'
import { DefaultLayout } from 'src/components/ui-parts/layout/DefaultLayout'
import { ArticleCard } from 'src/components/ui-parts/ArticleCard'
import { NoDataMessage } from 'src/components/ui-parts/NoDataMessage'
import { WordSearchForm } from 'src/components/ui-parts/form/WordSearchForm'
import { useWordSearch } from 'src/hooks/useWordSearch'

const Home: NextPage = () => {
  const { searchedBookmarks } = useWordSearch()

  return (
    <DefaultLayout title="Home">
      <div className="container">
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

export default Home
