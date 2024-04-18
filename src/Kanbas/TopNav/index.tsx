import React from 'react';
import db from '../Database';
import { useLocation, useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faBook, faBookmark, faBullhorn, faBullseye, faCalendar, faCircle, faClipboard, faComment, faEyeSlash, faFile, faFolder, faGear, faGlasses, faHistory, faHome, faInbox, faPlug, faQuestionCircle, faRocket, faTachometer, faTelevision, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

function TopNav() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const [empty, kanbas, coursesloc, id, screen, asid] = pathname.split("/");
    const course = db.courses.find((course) => course.id === courseId);
    return (
        <>
            <div id="topNav" className="d-none d-md-block">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <button type="button">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <ul className="navbar-nav ml-auto">
                            <div className="nav-item active" style={{ paddingTop: '15px', paddingLeft: '20px' }}>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="text-danger">{course?.name}</a></li>
                                    <li className="breadcrumb-separator">{' '}  {'>'}</li>
                                    <li className="breadcrumb-item active" aria-current="page">{screen}</li>
                                    {db.assignments && asid && (
                                        <>
                                            <li className="breadcrumb-separator"> {'  >  '} </li>
                                            <li className="breadcrumb-item active"> {' '}{asid}</li>
                                        </>
                                    )}
                                </ol>
                            </div>
                        </ul>
                        {['Modules', 'Home'].includes(screen) && ( // Check if screen is Modules or Home
                            <button className="wd-student-view btn btn-outline-secondary" type="button" style={{ marginLeft: '50%' }}>
                                <FontAwesomeIcon icon={faGlasses} /> Student View
                            </button>
                        )}
                    </nav>
                </div>
            </div>

            <nav id="alternateNav" className="navbar navbar-expand-md navbar-dark bg-black d-lg-none d-md-none">
                <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExampleLeft"
                    aria-expanded="false" aria-controls="collapseWidthExampleLeft">
                    <FontAwesomeIcon icon={faBars} style={{ color: 'red' }} />
                </button>
                <div>
                    <div>
                        <span className="navbar-text mx-auto">{course?.name}</span>
                    </div>
                    <div style={{ 'textAlign': 'center', 'color': 'grey' }}>
                        Section
                    </div>
                </div>
                <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExampleRight"
                    aria-expanded="false" aria-controls="collapseWidthExampleRight">
                    <FontAwesomeIcon icon={faAngleDown} style={{ color: 'red' }} />
                </button>
            </nav>
            <hr />
        </>
    );
}

export default TopNav;