import { FaFile } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import View from "./View";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fileActions from "../store/actions/file-actions";
import CreateFile from "./CreateFile";
import CreateFolder from "./CreateFolder";
import { LOAD } from "../store/reducers/file-reducer";
import Swal from "sweetalert2";
import authActions from "../store/actions/auth-actions";

const Sidebar = () => {


    const { list_directory, load } = useSelector((state) => {
        return state.file
    })

    const { userDetails } = useSelector((state) => {
        return state.auth
    })


    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(LOAD())
        dispatch(fileActions.getListDirectory())
    }, [""])

    console.log(list_directory, "list_directorylist_directory")

    return <>
        <div className="w-[100vw] sm:w-[25vw] h-[40vh] overflow-y-scroll sm:h-full bg-background border-r-2 border-bordercolor">
            <div className="flex flex-row w-full">
                <div className="flex m-4 justify-between w-full">

                    <h3 className="text-xl mt-6">
                        Welcome, <br />{userDetails.username.slice(0, 10)}
                    </h3>
                    <h3 className="text-xl mt-8">
                        <span onClick={() => {

                            Swal.fire({
                                // title:"Logout",
                                text: "Are you sure you want to logout?",
                                icon: "question",
                                showCancelButton: true,
                                denyButtonText: 'No',
                                confirmButtonText: 'Yes',
                                cancelButtonText: 'No',
                                customClass: {
                                    cancelButton: "order-1",
                                    confirmButton: "order-2",
                                    denyButton: "order-3"
                                }

                            }).then((result) => {
                                if (result.isConfirmed) {
                                    dispatch(authActions.logout())

                                    navigate("/login")
                                } else if (result.isDenied) {
                                    Swal.fire('Changes are not saved', '', 'info')
                                }
                            })
                        }}>
                            <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 384.971 384.971" xml:space="preserve">
                                <g>
                                    <g id="Sign_Out">
                                        <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03
C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03
C192.485,366.299,187.095,360.91,180.455,360.91z"/>
                                        <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279
c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179
c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"/>
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </h3>
                </div>
            </div>
            <div className="flex border-t-2 my-2 py-2 flex-row justify-end">
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