import { useForm } from "react-hook-form";
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import FormInput from "./atoms/FormInput";
import { toast } from "react-toastify";
import axios from "axios";

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        defaultValues: {
            email: "",
            password:"",
            rememberMe: false
        },
        mode: "all"
    });

    const onFormSubmit = (formdata) => {
        console.log("formdata :", formdata)
        toast("Checking !");

        axios.post("non-existence-url.com", formdata).then(res => {})
        .catch((err) => {
            toast.error("Error encountered while logging in!")
        })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onFormSubmit)}>
                <FormGroup>
                    <Label>
                        User:
                    </Label>
                    <FormInput type="email"
                        name={"email"}
                        register={register}
                        validations={{
                            required: "You must enter an email!",
                            pattern: {
                                value: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Email is invalid."
                            },
                        }}
                        invalid={!!errors.email?.message} />

                    <FormFeedback>{errors.email?.message}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Password:
                    </Label>
                    <FormInput type="password"
                        name={"password"}
                        register={register}
                        validations={{
                            required: "You must enter a password!",
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/,
                                message: "Password is invalid."
                            }
                        }}
                        invalid={!!errors.password?.message} />

                    <FormFeedback>{errors.password?.message}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Remember Me:
                    </Label>
                    <FormInput type="checkbox"
                        name={"rememberMe"} register={register} />

                </FormGroup>
                <Button type="submit" color="primary"
                    formNoValidate="formnovalidate"
                    value="Log in"
                    disabled={!isValid}>Log In</Button>
            </Form>
        </div>
    )
}

export default LoginForm;