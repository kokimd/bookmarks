import { FC, memo } from 'react'
import { SearchIcon as Search } from '@heroicons/react/outline'

type Props = {
  onClick?: () => void | undefined
}
const SearchIconMemo: FC<Props> = ({ onClick }) => {
  return (
    <div
      className="absolute top-4 right-6 h-7 w-7 cursor-pointer hover:opacity-50"
      onClick={onClick}
    >
      <Search className="text-gray-500" />
    </div>
  )
}

export const SearchIcon = memo(SearchIconMemo)
