import { NextPage } from 'next'
import { useValidateSession } from 'src/components/hooks/useValidateSession'
import { LoginForm } from 'src/components/ui-parts/form/LoginForm'
import { DefaultLayout } from 'src/components/ui-parts/layout/DefaultLayout'

const Login: NextPage = () => {
  useValidateSession()

  return (
    <DefaultLayout title="ログイン">
      <LoginForm />
    </DefaultLayout>
  )
}

export default Login
