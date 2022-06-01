import * as yup from 'yup'

const REQUIRED = 'は必須項目です。'
const MAX = '以内で入力してください。'

const EMAIL = '正しいメールアドレスを入力してください。'
const URL = '正しいURLを入力してください。'
const PASSWORD_MIN = '最低８文字入力してください。'
const PASSWORD_LOWER = '英小文字を含める必要があります。'
const PASSWORD_NUMBER = '数字を含める必要があります。'
const PASSWORD = 'パスワードは半角英数字で入力してください。'

// ログイン
export const LoginSchema = yup.object().shape({
  email: yup.string().email(EMAIL).required(`メールアドレス${REQUIRED}`),
  password: yup
    .string()
    .min(8, PASSWORD_MIN)
    .max(255, `255文字${MAX}`)
    .matches(/(?=.*[a-z])/, PASSWORD_LOWER) // 英字
    .matches(/^[0-9a-zA-Z]+$/, PASSWORD) // 半角英数字
    .required(`パスワード${REQUIRED}`),
})

// 新規登録
export const RegisterSchema = yup.object().shape({
  username: yup.string().required(`ユーザー名${REQUIRED}`),
  email: yup.string().email(EMAIL).required(`メールアドレス${REQUIRED}`),
  password: yup
    .string()
    .min(8, PASSWORD_MIN)
    .max(255, `255文字${MAX}`)
    .matches(/(?=.*[a-z])/, PASSWORD_LOWER) // 英字
    .matches(/^[0-9a-zA-Z]+$/, PASSWORD) // 半角英数字
    .required(`パスワード${REQUIRED}`),
})

export const EditSchema = yup.object().shape({
  url: yup.string().required(`URL${REQUIRED}`).url(URL),
  title: yup.string().required(`タイトル${REQUIRED}`),
  categories: yup.array().min(1, `カテゴリー${REQUIRED}`),
})
