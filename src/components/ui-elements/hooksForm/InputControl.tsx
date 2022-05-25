import React, { memo } from 'react'
import { useFormContext } from 'react-hook-form'

// Atom Input with react-hooks-form
const InputMemo = ({
  type = 'text',
  inputName,
  placeholder,
  value,
  autoFocus = false,
  fullWidth = false,
  classes = [],
}: {
  type?: string
  inputName: string
  placeholder: string
  value?: string
  autoFocus?: boolean
  fullWidth?: boolean
  classes?: string[]
}): JSX.Element => {
  const className = [
    'px-2',
    'rounded-md',
    'bg-white',
    'appearance-none',
    'border-2',
    'border-gray-200',
    'focus:outline-none',
    'focus:bg-white',
    'focus:border-asset-green',
    'shadow-md',
    fullWidth && 'w-full',
    ...classes,
  ].join(' ')

  const { register } = useFormContext()
  return (
    <>
      <input
        contentEditable
        autoFocus={autoFocus}
        type={type}
        placeholder={placeholder}
        value={value}
        className={className}
        {...register(inputName)}
      />
    </>
  )
}

export const InputControl = memo(InputMemo)
