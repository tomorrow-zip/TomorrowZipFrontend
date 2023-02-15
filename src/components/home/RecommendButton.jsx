import recommend from "../../assets/icon/button/recommend/recommend.png"
import Button from "./Button.jsx"

const RecommendButton = ({ next }) => {
    return (
        <div className="flex justify-center items-center">
            <Button
                icon={recommend}
                onClick={() => {
                    next()
                }}
            >
                가구 추천해줘
            </Button>
        </div>
    )
}

export default RecommendButton
