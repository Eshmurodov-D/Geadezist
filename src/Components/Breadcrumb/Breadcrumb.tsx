import React from 'react';
import { BreadcrumbItem } from '../../types/types';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="text-sm text-gray-500 mb-4">
      {items.map((item, index) => (
        <React.Fragment key={item.path}>
          <span className="hover:text-gray-700 cursor-pointer">
            {item.label}
          </span>
          {index < items.length - 1 && <span className="mx-2">/</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

