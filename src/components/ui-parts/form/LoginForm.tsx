import { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema } from 'src/utils/validationSchema'
import { Button } from '../../ui-elements/button/Button'
import { Typography } from '../../ui-elements/Typography/Typography'
import { TextInput } from './TextInput'

type LoginData = {
  email: string
  password: string
}

export const LoginForm: FC = () => {
  const [isLogin, setIsLogin] = useState(true)

  const defaultValues = {
    email: '',
    password: '',
  }

  const methods = useForm<LoginData>({
    defaultValues,
    resolver: yupResolver(LoginSchema),
  })

  return (
    <div className="mx-auto my-12 w-full rounded-lg bg-white p-8 text-center shadow-md md:w-1/2 lg:w-1/4">
      <Typography variant={'h3'} classes={['text-asset-green']}>
        {isLogin ? 'Login' : 'Register'}
      </Typography>
      <FormProvider {...methods}>
        <form
          className="mt-16 flex flex-col gap-8"
          onSubmit={methods.handleSubmit((data) => console.log(data))}
        >
          <TextInput
            type="email"
            placeholder="Email"
            inputName={'email'}
            classes={['py-2']}
          />
          <TextInput
            type="password"
            placeholder="Password"
            inputName={'password'}
            classes={['py-2']}
          />
          <Button color={'primary'}>{isLogin ? 'Login' : 'Register'}</Button>
          <div className="mt-5 flex flex-col items-center">
            <Typography
              classes={['text-sm opacity-50 cursor-pointer']}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? '新規登録' : 'ログイン'}はこちら
            </Typography>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
