import { useDispatch, useSelector } from "react-redux";
import fileActions from "../store/actions/file-actions";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ListViewer = ({ setEditingStart, textEdit, setTextEdit }) => {

    const dispatch = useDispatch()

    const { oneFile } = useSelector((state) => {
        console.log(state.file)

        return state.file
    })



    const [List, setList] = useState([])
    const [text, setText] = useState("")


    const fileSave = (listing=[]) => {

        let Data = {
            path: oneFile.path,
            content: listing.length>0?listing.join("-lspi-"):List.join("-lspi-"),
            fileType:"li"
        }
        console.log(oneFile.path, List, "oneFileList")
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

        // setTextEdit([...List,text])

        fileSave([...List,text])
        
    }





    useEffect(() => {

        if (oneFile.content != "") {
            setList(oneFile.content.split("-lspi-"))
        }
    }, [oneFile.path])
    console.log(oneFile, "oneFileoneFile")

    return <>


        <div className="relative">

            <button className="absolute right-0 text-blue-400" onClick={() => {
                fileSave()
            }}>Save File</button>
        </div>
        <div className="flex flex-row justify-center">
            <div className="flex flex-row w-80">
                <input
                    class="shadow mx-2 appearance-none border border-red-500 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="fileName"
                    type="text"
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                    value={text}
                    placeholder={""} />


                <button
                    class="bg-red-500 mx-2 hover:bg-red-700 h-12  text-white py-0 px-1 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => {
                        submitFun()
                    }}
                    type="button">


                    {"Submit"}
                </button>
            </div>



        </div>

        <div className="flex flex-col items-center h-full overflow-y-scroll">
            {
                List.map((itm) => {
                    return <div className="w-96 bg-neutral-800 flex h-12 m-2 p-3">
                        <p className="text-white items-center">{itm}</p>
                    </div>
                })
            }
        </div>
    </>

}

export default ListViewer;