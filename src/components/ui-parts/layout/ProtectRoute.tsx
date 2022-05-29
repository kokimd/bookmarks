import React, { FC, ReactNode, useEffect } from 'react'
import { useValidateSession } from 'src/hooks/useValidateSession'
import { DefaultLayout } from 'src/components/ui-parts/layout/DefaultLayout'

type Props = {
  children: ReactNode
  title: string
}

export const ProtectRoute: FC<Props> = ({ children, title }) => {
  const { pushToLogin } = useValidateSession()
  useEffect(() => {
    pushToLogin()
  }, [])

  return <DefaultLayout title={title}>{children}</DefaultLayout>
}
