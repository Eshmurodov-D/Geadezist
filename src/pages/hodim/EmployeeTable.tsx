// EmployeeTable.tsx
import React, { useState } from "react";
import EmployeeTableList from "./hodim";

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isActive: boolean;
}

const EmployeeTable: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      firstName: "Alisher",
      lastName: "Sodiqov",
      email: "alishersodiqov70@gmail.com",
      role: "Тестер админ",
      isActive: true,
    },
    {
      id: 2,
      firstName: "Alisher",
      lastName: "Sodiqов",
      email: "alisher@gmail.com",
      role: "Текширувчи админ",
      isActive: true,
    },
  ]);

  const [isSidebarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    adminCategory: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleModal = () => setModalOpen((prev) => !prev);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSave = () => {
    const passwordLength = formValues.password.length;
    if (
      formValues.adminCategory &&
      formValues.firstName &&
      formValues.lastName &&
      formValues.email &&
      passwordLength >= 5 &&
      passwordLength <= 10 &&
      formValues.password === formValues.confirmPassword
    ) {
      const newEmployee = {
        id: employees.length + 1,
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        role: formValues.adminCategory,
        isActive: true,
      };
      setEmployees([...employees, newEmployee]);
      setModalOpen(false);
      setFormValues({
        adminCategory: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      if (passwordLength < 5 || passwordLength > 10) {
        alert("Парол 5-10 белгидан иборат бўлиши керак!");
      } else if (formValues.password !== formValues.confirmPassword) {
        alert("Пароллар мос эмас!");
      } else {
        alert("Барча майдонларни тўлдиринг!");
      }
    }
  };

  const toggleEmployeeActiveStatus = (id: number) => {
    setEmployees((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, isActive: !e.isActive } : e
      )
    );
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-white shadow-md transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <div className="p-4 text-lg font-semibold border-b flex justify-between items-center">
          {/* Sidebar contents */}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl pt-10 font-semibold text-gray-700">Ходимлар</h1>
        </div>

        {/* Add Button */}
        <button
          onClick={toggleModal}
          className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded shadow hover:bg-blue-700"
        >
          <span className="text-lg mr-2">+</span> Қўшиш
        </button>

        {/* Employee Table */}
        <EmployeeTableList
          employees={employees}
          onToggleActive={toggleEmployeeActiveStatus}
        />
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
            {[{ name: "firstName", label: "Исм", type: "text" },
               { name: "lastName", label: "Фамилия", type: "text" },
               { name: "phone", label: "Телефон рақами", type: "text" },
               { name: "email", label: "Электрон почта", type: "email" },
               { name: "password", label: "Парол", type: "password" },
               { name: "confirmPassword", label: "Паролни тасдиқлаш", type: "password" },
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
