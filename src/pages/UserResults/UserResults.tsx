import React, { useState } from 'react';
import { Breadcrumb } from '../../Components/Breadcrumb/Breadcrumb';
import { SearchInput } from '../../Components/SearchInput/SearchInput';
import { FilterSelect } from '../../Components/FilterSelect/FilterSelect';
import { UserTable } from '../../Components/UserTable/UserTable';
import { Pagination } from '../../Components/Pagination/ponigation';
import { User, BreadcrumbItem } from '../../types/types';

const mockUsers: User[] = [
  { id: 1, fullName: 'sdff sdrb', category: 'shjhbgvh', phone: '9989', retestStatus: 'Тестни ишлаш мумкин', status: 'Кутилмоқда' },
  { id: 2, fullName: 'sdff sdrb', category: 'shjhbgvh', phone: '9989', retestStatus: 'Тестни ишлаш мумкин', status: 'Кутилмоқда' },
  { id: 3, fullName: 'sdff sdrb', category: 'test', phone: '998', retestStatus: 'Тестни ишлаш мумкин', status: 'Кутилмоқда' },
];

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Бошқарув панели', path: '/' },
  { label: 'Фойдаланувчилар натижаси', path: '/results' },
];

const categoryOptions = [
  { value: 'category1', label: 'Category 1' },
  { value: 'category2', label: 'Category 2' },
];

const statusOptions = [
  { value: 'status1', label: 'Status 1' },
  { value: 'status2', label: 'Status 2' },
];

export const UserResults: React.FC = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  const handleCategoryFilter = (category: string) => {
    console.log('Filtering by category:', category);
  };

  const handleStatusFilter = (status: string) => {
    console.log('Filtering by status:', status);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen mt-30 ml-60">
      <div className="max-w-7xl mx-auto ml-5">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-2xl font-bold mb-4">Фойдаланувчилар натижаси</h1>
        <div className="flex gap-4 mb-4">
          <SearchInput onSearch={handleSearch} />
          <FilterSelect label="Категорияни танланг" options={categoryOptions} onChange={handleCategoryFilter} />
          <FilterSelect label="Статусни танланг" options={statusOptions} onChange={handleStatusFilter} />
        </div>
        <UserTable users={users} />
        <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

