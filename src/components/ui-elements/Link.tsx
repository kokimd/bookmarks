import NextLink from 'next/link'
import { memo, ReactNode } from 'react'

const LinkMemo = ({
  children,
  href,
  classes = [],
}: {
  children: ReactNode
  href: string
  classes?: string[]
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
      <a className={className}>{children}</a>
    </NextLink>
  )
}

export const Link = memo(LinkMemo)
