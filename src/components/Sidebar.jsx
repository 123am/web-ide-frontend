import { FaFile } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import View from "./View";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fileActions from "../store/actions/file-actions";
import CreateFile from "./CreateFile";
import CreateFolder from "./CreateFolder";
import { LOAD } from "../store/reducers/file-reducer";

const Sidebar = () => {


    const { list_directory, load } = useSelector((state) => {
        return state.file
    })


    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(LOAD())
        dispatch(fileActions.getListDirectory())
    }, [""])

    console.log(list_directory, "list_directorylist_directory")

    return <>
        <div className="w-[25vw] h-full bg-black border-r-2 border-gray-500">
            <div className="flex flex-row justify-end">
                <CreateFile />
                <CreateFolder />
            </div>


            {
                load == false ? list_directory.length > 0 ? list_directory.map((itmm) => {
                    return <View type={itmm} />
                }) : <>
                    <p>No Such file or directories</p>
                </> : <p>
                    Please Wait...
                </p>
            }
        </div>
    </>

}

export default Sidebar;