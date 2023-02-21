import { Link } from "react-router-dom"
import ExampleImg from "../../assets/img/example.jpeg"
import ListContainer from "../common/ListContainer.jsx"

const ChevronIcon = (props) => (
    <svg
        width={9}
        height={14}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m1.375.75 6.25 6.696-6.25 5.804"
            stroke="#000"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const AnalysisSummary = () => {
    return (
        <div className=" w-screen">
            <ListContainer className="mx-4">
                <div className="flex justify-between items-center gap-2 px-5 py-4">
                    <div>
                        <h3 className="text-lg font-bold">
                            집을 분석해봤어요!
                        </h3>
                        <div className="text-text-gray text-sm">
                            <div>사진을 바탕으로 집을 분석해봤어요!</div>
                            <div>
                                <span className="font-bold">아늑함</span> 78.8%
                            </div>
                            <div>
                                <span className="font-bold">모던 인테리어</span>{" "}
                                91.2%
                            </div>
                            <div>
                                <span className="font-bold">베이지 톤</span>{" "}
                                65.3%
                            </div>
                        </div>
                    </div>
                    <img
                        src={ExampleImg}
                        className="w-28 h-28 object-center object-cover rounded-lg"
                        alt="example"
                    />
                </div>
                <Link to={"/analysis"}>
                    <button className="w-full border-t border-border px-5 py-3 text-center flex justify-center items-center gap-2.5">
                        <span className="text-sm">자세히 살펴보기</span>
                        <ChevronIcon />
                    </button>
                </Link>
            </ListContainer>
        </div>
    )
}

export default AnalysisSummary
