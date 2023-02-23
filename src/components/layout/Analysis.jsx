import { useAtom } from "jotai/react"
import { Link } from "react-router-dom"
import ExampleImg from "../../assets/img/example.jpeg"
import { analysisAtom } from "../../atoms/index.js"
import { routes } from "../../router/router.jsx"
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

const Analysis = () => {
    const [analysis, setAnalysis] = useAtom(analysisAtom)

    return (
        <div className="flex flex-col justify-between gap-2 mx-4 pt-8">
            <ListContainer>
                <div className="px-5 py-4">
                    <img
                        src={ExampleImg}
                        className="aspect-square w-full object-center object-cover rounded-lg"
                        alt="example"
                    />
                    <div className="mt-4">
                        <h3 className="text-lg font-bold">
                            집을 분석해봤어요!
                        </h3>
                        <div className="text-text-gray text-sm">
                            <div>사진을 바탕으로 집을 분석해봤어요!</div>
                            {analysis.style.map((style, idx) => {
                                return (
                                    <div key={style.label + idx}>
                                        <span className="font-bold">
                                            {style.label}
                                        </span>{" "}
                                        {style.probability * 100}%
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </ListContainer>
            <ListContainer>
                <div className="px-5 py-4">
                    <h3 className="text-lg font-bold mb-2">
                        이런 가구들이 발견되었어요.
                    </h3>
                    <div className="grid grid-cols-4 gap-2">
                        {analysis.detect.map((object, idx) => {
                            return (
                                <div key={`detection${object.idx}`}>
                                    <img
                                        src={object.img_path}
                                        className="aspect-square w-full object-center object-cover rounded-lg border border-red-500"
                                        alt="example"
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </ListContainer>
            <ListContainer>
                <Link to={routes.recommend}>
                    <button className="w-full px-5 py-3 text-center flex justify-center items-center gap-2.5">
                        <span className="text-sm">
                            AI가 추천하는 가구 살펴보기
                        </span>
                        <ChevronIcon />
                    </button>
                </Link>
            </ListContainer>
        </div>
    )
}

export default Analysis
