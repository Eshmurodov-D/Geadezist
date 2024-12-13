<<<<<<< HEAD
import  { useState } from "react";
import Table from "../../Components/table/table"; // Table komponentini import qiling
import { MoreVertical } from "react-feather";
=======
// EmployeeTable.tsx
import React, { useState } from "react";
import EmployeeTableList from "./EmployeeTable";
>>>>>>> a890c61771f0804bd5db29796ecb76ae78b82418

interface Employee {
  t_p: number;
  tulik_ism: string;
  kategoriya: string;
  telefon: string;
  qayta_test_topsh: string;
  status: string;
}

const EmployeeTable = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

<<<<<<< HEAD
  const headers: { key: keyof Employee; label: string }[] = [
    { key: "t_p", label: "T/P" },
    { key: "tulik_ism", label: "Тўлиқ исм" },
    { key: "kategoriya", label: "Категория" },
    { key: "telefon", label: "Телефон" },
    { key: "qayta_test_topsh", label: "Қайта тест топш." },
    { key: "status", label: "Статус" },
  ];
  

  const data: Employee[] = [
    {
      t_p: 1,
      tulik_ism: "Абдурахмон Ибрагимов",
      kategoriya: "HR",
      telefon: "+998912345678",
      qayta_test_topsh: "Кутилмоқда",
      status: "Кутилмоқда",
    },
    // Qo'shimcha ma'lumotlar
  ];

  const handleActions = (item: Employee) => (
    <div className="relative ">
      <button
        onClick={() =>
          setActiveDropdown(activeDropdown === item.t_p ? null : item.t_p)
        }
        className="p-1 hover:bg-gray-100 rounded-full"
      >
        <MoreVertical size={16} />
      </button>
      {activeDropdown === item.t_p && (
        <div className="absolute  right-0 mt-2 w-48 bg-white border rounded shadow">
          <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">
            Таҳрирлаш
          </button>
          <button className="block w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-gray-100">
            Ўчириш
          </button>
=======
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
      const newEmployee: Employee = {
        id: employees.length + 1,
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        role: formValues.adminCategory,
        isActive: true,
      };
      setEmployees([...employees, newEmployee]);
      toggleModal();
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
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl pt-10 font-semibold text-gray-700">Ходимлар</h1>
        </div>

        <button
          onClick={toggleModal}
          className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded shadow hover:bg-blue-700"
        >
          <span className="text-lg mr-2">+</span> Қўшиш
        </button>

        <EmployeeTableList
          employees={employees}
          onToggleActive={toggleEmployeeActiveStatus}
        />
      </div>

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
>>>>>>> a890c61771f0804bd5db29796ecb76ae78b82418
        </div>
      )}
    </div>
  );

  return (
    <div>
      <Table
        headers={headers}
        data={data}
        actions={(item) => handleActions(item)}
      />
    </div>
  );
};

export default EmployeeTable;

