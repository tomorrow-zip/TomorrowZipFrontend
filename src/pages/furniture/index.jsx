import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../../api/index.js"
// import ClockImage from "../../assets/img/clock.png"
import AdotChat from "../../components/common/AdotChat.jsx"
import Carousel from "../../components/furniture/Carousel.jsx"
import RecommendDetail from "../../components/layout/RecommendDetail.jsx"

// const images = [ClockImage, ClockImage, ClockImage, ClockImage]
const FurniturePage = () => {
    const productIdx = useParams()
    const [product, setProduct] = useState({
        productDescrip: "",
        productImgs: [],
        productName: "",
        productPrice: 0,
        productUrl: "",
        brand: "IKEA",
    })
    const onLoad = async () => {
        console.log(productIdx)
        const response = await getProduct(productIdx.furniture_idx)
        console.log()
        setProduct({ ...response?.data?.result })
    }
    useEffect(() => {
        onLoad()
    })
    return (
        <>
            <div className="py-4 select-none h-28 flex flex-col justify-center">
                <AdotChat>이런 가구를 추천해요!</AdotChat>
            </div>
            <div className="flex-1 "></div>
            <div className="absolute bottom-20 w-full h-full max-h-[calc(100%_-_14rem)] overflow-y-scroll pb-12">
                <div>
                    <Carousel images={product.productImgs} />
                </div>
                <RecommendDetail product={product} />
            </div>
        </>
    )
}

export default FurniturePage
