import "./App.css"
import { Outlet } from "react-router-dom"
import Footer from "./components/common/Footer.jsx"
import Header from "./components/common/Header.jsx"
import Spinner from "./components/common/Spinner.jsx"

function App() {
    return (
        <main className="h-full min-h-screen flex flex-col relative">
            <Header />
            <div className="overflow-y-scroll h-full min-h-screen pt-14 pb-20 scrollbar-hide">
                <Outlet />
            </div>
            <Spinner />
            <Footer />
        </main>
    )
}

export default App
