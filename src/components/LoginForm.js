import { useForm } from "react-hook-form";

const LoginForm = () => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            password:""
        },
    });

    const onFormSubmit = (formdata) => {
        console.log("formdata :", formdata)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label>
                    User:
                    <input type="email" { ...register("email") }/>
                </label>
                <label>
                    Password:
                    <input type="password" {...register("password")}/>
                </label>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LoginForm;