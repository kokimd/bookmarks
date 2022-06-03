import { FC } from 'react'
import { ChangeEvent, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { EditSchema } from 'src/utils/validationSchema'
import { Button } from 'src/components/ui-elements/button/Button'
import { RangeInputWithLabel } from 'src/components/ui-parts/form/withLabel/hooksForm/RangeInputWithLabel'
import { TextAreWithLabel } from 'src/components/ui-parts/form/withLabel/TextAreWithLabel'
import { TextInputWithLabel } from 'src/components/ui-parts/form/withLabel/hooksForm/TextInputWithLabel'
import { ToggleSwitchWithLabel } from 'src/components/ui-parts/form/withLabel/hooksForm/ToggleSwitchWithLabel'
import { MarkdownWithLabel } from 'src/components/ui-parts/form/withLabel/MarkdownWithLabel'
import { SelectWithLabel } from 'src/components/ui-parts/form/withLabel/hooksForm/SelectWithLabel'
import { useMutateBookmarks } from 'src/hooks/reactQuery/useMutateBookmarks'
import { useRouter } from 'next/router'

type FormData = {
  url: string
  title: string
  categories: [{ value: number; label: string }] | []
  comprehension: 0 | 1 | 2 | 3 | 4
  isRead: boolean
}

export const EditForm: FC = () => {
  const [memo, setMemo] = useState('')
  const [isPreview, setIsPreview] = useState(false)

  const router = useRouter()

  const defaultValues: FormData = {
    url: '',
    title: '',
    categories: [],
    comprehension: 0,
    isRead: false,
  }

  const { createBookmarkMutate } = useMutateBookmarks()

  const methods = useForm<FormData>({
    defaultValues,
    resolver: yupResolver(EditSchema),
  })

  // TODO:API
  const onSubmit = (data: FormData) => {
    const sendCategory = data.categories.map((category) => ({
      id: category.value,
      label: category.label,
    }))
    const submitData = {
      ...data,
      categories: sendCategory,
      comprehension: data.comprehension - 1,
      memo,
    }
    if (!data.isRead && data.comprehension - 1 >= 1) {
      alert('未読の記事は理解度を0以外に設定出来ません')
      return
    }
    createBookmarkMutate.mutate(submitData)
    router.push('/mypage/bookmarks')
  }
  return (
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
        <SelectWithLabel label={'カテゴリー'} inputName={'categories'} />
        <RangeInputWithLabel
          label={'理解度'}
          inputName={'comprehension'}
          min={1}
          max={5}
          step={1}
        />
        {isPreview ? (
          <MarkdownWithLabel
            isPreview={isPreview}
            setIsPreview={setIsPreview}
            markdown={memo}
          />
        ) : (
          <TextAreWithLabel
            classes={['mt-8 min-h-[12rem] w-full']}
            value={memo}
            placeholder={'マークダウンで記入できます。'}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setMemo(e.target.value)
            }
            isPreview={isPreview}
            setIsPreview={setIsPreview}
          />
        )}
        <Button color={'primary'} size={'large'}>
          登録する
        </Button>
      </form>
    </FormProvider>
  )
}
