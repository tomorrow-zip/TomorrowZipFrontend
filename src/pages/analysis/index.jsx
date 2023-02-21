import AdotChat from "../../components/common/AdotChat.jsx"
import Analysis from "../../components/layout/Analysis.jsx"

const AnalysisPage = () => {
    return (
        <>
            <div className="py-4 select-none h-28 flex flex-col justify-center">
                <AdotChat>
                    안녕하세요. SKT FLY AI 내일의 집의 에이닷입니다.
                </AdotChat>
            </div>
            <div className="flex-1 "></div>
            <div className="absolute bottom-20 w-full max-h-[80%] overflow-y-scroll pb-12">
                <Analysis />
            </div>
        </>
    )
}

export default AnalysisPage
