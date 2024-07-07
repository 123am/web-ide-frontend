import Swal from "sweetalert2"
import { ApiCaller } from "../../utilities/ApiCaller"
import { Urls } from "../../utilities/Constant"
import { LIST_ROLE, LOGIN, LOGOUT } from "../reducers/auth-reducer"


const authActions = {
    login:(data,cb) => async(dispatch,_) => {
        try{
            const resp = await ApiCaller.postCall(Urls.login,data)
            dispatch(LOGIN(resp.data.data.user))
            cb()
        } catch(error){
            console.log(error,"resprespresp")
            let resp=error.response
            console.log(resp,"resprespresp")
            Swal.fire({
                icon:"error",
                text:resp?.data?.msg
            })
        }
    },
    logout:() => async(dispatch,_) => {
        try{
            dispatch(LOGOUT())
        } catch(error){
            console.log(error,"resprespresp")
            let resp=error.response
            console.log(resp,"resprespresp")
            Swal.fire({
                icon:"error",
                text:resp?.data?.msg
            })
        }
    },
    register:(data,cb) => async(dispatch,_) => {
        try{
            const resp = await ApiCaller.postCall(Urls.register,data)
            // console.log(resp>.data,"dsahgdjsajdas")

            if(resp.status!=201){
                Swal.fire({
                    icon:"error",
                    text:resp?.data?.msg
                })
            }else{
                Swal.fire({
                    icon:"info",
                    text:resp?.data?.msg
                })
                cb()
            }

        } catch(error){
            let resp=error.response
            Swal.fire({
                icon:"error",
                text:resp?.data?.msg
            })
        }
    },
    dashboard:() => async(dispatch,_) => {
        try{

            console.log(ApiCaller.getCall,"ApiCaller.getCall")
            const resp = await ApiCaller.getCall(Urls.dashboard)
            console.log(resp,"dsahgdjsajdas")
            


        } catch(error){

        }
    }

}


export default authActions