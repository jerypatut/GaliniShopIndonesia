import React, { useState, cloneElement, ReactElement, ReactNode } from 'react';

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  children: ReactNode;
}

export function Select({  onValueChange, children }: SelectProps) {
  const [open, setOpen] = useState(false);

  // Tipe helper untuk child yang props-nya bisa SelectTriggerProps, SelectContentProps, SelectItemProps
  type ChildElement = ReactElement<SelectTriggerProps | SelectContentProps | SelectItemProps>;

  const childrenWithProps = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    const childElement = child as ChildElement;

    if (childElement.type === SelectTrigger) {
      // Sekarang TypeScript tahu props ada onClick & children
      return cloneElement(childElement, {
        onClick: () => setOpen(!open),
        children: childElement.props.children,
      });
    }

    if (childElement.type === SelectContent) {
      if (!open) return null;

      // Isi SelectContent biasanya SelectItem
      const itemsWithOnSelect = React.Children.map(childElement.props.children, (item) => {
        if (!React.isValidElement(item)) return item;

        const itemElement = item as ReactElement<SelectItemProps>;

        if (itemElement.type === SelectItem) {
          return cloneElement(itemElement, {
            onSelect: (val: string) => {
              onValueChange(val);
              setOpen(false);
            },
          });
        }

        return item;
      });

      return cloneElement(childElement, {}, itemsWithOnSelect);
    }

    return child;
  });

  return <div className="relative inline-block w-full">{childrenWithProps}</div>;
}

interface SelectTriggerProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export function SelectTrigger({ className = '', children, onClick }: SelectTriggerProps) {
  return (
    <button
      type="button"
      className={`w-full border rounded px-3 py-2 text-left ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

interface SelectContentProps {
  children: ReactNode;
}

export function SelectContent({ children }: SelectContentProps) {
  return (
    <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-md">
      {children}
    </div>
  );
}

interface SelectItemProps {
  value: string;
  children: ReactNode;
  onSelect?: (value: string) => void;
}

export function SelectItem({ value, children, onSelect }: SelectItemProps) {
  return (
    <div
      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
      onClick={() => onSelect?.(value)}
      role="option"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onSelect?.(value);
      }}
    >
      {children}
    </div>
  );
}

interface SelectValueProps {
  placeholder?: string;
  value?: string;
}

export function SelectValue({ placeholder, value }: SelectValueProps) {
  return (
    <span className={`block ${value ? 'text-black' : 'text-gray-500'}`}>
      {value || placeholder}
    </span>
  );
}
