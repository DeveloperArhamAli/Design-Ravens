import { forwardRef, useId } from "react"

const Input = forwardRef(function Input({
    label,
    type = "text",
    className = "",
    placeholder,
    ...props
}, ref) {
    const id = useId()

    return (
        <div>
            {label && 
                <label htmlFor={id} className="block text-sm font-medium text-white/70 mb-2">
                    {label}
                </label>
            }
            <input
                type={type}
                id={id}
                className={`bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-cyan-400/50 focus:ring-cyan-400/20 rounded-xl px-3 py-2 ${className}`}
                ref={ref}
                placeholder={placeholder}
                {...props} />
        </div>
    )
})

export default Input