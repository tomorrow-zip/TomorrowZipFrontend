import AdotChat from "../../components/common/AdotChat.jsx"
import RecommendList from "../../components/layout/RecommendList.jsx"

const RecommendPage = () => {
    return (
        <>
            <div className="py-4 select-none h-28 flex flex-col justify-center">
                <AdotChat>이런 가구들이 있으면 더 좋을 것 같아요!</AdotChat>
            </div>
            <div className="flex-1 "></div>
            <div className="absolute bottom-20 w-full h-full max-h-[calc(100%_-_14rem)] overflow-y-scroll pt-6 pb-12">
                <RecommendList />
            </div>
        </>
    )
}

export default RecommendPage
