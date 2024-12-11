import { Modal } from '../../Components/ui/Modal'

interface ResultModalProps {
  isOpen: boolean
  onClose: () => void
  result: {
    fullName: string
    category: string
    answers: string
    duration: number
    date: string
  } | null
}

export function ResultModal({ isOpen, onClose, result }: ResultModalProps) {
  if (!result) return null

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Фойдаланувчи натижалари"
    >
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Тўлик исм:</span>
          <span className="text-blue-600">{result.fullName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Категория:</span>
          <span className="text-blue-600">{result.category}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Натижа (жавоблар / саволлар):</span>
          <span className="text-blue-600">{result.answers}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Ишлаш давомийлиги:</span>
          <span className="text-blue-600">{result.duration} мин</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Ишлаган санаси:</span>
          <span className="text-blue-600">{result.date}</span>
        </div>
      </div>
    </Modal>
  )
}

