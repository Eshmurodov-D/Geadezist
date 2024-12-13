import { MoreVertical } from 'lucide-react'

interface ActionButtonProps {
  onClick: () => void
}

export function ActionButton({ onClick }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-1 hover:bg-gray-100 rounded-full"
    >
      <MoreVertical className="w-5 h-5 text-gray-500" />
    </button>
  )
}

interface ActionDropdownProps {
  isOpen: boolean
  onClose: () => void
}

export function ActionDropdown({ isOpen, onClose }: ActionDropdownProps) {
  if (!isOpen) return null

  return (
    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
      <div className="py-1">
        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Архивини ўчриш
        </button>
        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Натижани ўчриш
        </button>
        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Тасдиқлаш
        </button>
        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Қайта топширишга рухсат бериш
        </button>
      </div>
    </div>
  )
}

