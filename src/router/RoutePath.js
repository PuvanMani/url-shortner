import About from "../pages/Static Pages/About";
import AdPage from "../pages/Static Pages/adpage";
import IndexPage from "../pages/Static Pages/home";




let RoutePaths = [
    { path: "/", element: <IndexPage /> },
    { path: "/about", element: <About /> },
    { path: "/adpage", element: <AdPage /> },
]


export default RoutePaths;
