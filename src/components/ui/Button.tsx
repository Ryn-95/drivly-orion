import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'ghost' | 'outline';
  theme?: 'drivly' | 'orion';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  isLoading?: boolean;
  icon?: ReactNode;
}

export const Button = ({
  variant = 'solid',
  theme = 'drivly',
  size = 'md',
  children,
  isLoading,
  icon,
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-16';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm min-h-[32px]',
    md: 'px-6 py-3 text-base min-h-[44px]',
    lg: 'px-8 py-4 text-lg min-h-[52px]',
  };

  const variantStyles = {
    solid: {
      drivly: 'bg-drivly-accent text-white hover:opacity-90',
      orion: 'bg-orion-accent text-white hover:opacity-90',
    },
    ghost: {
      drivly: 'hover:bg-drivly-surface',
      orion: 'hover:bg-orion-surface',
    },
    outline: {
      drivly: 'border border-drivly-line hover:bg-drivly-surface',
      orion: 'border border-orion-line hover:bg-orion-surface',
    },
  };

  const loadingStyles = isLoading ? 'opacity-75 cursor-wait' : '';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant][theme]}
        ${loadingStyles}
        ${disabledStyles}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {icon && !isLoading && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}; 