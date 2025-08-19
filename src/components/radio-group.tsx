import { cn } from '../lib/utils';

type Option = {
  value: string;
  label: string;
};

type RadioGroupProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const RadioGroup = ({ options, value, onChange, className }: RadioGroupProps) => {
  return (
    <div className={cn('flex flex-wrap items-center gap-x-6 gap-y-3', className)}>
      {options.map(option => (
        <label key={option.value} className={cn('flex items-center space-x-3 cursor-pointer')}>
          <input
            type="radio"
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="hidden"
          />
          <div
            className={cn(
              'flex size-[22px] items-center justify-center rounded-full border-2 transition-all',
              value === option.value ? 'border-primary' : 'border-[#919191]',
            )}
          >
            <div
              className={cn(
                'size-3 rounded-full transition-colors',
                value === option.value ? 'bg-primary' : 'bg-transparent',
              )}
            />
          </div>
          <span className="text-sm leading-none whitespace-nowrap">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export { RadioGroup };
