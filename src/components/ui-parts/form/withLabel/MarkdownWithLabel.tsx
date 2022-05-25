import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { Typography } from 'src/components/ui-elements/Typography/Typography'
import { CodeBlock } from 'src/components/ui-parts/form/CodeBlock'

type Props = {
  markdown: string
}

export const MarkdownWithLabel: FC<Props> = ({ markdown }) => {
  const components = {
    code: CodeBlock,
  }
  return (
    <div className="w-full">
      <Typography variant="h6">メモ</Typography>
      <ReactMarkdown
        className="prose mt-8 min-h-[12rem] min-w-full rounded border-2 border-gray-100 bg-white p-4 shadow-md focus:border-asset-green focus:bg-white focus:outline-none"
        components={components}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
