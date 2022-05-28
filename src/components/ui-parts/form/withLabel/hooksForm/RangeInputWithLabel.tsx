import { memo } from 'react'
import { RangeInputControl } from 'src/components/ui-elements/hooksForm/RangeInputControl'
import { Typography } from 'src/components/ui-elements/Typography/Typography'

const RangeInputWithLabelMemo = ({
  label,
  inputName,
  min,
  max,
  step,
}: {
  value?: string | number
  label: string
  inputName: string
  min: number
  max: number
  step: number
}) => {
  return (
    <div className="flex w-1/2 flex-col gap-8">
      <Typography variant="h6">{label}</Typography>
      <div className="flex justify-between">
        <label>0</label>
        <label>1</label>
        <label>2</label>
        <label>3</label>
        <label className="mr-1">4</label>
      </div>
      <RangeInputControl
        min={min}
        max={max}
        step={step}
        inputName={inputName}
      />
    </div>
  )
}

export const RangeInputWithLabel = memo(RangeInputWithLabelMemo)
