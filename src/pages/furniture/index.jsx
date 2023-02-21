import ClockImage from "../../assets/img/clock.png"
import AdotChat from "../../components/common/AdotChat.jsx"
import Carousel from "../../components/furniture/Carousel.jsx"
import RecommendDetail from "../../components/layout/RecommendDetail.jsx"

const images = [ClockImage, ClockImage, ClockImage, ClockImage]
const FurniturePage = () => {
    return (
        <>
            <div className="py-4 select-none h-28 flex flex-col justify-center">
                <AdotChat>이런 가구를 추천해요!</AdotChat>
            </div>
            <div className="flex-1 "></div>
            <div className="absolute bottom-20 w-full h-[70%] max-h-[70%] overflow-y-scroll pb-12">
                <div>
                    <Carousel images={images} />
                </div>
                <RecommendDetail />
            </div>
        </>
    )
}

export default FurniturePage
