import React from 'react';
import db from '../Database';
import { useLocation, useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faBook, faBookmark, faBullhorn, faBullseye, faCalendar, faCircle, faClipboard, faComment, faEyeSlash, faFile, faFolder, faGear, faGlasses, faHistory, faHome, faInbox, faPlug, faQuestionCircle, faRocket, faTachometer, faTelevision, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

function TopNav() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const [empty, kanbas, coursesloc, id, screen, asid] = pathname.split("/");
    const course = db.courses.find((course) => course._id === courseId);
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

            {/* <div className="collapse collapse-horizontal" id="collapseWidthExampleLeft" style={{ 'position': 'fixed', 'zIndex': '2' }}>
                <div className="card card-body p-2" style={{ 'width': '100vw', 'height': '100vh' }}>
                    <ul style={{ 'listStyle': 'none' }}>
                        <li>
                            KANBAS
                            <button className="btn btn-secondary" style={{ 'float': 'right' }} type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseWidthExampleLeft" aria-expanded="false" aria-controls="collapseWidthExampleLeft">
                                X
                            </button>
                        </li>
                        <li><a href="/Kanbas/Account/Profile/screen.html">
                            <FontAwesomeIcon icon={faUser}/> Account</a></li>
                        <li className="">
                            <a href="/Kanbas/Dashboard/screen.html">
                            <FontAwesomeIcon icon={faTachometer}/> Dashboard</a>
                        </li>
                        <li>
                            <a href="/Kanbas/Courses/Home/screen.html">
                            <FontAwesomeIcon icon={faBook}/> Courses</a>
                        </li>
                        <li>
                            <a href="/Kanbas/Calendar/index.html">
                            <FontAwesomeIcon icon={faCalendar}/> Calendar</a>
                        </li>
                        <li><a href="/Kanbas/Inbox/index.html">
                        <FontAwesomeIcon icon={faInbox}/> Inbox</a></li>
                        <li><a href="">
                        <FontAwesomeIcon icon={faHistory}/> History</a></li>
                        <li><a href="">
                        <FontAwesomeIcon icon={faTelevision}/> Studio</a></li>
                        <li><a href="">
                        <FontAwesomeIcon icon={faBars}/> Commons</a></li>
                        <li><a href="">
                        <FontAwesomeIcon icon={faQuestionCircle}/> Help</a></li>
                    </ul>

                </div>
            </div>
            <div className="collapse" id="collapseWidthExampleRight" style={{ 'position': 'fixed', 'zIndex': '2' }}>
                <div className="card card-body p-2" style={{ 'width': '100vw', 'height': '100vh' }}>
                    <ul style={{ 'listStyle': 'none' }}>
                        <li>
                            <button className="btn btn-secondary" style={{ 'float': 'right' }} type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseWidthExampleRight" aria-expanded="false" aria-controls="collapseWidthExampleRight">
                                X
                            </button>
                        </li>
                        <li>
                            <a href="/Kanbas/Courses/Home/screen.html">
                            <FontAwesomeIcon icon={faHome}/> Home</a>
                        </li>
                        <li><a href="/Kanbas/Courses/Modules/screen.html">
                        <FontAwesomeIcon icon={faBookmark}/> Modules</a>
                        </li>
                        <li><a href="/Kanbas/Courses/Piazza/index.html">
                        <FontAwesomeIcon icon={faPlug}/> Piazza</a>
                        </li>
                        <li><a href="">
                        <FontAwesomeIcon icon={faPlug}/> Zoom Meetings
                        </a>
                        </li>
                        <li><a href="/Kanbas/Courses/Assignments/screen.html">
                        <FontAwesomeIcon icon={faFile}/> Assignments</a></li>
                        <li><a href="">
                        <FontAwesomeIcon icon={faRocket}/> Quizzes</a></li>
                        <li><a href="/Kanbas/Courses/Grades/screen.html">
                        <FontAwesomeIcon icon={faBook}/> Grades</a> </li>
                        <li><a href="">
                        <FontAwesomeIcon icon={faUsers}/> People</a></li>
                        <li><a href="">
                        <FontAwesomeIcon icon={faPlug}/> Panapto Video</a></li >
                        <li><a href="">
                            <FontAwesomeIcon icon={faComment}/> Discussions</a>
                            <FontAwesomeIcon icon={faEyeSlash}/>
                        </li >
                        <li><a href="">
                        <FontAwesomeIcon icon={faBullhorn}/> Announcements</a>
                            <FontAwesomeIcon icon={faEyeSlash}/>
                        </li >
                        <li><a href="">
                        <FontAwesomeIcon icon={faFile}/> Pages</a>
                            <FontAwesomeIcon icon={faEyeSlash}/>
                        </li >
                        <li><a href="">
                        <FontAwesomeIcon icon={faFolder}/> Files</a>
                            <FontAwesomeIcon icon={faEyeSlash}/>
                        </li >
                        <li><a href="">
                        <FontAwesomeIcon icon={faClipboard}/> Rubrics</a>
                            <FontAwesomeIcon icon={faEyeSlash}/>
                        </li >
                        <li><a href="">
                        <FontAwesomeIcon icon={faBullseye}/> Outcomes</a>
                            <FontAwesomeIcon icon={faEyeSlash}/>
                        </li>
                        <li><a href="">
                        <FontAwesomeIcon icon={faCircle}/> Collaborations</a>
                            <FontAwesomeIcon icon={faEyeSlash}/>
                        </li>
                        <li><a href="">
                        <FontAwesomeIcon icon={faBook}/> Syllabus</a>
                        <FontAwesomeIcon icon={faEyeSlash}/>
                        </li>
                        <li><a href="">
                        <FontAwesomeIcon icon={faPlug}/> Project Progress(EAB Nabigate)</a>
                        </li>
                        <li><a href="">
                        <FontAwesomeIcon icon={faGear}/> Settings</a>
                        </li>
                    </ul >
                </div >
            </div > */}
            <hr />
        </>
    );
}

export default TopNav;