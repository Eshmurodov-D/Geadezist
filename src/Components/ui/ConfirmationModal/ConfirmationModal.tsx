import { X } from 'lucide-react'

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  confirmText?: string
  cancelText?: string
}

export function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  confirmText = "Сақлаш",
  cancelText = "Ёпиш"
}: ConfirmationModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-medium text-center w-full">{title}</h2>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            {cancelText}
          </button>
          <button
            onClick={() => {
              onConfirm()
              onClose()
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}

