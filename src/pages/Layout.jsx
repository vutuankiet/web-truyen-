import {Navbar} from "../components/Navbar";
import {Link,Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}