import { useState } from "react"
import bed from "../../assets/icon/button/bed.png"
import Adot from "../../assets/img/img.png"
import AdotChat from "../../components/common/AdotChat.jsx"
import Button from "../../components/main/Button.jsx"

const Home = () => {
    const [step, setStep] = useState(0)

    return (
        <>
            <div className="py-4 select-none">
                <AdotChat>
                    안녕하세요. SKT FLY AI 내일의 집의 에이닷입니다.
                </AdotChat>
            </div>
            <div className="flex-1 ">
                <img
                    src={Adot}
                    className="transition duration-300 scale-100 mx-auto"
                    // style={{ height: "auto" }}
                />
            </div>
            <div className="py-2.5">
                <div className="px-5 flex justify-start gap-2 overflow-x-scroll scrollbar-hide">
                    {step === 0 && (
                        <Button
                            icon={bed}
                            onClick={() => {
                                setStep(1)
                            }}
                        >
                            가구 추천해줘
                        </Button>
                    )}
                    {step === 1 && (
                        <>
                            <Button
                                icon={bed}
                                onClick={() => {
                                    setStep(2)
                                }}
                            >
                                에이닷이 추천해줘
                            </Button>
                            <Button
                                icon={bed}
                                onClick={() => {
                                    setStep(2)
                                }}
                            >
                                침대
                            </Button>
                            <Button
                                icon={bed}
                                onClick={() => {
                                    setStep(2)
                                }}
                            >
                                책장
                            </Button>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <Button
                                icon={bed}
                                onClick={() => {
                                    setStep(1)
                                }}
                            >
                                지금 사진 찍기
                            </Button>
                            <Button
                                icon={bed}
                                onClick={() => {
                                    setStep(1)
                                }}
                            >
                                앨범에서 고르기
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
export default Home
