import React from 'react';

export type InputFieldProps = {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  htmlFor: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  type,
  placeholder,
  htmlFor,
}) => {
  return (
    <div className='flex flex-col space-y-1'>
      <label htmlFor={htmlFor} className='text-sm font-semibold text-gray-500'>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className='border-gray-680 rounded-lg bg-gray-700 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500'
      />
    </div>
  );
};
