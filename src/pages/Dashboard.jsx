import { useNavigate } from "react-router";
import IDE from "../components/IDE";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Dashboard = () => {



    let userDetails = useSelector((state) => {
        console.log(state, "statestatestate")
        return state.auth
    })


    const navigate = useNavigate()

    console.log(userDetails, "userDetails.userLogin")
    useEffect(() => {
        if (userDetails.userLogin) {
            navigate("/")
        } else {
            navigate("/login")
        }
    }, [userDetails.userLogin])

    return <>

        {
            userDetails.userLogin && <div className="flex flex-col sm:flex-row h-full">
                <Sidebar />
                <IDE />
            </div>
        }

    </>

}

export default Dashboard;