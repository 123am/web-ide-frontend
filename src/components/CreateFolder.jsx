import { FaFile } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { useDispatch } from "react-redux";
import fileActions from "../store/actions/file-actions";
import Modal from "./Modal";
import { useState } from "react";
import FileName from "./FileName";
import toast from "react-hot-toast";

const CreateFolder = ({ type }) => {
    const [open, setOpen] = useState(false)
    const [fName, setfName] = useState({
        fname: "",
        ext: ""
    })
    const dispatch = useDispatch()

    const fileCreation = () => {

        console.log(fName,"fNamefName")

        if(fName.fname==""){
            toast.error("Folder name is requireed")
            return 
        }
        console.log(fName, "fNamefName", type)
        type = {
            ...type,
            "fName": fName.fname
        }
        dispatch(fileActions.createDirectory(type,()=>setOpen(prev => !prev)))
        // console.log(accType.path, "accTypeaccType")
    }


    console.log(fName, "fNamefNamefNamefName")
    return <>

        <span
            onClick={() => {
                setOpen(prev => !prev)
                setfName({
                    fname: "",
                    ext: ""
                })
            }}
            className="p-1 border border-bordercolor m-0 text-col">
            <FaFolder />
        </span>


        <Modal
            setOpen={setOpen}
            open={open}
            child={
                <FileName
                    fName={fName}
                    setfName={setfName}
                    submitFun={() => { fileCreation() }}
                    label={"Folder Name"}
                    btnName={"Create Folder"}
                    placeholder={"Enter a folder name........."}
                />
            }
        />
    </>
}

export default CreateFolder;