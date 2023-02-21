const ListContainer = ({ children, className }) => {
    return (
        <div className={`bg-list rounded-xl overflow-hidden ${className}`}>
            <div>{children}</div>
        </div>
    )
}

export default ListContainer
