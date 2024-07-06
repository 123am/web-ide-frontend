import { useDispatch, useSelector } from "react-redux";
import fileActions from "../store/actions/file-actions";
import { useEffect, useState } from "react";

const EDFileViewer = ({ setEditingStart, textEdit, setTextEdit }) => {

    const dispatch = useDispatch()

    const { oneFile } = useSelector((state) => {
        console.log(state.file)

        return state.file
    })



    const [List, setList] = useState([])
    const [text, setText] = useState("")


    const fileSave = (listing = []) => {

        let Data = {
            path: oneFile.path,
            content: textEdit,
            fileType: "ed"
        }

        dispatch(fileActions.saveFile(Data))
        setEditingStart(false)
    }



    const submitFun = () => {
        if (text == "") {
            toast.error("Please add content")
            return
        }
        setList((prev) => {
            return [...prev, text]
        })
        setText("")

        fileSave([...List, text])

    }




    useEffect(() => {
        setTextEdit(oneFile.content)
    }, [oneFile.path])
    console.log(oneFile, "oneFileoneFile")

    return <>


        <div className="relative">

            <button className="absolute right-0 -top-2.5 text-blue-400" onClick={() => {
                fileSave()
            }}>Save File</button>
        </div>
        <textarea onChange={(e) => {
            setTextEdit(e.target.value)
            setEditingStart(true)
        }} className="my-4 border-2 h-[100%] w-[100%] text-black" value={textEdit}>
        </textarea>

    </>

}

export default EDFileViewer;