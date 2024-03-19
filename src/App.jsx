import { createHashRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";

const router = createHashRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            { index: true, element: <MainPage /> },
            { path: "/about", element: <AboutPage /> },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
export default App;
