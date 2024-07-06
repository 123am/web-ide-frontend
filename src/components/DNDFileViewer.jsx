// import { useDispatch, useSelector } from "react-redux";
// import fileActions from "../store/actions/file-actions";
// import { useEffect, useState } from "react";

// const DNDFileViewer = ({ setEditingStart, textEdit, setTextEdit }) => {

//     const dispatch = useDispatch()


//     let data = {
//         "one": [
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             }
//         ],
//         "two": [
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             }
//         ],
//         "three": [
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             }
//         ],
//         "four": [
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             }
//         ],
//         "four3": [
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             }
//         ],
//         "four2": [
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             }
//         ],
//         "four1": [
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             },
//             {
//                 "name": "dascsa"
//             }
//         ],
//     }

//     const { oneFile } = useSelector((state) => {
//         console.log(state.file)

//         return state.file
//     })

//     return <>
//         <div className="flex flex-row " onDrop={(a) => { console.log("onDropCapture dsadasdas", a) }}>
//             {
//                 Object.entries(data).map((itm) => {
//                     return <>

//                         <div className="w-[200px] flex flex-col bg-slate-500">
//                             <div>
//                                 {itm[0]}
//                             </div>
//                             {
//                                 itm[1].map((ewq) => {
//                                     return <div 
//                                         className=" w-auto cursor-pointer border-2 m-2 bg-white" 
//                                         draggable={true} 
//                                         onDragEnd={}
//                                         onDragCapture={(a) => { console.log("onDragCapture dsadasdas", a) }}>
//                                         {ewq.name}
//                                     </div>
//                                 })
//                             }    
//                         </div>
//                     </>
//                 })
//             }
//         </div>
//     </>
//     // return <>
//     //     <div className="grid grid-cols-3" onDrop={(a) => { console.log("onDropCapture dsadasdas", a) }}>
//     //         {
//     //             ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""].map(() => {
//     //                 return<div className="cursor-pointer border-2 m-2 bg-white" draggable={true} onDragCapture={(a) => { console.log("onDragCapture dsadasdas", a) }}>
//     //                     Hello
//     //                 </div>
//     //             })
//     //         }
//     //     </div>
//     // </>

// }

// export default DNDFileViewer;





const DNDFileViewer = ({ setEditingStart, textEdit, setTextEdit }) => {


    const [{ isDragging }, dragRef] = useDrag({
        item: { type: "item", item: myitem },
        begin: () => {
            console.log("drag began");
        },
        end: (dropResult) => {
            console.log("drag end");
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [{ isOver, canDrop }, dropRef] = useDrop({
        accept: "item",
        drop: (item, monitor) => {
            console.log(`Dropped item: ${JSON.stringify(item)}`);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });


        

}
export default DNDFileViewer;


