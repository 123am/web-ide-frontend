import React, { useEffect, useState } from 'react';
import '../App.css';
import FileName from './FileName';
import Modal from './Modal';
import { IoAdd } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import fileActions from '../store/actions/file-actions';
import toast from 'react-hot-toast';

const DNDFileViewer = () => {
    const [open, setOpen] = useState(false);
    const [btnName, setBtnName] = useState("");
    const [label, setLabel] = useState("");
    const [status, setStatus] = useState("");
    const [placeholder, setPlaceholder] = useState("");
    const [fName, setFName] = useState({ 
        "fname": "",
        "ext":"#ff00ff"
     });
    const [containers, setContainers] = useState({});
    const [containersConf, setContainersConf] = useState({});
    const { oneFile } = useSelector((state) => {
        console.log(state.file)

        return state.file
    })

    const dispatch = useDispatch()

    const fileSave = (listing = {}) => {

        let Data = {
            path: oneFile.path,
            content: JSON.stringify(listing),
            fileType: "ed"
        }

        dispatch(fileActions.saveFile(Data, true))
    }

    const statusCreation = () => {


        if(fName.fname==""){

            toast.error(label+" is not blank")
            return
        }
        if (status === "") {



            console.log(fName,"fNamefName")

            setContainers((prev) => ({
                ...prev,
                [fName.fname]: []
            }));

            setContainersConf((prev) => ({
                ...prev,
                [fName.fname]: {
                    "bgcolor": fName.ext
                }
            }));

            fileSave({
                containers: {
                    ...containers,
                    [fName.fname]:[]
                },
                containersConf: {
                    ...containersConf,
                    [fName.fname]:{
                        "bgcolor": fName.ext
                    }
                }
            })
        } else {
            setContainers((prev) => ({
                ...prev,
                [status]: [...prev[status], {
                    name: fName.fname,
                    id: Date.now()
                }]
            }));

            fileSave({
                containers: {
                    ...containers,
                    [status]:[...containers[status],{
                        name: fName.fname,
                        id: Date.now()
                    }]
                },
                containersConf: containersConf
            })
        }

        
    };



    console.log(containers,"containerscontainerscontainers")

    const onDragStart = (e, itemId, container) => {
        e.dataTransfer.setData('itemId', itemId);
        e.dataTransfer.setData('sourceContainer', container);
    };

    const onDrop = (e, targetContainer) => {
        const itemId = e.dataTransfer.getData('itemId');
        const sourceContainer = e.dataTransfer.getData('sourceContainer');

        setContainers((prevState) => {
            const sourceItems = prevState[sourceContainer].filter(item => item.id !== Number(itemId));
            const item = prevState[sourceContainer].find(item => item.id === Number(itemId));
            const targetItems = [...prevState[targetContainer], item];
            fileSave({
                containers: {
                    ...containers,
                    [sourceContainer]: sourceItems,
                    [targetContainer]: targetItems,
                },
                containersConf: containersConf
            })
            return {
                ...prevState,
                [sourceContainer]: sourceItems,
                [targetContainer]: targetItems,
            };
        });





        console.log('Parent Div ID:', targetContainer);
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };


    console.log(containersConf,"containersConfcontainersConf")


    useEffect(() => {
        setContainers(oneFile.content != "" ? JSON.parse(oneFile.content).containers ? JSON.parse(oneFile.content).containers : {} : {})
        setContainersConf(oneFile.content != "" ? JSON.parse(oneFile.content).containersConf ? JSON.parse(oneFile.content).containersConf : {} : {})
    }, [oneFile.path])
    return (
        <>
            <div className='flex flex-row'>
                <div className='w-[24%] p-2 m-2'>
                    <div className='flex justify-between '>
                        <h1>Status</h1>
                        <button
                            className='flex items-center px-4 border border-bordercolor m-2 h-6 rounded-full'
                            onClick={() => {
                                setOpen(true);
                                setPlaceholder("Enter a Status.........");
                                setBtnName("Add Status");
                                setLabel("Status Name");
                                setStatus("");
                            }}
                        >
                            <IoAdd /> Add
                        </button>
                    </div>
                    {Object.keys(containers).map((status, index) => (
                        <h1 className='p-1 m-4' key={index} style={{backgroundColor:containersConf[status]["bgcolor"]}}>{status}</h1>
                    ))}
                </div>

                <div className="flex overflow-x-scroll overflow-y-hidden scrollbar border border-bordercolor">
                    {Object.entries(containers).map(([status, items], index) => (
                        <div key={index} className='flex flex-col border-2 border-bordercolor m-1'>
                            <div className='flex flex-row justify-between content-center m-2'>
                                <h1>{status}</h1>
                                <button
                                    className='flex items-center px-4 border border-bordercolor m-2 h-6 rounded-full'
                                    onClick={() => {
                                        setOpen(true);
                                        setPlaceholder("Enter a task.........");
                                        setBtnName("Add Task");
                                        setLabel("Task Name");
                                        setStatus(status);
                                    }}
                                >
                                    <IoAdd /> Add
                                </button>
                            </div>
                            <div
                                className="container overflow-x-scroll scrollbar"
                                id={status}
                                onDrop={(e) => onDrop(e, status)}
                                onDragOver={onDragOver}
                            >
                                {items.map((item) => (
                                    <div
                                        key={item.id}
                                        style={{ backgroundColor: containersConf[status]["bgcolor"]}}
                                        className="draggable w-48 min-h-24"
                                        draggable
                                        onDragStart={(e) => onDragStart(e, item.id, status)}
                                    >
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                setOpen={setOpen}
                open={open}
                child={
                    <FileName
                        fName={fName}
                        setfName={setFName}
                        submitFun={() => { statusCreation() }}
                        label={label}
                        btnName={btnName}
                        placeholder={placeholder}
                    />
                }
            />
        </>
    );
};

export default DNDFileViewer;
