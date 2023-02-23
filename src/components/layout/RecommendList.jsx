import { useAtomValue } from "jotai"
import { Link } from "react-router-dom"
import ExampleImg from "../../assets/img/clock.png"
import { analysisAtom } from "../../atoms/index.js"
import { routes } from "../../router/router.jsx"
import ListContainer from "../common/ListContainer.jsx"

const RecommendList = () => {
    const analysis = useAtomValue(analysisAtom)
    return (
        <div className="flex flex-col gap-2 mx-4">
            {analysis.recommend_list.map((item, idx) => {
                return (
                    <ListContainer key={item.name + idx}>
                        <Link to={`${routes.furniture}/${item.furniture_idx}`}>
                            <div className="flex justify-between items-center gap-2 pl-4 pr-3 py-3">
                                <div>
                                    <h3 className="font-bold mb-1">
                                        이런 가구는 어때요?
                                    </h3>

                                    <div className="text-text-gray text-sm">
                                        <div>{item.name}</div>
                                        <div>
                                            ₩ {item.price.toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={item.image}
                                    className="w-20 h-20 object-center object-cover rounded-lg bg-white"
                                    alt="example"
                                />
                            </div>
                        </Link>
                    </ListContainer>
                )
            })}
        </div>
    )
}

export default RecommendList
