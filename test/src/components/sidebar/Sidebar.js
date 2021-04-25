import "./Sidebar.css";
import Logo1 from "../../images/Logo1.png";


const Sidebar = (sidebarOpen, closeSidebar) => {
    return (
        <div id="sidebar" className={sidebarOpen ? "sidebar__responsive" : ""}>
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={Logo1} alt="Logo"/>
                    <h1>Thidjango</h1>
                </div>
                <i className="fas fa-times" id="sidebarIcon" onClick={() => closeSidebar()}></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fas fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                <h2>Thivio</h2>
                <div className="sidebar__link">
                    <i className="fas fa-user-secret"></i>
                    <a href="#">Admin Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-building"></i>
                    <a href="#">Company Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-tools"></i>
                    <a href="#">Employee Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-handshake"></i>
                    <a href="#">Contracts</a>
                </div>
                <h2>Leave</h2>
                <div className="sidebar__link">
                    <i className="fas fa-question"></i>
                    <a href="#">Requests</a>
                </div>
                <div className="sidebar__link">
                        <i className="fas fa-sign-out-alt"></i>
                    <a href="#">Leave Policy</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-calendar-check"></i>
                    <a href="#">Special Days</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-file-alt"></i>
                    <a href="#">Apply For Leave</a>
                </div>
                <h2>PAYROLL</h2>
                <div className="sidebar__link">
                    <i className="fas fa-funnel-dollar"></i>
                    <a href="#">Apply For Leave</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-briefcase"></i>
                    <a href="#">Paygrade</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fas fa-power-off"></i>
                    <a href="#">Log Out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;