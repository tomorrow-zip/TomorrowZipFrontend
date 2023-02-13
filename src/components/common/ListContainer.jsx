const ChevronIcon = (props) => (
    <svg
        width={9}
        height={14}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m1.375.75 6.25 6.696-6.25 5.804"
            stroke="#000"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const ListContainer = ({ children, button = false }) => {
    return (
        <div className="bg-list rounded-xl overflow-hidden">
            <div>{children}</div>
            {button && (
                <button className="w-full border-t border-border px-5 py-3 text-center flex justify-center items-center gap-2.5">
                    <span className="text-sm">자세히 살펴보기</span>
                    <ChevronIcon />
                </button>
            )}
        </div>
    )
}

export default ListContainer
