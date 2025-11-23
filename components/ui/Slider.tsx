import * as React from "react"
import { cn } from "@/components/ui/Button"

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    value: number;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
    ({ className, label, value, ...props }, ref) => {
        return (
            <div className="w-full space-y-2">
                <div className="flex justify-between items-center">
                    {label && <label className="text-sm font-medium text-gray-300">{label}</label>}
                    <span className="text-sm font-bold text-primary">{value}/10</span>
                </div>
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={value}
                    className={cn(
                        "w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-primary/80 transition-all",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        )
    }
)
Slider.displayName = "Slider"

export { Slider }
