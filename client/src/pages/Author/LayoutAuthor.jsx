import {Navbar} from "../../components/NavbarAuthor";
import {Link,Outlet} from "react-router-dom";

export const LayoutAuthor = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}