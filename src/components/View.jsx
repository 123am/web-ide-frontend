import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import fileActions from "../store/actions/file-actions";
import { useDispatch } from "react-redux";
import CreateFile from "./CreateFile";
import CreateFolder from "./CreateFolder";
const View = ({ type }) => {


    const [arr, setArr] = useState(false)
    
    const dispatch = useDispatch()


    const viewFile = (path) => {
        
        
        dispatch(fileActions.viewFile({"path":path}))

    }
    

    return <>
        <div className="">
            {
                type.type == "file" ? <p className="text-blue-400 bg-black  pl-8 text-[18px] m-2  border" onClick={()=>{
                    viewFile(type.path)
                }}>{type.name}</p> :
                    <div className="flex flex-col align-middle pl-2 border m-2">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row items-center">
                                <span onClick={() => {
                                    setArr(prev => !prev)
                                }}>
                                    {
                                        arr ? <span className="text-white">< FaChevronUp /></span> : <span className="text-white"><FaChevronDown /></span>
                                    }
                                </span>
                                <p className="text-blue-400 bg-black ml-0 text-[18px] p-2">
                                    {type.name}
                                </p>
                            </div>
                            <div className="flex flex-row items-center">
                                
                                <CreateFile type={type}/>
                                <CreateFolder type={type}/>
                            </div>


                        </div>
                        {
                            type.child.length > 0 && arr && type.child.map((itmm) => {
                                return <View type={itmm} />
                            })
                        }
                    </div>
            }
        </div>
    </>

}

export default View;