import { memo } from 'react'
import { useFormContext } from 'react-hook-form'

const RangeInputMemo = ({
  inputName,
  min,
  max,
  step,
  classes = [],
}: {
  inputName: string
  min: number
  max: number
  step: number
  classes?: string[]
}): JSX.Element => {
  const className = [
    'range-lg',
    'h-2',
    'cursor-pointer',
    'appearance-none',
    'rounded',
    'bg-gray-200',
    'accent-asset-green',
    'w-full',
    ...classes,
  ].join(' ')

  const { register } = useFormContext()

  return (
    <input
      type="range"
      {...register(inputName, { required: 'aaa' })}
      className={className}
      min={min}
      max={max}
      step={step}
    />
  )
}
export const RangeInputControl = memo(RangeInputMemo)
