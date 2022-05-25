import type { NextPage } from 'next'
import { DefaultLayout } from 'src/components/ui-parts/layout/DefaultLayout'
import { ArticleCard } from 'src/components/ui-parts/ArticleCard'
import { LoginForm } from 'src/components/ui-parts/form/LoginForm'

const Home: NextPage = () => {
  // TODO: 検索フォームを作成
  // 降順で最大6件のブックマークを取得する(or Pagination)
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
    <DefaultLayout title="Home">
      <div className="container">
        {/* <LoginForm /> */}
        <div className="mt-16 flex flex-wrap justify-center gap-12">
          {dummyData?.map((bookmark, i) => (
            <ArticleCard bookmark={bookmark} key={bookmark.id + i} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Home
