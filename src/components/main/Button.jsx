const Button = ({ children, className, onClick, icon }) => {
    return (
        <button
            className={
                `flex flex-row justify-between gap-2.5
                bg-btn border border-border
                rounded-full px-4 py-2.5 ` + className
            }
            onClick={onClick}
        >
            {icon && (
                <div className="w-6 h-6">
                    <img src={icon} alt="icon" />
                </div>
            )}
            <div className="font-medium">{children}</div>
        </button>
    )
}

export default Button
