import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import LayoutApp from "../layout/LayoutApp";
import About from "../components/About/About";
import Service from "../components/Service/Service";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import NotFound from "../components/NotFound/NotFound";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <LayoutApp/>,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/service",
                element: <Service />,
            },
            {
                path: "/experience",
                element: <Experience />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ]
    }
]);