type Map = {
  key: string
  class: string[]
}

const ColorSetting: Map[] = [
  {
    key: 'primary',
    class: [
      'text-white',
      'bg-asset-green',
      'hover:bg-opacity-50',
      'focus:ring-asset-green',
      'border-transparent',
    ],
  },
  {
    key: 'secondary',
    class: [
      'text-white',
      'bg-asset-orange',
      'hover:bg-opacity-50',
      'focus:ring-teal-500',
      'border-transparent',
    ],
  },
  {
    key: 'default',
    class: [
      'text-gray-700',
      'bg-white',
      'hover:bg-opacity-50',
      'focus:ring-indigo-500',
      'border-gray-300',
    ],
  },
  {
    key: 'danger',
    class: [
      'text-white',
      'bg-red-600',
      'hover:bg-opacity-50',
      'focus:ring-red-500',
      'border-transparent',
      'danger-button',
    ],
  },
]

const SizeSetting: Map[] = [
  { key: 'small', class: ['py-2', 'px-4', 'text-sm'] },
  { key: 'medium', class: ['py-4', 'px-6', 'text-base'] },
  { key: 'large', class: ['py-4', 'px-8', 'text-lg'] },
]

export { type Map, ColorSetting, SizeSetting }
