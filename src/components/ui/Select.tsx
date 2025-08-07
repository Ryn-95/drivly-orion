import { SelectHTMLAttributes, forwardRef } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: Option[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      options,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'w-full bg-drivly-bg border border-drivly-line rounded-16 py-2 px-3 text-drivly-text focus:outline-none focus:ring-2 focus:ring-drivly-accent/20 transition-all duration-200 appearance-none';

    const errorStyles = error
      ? 'border-red-500 focus:ring-red-500/20'
      : '';

    const disabledStyles = disabled
      ? 'opacity-50 cursor-not-allowed'
      : '';

    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={`
              ${baseStyles}
              ${errorStyles}
              ${disabledStyles}
              ${className}
            `}
            disabled={disabled}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-drivly-muted">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
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