import React from "react";
import { FaEye } from "react-icons/fa";

export default function UserPage() {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-white shadow-md transform ${ isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <div className="p-4 text-lg font-semibold border-b flex justify-between items-center">
          {/* <button
            className="text-gray-600 lg:hidden focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl pt-10 font-semibold text-gray-700">
            Ходимлар
          </h1>
        </div>
        <div className="flex items-center space-x-4 w-full">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Фойдаланувчи қидириш..."
              className="w-full p-2 border border-gray-300 rounded-lg text-gray-700"
            />
          </div>
          <div className="flex-1">
            <select className="w-full p-2 border border-gray-300 rounded-lg text-gray-700">
              <option value="">Вилоятни танланг</option>
              {/* Add options here */}
            </select>
          </div>
          <div className="flex-1">
            <select className="w-full p-2 border border-gray-300 rounded-lg text-gray-700">
              <option value="">Туманни танланг</option>
              {/* Add options here */}
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm font-semibold">
                <th className="px-4 py-3 text-left">Т/Р</th>
                <th className="px-4 py-3 text-left">Исм</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">
                  Фамилия
                </th>
                <th className="px-4 py-3 text-left hidden sm:table-cell">
                  Электрон почта
                </th>
                <th className="px-4 py-3 text-center">Харакат</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr
                  key={employee.id}
                  className="border-t hover:bg-gray-50 cursor-pointer"
                >
                  <td className="px-4 py-3">{employee.id}</td>
                  <td className="px-4 py-3">{employee.firstName}</td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    {employee.lastName}
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    {employee.email}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button className="text-gray-600 hover:text-blue-600">
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Янги ходим қўшиш</h2>
            <div className="mb-4">
              <label className="block text-sm">Админ тоифаси</label>
              <select
                name="adminCategory"
                value={formValues.adminCategory}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="">Тоифани танланг</option>
                <option value="Тестер админ">Тестер админ</option>
                <option value="Текширувчи админ">Текширувчи админ</option>
              </select>
            </div>
            {[
              { name: "firstName", label: "Исм", type: "text" },
              { name: "lastName", label: "Фамилия", type: "text" },
              { name: "phone", label: "Телефон рақами", type: "text" },
              { name: "email", label: "Электрон почта", type: "email" },
              { name: "password", label: "Парол", type: "password" },
              {
                name: "confirmPassword",
                label: "Паролни тасдиқлаш",
                type: "password",
              },
            ].map(({ name, label, type }) => (
              <div className="mb-4" key={name}>
                <label className="block text-sm">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={(formValues as Record<string, string>)[name]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            ))}
            <div className="flex justify-end">
              <button
                onClick={toggleModal}
                className="px-4 py-2 text-sm text-gray-600"
              >
                Бекор қилиш
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg ml-2"
              >
                Сақлаш
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeTable;
