import { Link } from "react-router-dom"
import recommend from "../../assets/icon/button/recommend/recommend.png"
import { routes } from "../../router/router.jsx"
import Button from "./Button.jsx"

const RecommendButton = () => {
    return (
        <div className="flex justify-center items-center">
            <Link to={routes.step2}>
                <Button icon={recommend}>가구 추천해줘</Button>
            </Link>
        </div>
    )
}

export default RecommendButton
