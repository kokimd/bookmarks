import * as yup from 'yup'

// 共通
const REQUIRED = 'は必須項目です。'
const MIN = '以上で入力してください。'
const MAX = '以内で入力してください。'
const NUMBER = '半角数字で入力してください。'
const KANA = 'カタカナで入力してください。'

// 個別
const EMAIL = '正しいメールアドレスを入力してください。'
const URL = '正しいURLを入力してください。'
const PASSWORD_MIN = '最低８文字入力してください。'
const PASSWORD_LOWER = '英小文字を含める必要があります。'
const PASSWORD_NUMBER = '数字を含める必要があります。'
const PASSWORD = 'パスワードは半角英数字で入力してください。'

// ログイン
export const LoginSchema = yup.object().shape({
  email: yup //
    .string()
    .email(EMAIL)
    .required(`メールアドレス${REQUIRED}`),
  password: yup //
    .string()
    .min(8, PASSWORD_MIN)
    .max(255, `255文字${MAX}`)
    .matches(/(?=.*[a-z])/, PASSWORD_LOWER) // 英字を含んでいるか
    .matches(/(?=.*[0-9])/, PASSWORD_NUMBER) // 数字を含んでいるか
    .matches(/^[0-9a-zA-Z]+$/, PASSWORD) // 半角英数字チェック(空白文字NG)
    .required(`パスワード${REQUIRED}`),
})

export const EditSchema = yup.object().shape({
  url: yup.string().required(`URL${REQUIRED}`).url(URL),
  title: yup.string().required(`タイトル${REQUIRED}`),
  category: yup.array().min(1, `カテゴリー${REQUIRED}`),
})
