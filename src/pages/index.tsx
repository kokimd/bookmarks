import type { NextPage } from 'next'
import { DefaultLayout } from 'src/components/ui-parts/layout/DefaultLayout'
import { ArticleCard } from 'src/components/ui-parts/ArticleCard'
import { LoginForm } from 'src/components/ui-parts/form/LoginForm'

const Home: NextPage = () => {
  return (
    <DefaultLayout title="Home">
      <div className="container">
        <LoginForm />
        {/* <div className="mt-16 flex flex-wrap justify-center gap-12">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div> */}
      </div>
    </DefaultLayout>
  )
}

export default Home
