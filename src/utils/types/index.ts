export type Bookmark = {
  id: string
  url: string
  title: string
  categories: { value: string; label: string }[]
  isRead: boolean
  comprehension: number
  memo: string
}

export type AuthData = {
  // username?: string
  email: string
  password: string
}
