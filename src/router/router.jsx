import { createBrowserRouter } from "react-router-dom"
import App from "../App.jsx"
import AnalysisSummary from "../components/layout/AnalysisSummary.jsx"
import AnalysisPage from "../pages/analysis/index.jsx"
import FurniturePage from "../pages/furniture/index.jsx"
import Home from "../pages/home/index.jsx"
import RecommendPage from "../pages/recommend/index.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
                children: [
                    {
                        path: "summary",
                        element: <AnalysisSummary />,
                    },
                ],
            },
            {
                path: "/analysis",
                element: <AnalysisPage />,
            },
            {
                path: "/recommend",
                element: <RecommendPage />,
            },
            {
                path: "/furniture",
                element: <FurniturePage />,
            },
        ],
    },
])

const routes = {
    home: "/",
    summary: "/summary",
    analysis: "/analysis",
    furniture: "/furniture",
    recommend: "/recommend",
}

export { router, routes }
