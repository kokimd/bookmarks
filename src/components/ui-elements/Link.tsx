import NextLink from 'next/link'
import { memo, ReactNode } from 'react'

const LinkMemo = ({
  children,
  href,
  classes = [],
  target = '_self',
}: {
  children: ReactNode
  href: string
  classes?: string[]
  target?: '_blank' | '_self' | undefined
}): JSX.Element => {
  const className = [
    'block',
    'hover:opacity-50',
    'py-2',
    'px-2',
    'font-semibold',
    ...classes,
  ].join(' ')

  return (
    <NextLink href={href}>
      <a target={target} className={className}>
        {children}
      </a>
    </NextLink>
  )
}

export const Link = memo(LinkMemo)
