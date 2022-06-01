import { useMutation } from 'react-query'
import { supabase } from 'src/utils/supabase'
import type { ResponseError } from 'superagent'
import { AuthData } from 'src/utils/types'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema, RegisterSchema } from 'src/utils/validationSchema'
import { useRouter } from 'next/router'
import { useAuth } from 'src/hooks/auth/useAuth'

export const useMutateAuth = () => {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const { register } = useAuth()

  // 新規登録
  const registerMutate = useMutation(
    async (payload: AuthData) => {
      const { email, password, username } = payload
      const { error, user } = await supabase.auth.signUp({
        email,
        password,
      })
      if (error) throw new Error(`${error.status}「${error.message}」`)
      if (user) register(user.id, username)
    },
    {
      onError: (err: ResponseError) => {
        alert(err.message)
      },
      onSuccess: () => {
        router.push('/')
      },
    },
  )

  // ログイン
  const loginMutate = useMutation(
    async (payload: AuthData) => {
      const { email, password } = payload
      const { error, user } = await supabase.auth.signIn({ email, password })
      console.log(user)

      if (error) throw new Error(`${error.status}「${error.message}」`)
    },
    {
      onError: (err: ResponseError) => {
        alert(err.message)
      },
      onSuccess: () => {
        router.push('/')
      },
    },
  )

  // ログアウト
  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw new Error(error.message)
    router.push('/')
  }

  const defaultValues = {
    email: '',
    password: '',
  }

  const methods = useForm<AuthData>({
    defaultValues,
    resolver: yupResolver(isLogin ? LoginSchema : RegisterSchema),
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
