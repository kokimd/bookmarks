import { ChangeEvent, FC } from 'react'
import { Typography } from 'src/components/ui-elements/Typography/Typography'
import { PreviewSwitch } from '../PreviewSwitch'

type Props = {
  placeholder: string
  value: string
  isPreview: boolean
  setIsPreview: React.Dispatch<React.SetStateAction<boolean>>
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  classes?: string[]
}

export const TextAreWithLabel: FC<Props> = ({
  placeholder,
  value,
  onChange,
  isPreview,
  setIsPreview,
  classes = [],
}) => {
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
    <div className="relative -mb-1.5">
      <div className="flex  justify-between">
        <Typography variant="h6">メモ</Typography>
        <PreviewSwitch isPreview={isPreview} setIsPreview={setIsPreview} />
      </div>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  )
}
