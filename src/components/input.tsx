import * as React from 'react';
import { cn } from '../lib/utils';

const Input = ({
  label,
  type,
  id,
  className,
  ...props
}: React.ComponentProps<'input'> & { label: string }) => {
  return (
    <div className="relative w-full">
      <label
        htmlFor={id}
        className="text-[13px] font-normal leading-none absolute -top-1.5 left-3.5 bg-background pl-1 pr-2 text-primary text-sm"
      >
        {label}
        {props.required ? (
          <sup className="absolute -top-1 right-0 text-base leading-none text-[#DD4A3D]">*</sup>
        ) : null}
      </label>
      <input
        type={type}
        id={id}
        className={cn(
          'w-full border border-[#CBCBCB] rounded-md px-[18px] pt-2.5 pb-2 transition-all placeholder:text-[#919191] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
          className,
        )}
        {...props}
      />
    </div>
  );
};

export { Input };
