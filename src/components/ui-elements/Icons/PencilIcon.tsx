import { memo } from 'react'
import { PencilIcon as Pencil } from '@heroicons/react/outline'

const PencilIconMemo = () => {
  return (
    <div className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full border bg-asset-blue p-2 hover:opacity-50">
      <Pencil className="text-white" />
    </div>
  )
}

export const PencilIcon = memo(PencilIconMemo)
