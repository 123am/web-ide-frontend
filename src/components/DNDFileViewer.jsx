import React, { useState } from 'react';
import '../App.css';
import FileName from './FileName';
import Modal from './Modal';
import { IoAdd } from "react-icons/io5";

const DNDFileViewer = () => {


    const [open, setOpen] = useState(false)
    const [btnName, setbtnName] = useState("")
    const [label, setLabel] = useState("")
    const [status, setstatus] = useState("")
    const [placeholder, setplaceholder] = useState("")
    const [fName, setfName] = useState({
        "fname": ""
    })

    const [containers, setContainers] = useState({});





    const statusCreation = () => {
        console.log(fName, status, "fNamefNamefName")

        if (status == "") {
            setContainers((prev) => {
                return {
                    ...prev,
                    [fName.fname]: []
                }
            })
        } else {
            setContainers((prev) => {
                return {
                    ...prev,
                    [status]: [...prev[status], fName.fname]
                }
            })
        }

    }
    const onDragStart = (e, item, container) => {
        e.dataTransfer.setData('item', item);
        e.dataTransfer.setData('sourceContainer', container);
    };

    const onDrop = (e, targetContainer) => {
        const item = e.dataTransfer.getData('item');
        const sourceContainer = e.dataTransfer.getData('sourceContainer');

        setContainers((prevState) => {

            console.log(prevState, sourceContainer, prevState[sourceContainer], "prevState")
            const sourceItems = prevState[sourceContainer].filter(i => i !== item);
            const targetItems = [...prevState[targetContainer], item];

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





    return (
        <>
            <div className='flex flex-row'>
                <div className='w-[32%] p-2 m-2'>
                    <div className='flex justify-between'>
                        <h1>Status</h1>
                        <button className='flex items-center px-4 border m-2 h-6 rounded-full' onClick={() => {
                            setOpen(prev => !prev)
                            setplaceholder("Enter a Status.........")
                            setbtnName("Add Status")
                            setLabel("Status Name")
                            setstatus("")
                        }}><IoAdd /> Add</button>
                    </div>
                    {
                        Object.entries(containers).map((itm, index) => {
                            return <h1>{itm[0]}</h1>
                        })
                    }
                </div>

                <div className="flex overflow-x-scroll overflow-y-hidden" >
                    {
                        Object.entries(containers).map((itm, index) => {
                            return <>
                                <div className='flex flex-col border-2'>
                                    <div className='flex flex-row justify-between content-center m-2'>
                                        <h1>{itm[0]}</h1>
                                        <button className='flex items-center px-4 border m-2 h-6 rounded-full' onClick={() => {
                                            setOpen(prev => !prev)
                                            setplaceholder("Enter a task.........")
                                            setbtnName("Add Task")
                                            setLabel("Task Name")
                                            setstatus(itm[0])
                                        }}><IoAdd /> Add</button>
                                    </div>
                                    {/* <h1>{"container" + (index + 1)}</h1> */}
                                    <div
                                        className="container overflow-x-scroll"
                                        id={itm[0]}
                                        onDrop={(e) => onDrop(e, itm[0])}
                                        onDragOver={onDragOver}
                                    >
                                        {containers[itm[0]].map((item) => (
                                            <div
                                                key={item}
                                                className="draggable w-48 h-24"
                                                draggable
                                                onDragStart={(e) => onDragStart(e, item, itm[0])}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>

            <Modal
                setOpen={setOpen}
                open={open}
                child={
                    <FileName
                        fName={fName}
                        setfName={setfName}
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


// "Status Name"
