import "./App.css"
import { Outlet } from "react-router-dom"
// import bed from "./assets/icon/button/bed.png"
// import ExampleImg from "./assets/img/example.jpeg"
// import Adot from "./assets/img/img.png"
// import AdotChat from "./components/common/AdotChat.jsx"
import Footer from "./components/common/Footer.jsx"
import Header from "./components/common/Header.jsx"
// import ListContainer from "./components/common/ListContainer.jsx"
// import Analysis from "./components/layout/Analysis.jsx"
// import AnalysisSummary from "./components/layout/AnalysisSummary.jsx"
// import RecommendList from "./components/layout/RecommendList.jsx"
// import Button from "./components/main/Button.jsx"
function App() {
    return (
        <main className="h-full min-h-screen flex flex-col relative">
            <Header />
            <div className="overflow-y-scroll h-full min-h-screen pt-14 pb-20 scrollbar-hide">
                {/*<div className="px-4 py-2 overflow-y-scroll">*/}
                {/*    /!*<AnalysisSummary />*!/*/}
                {/*    /!*<Analysis />*!/*/}
                {/*    <RecommendList />*/}
                <Outlet />
            </div>

            {/*<div className="h-24"></div>*/}
            <Footer />
        </main>
    )
}

export default App
