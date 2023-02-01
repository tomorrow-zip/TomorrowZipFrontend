// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter } from "react-router-dom"
import App from "../App.jsx"
import Home from "../pages/home/index.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
])

const routes = {
    home: "/",
    analysis: "/analysis",
    furniture: "/furniture",
    recommend: "/recommend",
}

export { router, routes }
