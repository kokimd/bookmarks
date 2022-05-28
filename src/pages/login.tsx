import { NextPage } from 'next'
import { LoginForm } from 'src/components/ui-parts/form/LoginForm'
import { DefaultLayout } from 'src/components/ui-parts/layout/DefaultLayout'

const Login: NextPage = () => {
  return (
    <DefaultLayout title="ログイン">
      <LoginForm />
    </DefaultLayout>
  )
}

export default Login
