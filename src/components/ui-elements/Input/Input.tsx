import { memo } from 'react'

const InputMemo = ({
  value,
  placeholder,
  type = 'text',
  name,
  onChange,
  fullWidth = false,
  classes = [],
}: {
  value: string | number
  type?: string
  name: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  fullWidth?: boolean
  classes?: string[]
}): JSX.Element => {
  const className = [
    'py-2',
    'px-2',
    'rounded',
    'bg-gray-200',
    'appearance-none',
    'border-2',
    'border-gray-200',
    'focus:outline-none',
    'focus:bg-white',
    'focus:border-asset-green',
    fullWidth && 'w-full',
    ...classes,
  ].join(' ')

  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  )
}

export const Input = memo(InputMemo)
