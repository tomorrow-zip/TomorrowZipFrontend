// import { Link } from "react-router-dom"
import ListContainer from "../common/ListContainer.jsx"
const ARIcon = (props) => (
    <svg
        width={20}
        height={21}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m19 6-2.25-1.313M19 6v2.25M19 6l-2.25 1.313M1 6l2.25-1.313M1 6l2.25 1.313M1 6v2.25m9 3 2.25-1.313M10 11.25 7.75 9.937M10 11.25v2.25m0 6.75 2.25-1.313M10 20.25V18m0 2.25-2.25-1.313m0-16.875L10 .75l2.25 1.313M19 12.75V15l-2.25 1.313m-13.5 0L1 15v-2.25"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const ChevronRightIcon = (props) => (
    <svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m.875 1.25 6.25 6.25-6.25 6.25"
            stroke="#787A88"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)
const RecommendDetail = ({ product, idx }) => {
    return (
        <div className="flex flex-col gap-2 mx-4">
            <ListContainer>
                <div className="px-4 py-3">
                    <h3 className="font-bold mb-1">{product.productName}</h3>
                    <div className="text-text-gray text-sm">
                        <div>{product.brand}</div>
                        <div>₩{product?.productPrice?.toLocaleString()}</div>
                    </div>
                </div>
            </ListContainer>
            <ListContainer>
                <a
                    href={product.productUrl}
                    className="flex justify-between items-center gap-2 pl-4 pr-3 py-3 block"
                >
                    <div>
                        <h3 className="font-bold mb-1">구매하러 가기</h3>
                        <div className="text-text-gray text-sm">이케아</div>
                    </div>
                    <div className="text-[#787A88]">
                        <ChevronRightIcon />
                    </div>
                </a>
            </ListContainer>
            {idx >= 3 && idx < 503 ? (
                <a href={`/3d/${idx}`}>
                    <ListContainer>
                        <div className="flex justify-between items-center gap-2 pl-4 pr-3 py-3">
                            <div>
                                <h3 className="font-bold mb-1">
                                    3D로 배치해보기
                                </h3>
                                <div className="text-text-gray text-sm">
                                    3D를 통해서 집에 어울리는지 확인해볼까요?
                                </div>
                            </div>

                            <div className="rounded-full bg-[#D7D9DC] p-2 text-[#787A88]">
                                <ARIcon />
                            </div>
                        </div>
                    </ListContainer>
                </a>
            ) : (
                <div
                    onClick={() => {
                        alert("아직 3d 모델이 준비되지 않은 상품입니다.")
                    }}
                >
                    <ListContainer>
                        <div className="flex justify-between items-center gap-2 pl-4 pr-3 py-3">
                            <div>
                                <h3 className="font-bold mb-1">
                                    3D로 배치해보기
                                </h3>
                                <div className="text-text-gray text-sm">
                                    3D를 통해서 집에 어울리는지 확인해볼까요?
                                </div>
                            </div>

                            <div className="rounded-full bg-[#D7D9DC] p-2 text-[#787A88]">
                                <ARIcon />
                            </div>
                        </div>
                    </ListContainer>
                </div>
            )}
            <ListContainer>
                <div className="px-4 py-3">
                    <h3 className="font-bold mb-1">상품 설명</h3>
                    <div className="text-text-gray text-sm">
                        {product.productDescrip}
                    </div>
                </div>
            </ListContainer>
        </div>
    )
}

export default RecommendDetail
