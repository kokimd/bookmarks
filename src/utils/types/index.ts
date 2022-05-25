export type Bookmark = {
  id: string
  url: string
  title: string
  categories: { value: string; label: string }[]
  isRead: boolean
  comprehension: number
  memo: string
}
