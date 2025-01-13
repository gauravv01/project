import React from 'react';
import { Loader2 } from 'lucide-react';

// Spinner Loader Component
export const Loader = ({ 
  size = 'default',
  variant = 'primary',
  fullScreen = false 
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    default: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const variantClasses = {
    primary: 'text-teal-600',
    secondary: 'text-gray-600',
    white: 'text-white'
  };

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 dark:bg-gray-950/80 flex items-center justify-center z-50">
        <Loader2 
          className={`${sizeClasses[size]} ${variantClasses[variant]} animate-spin`}
        />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 
        className={`${sizeClasses[size]} ${variantClasses[variant]} animate-spin`}
      />
    </div>
  );
};

export default Loader