import { useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Adot from "../../assets/img/img.png"
import AdotChat from "../../components/common/AdotChat.jsx"
import RecommendButton from "../../components/home/RecommendButton.jsx"
import SelectFurnitureTypeButtons from "../../components/home/SelectFurnitureTypeButtons.jsx"
import UploadButtons from "../../components/home/UploadButtons.jsx"

const Home = () => {
    const [step, setStep] = useState(0)
    const [type, setType] = useState(0)
    const location = useLocation()
    return (
        <>
            <div className="py-4 select-none">
                <AdotChat>
                    {step === 0 &&
                        "안녕하세요.SKT FLY AI 내일의 집의 에이닷입니다."}
                    {step === 1 && "어떤 가구를 추천해드릴까요?"}
                    {step === 2 && "방 사진을 보여주시겠어요?"}
                </AdotChat>
            </div>
            <div className="flex-1 ">
                <img
                    src={Adot}
                    className="transition duration-300 scale-100 mx-auto"
                    alt="adot"
                    // style={{ height: "auto" }}
                />
            </div>
            <div className="absolute bottom-32 w-full">
                {location.pathname === "/" && (
                    <div className="flex justify-center">
                        {step === 0 && (
                            <RecommendButton next={() => setStep(1)} />
                        )}
                        {step === 1 && (
                            <SelectFurnitureTypeButtons
                                next={() => setStep(2)}
                                setType={setType}
                            />
                        )}
                        {step === 2 && <UploadButtons type={type} />}
                    </div>
                )}
                <Outlet />
            </div>
        </>
    )
}
export default Home
