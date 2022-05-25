import React from 'react'
import { useFormContext } from 'react-hook-form'
import { InputControl } from 'src/components/ui-elements/hooksForm/InputControl'
import { Typography } from 'src/components/ui-elements/Typography/Typography'

// with Error Message
export const TextInput = ({
  type,
  inputName,
  placeholder,
  classes = [],
  autoFocus = false,
}: {
  type?: string
  placeholder: string
  inputName: string
  classes?: string[]
  autoFocus?: boolean
}) => {
  const {
    formState: { errors },
  } = useFormContext()

  return (
    <div>
      <InputControl
        type={type}
        placeholder={placeholder}
        inputName={inputName}
        classes={classes}
        fullWidth
        autoFocus={autoFocus}
      />
      <Typography variant="error" classes={['block mt-2 text-left']}>
        {errors[inputName]?.message}
      </Typography>
    </div>
  )
}
