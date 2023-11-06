import { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";
import useInput from "../hooks/useInput";

const Header = () => {

    const [savedUserName, setSavedUserName] = useState(() => localStorage.getItem("user-name"));
    const [userName, inputChangeHandler] = useInput("")

    const saveUsername = () => {
        localStorage.setItem("user-name", userName)
        setSavedUserName(userName);
    };
    const forgetAboutMe = () => {
        localStorage.removeItem("user-name")
        setSavedUserName("");
    }

    useEffect(() => {
        //componentDidMount
    }, []);

    useEffect(() => {
        //componentDidUpdate
    });

    useEffect(() => {
        //userName state changes
    },[userName]);

    return(
        <header className="page-header">
            <h1>
                Welcome to my page {savedUserName}. 
            </h1>
            {!savedUserName && (
            <div className="d-flex">
            <Input type="text" onChange={inputChangeHandler} placeholder="Please enter your name..."/>
            <Button onClick={saveUsername}>Save</Button>
            </div>
    )}
    {savedUserName && <Button onClick={forgetAboutMe}>Forget</Button>}
        </header>
    )
}

export default Header;