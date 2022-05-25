import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { Typography } from 'src/components/ui-elements/Typography/Typography'
import { CodeBlock } from 'src/components/ui-parts/form/CodeBlock'
import { PreviewSwitch } from '../PreviewSwitch'

type Props = {
  markdown: string
  isPreview: boolean
  setIsPreview: React.Dispatch<React.SetStateAction<boolean>>
}

export const MarkdownWithLabel: FC<Props> = ({
  markdown,
  isPreview,
  setIsPreview,
}) => {
  const components = {
    code: CodeBlock,
  }
  return (
    <div className="w-full">
      <div className="flex  justify-between">
        <Typography variant="h6">メモ</Typography>
        <PreviewSwitch isPreview={isPreview} setIsPreview={setIsPreview} />
      </div>
      <ReactMarkdown
        className="prose mt-8 min-h-[12rem] min-w-full rounded-md border-2 border-gray-200 bg-white p-4 shadow-md focus:border-asset-green focus:bg-white focus:outline-none"
        components={components}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
