import { useAtomValue } from "jotai"
import { Link } from "react-router-dom"
// import ExampleImg from "../../assets/img/example.jpeg"
import { analysisAtom, imageAtom } from "../../atoms/index.js"
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
    const analysis = useAtomValue(analysisAtom)
    const image = useAtomValue(imageAtom)
    return (
        <div className="flex flex-col justify-between gap-2 mx-4 pt-8">
            <ListContainer>
                <div className="px-5 py-4">
                    <img
                        src={image.path}
                        className="aspect-square w-full object-center object-cover rounded-lg"
                        alt="example"
                    />
                    <div className="mt-4">
                        <h3 className="text-lg font-bold">
                            집을 분석해봤어요!
                        </h3>
                        <div className="text-text-gray text-sm">
                            <div>사진을 바탕으로 집을 분석해봤어요!</div>
                            {analysis.length === 0 && (
                                <div className="">발견된 가구가 없습니다.</div>
                            )}
                            {analysis.style
                                .sort((a, b) => {
                                    return (
                                        Number(b.probability) -
                                        Number(a.probability)
                                    )
                                })
                                .map((style, idx) => {
                                    return (
                                        <div key={style.label + idx}>
                                            <span className="font-bold">
                                                {style.label}
                                            </span>{" "}
                                            {Math.round(
                                                style.probability * 10000
                                            ) / 100}
                                            %
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
                        {analysis.length === 0 && (
                            <div className="col-span-4">
                                발견된 가구가 없습니다.
                            </div>
                        )}
                        {analysis.detect.map((object) => {
                            return (
                                <div key={`detection${object.idx}`}>
                                    <img
                                        src={object.img_path}
                                        className="aspect-square w-full object-center object-cover rounded-lg"
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
