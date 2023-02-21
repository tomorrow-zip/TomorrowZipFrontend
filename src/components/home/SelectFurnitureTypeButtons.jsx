import { useAtomValue, useSetAtom } from "jotai"
import { useNavigate } from "react-router-dom"
import adotIcon from "../../assets/icon/button/furnitures/adot.png"
import bedIcon from "../../assets/icon/button/furnitures/bed.png"
import closetIcon from "../../assets/icon/button/furnitures/closet.png"
import sofaIcon from "../../assets/icon/button/furnitures/sofa.png"
import { furnitureTypeAtom } from "../../atoms/index.js"
import { routes } from "../../router/router.jsx"
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
const SelectFurnitureTypeButtons = () => {
    const navigate = useNavigate()
    const furnitureType = useAtomValue(furnitureTypeAtom)
    const setFurnitureType = useSetAtom(furnitureTypeAtom)
    return (
        <div className="max-w-full px-5 flex justify-start gap-2 overflow-x-scroll scrollbar-hide">
            {furnitures.map((furniture) => {
                return (
                    <Button
                        icon={furniture.icon}
                        onClick={() => {
                            setFurnitureType(furniture.id)
                            // console.log(furnitureType)
                            navigate(routes.step3)
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
