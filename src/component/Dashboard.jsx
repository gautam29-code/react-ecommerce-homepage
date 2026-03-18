import { NavLink, Outlet } from "react-router-dom";
function Dashboard() {
    return (<>
        <div className="container-fluid mt-2">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <ul>
                                <li className="">
                                    <NavLink className="nav-link" to="Profile">
                                        Profile
                                        
                                    </NavLink>
                                </li>
                                <li className="">
                                    <NavLink className="nav-link" to="Setting">
                                        Setting
                                      
                                    </NavLink>
                                </li>
                                <Outlet></Outlet>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)

} export default Dashboard;