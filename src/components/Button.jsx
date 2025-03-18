import { Link } from "react-router-dom"

function Button({
    children,
    onClick,
    className,
    disabled,
    to,
    type = 'button',
    id,
    ...props
}) {
    return (
        <>
        {to ? (
            <Link to={to} className={`${className}`} {...props}>{children}</Link>
        ) : (
            <button onClick={onClick} disabled={disabled} className={`border px-3 py-2 rounded cursor-pointer ${className}`} type={type} {...props} id={id}>{children}</button>
        )}
        </>
    )
}
export default Button