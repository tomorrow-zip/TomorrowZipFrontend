import AdotChat from "../../components/common/AdotChat.jsx"
import RecommendList from "../../components/layout/RecommendList.jsx"

const RecommendPage = () => {
    return (
        <>
            <div className="py-4 select-none">
                <AdotChat>이런 가구들이 있으면 더 좋을 것 같아요!</AdotChat>
            </div>
            <div className="flex-1 "></div>
            <div className="absolute bottom-20 w-full h-[70%] max-h-[70%] overflow-y-scroll pt-6 pb-12">
                <RecommendList />
            </div>
        </>
    )
}

export default RecommendPage
