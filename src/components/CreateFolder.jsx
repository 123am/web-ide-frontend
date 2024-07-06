import { FaFile } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { useDispatch } from "react-redux";
import fileActions from "../store/actions/file-actions";
import Modal from "./Modal";
import { useState } from "react";
import FileName from "./FileName";

const CreateFolder = ({ type }) => {
    const [open, setOpen] = useState(true)
    const [fName, setfName] = useState({
        fname: "",
        ext: ""
    })
    const dispatch = useDispatch()

    const fileCreation = () => {

        if(fName.fname!=""){
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
            className="p-0 m-1 text-white">
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