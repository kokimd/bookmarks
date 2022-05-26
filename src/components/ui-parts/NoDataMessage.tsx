import Image from 'next/image'
import { FC } from 'react'
import { Typography } from '../ui-elements/Typography/Typography'

type Props = {
  searchedWord: string
}
export const NoDataMessage: FC<Props> = ({ searchedWord }) => {
  return (
    <div className=" flex w-10/12 flex-col items-center">
      <Typography variant={'h4'} classes={['opacity-75']}>
        「{searchedWord}」の検索結果が見つかりませんでした。
      </Typography>
      <div className="mt-16">
        <Image
          src={'/assets/dogs/no-data-dog.png'}
          width={300}
          height={300}
          objectFit="contain"
          alt="No-data"
        />
      </div>
    </div>
  )
}
