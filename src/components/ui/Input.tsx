import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'w-full bg-drivly-bg border border-drivly-line rounded-16 py-2 px-3 text-drivly-text placeholder-drivly-muted focus:outline-none focus:ring-2 focus:ring-drivly-accent/20 transition-all duration-200';

    const errorStyles = error
      ? 'border-red-500 focus:ring-red-500/20'
      : '';

    const disabledStyles = disabled
      ? 'opacity-50 cursor-not-allowed'
      : '';

    const iconStyles = leftIcon || rightIcon
      ? 'pl-10'
      : '';

    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-drivly-muted">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={`
              ${baseStyles}
              ${errorStyles}
              ${disabledStyles}
              ${iconStyles}
              ${className}
            `}
            disabled={disabled}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-drivly-muted">
              {rightIcon}
            </div>
          )}
        </div>
        {(error || helperText) && (
          <p
            className={`text-sm ${
              error ? 'text-red-500' : 'text-drivly-muted'
            }`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
); 