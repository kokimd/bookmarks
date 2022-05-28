import { useMutation } from 'react-query'
import { supabase } from 'src/utils/supabase'
import type { ResponseError } from 'superagent'
import { AuthData } from 'src/utils/types'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema } from 'src/utils/validationSchema'

export const useMutateAuth = () => {
  const [isLogin, setIsLogin] = useState(true)

  // 新規登録
  const registerMutate = useMutation(
    async (payload: AuthData) => {
      const { email, password } = payload
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) throw new Error(`${error.status}「${error.message}」`)
    },
    {
      onError: (err: ResponseError) => {
        alert(err.message)
      },
    },
  )

  // ログイン
  const loginMutate = useMutation(
    async (payload: AuthData) => {
      const { email, password } = payload
      const { error } = await supabase.auth.signIn({ email, password })
      if (error) throw new Error(`${error.status}「${error.message}」`)
    },
    {
      onError: (err: ResponseError) => {
        alert(err.message)
      },
    },
  )

  // ログアウト
  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw new Error(error.message)
  }

  const defaultValues = {
    email: '',
    password: '',
  }

  const methods = useForm<AuthData>({
    defaultValues,
    resolver: yupResolver(LoginSchema),
  })

  const authSubmit = (payload: AuthData) => {
    if (isLogin) {
      loginMutate.mutate(payload)
    } else {
      registerMutate.mutate(payload)
    }
  }

  return {
    isLogin,
    setIsLogin,
    methods,
    authSubmit,
    registerMutate,
    loginMutate,
    logout,
  }
}
