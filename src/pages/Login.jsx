import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import authActions from "../store/actions/auth-actions"
import Swal from "sweetalert2"

const Login = () => {
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


    const loginCheck = (data) => {
        console.log(data, "loginCheck")
        
        dispatch(authActions.login(data, () => {
            navigate("/")
        }))
    }

    const navigate = useNavigate()


    useEffect(() => {
        if (userDetails.userLogin) {
            navigate("/")
        } else {
            navigate("/login")
        }
    }, [userDetails.userLogin])


    return <>
    <div className="flex flex-col md:flex-row h-[100vh] w-[100vw] items-center">
            <div className='flex flex-col items-center h-[50vh] md:h-[100vh] bg-primary text-center w-[100vw] md:w-[50vw] justify-center'>
                <h1 className='text-4xl my-2 text-white'>
                    Welcome to Online IDE
                </h1>
                <img src="https://cdn-ikppbmn.nitrocdn.com/QLWziJxEOcNvFbkWsKndovEaHwsajWLu/assets/images/optimized/rev-b2afe67/trigvent.com/wp-content/uploads/2022/12/logo1.png"/>
            </div>

            <div className='flex flex-col items-center w-[50vw]'>

                <h1 className="text-blue-400 pb-2">
                    Login
                </h1>


                <form onSubmit={handleSubmit(loginCheck)} className='flex flex-col w-72'>
                    <label className={errors.username ? "mt-0" : "mt-4"}>Email</label>
                    <input className='border border-black bg-transparent w-full mx-auto rounded-md h-8 shadow-primary shadow-md' type="text" {...register("email", {
                        required: "Email is required"
                    })} />
                    {
                        errors.username && <p className="mt-1 text-red-600 text-xs">{errors.username.message}</p>
                    }
                    <label className={errors.password ? "mt-0" : "mt-4"}>Password</label>
                    <input className='border border-black bg-transparent w-full mx-auto rounded-md h-8 shadow-primary shadow-md' type="password" {...register("password", {
                        required: "Password is required"
                    })} />
                    {
                        errors.password && <p className="mt-1 text-red-600 text-xs">{errors.password.message}</p>
                    }

                    <input type="submit" className='border border-black w-16 mx-auto my-2 bg-blue-400 text-white' />
                </form>
                <h6 className="cursor-pointer" onClick={() => {
                    navigate("/register")
                }}>I don`t have an account</h6>
            </div>
        </div>
    </>
}

export default Login

