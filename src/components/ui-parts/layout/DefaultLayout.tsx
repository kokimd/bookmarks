import Head from 'next/head'
import { FC } from 'react'
import { Header } from './Header'

type Props = {
  title: string
  children: React.ReactNode
}

export const DefaultLayout: FC<Props> = ({ title, children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-noto">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="flex w-screen flex-1 flex-col items-center justify-center bg-asset-beige">
        {children}
      </main>
    </div>
  )
}
