export interface User {
  id: number;
  fullName: string;
  category: string;
  phone: string;
  retestStatus: string;
  status: string;
}

export interface BreadcrumbItem {
  label: string;
  path: string;
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isActive: boolean;
}