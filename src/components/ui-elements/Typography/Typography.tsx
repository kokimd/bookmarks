import { memo, ReactNode } from 'react'
import { Map, VariantSetting } from './settings'

const TypographyMemo = ({
  children,
  variant = 'body1',
  classes = [],
  onClick,
}: {
  children: ReactNode
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'main1'
    | 'main2'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'error'
    | 'label'
  classes?: string[]
  onClick?: () => void
}): JSX.Element => {
  const variants = VariantSetting.filter((map: Map) => map.key === variant).map(
    (map: Map) => map.class,
  )
  const className = [...variants[0], ...classes].join(' ')

  return (
    <div onClick={onClick}>
      <span className={className}>{children}</span>
    </div>
  )
}

export const Typography = memo(TypographyMemo)
