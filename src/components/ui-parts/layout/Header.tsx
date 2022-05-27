import { FC } from 'react'
import { Link } from 'src/components/ui-elements/Link'

export const Header: FC = () => {
  return (
    <header className="w-full bg-white">
      <nav className="container mx-auto flex w-full flex-wrap items-center justify-between p-6 text-asset-green">
        <div>
          <Link href="/" classes={['text-4xl font-bold']}>
            Stock
          </Link>
        </div>
        <div className="ml-auto flex gap-8">
          <Link
            href="/login"
            classes={['text-white bg-asset-green rounded-md']}
          >
            Login
          </Link>
          <Link
            href="/mypage/create"
            classes={['text-white bg-asset-green rounded-md']}
          >
            Add New
          </Link>
          <Link
            href="/mypage/bookmarks"
            classes={['text-white bg-asset-green rounded-md']}
          >
            MyPage
          </Link>
        </div>
      </nav>
    </header>
  )
}
