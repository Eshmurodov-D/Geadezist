import  { useState } from "react";
import Table from "../../Components/table/table"; // Table komponentini import qiling
import { MoreVertical } from "react-feather";

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
