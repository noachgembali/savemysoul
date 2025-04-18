
import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface SliderWithLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: number[];
  setValue: (value: number[]) => void;
  min: number;
  max: number;
  step: number;
  formatValue?: (value: number) => string;
  className?: string;
}

export function SliderWithLabel({
  label,
  value,
  setValue,
  min,
  max,
  step,
  formatValue = (value) => `${value}`,
  className,
  ...props
}: SliderWithLabelProps) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      <div className="flex justify-between">
        <label className="text-sm font-medium leading-none">{label}</label>
        <span className="text-sm font-bold text-savemysoul-blue">
          {formatValue(value[0])}
        </span>
      </div>
      <Slider
        value={value}
        onValueChange={setValue}
        min={min}
        max={max}
        step={step}
        className="py-2"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{formatValue(min)}</span>
        <span>{formatValue(max)}</span>
      </div>
    </div>
  );
}
