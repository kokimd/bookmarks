import { FC } from 'react'

type Props = {
  isPreview: boolean
  setIsPreview: React.Dispatch<React.SetStateAction<boolean>>
}

export const PreviewSwitch: FC<Props> = ({ isPreview, setIsPreview }) => {
  return (
    <div className="flex">
      <div
        onClick={() => setIsPreview(false)}
        className={`p-1rounded flex w-20 cursor-pointer items-center justify-center rounded font-semibold text-white  ${
          isPreview ? 'bg-gray-200' : 'bg-asset-green'
        }`}
      >
        Write
      </div>
      <div
        onClick={() => setIsPreview(true)}
        className={`ml-1 flex w-20 cursor-pointer items-center justify-center rounded p-1 text-center font-semibold  text-white  ${
          isPreview ? 'bg-asset-orange' : 'bg-gray-200'
        }`}
      >
        Preview
      </div>
    </div>
  )
}
