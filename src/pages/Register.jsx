import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import authActions from "../store/actions/auth-actions"
import Swal from "sweetalert2"

const Register = () => {
    const [count, setCount] = useState(0)

    const dispatch = useDispatch()



    let userDetails = useSelector((state) => {
        console.log(state, "statestatestate")
        return state.auth
    })

    const {
        register,
        setValues,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const registerCheck = (data) => {
        console.log(data, "registerCheck")
        if (data["password"] != data["confirmPassword"]) {
            Swal.fire({
                icon: "error",
                text: "Password & Confirm Password not matched."
            })
            return
        }

        delete data["confirmPassword"]

        dispatch(authActions.register(data, () => {
            navigate("/login")
        }))
    }

    const navigate = useNavigate()
    useEffect(() => {
        if (userDetails.userLogin) {
            navigate("/")
        } else {
            navigate("/register")
        }
    }, [userDetails.userLogin])

    return <>
        <div className="flex flex-col md:flex-row w-[100vw] items-center">
            <div className='flex flex-col items-center h-[30vh] md:h-[100vh] bg-primary text-center w-[100vw] md:w-[50vw] justify-center'>
                <h1 className='text-4xl my-2 text-white'>
                    Welcome to Online IDE
                </h1>
                <img src="https://cdn-ikppbmn.nitrocdn.com/QLWziJxEOcNvFbkWsKndovEaHwsajWLu/assets/images/optimized/rev-b2afe67/trigvent.com/wp-content/uploads/2022/12/logo1.png"/>
            </div>

            <div className='flex flex-col items-center w-[50vw]'>

                <h1 className="text-blue-400 pb-2">
                    Register
                </h1>


                <form onSubmit={handleSubmit(registerCheck)} className='flex flex-col w-72'>

                    <label className={errors.username ? "mt-0" : "mt-4"}>User Name</label>
                    <input className='border border-black bg-transparent w-full mx-auto rounded-md h-8 shadow-primary shadow-md' type="text" {...register("username", {
                        required: "User name is required"
                    })} />
                    {
                        errors.username && <p className="mt-1 text-red-600 text-xs">{errors.username.message}</p>
                    }
                    <label className={errors.email ? "mt-0" : "mt-4"}>Email</label>
                    <input className='border border-black bg-transparent w-full mx-auto rounded-md h-8 shadow-primary shadow-md' type="email" {...register("email", {
                        required: "Email is required"
                    })} />
                    {
                        errors.email && <p className="mt-1 text-red-600 text-xs">{errors.email.message}</p>
                    }
                    <label className={errors.phoneNumber ? "mt-0" : "mt-4"}>Phone Number</label>
                    <input className='border border-black bg-transparent w-full mx-auto rounded-md h-8 shadow-primary shadow-md' type="text" {...register("phoneNumber", {
                        required: "Phone Number is required"
                    })} />
                    {
                        errors.phoneNumber && <p className="mt-1 text-red-600 text-xs">{errors.phoneNumber.message}</p>
                    }
                    <label className={errors.password ? "mt-0" : "mt-4"}>Password</label>
                    <input className='border border-black bg-transparent w-full mx-auto rounded-md h-8 shadow-primary shadow-md' type="password" {...register("password", {
                        required: "Password is required"
                    })} />
                    {
                        errors.password && <p className="mt-1 text-red-600 text-xs">{errors.password.message}</p>
                    }
                    <label className={errors.confirmPassword ? "mt-0" : "mt-4"}>Confirm Password</label>
                    <input className='border border-black bg-transparent w-full mx-auto rounded-md h-8 shadow-primary shadow-md' type="password" {...register("confirmPassword", {
                        required: "Confirm Password is required"
                    })} />
                    {
                        errors.confirmPassword && <p className="mt-1 text-red-600 text-xs">{errors.confirmPassword.message}</p>
                    }
                    <div className="flex flex-col w-full mt-4">
                        <div className="flex flex-row w-full">
                            <input className='border mt-4 bg-transparent border-black w-10 rounded-md h-4' type="checkbox" {...register("privacyPolicy", {
                                required: "Privacy Policy is required"
                            })} />

                            <label className={"mt-3"}>I accept Privacy Policy...</label>
                        </div>
                        {
                            errors.privacyPolicy && <p className="mt-1 text-red-600 text-xs">{errors.privacyPolicy.message}</p>
                        }
                    </div>

                    <input type="submit" className='px-4 py-2 m-2 border border-black w-32 mx-auto my-2 bg-primary text-white' />
                </form>
                <h6 className="cursor-pointer" onClick={() => {
                    navigate("/login")
                }}>Already have an account</h6>
            </div>
        </div>
    </>
}

export default Register

