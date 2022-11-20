import React from "react"
import ReactDOM from "react-dom/client"
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom"

import "./index.css"

import Home from "./views/Home"
import About from "./views/About"
import Contact from "./views/Contact"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/about",
        element: <About></About>,
    },
    {
        path: "/contact",
        element: <Contact></Contact>,
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);