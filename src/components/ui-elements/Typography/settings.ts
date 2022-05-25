type Map = {
  key: string
  class: string[]
}

const VariantSetting: Map[] = [
  { key: 'h1', class: ['text-6xl', 'font-bold'] },
  { key: 'h2', class: ['text-5xl', 'font-bold'] },
  { key: 'h3', class: ['text-4xl', 'font-semibold'] },
  { key: 'h4', class: ['text-2xl', 'font-semibold'] },
  { key: 'h5', class: ['text-xl', 'font-semibold'] },
  { key: 'h6', class: ['text-lg', 'font-semibold'] },
  { key: 'main1', class: ['text-9xl', 'font-bold'] },
  { key: 'main2', class: ['text-8xl', 'font-bold'] },
  { key: 'subtitle1', class: ['prose', 'font-semibold'] },
  { key: 'subtitle2', class: ['prose', 'prose-sm', 'font-semibold'] },
  { key: 'body1', class: ['prose-sm,'] },
  { key: 'body2', class: ['prose', 'prose-sm'] },
  { key: 'error', class: ['text-sm', 'text-asset-red'] },
  { key: 'label', class: ['text-lg', 'font-semibold'] },
]

export { type Map, VariantSetting }
