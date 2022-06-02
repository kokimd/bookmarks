import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import ReactSelect, {
  ControlProps,
  CSSObjectWithLabel,
  OptionProps,
  SingleValueProps,
} from 'react-select'

const customStyles = {
  option: (base: CSSObjectWithLabel, state: OptionProps) => ({
    ...base,
    color: state.isSelected ? 'red' : 'black',
    fontWeight: 'bold',
    cursor: 'pointer',
  }),
  control: (_: CSSObjectWithLabel, state: ControlProps) => ({
    border: state.isFocused
      ? '2px solid #00838F'
      : '2px solid rgba(229, 231, 235, 1)',
    backgroundColor: 'white',
    width: '100%',
    display: 'flex',
    padding: '10px 0',
    borderRadius: '0.375rem',
    boxShadow:
      '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  }),
  singleValue: (base: CSSObjectWithLabel, state: SingleValueProps) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'
    return { ...base, opacity, transition }
  },
  multiValue: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: '#00838F',
      padding: '2px',
      borderRadius: '0.375rem',
    }
  },
  multiValueLabel: (base: CSSObjectWithLabel) => ({
    ...base,
    color: 'white',
    fontWeight: 'bold',
  }),
  multiValueRemove: (base: CSSObjectWithLabel) => ({
    ...base,
    color: 'white',
    ':hover': {
      color: 'black',
    },
  }),
}

//TODO:APIから取得する・propsで渡す
const options = [
  { value: 1, name: 'フロントエンド' },
  { value: 2, name: 'バックエンド' },
]

const SelectControlMemo = ({
  inputName,
  classes = [],
}: {
  inputName: string
  classes?: string[]
}): JSX.Element => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={inputName}
      render={({ field: { onChange, name, value, onBlur } }) => (
        <ReactSelect
          id="select"
          instanceId="select"
          options={options}
          styles={customStyles}
          placeholder="複数選択できます。"
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          isMulti
          className={[...classes].join(' ')}
        />
      )}
    />
  )
}

export const SelectControl = memo(SelectControlMemo)
