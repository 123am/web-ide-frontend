
const FileName = ({ fName, setfName, submitFun, label = "", placeholder = "", btnName = "" }) => {
    // const [fName, setfName] = useState({
    //     fname:"",
    //     ext:""
    // })
    return <>
        <div className="m-1 p-2">
            <label class="block  m-2 text-gray-700 text-sm font-bold mb-2" for="fileName">
                {label}
            </label>

            <div className="flex flex-row">
                <input
                    class="shadow mx-2 appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="fileName"
                    type="text"
                    onChange={(e) => {
                        setfName(prev => {
                            return {
                                ...prev,
                                fname: e.target.value
                            }
                        })
                    }}
                    value={fName.fname}
                    placeholder={placeholder} />

                {
                    btnName == "Create File" && <>
                    <p className="text-black text-end h-full py-3 text-[20px]">.</p>
                    <select
                        class="shadow  mx-2 appearance-none w-32 border border-red-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="fileName"
                        type="text"
                        onChange={(e) => {
                            setfName(prev => {
                                return {
                                    ...prev,
                                    ext: e.target.value
                                }
                            })
                        }}
                        value={fName.ext}
                        placeholder={placeholder}>

                        <option disabled value={""} selected>File Ext</option>
                        <option value={".ed"}>ed</option>
                        <option value={".note"}>note</option>
                        <option value={".lt"}>lt</option>
                        <option value={".readme"}>readme</option>
                    </select>
                    </>
                }
            </div>

            <button
                class="bg-red-500 mx-2 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                    submitFun()
                }}
                type="button">


                {btnName}
            </button>

            {/* <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="fileName"
            type="button"
            value={""}
            placeholder={placeholder} /> */}


            {/* <input type="text" className="border-2 " />

        <div class="p-6 pt-0 text-center">
            <svg class="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">Are you sure you want to delete this user?</h3>
            <a href="#" onclick="closeModal('modelConfirm')"
                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                Yes, I'm sure
            </a>
            <a href="#" onclick="closeModal('modelConfirm')"
                class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                data-modal-toggle="delete-user-modal">
                No, cancel
            </a>
        </div> */}
        </div>
    </>

}

export default FileName;