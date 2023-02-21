import { Link } from "react-router-dom"
import ExampleImg from "../../assets/img/clock.png"
import { routes } from "../../router/router.jsx"
import ListContainer from "../common/ListContainer.jsx"

const RecommendList = () => {
    return (
        <div className="flex flex-col gap-2 mx-4">
            <ListContainer>
                <Link to={routes.furniture}>
                    <div className="flex justify-between items-center gap-2 pl-4 pr-3 py-3">
                        <div>
                            <h3 className="font-bold mb-1">
                                이런 시계는 어때요?
                            </h3>

                            <div className="text-text-gray text-sm">
                                <div>무아스 플랫우드 무소음 벽시계</div>
                                <div>₩ 12,500</div>
                            </div>
                        </div>
                        <img
                            src={ExampleImg}
                            className="w-20 h-20 object-center object-cover rounded-lg"
                            alt="example"
                        />
                    </div>
                </Link>
            </ListContainer>
        </div>
    )
}

export default RecommendList
