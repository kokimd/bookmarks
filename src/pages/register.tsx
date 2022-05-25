import { NextPage } from 'next'
import { ChangeEvent, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { EditSchema } from 'src/utils/validationSchema'
import { Button } from 'src/components/ui-elements/button/Button'
import { RangeInputWithLabel } from 'src/components/ui-parts/form/withLabel/hooksForm/RangeInputWithLabel'
import { TextAreWithLabel } from 'src/components/ui-parts/form/withLabel/TextAreWithLabel'
import { TextInputWithLabel } from 'src/components/ui-parts/form/withLabel/hooksForm/TextInputWithLabel'
import { ToggleSwitchWithLabel } from 'src/components/ui-parts/form/withLabel/hooksForm/ToggleSwitchWithLabel'
import { DefaultLayout } from 'src/components/ui-parts/layout/DefaultLayout'
import { MarkdownWithLabel } from 'src/components/ui-parts/form/withLabel/MarkdownWithLabel'
import { SelectWithLabel } from 'src/components/ui-parts/form/withLabel/hooksForm/SelectWithLabel'

const options = [
  { value: '1', label: 'JavaScript' },
  { value: '2', label: 'TypeScript' },
  { value: '3', label: 'React' },
]

type FormData = {
  url: string
  title: string
  category: Array<{ value: ''; label: '' }>
  comprehension: 0 | 1 | 2 | 3 | 4
  isRead: boolean
}

const Register: NextPage = () => {
  const [memo, setMemo] = useState('')
  const [isPreview, setIsPreview] = useState(false)
  const defaultValues: FormData = {
    url: '',
    title: '',
    category: [],
    comprehension: 0,
    isRead: false,
  }

  const methods = useForm<FormData>({
    defaultValues,
    resolver: yupResolver(EditSchema),
  })

  const onSubmit = (data: FormData) => {
    const submitData = {
      ...data,
      comprehension: data.comprehension - 1,
      memo,
    }
    console.log(submitData)
  }

  return (
    <DefaultLayout title="Register">
      <div className="container w-full py-16">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="mx-auto flex w-4/5 flex-col gap-16 rounded-lg bg-white p-12 shadow-md"
          >
            <ToggleSwitchWithLabel inputName={'isRead'} />
            <TextInputWithLabel
              placeholder="https://hoge.com"
              label={'URL'}
              inputName={'url'}
              classes={['py-4 border mt-8']}
              autoFocus
            />
            <TextInputWithLabel
              placeholder="TypeScriptの初心者向け記事"
              label={'タイトル'}
              inputName={'title'}
              classes={['py-4 border mt-8']}
            />
            <SelectWithLabel label={'カテゴリー'} inputName={'category'} />
            <RangeInputWithLabel
              label={'内容理解度'}
              inputName={'comprehension'}
              min={1}
              max={5}
              step={1}
            />
            <label
              htmlFor="toggleB"
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="toggleB"
                  className="sr-only"
                  onChange={() => setIsPreview(!isPreview)}
                />
                <div
                  className={`block h-8 w-14 rounded-full  ${
                    isPreview ? 'bg-asset-green' : 'bg-gray-600'
                  } `}
                ></div>
                <div
                  className={`dot transition"  absolute top-1 h-6 w-6 rounded-full bg-white ${
                    isPreview ? 'right-1' : ' left-1'
                  }`}
                />
              </div>
              <div className="ml-3 text-gray-700">
                {isPreview ? '戻る' : 'プレビューする'}
              </div>
            </label>
            {isPreview ? (
              <MarkdownWithLabel markdown={memo} />
            ) : (
              <TextAreWithLabel
                classes={['mt-8 min-h-[12rem] w-full']}
                value={memo}
                placeholder={'マークダウンで記入できます。'}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setMemo(e.target.value)
                }
              />
            )}
            <Button color={'primary'} size={'large'}>
              登録する
            </Button>
          </form>
        </FormProvider>
      </div>
    </DefaultLayout>
  )
}

export default Register
