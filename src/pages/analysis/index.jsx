import { useEffect, useState } from "react"
import { Transition } from "@headlessui/react"
import Analysis from "../../components/layout/Analysis.jsx"

const AnalysisPage = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(false)
        setShow(true)
    }, [])

    return (
        <>
            {/*<div className="py-4 select-none h-28 flex flex-col justify-center"></div>*/}
            {/*<div className="flex-1 "></div>*/}
            <div className="">
                <Transition
                    show={show}
                    enter="transition-all duration-500"
                    enterFrom="h-0"
                    enterTo="h-full"
                    className="absolute bottom-20 w-full h-full max-h-[calc(100%_-_6rem)] pb-8 overflow-y-scroll"
                >
                    <Analysis />
                </Transition>
            </div>
        </>
    )
}

export default AnalysisPage
