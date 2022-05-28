import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import { SelectControl } from 'src/components/ui-elements/hooksForm/SelectControl'
import { Typography } from 'src/components/ui-elements/Typography/Typography'

const SelectWithLabelMemo = ({
  label,
  inputName,
}: {
  label: string
  inputName: string
}) => {
  const {
    formState: { errors },
  } = useFormContext()

  return (
    <div>
      <Typography variant="h6">{label}</Typography>
      <SelectControl inputName={inputName} classes={['mt-8']} />
      <Typography variant="error" classes={['block mt-2 text-left']}>
        {errors[inputName]?.message}
      </Typography>
    </div>
  )
}

export const SelectWithLabel = memo(SelectWithLabelMemo)
