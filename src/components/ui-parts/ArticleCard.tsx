import Image from 'next/image'
import { FC } from 'react'
import useStore from 'src/store'
import { Bookmark } from 'src/utils/types'
import { PencilIcon } from '../ui-elements/Icons/PencilIcon'
import { Link } from '../ui-elements/Link'
import { Typography } from '../ui-elements/Typography/Typography'

type Props = {
  bookmark: Bookmark
}

export const ArticleCard: FC<Props> = ({ bookmark }) => {
  const { title, categories, url } = bookmark
  const setSearchWord = useStore((state) => state.setSearchWord)

  return (
    <div className="relative flex w-5/12 items-center justify-between rounded-md bg-white p-8 shadow-md">
      <div className="flex w-full flex-col gap-8 pr-8">
        <div className="flex gap-4">
          {categories.map((category, i) => (
            <Typography
              onClick={() => setSearchWord(category.label)}
              key={i}
              classes={[
                'bg-asset-orange text-white font-semibold py-2 px-2 rounded-md shadow-md hover:opacity-50 cursor-pointer',
              ]}
            >
              {category.label}
            </Typography>
          ))}
        </div>
        <Link
          href={url}
          classes={[
            'text-gray-500 hover:opacity-50 hover:underline cursor-pointer',
          ]}
          target={'_blank'}
        >
          {title}
        </Link>
        <Typography
          variant={'body2'}
          classes={[
            'text-white py-1 px-2 rounded-full font-bold bg-asset-green float-right cursor-pointer hover:opacity-',
          ]}
        >
          MEMO
        </Typography>
      </div>
      <div className="flex h-28 w-36 items-center justify-center rounded-lg bg-asset-white shadow-sm">
        <Image
          src={'/assets/dogs/dog-7.png'}
          width={50}
          height={50}
          objectFit="contain"
          alt="dog"
        />
      </div>
      {/* TopPagedでは表示しない */}
      <PencilIcon />
    </div>
  )
}
