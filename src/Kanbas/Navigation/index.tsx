import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaBoxOpen, FaInbox, FaClock, FaStudiovinari, FaTv, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaQuestionCircle, FaUser } from "react-icons/fa";
function KanbasNavigation() {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
        { label: "Courses", icon: <FaBook className="fs-2" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
        { label: "Inbox", icon: <FaInbox className="fs-2" /> },
        { label: "History", icon: <FaClock className="fs-2" /> },
        { label: "Studio", icon: <FaTv className="fs-2" /> },
        { label: "Commons", icon: <FaArrowAltCircleRight className="fs-2" /> },
        { label: "Help", icon: <FaQuestionCircle className="fs-2" /> }
    ];
    const { pathname } = useLocation();
    return (
        <>
            <ul className="wd-kanbas-navigation">
                <li><Link to="#" className="wd-neu-logo">
                        </Link></li>
                {links.map((link, index) => (
                    <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                        <Link to={`/Kanbas/${link.label}`}> 
                            <div className="wd-icon">{link.icon}</div> 
                            <div>{link.label}</div>
                            
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default KanbasNavigation;

