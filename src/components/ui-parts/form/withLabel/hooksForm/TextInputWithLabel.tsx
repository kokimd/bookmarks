import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputControl } from 'src/components/ui-elements/hooksForm/InputControl'
import { Typography } from 'src/components/ui-elements/Typography/Typography'

const TextInputWithLabelMemo = ({
  label,
  inputName,
  placeholder,
  classes = [],
  autoFocus = false,
}: {
  label: string
  inputName: string
  placeholder: string
  classes?: string[]
  autoFocus?: boolean
}) => {
  const {
    formState: { errors },
  } = useFormContext()

  return (
    <div>
      <Typography variant="h6">{label}</Typography>
      <InputControl
        autoFocus={autoFocus}
        placeholder={placeholder}
        inputName={inputName}
        classes={classes}
        fullWidth
      />
      <Typography variant="error" classes={['block mt-2 text-left']}>
        {errors[inputName]?.message}
      </Typography>
    </div>
  )
}

export const TextInputWithLabel = memo(TextInputWithLabelMemo)
