import { useAtomValue } from "jotai"
import { loadingAtom } from "../../atoms/index.js"

const SvgSpinner = (props) => (
    <svg
        width={44}
        height={44}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M40.92 22c1.701 0 3.102 1.386 2.865 3.07A22 22 0 1 1 18.93.215C20.614-.022 22 1.38 22 3.08c0 1.701-1.392 3.05-3.06 3.379A15.84 15.84 0 1 0 37.54 25.06C37.871 23.39 39.22 22 40.92 22Z"
            fill="#2F45E6"
        />
    </svg>
)

const Spinner = () => {
    const loading = useAtomValue(loadingAtom)

    return (
        <div
            className={`fixed top-0 left-0 h-full min-h-screen w-full z-10 transition duration-300 select-none ${
                !loading && "hidden"
            }`}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-black bg-opacity-10 w-20 h-20 rounded-[1.75rem]">
                <SvgSpinner
                    className="animate-loading"
                    role="status"
                ></SvgSpinner>
                <span className="hidden">Loading...</span>
            </div>
        </div>
    )
}
export default Spinner
