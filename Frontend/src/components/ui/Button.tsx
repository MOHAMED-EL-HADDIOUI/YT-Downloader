import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center justify-center space-x-2 rounded-lg p-4 transition-colors',
        variant === 'primary' && 'bg-red-600 text-white hover:bg-red-700',
        variant === 'secondary' && 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}