import IDE from "../components/IDE";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {

    return <>
    <div className="flex flex-row h-[100vh]">
        <Sidebar/>
        <IDE/>
    </div>
    </>

}

export default Dashboard;