import { NextPage } from 'next'
import { DefaultLayout } from 'src/components/ui-parts/layout/DefaultLayout'
import { EditForm } from 'src/components/ui-parts/form/EditForm'

const Create: NextPage = () => {
  return (
    <DefaultLayout title="新規作成">
      <div className="container w-full py-16">
        <EditForm />
      </div>
    </DefaultLayout>
  )
}

export default Create
