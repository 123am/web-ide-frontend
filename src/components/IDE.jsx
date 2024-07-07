import { useDispatch, useSelector } from "react-redux";
import fileActions from "../store/actions/file-actions";
import EDFileViewer from "./EDFileViewer";
import { useState } from "react";
import swal from 'sweetalert';
import DNDFileViewer from "./DNDFileViewer";
import ListViewer from "./ListViewer";
import ReadmeViewer from "./ReadmeViewer";
import SweetAlert2 from 'react-sweetalert2';

const IDE = () => {

    const [swalProps, setSwalProps] = useState({});
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
    const fileSave = (cb=()=>{}) => {


        console.log(textEdit,"textEdittextEdit")
        let Data = {
            path: oneFile.path,
            content: textEdit,
            fileType: "ed"
        }

        dispatch(fileActions.saveFile(Data,false,cb))
        setEditingStart(false)

        // dispatch(fileActions.saveFile())
    }



    let filePathComponent = {
        "ed": <EDFileViewer setEditingStart={setEditingStart} textEdit={textEdit} setTextEdit={setTextEdit} />,
        "lt": <ListViewer setEditingStart={setEditingStart} textEdit={textEdit} setTextEdit={setTextEdit} />,
        "readme": <ReadmeViewer setEditingStart={setEditingStart} textEdit={textEdit} setTextEdit={setTextEdit} />,
        "note": <DNDFileViewer setEditingStart={setEditingStart} textEdit={textEdit} setTextEdit={setTextEdit} />,
    }
    return <>
        <div className="p-4 bg-background w-[75vw] h-full">


            {
                oneFile.name ? <>

                    <div className="flex flex-row justify-between items-start">
                        <div className="flex flex-col items-start my-4">
                            <p className="text-primary">File Name : {oneFile.name} </p>
                            <p className="text-primary">File Extension : {oneFile.ext} </p>
                            <p className="text-primary">File Path : {oneFile.path} </p>
                        </div>

                        <div className="flex  flex-col">
                            <button onClick={() => {

                                if (editingStart) {
                                    swal("Are you sure you want to close without save this?", {
                                        buttons: {
                                            cancel: "Cancel",
                                            catch: {
                                                text: "Don`t Save",
                                                value: "dsave",
                                            },
                                            defeat: {
                                                text: "Save",
                                                value: "save",
                                            }
                                        },
                                    }).then((itm) => {
                                        if (itm == "dsave") {
                                            fileClose()
                                        } else if (itm == "save") {
                                            fileSave(fileClose)
                                        } else {

                                        }
                                    });

                                    // swal("A wild Pikachu appeared! What do you want to do?", {
                                    //     buttons: {
                                    //         confirmButtonAriaLabel: "c",
                                    //         confirmButtonColor: "#0000ff",
                                    //         denyButtonAriaLabel: "b",
                                    //         denyButtonColor: "#00ff00",
                                    //         cancelButtonAriaLabel: "a"
                                    //     },

                                    // })
                                } else {
                                    fileClose()
                                }
                            }} className="border-bordercolor border p-2 hover:bg-secondary">Close File</button>
                        </div>
                    </div>

                    <div className="h-[80%]">
                        {
                            filePathComponent[oneFile.ext]
                        }
                    </div>
                </> : <p className="text-secondary">Please select file.</p>


            }



            {
                console.log(swalProps, "swalPropsswalPropsswalProps")
            }

            <SweetAlert2 {...swalProps} />
        </div>
    </>

}

export default IDE;