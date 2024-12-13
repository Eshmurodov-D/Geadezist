import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface CategorySelectProps {
  value: string
  onChange: (value: string) => void
}

export function CategorySelect({ value, onChange }: CategorySelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const categories = ['', 'Тест', 'Квиз', 'Анкета']

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-10 w-full rounded-md border border-gray-200 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between"
      >
        {value || 'Категорияни танланг'}
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                onChange(category)
                setIsOpen(false)
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              {category || 'Барча категориялар'}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

