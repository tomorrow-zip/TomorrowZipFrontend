import adotIcon from "../../assets/icon/button/furnitures/adot.png"
import bedIcon from "../../assets/icon/button/furnitures/bed.png"
import closetIcon from "../../assets/icon/button/furnitures/closet.png"
import sofaIcon from "../../assets/icon/button/furnitures/sofa.png"
import Button from "./Button.jsx"

const furnitures = [
    {
        id: 0,
        text: "에이닷이 추천해줘",
        icon: adotIcon,
    },
    {
        id: 1,
        text: "침대",
        icon: bedIcon,
    },
    {
        id: 2,
        text: "소파",
        icon: sofaIcon,
    },
    {
        id: 3,
        text: "옷장",
        icon: closetIcon,
    },
]
const SelectFurnitureTypeButtons = ({ next, setType }) => {
    return (
        <div className="px-5 flex justify-start gap-2 overflow-x-scroll scrollbar-hide">
            {furnitures.map((furniture) => {
                return (
                    <Button
                        icon={furniture.icon}
                        onClick={() => {
                            setType(furniture.id)
                            next()
                        }}
                        key={furniture.text + furniture.id}
                    >
                        {furniture.text}
                    </Button>
                )
            })}
        </div>
    )
}

export default SelectFurnitureTypeButtons
