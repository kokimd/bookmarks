import { ChangeEvent, FC } from 'react'
import { useWordSearch } from 'src/hooks/useWordSearch'
import { SearchIcon } from 'src/components/ui-elements/Icons/SearchIcon'

export const WordSearchForm: FC = () => {
  const { submitWordSearch, setSearchWord, searchWord, wordSearch } =
    useWordSearch()

  return (
    <form
      onSubmit={submitWordSearch}
      className="relative mx-auto mt-12 w-10/12"
    >
      <input
        className="h-16 w-full rounded-full border-2 border-gray-200  bg-white bg-opacity-70 px-6 shadow-lg focus:border-asset-green focus:bg-white focus:outline-none"
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchWord(e.target.value)
        }
        value={searchWord}
        placeholder="キーワードを入力..."
      />
      <SearchIcon onClick={wordSearch} />
    </form>
  )
}
