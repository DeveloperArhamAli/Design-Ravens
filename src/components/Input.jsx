import { forwardRef, useId } from "react"

const Input = forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()

    return (
        // <div className="w-full">
        //     {label && 
        //     <label 
        //         className="inline-block mb-1 pl-1 text-black"
        //         htmlFor={id}>
        //             {label}
        //     </label>
        //     }
        //     <input 
        //         type={type}
        //         className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-black w-full ${className}`}
        //         ref={ref}
        //         {...props}
        //         id={id}/>
        // </div>
        <div>
            {label && 
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                    {label}*
                </label>
            }
            <input
                type={type}
                id={id}
                className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
                ref={ref}
                {...props} />
        </div>
    )
})

export default Input