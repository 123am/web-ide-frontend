import { useDispatch, useSelector } from "react-redux";
import fileActions from "../store/actions/file-actions";
import { useEffect, useState } from "react";

const ReadmeViewer = ({ setEditingStart, textEdit, setTextEdit }) => {

    const dispatch = useDispatch()

    const { oneFile,oneReadmeFile } = useSelector((state) => {
        console.log(state.file)

        return state.file
    })



    const [List, setList] = useState([])
    const [text, setText] = useState()


    const fileSave = (listing = []) => {

        let Data = {
            path: oneFile.path,
            content: oneReadmeFile,
            fileType: "ed"
        }

        dispatch(fileActions.saveFile(Data,false))
        
        setEditingStart(false)
    }
    const fileView = (listing = []) => {

        console.log("texttexttext",text)

        const form=new FormData() 
        form.append("path",oneFile.path)
        form.append("file",text)
        // let Data = {
        //     path: oneFile.path,
        //     content: textEdit,
        //     fileType: "ed"
        // }

        dispatch(fileActions.viewReadmeFile(form))
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

            <button className="absolute right-0 -bottom-2 border-2 border-bordercolor hover:text-col hover:bg-primary text-primary p-2" onClick={() => {
                fileSave()
            }}>Save File</button>
        </div>
        <div className="flex flex-row justify-center">
            <div className="flex flex-row w-80">
                <input
                    class="shadow mx-2 appearance-none border border-bordercolor rounded w-full py-3 px-3 text-col mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="fileName"
                    type="file"
                    onChange={(e) => {
                        setText(e.target.files[0])
                    }}
                    placeholder={""} />


                <button
                    class="bg-red-500 mx-2 hover:bg-red-700 h-12  text-col py-0 px-1 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => {
                        fileView()
                    }}
                    type="button">


                    {"Submit"}
                </button>
            </div>
        </div>

        <div className="text-col overflow-scroll h-[94%]" dangerouslySetInnerHTML={{__html: oneReadmeFile}}>
        </div>

    </>

}

export default ReadmeViewer;