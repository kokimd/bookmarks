import { NextPage } from 'next'
import { EditForm } from 'src/components/ui-parts/form/EditForm'
import { ProtectRoute } from 'src/components/ui-parts/layout/ProtectRoute'

const Create: NextPage = () => {
  return (
    <ProtectRoute title="新規作成">
      <div className="container w-full py-16">
        <EditForm />
      </div>
    </ProtectRoute>
  )
}

export default Create
