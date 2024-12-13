import React from "react";

interface TableProps<T> {
  headers: { key: keyof T; label: string }[]; // Kalit va ko'rsatish uchun nomni aniqlash
  data: T[];
  actions?: (item: T) => React.ReactNode;
}

const Table = <T extends object>({
  headers,
  data,
  actions,
}: TableProps<T>) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            {headers.map((header, index) => (
              <th
                key={index}
                className="text-left px-4 py-4 font-medium text-gray-500"
              >
                {header.label}
              </th>
            ))}
            {actions && (
              <th className="text-left px-4 py-4 font-medium text-gray-500">
                Амалиятлар
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              {headers.map((header, headerIndex) => (
                <td
                  key={headerIndex}
                  className="px-4 py-4 text-sm text-gray-800"
                >
                  {item[header.key] !== undefined
                    ? String(item[header.key])
                    : ""}
                </td>
              ))}
              {actions && (
                <td className="px-4 py-4 text-sm">{actions(item)}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
