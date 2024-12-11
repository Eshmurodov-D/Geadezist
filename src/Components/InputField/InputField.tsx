import { Search } from 'lucide-react'

interface InputFieldProps {
  value: string
  onChange: (value: string) => void
  placeholder: string
  type?: 'text' | 'select'
  options?: string[]
}

export function InputField({ value, onChange, placeholder, type = 'text', options = [] }: InputFieldProps) {
  if (type === 'select') {
    return (
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-full rounded-md border border-gray-200 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
      </div>
    )
  }

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-full rounded-md border border-gray-200 pl-9 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

