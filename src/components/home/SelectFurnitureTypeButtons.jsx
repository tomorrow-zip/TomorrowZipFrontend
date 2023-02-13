import bed from "../../assets/icon/button/bed.png"
import Button from "./Button.jsx"

const SelectFurnitureTypeButtons = ({ next }) => {
    return (
        <div className="px-5 flex justify-start gap-2 overflow-x-scroll scrollbar-hide">
            <Button
                icon={bed}
                onClick={() => {
                    next()
                }}
            >
                에이닷이 추천해줘
            </Button>
            <Button
                icon={bed}
                onClick={() => {
                    next()
                }}
            >
                침대
            </Button>
            <Button
                icon={bed}
                onClick={() => {
                    next()
                }}
            >
                책장
            </Button>
        </div>
    )
}

export default SelectFurnitureTypeButtons
