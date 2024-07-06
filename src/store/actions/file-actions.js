// import Swal from "sweetalert2"
import { ApiCaller } from "../../utilities/ApiCaller"
import { Urls } from "../../utilities/Constant"
import { LIST_DIRECTORY, VIEW_FILE, CLOSE_FILE, VIEW_README_FILE } from "../reducers/file-reducer"
import { toast } from "react-hot-toast";


const fileActions = {

    getListDirectory: () => async (dispatch, _) => {
        try {
            const resp = await ApiCaller.getCall(Urls.getDirectory)
            dispatch(LIST_DIRECTORY(resp.data.data))
        } catch (error) {
                
        }
    },
    viewFile: (data) => async (dispatch, _) => {
        try {
            const resp = await ApiCaller.postCall(Urls.viewFile,data)
            dispatch(CLOSE_FILE())
            console.log(resp.data,"resp.dataresp.data")
            dispatch(VIEW_FILE(resp.data.data))
        } catch (error) {

        }
    },
    viewReadmeFile: (data) => async (dispatch, _) => {
        try {
            const resp = await ApiCaller.postCall(Urls.readmeFilePreview,data)
            // dispatch(CLOSE_FILE())
            console.log(resp.data,"resp.dataresp.data")
            dispatch(VIEW_README_FILE(resp.data.data))
        } catch (error) {
            console.log(error.response.data.msg, "errorerrorerror")
            toast.error(error.response.data.msg)
        }
    },
    closeFile: (data) => async (dispatch, _) => {
        try {       
            dispatch(CLOSE_FILE())
        } catch (error) {

        }
    },
    saveFile: (filedata) => async (dispatch, _) => {
        try {       
            const resp = await ApiCaller.postCall(Urls.saveFile,filedata)
            // dispatch(VIEW_FILE(resp.data.data))
        } catch (error) {

        }
    },
    createDirectory: (data, cb) => async (dispatch, _) => {
        try {
            const resp = await ApiCaller.postCall(Urls.createDirectory, data)
            // dispatch(LIST_DIRECTORY(resp.data.data))
            toast.success(resp.data.msg)
            cb()
            dispatch(fileActions.getListDirectory())
        } catch (error) {

            console.log(error.response.data.msg, "errorerrorerror")
            toast.error(error.response.data.msg)

        }
    },
    createFile: (data,cb) => async (dispatch, _) => {
        try {
            const resp = await ApiCaller.postCall(Urls.createFile, data)
            // dispatch(LIST_DIRECTORY(resp.data.data))
            toast.success(resp.data.msg)
            cb()
            dispatch(fileActions.getListDirectory())
        } catch (error) {

            console.log(error.response.data.msg, "errorerrorerror")
            toast.error(error.response.data.msg)

        }
    }

}


export default fileActions