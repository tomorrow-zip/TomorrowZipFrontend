import { useRef, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { routes } from "../../router/router.jsx"

const MicrophoneIcon = (props) => (
    <svg
        width={16}
        height={22}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M4 4a4 4 0 1 1 8 0v4a4 4 0 0 1-8 0V4ZM10 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM2 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM16 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            fill="currentColor"
        />
        <path
            d="M16 7c0 2.387-.843 4.676-2.343 6.364C12.157 15.052 10.122 16 8 16s-4.157-.948-5.657-2.636C.843 11.676 0 9.387 0 7h2.026c0 1.782.63 3.492 1.75 4.752 1.12 1.26 2.64 1.969 4.224 1.969s3.104-.709 4.224-1.969c1.12-1.26 1.75-2.97 1.75-4.752H16Z"
            fill="currentColor"
        />
    </svg>
)
const KeyboardIcon = (props) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM6 8h.001M10 8h.001M14 8h.001M18 8h.001M8 12h.001M12 12h.001M16 12h.001M7 16h10"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const Back = (props) => (
    <svg
        width={20}
        height={17}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M8.5 16L1 8.5M1 8.5L8.5 1M1 8.5H19"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const Refresh = (props) => (
    <svg
        width={18}
        height={17}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M17 6.833S15.312 4.557 13.94 3.2A7.595 7.595 0 0 0 8.579 1C4.393 1 1 4.358 1 8.5 1 12.642 4.393 16 8.579 16c3.455 0 6.37-2.288 7.283-5.417M17 6.833v-5m0 5h-5.053"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const Footer = () => {
    const refreshRef = useRef(null)
    const [input, setInput] = useState(0)
    const navigate = useNavigate()
    const route = useLocation()

    return (
        <footer className="absolute bottom-0 w-full flex justify-between items-center px-5 pt-3 pb-10 bg-gradient-to-t [background:linear-gradient(to_bottom,transparent_0%,white_20%)]">
            <div className="w-10 h-10">
                {route.pathname !== routes.step1 &&
                    route.pathname !== routes.step2 &&
                    route.pathname !== routes.step3 &&
                    route.pathname !== "/analysis" && (
                        <button
                            className="w-10 h-10 flex justify-center items-center"
                            onClick={() => {
                                navigate(-1)
                            }}
                        >
                            <div className="w-8 h-8 z-10 flex justify-center items-center">
                                <Back />
                            </div>
                        </button>
                    )}
            </div>
            <div className="flex-1 flex justify-center items-center">
                <div className="flex gap-6 justify-evenly rounded-full px-4 py-3 bg-white drop-shadow-[0_0_1.5rem_rgba(0,0,0,0.2)] relative">
                    <div
                        className={`absolute rounded-full bg-blue w-16 h-16 top-1/2 -translate-y-1/2  transition transition-all duration-500 ${
                            input === 0 ? "-translate-x-7" : "translate-x-7"
                        }`}
                    ></div>
                    <button
                        className={`w-8 h-8 z-10 flex justify-center items-center transition duration-300 rounded-full ${
                            input === 0 ? "text-white" : "text-blue"
                        }`}
                        onClick={() => {
                            setInput(0)
                        }}
                    >
                        <MicrophoneIcon />
                    </button>
                    <button
                        className={`w-8 h-8 z-10 flex justify-center items-center transition duration-300 rounded-full ${
                            input === 1 ? "text-white" : "text-blue"
                        }`}
                        onClick={() => {
                            setInput(1)
                        }}
                    >
                        <KeyboardIcon />
                    </button>
                </div>
            </div>
            <Link to={routes.home}>
                <button
                    className="w-10 h-10 rounded-full bg-white drop-shadow-[0_0_1.5rem_rgba(0,0,0,0.2)] flex justify-center items-center"
                    onClick={() => {
                        refreshRef.current.className += "animate-spin"
                        setTimeout(() => {
                            refreshRef.current.className = ""
                        }, 1000)
                    }}
                >
                    <div className="w-8 h-8 z-10 flex justify-center items-center text-blue rounded-full">
                        <div ref={refreshRef}>
                            <Refresh />
                        </div>
                    </div>
                </button>
            </Link>
        </footer>
    )
}

export default Footer
