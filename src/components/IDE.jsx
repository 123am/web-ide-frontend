import { useDispatch, useSelector } from "react-redux";
import fileActions from "../store/actions/file-actions";
import EDFileViewer from "./EDFileViewer";
import { useState } from "react";
import swal from 'sweetalert';
import DNDFileViewer from "./DNDFileViewer";
import ListViewer from "./ListViewer";
import ReadmeViewer from "./ReadmeViewer";
const IDE = () => {

    const dispatch = useDispatch()
    const { oneFile } = useSelector((state) => {
        console.log(state.file)
        return state.file
    })



    const [textEdit, setTextEdit] = useState("")
    const [editingStart, setEditingStart] = useState(false)
    const fileClose = () => {
        dispatch(fileActions.closeFile())
    }
    const fileSave = () => {
        dispatch(fileActions.saveFile())
    }



    let filePathComponent = {
        "ed": <EDFileViewer setEditingStart={setEditingStart} textEdit={textEdit} setTextEdit={setTextEdit} />,
        "li": <ListViewer setEditingStart={setEditingStart} textEdit={textEdit} setTextEdit={setTextEdit} />,
        "readme": <ReadmeViewer setEditingStart={setEditingStart} textEdit={textEdit} setTextEdit={setTextEdit} />,
    }
    return <>
        <div className="p-4 bg-black w-[75vw] h-full">


            {
                oneFile.name ? <>

                    <div className="flex flex-row justify-between items-start">
                        <div>
                            <p className="text-blue-400">File Name : {oneFile.name} </p>
                            <p className="text-blue-400">File Extension : {oneFile.ext} </p>
                            <p className="text-blue-400">File Path : {oneFile.path} </p>
                        </div>

                        <div className="flex flex-col">
                            <button onClick={() => {

                                if (editingStart) {
                                    // swal("A wild Pikachu appeared! What do you want to do?", {
                                    //     buttons: {
                                    //         confirmButtonAriaLabel:"c",
                                    //         confirmButtonColor:"#0000ff",
                                    //         denyButtonAriaLabel:"b",
                                    //         denyButtonColor:"#00ff00",
                                    //         cancelButtonAriaLabel:"a"
                                    //     },
                                        
                                    // })
                                } else {
                                    fileClose()
                                }
                            }}>Close File</button>
                        </div>
                    </div>

                    <div className="h-[80%]">
                        {
                            filePathComponent[oneFile.ext]
                        }
                    </div>
                </> : <p className="text-red-400">Please select file.</p>


            }


        </div>
    </>

}

export default IDE;