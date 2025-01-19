"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

export interface Option {
  value: string;
  label: string;
  description?: string;
}

export interface MultiSelectProps {
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  maxHeight?: number;
  renderOption?: (option: Option) => React.ReactNode;
  renderBadge?: (option: Option) => React.ReactNode;
  showSelectButtons?: boolean;
}

const MultiSelect = React.forwardRef<HTMLButtonElement, MultiSelectProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = "Select options...",
      className,
      disabled = false,
      maxHeight = 310,
      renderOption,
      renderBadge,
      showSelectButtons = true,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);

    const handleSelectAll = () => {
      onChange(options.map((opt) => opt.value));
    };

    const handleDeselectAll = () => {
      onChange([]);
    };

    const toggleItem = (optionValue: string) => {
      onChange(
        value.includes(optionValue)
          ? value.filter((item) => item !== optionValue)
          : [...value, optionValue]
      );
    };

    const defaultRenderOption = (option: Option) => (
      <div className="flex items-start gap-2 sm:gap-3 p-1.5 sm:p-2">
        <div
          className={cn(
            "mt-1 h-4 w-4 border border-gray-700 rounded-sm flex items-center justify-center transition-colors",
            value.includes(option.value)
              ? "bg-gray-100 border-gray-100"
              : "border-gray-700"
          )}
        >
          {value.includes(option.value) && (
            <Check className="h-3 w-3 text-gray-900" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-medium text-sm sm:text-base text-gray-200 truncate">
            {option.label}
          </div>
          {option.description && (
            <div className="text-xs text-gray-400 truncate">
              {option.description}
            </div>
          )}
        </div>
      </div>
    );

    const defaultRenderBadge = (option: Option) => (
      <Badge
        variant="secondary"
        className="rounded-md bg-gray-800 text-gray-200 text-xs sm:text-sm max-w-[150px] sm:max-w-none truncate"
      >
        {option.label}
      </Badge>
    );

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className={cn(
              "w-full justify-between h-auto min-h-[2.5rem] sm:min-h-[2.75rem] px-2 sm:px-3 bg-gray-900/50 border-gray-700 hover:bg-gray-800/50 hover:border-gray-600",
              "text-sm sm:text-base",
              className
            )}
          >
            <div className="flex flex-wrap gap-1 py-0.5 max-w-full">
              {value.length === 0 ? (
                <span className="text-gray-500 truncate">{placeholder}</span>
              ) : (
                <div className="flex flex-wrap gap-1 max-w-full">
                  {value.map((val) => {
                    const option = options.find((opt) => opt.value === val);
                    if (!option) return null;
                    return (
                      <React.Fragment key={val}>
                        {renderBadge?.(option) ?? defaultRenderBadge(option)}
                      </React.Fragment>
                    );
                  })}
                </div>
              )}
            </div>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 text-white" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[312px] md:w-[380px] lg:w-[520px] p-0 bg-gray-900 border-gray-700"
          align="start"
          side="bottom"
          sideOffset={4}
        >
          {showSelectButtons && (
            <div className="p-2 sm:p-3 flex gap-2 border-b border-gray-800 bg-gray-900/50">
              <Button
                size="sm"
                variant="secondary"
                onClick={handleSelectAll}
                className="flex-1 bg-white hover:bg-gray-500  hover:text-white text-xs sm:text-sm py-1.5 h-8"
              >
                Select All
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleDeselectAll}
                className="flex-1 border-gray-700 bg-gray-600 text-white hover:bg-gray-800 hover:text-white text-xs sm:text-sm py-1.5 h-8"
              >
                Clear All
              </Button>
            </div>
          )}
          <div
            className="p-1.5 sm:p-2 space-y-0.5 sm:space-y-1"
            style={{
              maxHeight:
                typeof window !== "undefined"
                  ? Math.min(maxHeight, window.innerHeight - 150)
                  : maxHeight,
            }}
          >
            {options.map((option) => (
              <div
                key={option.value}
                className={cn(
                  "cursor-pointer hover:bg-gray-800/50 transition-colors rounded-md",
                  "active:bg-gray-700/70 touch-action-manipulation",
                  value.includes(option.value) && "bg-gray-800/70",
                  disabled && "pointer-events-none opacity-50"
                )}
                onClick={() => toggleItem(option.value)}
              >
                {renderOption?.(option) ?? defaultRenderOption(option)}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    );
  }
);

MultiSelect.displayName = "MultiSelect";

export { MultiSelect };
