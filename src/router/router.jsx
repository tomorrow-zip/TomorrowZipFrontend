import { Navigate, createBrowserRouter, redirect } from "react-router-dom"
import App from "../App.jsx"
import RecommendButton from "../components/home/RecommendButton.jsx"
import SelectFurnitureTypeButtons from "../components/home/SelectFurnitureTypeButtons.jsx"
import UploadButtons from "../components/home/UploadButtons.jsx"
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
                        path: "",
                        element: <Navigate to="step1" />,
                    },
                    {
                        path: "step1",
                        element: <RecommendButton />,
                    },
                    {
                        path: "step2",
                        element: <SelectFurnitureTypeButtons />,
                    },
                    {
                        path: "step3",
                        element: <UploadButtons />,
                    },
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
    step1: "/step1",
    step2: "/step2",
    step3: "/step3",
    summary: "/summary",
    analysis: "/analysis",
    furniture: "/furniture",
    recommend: "/recommend",
}

export { router, routes }
