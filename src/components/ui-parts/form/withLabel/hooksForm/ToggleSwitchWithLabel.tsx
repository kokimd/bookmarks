import { useFormContext } from 'react-hook-form'
import { Typography } from 'src/components/ui-elements/Typography/Typography'

export const ToggleSwitchWithLabel = ({ inputName }: { inputName: string }) => {
  const { watch, register } = useFormContext()
  return (
    <label
      htmlFor="toggle"
      className="flex cursor-pointer flex-col  items-start"
    >
      <Typography
        variant="label"
        classes={[watch(inputName) ? 'opacity-100' : 'opacity-50']}
      >
        {watch(inputName) ? '既読' : '未読'}
      </Typography>
      <div className="relative">
        <input
          type="checkbox"
          id="toggle"
          className="sr-only mt-8"
          {...register(inputName)}
        />
        <div
          className={`mt-8 block h-8 w-14 rounded-full  ${
            watch('isRead') ? 'bg-asset-green' : 'bg-gray-300'
          } `}
        ></div>
        <div
          className={`dot transition" absolute  top-1 mt-8 h-6 w-6 rounded-full bg-white ${
            watch('isRead') ? 'right-1' : ' left-1'
          }`}
        />
      </div>
    </label>
  )
}
