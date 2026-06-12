import Login from "./Login";
import Header from "./Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Browse from "./Browse";

function Main() {
    return (
        <div className="scrollbar-hide">
            <Header />
            <Outlet />
        </div>
    );
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Login />
            },
            {
                path: "/browse",
                element: <Browse />
            }
        ]
    }
]);

export default appRouter;