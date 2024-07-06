
import { FaFile } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { useDispatch } from "react-redux";
import fileActions from "../store/actions/file-actions";
import Modal from "./Modal";
import { useState } from "react";
import FileName from "./FileName";

const CreateFile = ({ type }) => {


    const [open, setOpen] = useState(false)
    const [fName, setfName] = useState({
        fname: "",
        ext: ""
    })
    const dispatch = useDispatch()

    const fileCreation = () => {
        console.log(fName, "fNamefName", type)
        type = {
            ...type,
            ...fName
        }
        dispatch(fileActions.createFile(type,()=>setOpen(prev => !prev)))
    }


    console.log(fName, "fNamefNamefNamefName")
    return <>
        <span onClick={() => {
            setOpen(prev => !prev)
            setfName({  
                fname: "",
                ext: ""
            })
        }}
            className="p-0 m-1 text-white">
            <FaFile />
        </span>

        <Modal
            setOpen={setOpen}
            open={open}
            child={
                <FileName
                    fName={fName}
                    setfName={setfName}
                    submitFun={() => { fileCreation() }}
                    label={"File Name"}
                    btnName={"Create File"}
                    placeholder={"Enter a file name........."}
                />
            }
        />
    </>
}

export default CreateFile;