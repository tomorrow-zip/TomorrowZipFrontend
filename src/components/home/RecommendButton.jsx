import bed from "../../assets/icon/button/bed.png"
import Button from "./Button.jsx"

const RecommendButton = ({ next }) => {
    return (
        <div className="flex justify-center items-center">
            <Button
                icon={bed}
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
