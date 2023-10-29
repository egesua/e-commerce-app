import { useEffect, useState } from "react";

const LoginPage = () => {
    
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
        rememberMe: false
    })

    const inputChangeHandler = (e) => {
        const { value } = e.target;
         setLoginFormData({ ...loginFormData, email: value
         });
    }

    const passChangeHandler = (e) => {
        const { value } = e.target;
        setLoginFormData({...loginFormData, password: value});
    }

    useEffect(() => {
        console.log("loginFormData: ", loginFormData)
    }, [loginFormData]); 

    return (
        <form onSubmit={() => {}} className="login-form">
            <label htmlFor="user-mail">Email</label>
            <input id="user-mail" type="email" onChange={inputChangeHandler}/>
            <label htmlFor="user-pass">Password</label>
            <input id="user-pass" type="password" />
            <label htmlFor="user-remember">Remember Me</label>
            <input id="user-remember" type="checkbox" />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginPage;