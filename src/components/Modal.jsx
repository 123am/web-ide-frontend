
const Modal = ({ setOpen, open, child }) => {


    return <>
        
        <div id="modelConfirm" class={`fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ${open ? "hidden" : ""}`}>
            <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">

                <div class="flex justify-end p-2">
                    <button type="button"
                        onClick={() => {
                            setOpen(prev => !prev)
                        }}
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>

                {child}

            </div>
        </div>
    </>
}

export default Modal