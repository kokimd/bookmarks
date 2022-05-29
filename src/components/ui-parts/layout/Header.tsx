import { FC } from 'react'
import { useMutateAuth } from 'src/hooks/reactQuery/useMutateAuth'
import { Button } from 'src/components/ui-elements/button/Button'
import { Link } from 'src/components/ui-elements/Link'
import useStore from 'src/store'

export const Header: FC = () => {
  const { logout } = useMutateAuth()
  const session = useStore((state) => state.session)

  return (
    <header className="w-full bg-white">
      <nav className="container mx-auto flex w-full flex-wrap items-center justify-between p-6 text-asset-green">
        <div>
          <Link href="/" classes={['text-4xl font-bold']}>
            Stock
          </Link>
        </div>
        <div className="ml-auto flex gap-8">
          {!session && (
            <Link
              href="/login"
              classes={['text-white bg-asset-green rounded-md']}
            >
              Log in
            </Link>
          )}
          {session && (
            <>
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
              <Button color={'danger'} onClick={logout}>
                Logout
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
