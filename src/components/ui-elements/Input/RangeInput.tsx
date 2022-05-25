import { memo } from 'react'

const RangeInputMemo = ({
  value,
  name,
  onChange,
  min,
  max,
  step,
  classes = [],
}: {
  value: string | number
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
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

  return (
    <div>
      <input
        type="range"
        className={className}
        value={value}
        name={name}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      />
    </div>
  )
}

export const RangeInput = memo(RangeInputMemo)
