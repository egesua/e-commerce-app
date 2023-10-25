import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="side-bar">
            <NavLink to="/" exact>Main Page</NavLink>
            <NavLink to="/products" exact>Products Page</NavLink>
            <NavLink to="/counter-page" exact>Counter Page</NavLink>
            <NavLink to="/login" exact>Login Page</NavLink>
        </div>
    )
}

export default SideBar;