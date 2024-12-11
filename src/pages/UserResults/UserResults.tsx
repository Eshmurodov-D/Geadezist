'use client'

import { useState, useMemo } from 'react'
import { InputField } from '../../Components/InputField/InputField'
import { Modal } from '../../Components/ui/Modal'
import { MoreVertical } from 'lucide-react'

interface UserResult {
  id: number
  fullName: string
  category: string
  phone: string
  testStatus: string
  status: 'waiting' | 'completed' | 'failed'
  answers: string
  duration: number
  date: string
}

const mockData: UserResult[] = [
  {
    id: 1,
    fullName: 'sdff sdrb',
    category: 'shjhbgvh',
    phone: '998912120257',
    testStatus: 'Тестни ишлаш мумкин',
    status: 'waiting',
    answers: '1/2',
    duration: 1,
    date: '03/12/2024'
  },
  {
    id: 2,
    fullName: 'sdff sdrb',
    category: 'shjhbgvh',
    phone: '998912120257',
    testStatus: 'Тестни ишлаш мумкин',
    status: 'waiting',
    answers: '1/2',
    duration: 1,
    date: '03/12/2024'
  },
  {
    id: 3,
    fullName: 'sdff sdrb',
    category: 'test',
    phone: '998912120257',
    testStatus: 'Тестни ишлаш мумкин',
    status: 'waiting',
    answers: '1/2',
    duration: 1,
    date: '03/12/2024'
  },
]

export function UserResults() {
  const [search, setSearch] = useState('')
  const [categorySearch, setCategorySearch] = useState('')
  const [statusSearch, setStatusSearch] = useState('')
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [selectedResult, setSelectedResult] = useState<UserResult | null>(null)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [confirmAction, setConfirmAction] = useState<'delete' | 'archive' | null>(null)

  const filteredData = useMemo(() => {
    return mockData.filter(item => {
      const matchesSearch = item.fullName.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = categorySearch === '' || item.category.toLowerCase() === categorySearch.toLowerCase()
      const matchesStatus = statusSearch === '' || item.status.toLowerCase() === statusSearch.toLowerCase()
      return matchesSearch && matchesCategory && matchesStatus
    })
  }, [search, categorySearch, statusSearch])

  const handleViewResult = (result: UserResult) => {
    setSelectedResult(result)
    setIsViewModalOpen(true)
    setActiveDropdown(null)
  }

  const handleConfirmAction = (action: 'delete' | 'archive', result: UserResult) => {
    setSelectedResult(result)
    setConfirmAction(action)
    setIsConfirmModalOpen(true)
    setActiveDropdown(null)
  }

  const handleConfirm = () => {
    // Implement the actual delete or archive logic here
    console.log(`${confirmAction === 'delete' ? 'Deleting' : 'Archiving'} result:`, selectedResult)
    setIsConfirmModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 ml-60">
      <div className="mb-6 mt-10 ">
        <h1 className="text-2xl font-semibold mb-2">Фойдаланувчилар натижаси</h1>
        <div className="text-sm text-gray-500">
          Бошқарув панели / Фойдаланувчилар натижаси
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <InputField
          value={search}
          onChange={setSearch}
          placeholder="Ф.И.О қидириш..."
        />
        <InputField
          value={categorySearch}
          onChange={setCategorySearch}
          placeholder="Категорияни танланг"
          type="select"
          options={['Тест', 'Квиз', 'Анкета']}
        />
        <InputField
          value={statusSearch}
          onChange={setStatusSearch}
          placeholder="Статусни танланг"
          type="select"
          options={['Кутилмоқда', 'Тугалланган', 'Муваффақиятсиз']}
        />
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4 font-medium text-gray-500">T/P</th>
              <th className="text-left p-4 font-medium text-gray-500">Тўлик исм</th>
              <th className="text-left p-4 font-medium text-gray-500">Категория</th>
              <th className="text-left p-4 font-medium text-gray-500">Телефон</th>
              <th className="text-left p-4 font-medium text-gray-500">Қайта тест топш...</th>
              <th className="text-left p-4 font-medium text-gray-500">Статус</th>
              <th className="text-left p-4 font-medium text-gray-500">Харакат</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((result) => (
              <tr key={result.id} className="border-b last:border-b-0">
                <td className="p-4">{result.id}</td>
                <td className="p-4">{result.fullName}</td>
                <td className="p-4">{result.category}</td>
                <td className="p-4">{result.phone}</td>
                <td className="p-4">{result.testStatus}</td>
                <td className="p-4">
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                    Кутилмоқда
                  </span>
                </td>
                <td className="p-4 relative">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === result.id ? null : result.id)}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <MoreVertical className="w-5 h-5 text-gray-500" />
                  </button>
                  {activeDropdown === result.id && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                      <div className="py-1">
                        <button 
                          onClick={() => handleViewResult(result)}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Натижани кўриш
                        </button>
                        <button 
                          onClick={() => handleConfirmAction('archive', result)}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Архивини ўчриш
                        </button>
                        <button 
                          onClick={() => handleConfirmAction('delete', result)}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Натижани ўчриш
                        </button>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title="Фойдаланувчи натижалари"
      >
        {selectedResult && (
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Тўлик исм:</span>
              <span className="text-blue-600">{selectedResult.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Категория:</span>
              <span className="text-blue-600">{selectedResult.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Натижа (жавоблар / саволлар):</span>
              <span className="text-blue-600">{selectedResult.answers}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Ишлаш давомийлиги:</span>
              <span className="text-blue-600">{selectedResult.duration} мин</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Ишлаган санаси:</span>
              <span className="text-blue-600">{selectedResult.date}</span>
            </div>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        title={confirmAction === 'delete' ? "Натижани бекор қилмоқчимисиз" : "Архивини ўчриш"}
        primaryAction={{
          label: "Ўчириш",
          onClick: handleConfirm,
        }}
        secondaryAction={{
          label: "Сақлаш",
          onClick: () => setIsConfirmModalOpen(false),
        }}
      >
        <p className="text-gray-700">
          {confirmAction === 'delete'
            ? "Ростдан ҳам бу фойдаланувчига қайтадан тест топширишга рухсат бермоқчимисиз?"
            : "Натижани бекор қилмоқчимисиз"}
        </p>
      </Modal>

      <div className="mt-4 flex items-center justify-between">
        <button className="p-1 rounded hover:bg-gray-100 disabled:opacity-50" disabled>
          <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-md">1</span>
        <button className="p-1 rounded hover:bg-gray-100">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

