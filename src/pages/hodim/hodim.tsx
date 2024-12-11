// EmployeeTableList.tsx
import React from "react";

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isActive: boolean;
}

interface EmployeeTableListProps {
  employees: Employee[];
  onToggleActive: (id: number) => void;
}

const EmployeeTableList: React.FC<EmployeeTableListProps> = ({
  employees,
  onToggleActive,
}) => {
  return (
    <div className="overflow-x-auto mt-4 bg-white rounded-lg shadow">
      <table className="w-full">
        <thead className=" text-sm text-gray-500 font-semibold">
          <tr className="border-b">
            <th className="text-left p-4">Т/Р</th>
            <th className="text-left p-4">Исм</th>
            <th className="text-left p-4 hidden md:table-cell">Фамилия</th>
            <th className="text-left p-4 hidden sm:table-cell">Электрон почта</th>
            <th className="text-left p-4 hidden lg:table-cell">Лавозими</th>
            <th className="text-center p-4">Активлиги</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="border-b last:border-b-0">
              <td className="p-4">{employee.id}</td>
              <td className="p-4">{employee.firstName}</td>
              <td className="p-4 hidden md:table-cell">{employee.lastName}</td>
              <td className="p-4 hidden sm:table-cell">{employee.email}</td>
              <td className="p-4 hidden lg:table-cell">{employee.role}</td>
              <td className="p-4 text-center">
                <button
                  onClick={() => onToggleActive(employee.id)}
                  className={`px-2 py-1 rounded ${
                    employee.isActive
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {employee.isActive ? "Актив" : "Фаол эмас"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTableList;
