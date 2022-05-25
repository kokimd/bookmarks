import Image from 'next/image'
import React, { FC } from 'react'
import { PencilIcon } from '../ui-elements/Icons/PencilIcon'
import { Typography } from '../ui-elements/Typography/Typography'

export const ArticleCard: FC = () => {
  return (
    <div className="relative flex w-2/5 cursor-pointer items-center justify-between rounded-md bg-white p-8 shadow-md">
      <div className="flex flex-col gap-8">
        <div className="flex gap-4">
          <Typography
            classes={[
              'bg-asset-orange text-white font-semibold py-2 px-2 rounded-md',
            ]}
          >
            TypeScript
          </Typography>
          <Typography
            classes={[
              'bg-asset-orange text-white font-semibold py-2 px-2 rounded-md',
            ]}
          >
            TypeScript
          </Typography>
        </div>
        <Typography classes={['text-gray-500']}>
          TypeScriptの初心者向け記事
        </Typography>
      </div>
      <div className="flex h-28 w-28 items-center justify-center rounded-lg bg-asset-white shadow-sm">
        <Image
          src={'/assets/dogs/dog-7.png'}
          width={50}
          height={50}
          objectFit="contain"
          alt="dog"
        />
      </div>
      <PencilIcon />
    </div>
  )
}
