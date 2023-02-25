import "./App.css"
import { Link, Outlet } from "react-router-dom"
import Footer from "./components/common/Footer.jsx"
import Header from "./components/common/Header.jsx"
import Spinner from "./components/common/Spinner.jsx"
import { routes } from "./router/router.jsx"

function App() {
    return (
        <main className="h-full min-h-screen flex flex-col relative">
            <Header />

            <div className="overflow-y-scroll h-full min-h-screen pt-14 pb-20 scrollbar-hide">
                <div className="flex justify-between">
                    <Link to={routes.summary}>요약</Link>
                    <Link to={routes.recommend}>추천</Link>
                    <Link to={routes.furniture + "/3"}>가구</Link>
                </div>
                <Outlet />
            </div>
            <Spinner />
            <Footer />
        </main>
    )
}

export default App
