import React, { ChangeEvent } from 'react'
import { Typography } from 'src/components/ui-elements/Typography/Typography'

export const TextAreWithLabel = ({
  placeholder,
  value,
  onChange,
  classes = [],
}: {
  placeholder: string
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  classes?: string[]
}): JSX.Element => {
  const className = [
    'rounded-md',
    'border-2',
    'bg-white',
    'border-gray-200',
    'shadow-md',
    'p-4',
    'focus:border-asset-green',
    'focus:bg-white',
    'focus:outline-none',
    ...classes,
  ].join(' ')

  return (
    <div className="-mb-1.5">
      <Typography variant="h6">メモ</Typography>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  )
}
