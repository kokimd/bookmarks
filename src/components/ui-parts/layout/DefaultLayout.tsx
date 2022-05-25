import Head from 'next/head'
import { Header } from './Header'

type Props = {
  title: string
  children: React.ReactNode
}

export const DefaultLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-noto">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="bg-asset-beige flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
    </div>
  )
}
