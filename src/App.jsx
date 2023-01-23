import "./App.css"
import bed from "./assets/icon/button/bed.png"
import Adot from "./assets/img/img.png"
import AdotChat from "./components/common/AdotChat.jsx"
import Footer from "./components/common/Footer.jsx"
import Header from "./components/common/Header.jsx"
// import ListContainer from "./components/common/ListContainer.jsx"
import Button from "./components/main/Button.jsx"
function App() {
    return (
        <main className="h-full min-h-screen flex flex-col">
            <Header />
            <div className="overflow-y-scroll flex-1 flex flex-col ">
                {/*<div className="h-14"></div>*/}
                <div className="py-4">
                    <AdotChat>
                        안녕하세요. SKT FLY AI 내일의 집의 에이닷입니다.
                    </AdotChat>
                </div>
                <div className="flex-1 ">
                    <img
                        src={Adot}
                        className="transition duration-300 h-80 scale-100 mx-auto"
                        // style={{ height: "auto" }}
                    />
                </div>
                <div className="flex justify-center px-5 py-2.5">
                    <Button icon={bed}>가구 추천해줘</Button>
                </div>
            </div>
            {/*<ListContainer>음음음음음음음음음음음음</ListContainer>*/}
            <div className="h-24"></div>
            <Footer />
        </main>
    )
}

export default App
