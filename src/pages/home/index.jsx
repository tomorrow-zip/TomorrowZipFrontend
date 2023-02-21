import { useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { test } from "../../api/index.js"
import Adot from "../../assets/img/img.png"
import AdotChat from "../../components/common/AdotChat.jsx"

const Home = () => {
    const location = useLocation()
    return (
        <>
            <div className="py-4 select-none h-28 flex flex-col justify-center">
                <AdotChat>
                    {location.pathname === "/step1" &&
                        "안녕하세요. SKT FLY AI 내일의 집의 에이닷입니다."}
                    {location.pathname === "/step2" &&
                        "어떤 가구를 추천해드릴까요?"}
                    {location.pathname === "/step3" &&
                        "방 사진을 보여주시겠어요?"}
                    {location.pathname === "/summary" && "멋잇는 방인데요?"}
                </AdotChat>
            </div>

            <div
                className={`transition transition-all duration-300 flex flex-col justify-center ${
                    location.pathname === "/summary"
                        ? "h-[calc(100vh-30rem)]"
                        : "h-[calc(100vh-22rem)]"
                }`}
                onClick={test}
            >
                <img src={Adot} className="mx-auto max-h-full" alt="adot" />
            </div>

            <div className="absolute bottom-32 max-w-full left-1/2 -translate-x-1/2 transition-all duration-1000">
                <Outlet />
            </div>
        </>
    )
}
export default Home
