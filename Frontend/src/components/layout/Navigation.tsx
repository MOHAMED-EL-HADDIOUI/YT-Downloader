import React from 'react';
import { NavItem } from '../../types';

interface NavigationProps {
  items: NavItem[];
}

export function Navigation({ items }: NavigationProps) {
  return (
    <nav className="flex space-x-6">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}