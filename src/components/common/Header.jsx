const NotificationIcon = (props) => (
    <svg
        width={24}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
        className="notification-copy-svgrepo-com_svg__icon notification-copy-svgrepo-com_svg__line"
        {...props}
    >
        <path
            d="M19.38 14.38a2.12 2.12 0 0 1 .62 1.5h0A2.12 2.12 0 0 1 17.88 18H6.12A2.12 2.12 0 0 1 4 15.88h0a2.12 2.12 0 0 1 .62-1.5L6 13V9a6 6 0 0 1 6-6h0a6 6 0 0 1 6 6v4ZM15 18H9a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3Z"
            style={{
                fill: "none",
                stroke: "currentcolor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
            }}
        />
    </svg>
)

const MenuIcon = (props) => (
    <svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            stroke="currentcolor"
            strokeWidth={1.5}
            strokeLinecap="round"
            d="M1.75 15.25h16.5M1.75 9.25h10.5M1.75 2.25h13.5"
        />
    </svg>
)

const ShareIcon = (props) => (
    <svg
        width={22}
        height={22}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect
            x={1}
            y={1}
            width={20}
            height={20}
            rx={5}
            stroke="currentcolor"
            strokeWidth={1.5}
            strokeLinejoin="round"
        />
        <circle cx={7.5} cy={11.5} r={1} fill="currentcolor" />
        <circle cx={11.5} cy={11.5} r={1} fill="currentcolor" />
        <circle cx={15.5} cy={11.5} r={1} fill="currentcolor" />
    </svg>
)
const Header = () => {
    return (
        <header className="sticky top-0 px-[1.125rem] py-4 flex justify-between bg-white">
            <button className="w-6 h-6 flex justify-center items-center">
                <div className="w-6 h-6 z-10 flex justify-center items-center">
                    <MenuIcon />
                </div>
            </button>
            <div className="flex gap-5">
                <button className="w-6 h-6 flex justify-center items-center">
                    <div className="w-6 h-6 z-10 flex justify-center items-center">
                        <ShareIcon />
                    </div>
                </button>
                <button className="w-6 h-6 flex justify-center items-center">
                    <div className="w-6 h-6 z-10 flex justify-center items-center">
                        <NotificationIcon />
                    </div>
                </button>
            </div>
        </header>
    )
}

export default Header
