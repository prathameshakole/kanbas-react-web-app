import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faBell, faBullhorn, faCalendar, faChartSimple, faCheckCircle, faFileImport, faHouse } from '@fortawesome/free-solid-svg-icons';
import "./index.css";

function CourseStatus() {
    return (
        <div className="flex-grow-0 me-2 d-none d-lg-block p-1 wd-course-status-main" style={{ 'width': '260px', paddingTop: '0px !important' }}>
            <div className="wd-course-status">Course Status</div>
            <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-outline-secondary">
                <FontAwesomeIcon icon={faBan} /> Unpublish
                </button><button type="button" className="btn btn-success ms-2 disabled">
                <FontAwesomeIcon icon={faCheckCircle} />  Success
                </button>
            </div>
            <button type="button" className="btn btn-outline-secondary w-100 mt-3 text-start btn-sm">
            <FontAwesomeIcon icon={faFileImport} />
                <span> Import Existing Contact</span>
            </button>
            <button type="button" className="btn btn-outline-secondary w-100 mt-1 text-start btn-sm">
            <FontAwesomeIcon icon={faFileImport} />
                <span> Import from Commons</span>
            </button>
            <button type="button" className="btn btn-outline-secondary w-100 mt-1 text-start btn-sm">
            <FontAwesomeIcon icon={faHouse} />
                <span> Choose Home Page</span>
            </button>
            <button type="button" className="btn btn-outline-secondary w-100 mt-1 text-start btn-sm">
            <FontAwesomeIcon icon={faChartSimple} />
                <span> View Course Stream</span>
            </button>
            <button type="button" className="btn btn-outline-secondary w-100 mt-1 text-start btn-sm">
            <FontAwesomeIcon icon={faBullhorn} />
                <span> New Announcement</span>
            </button>
            <button type="button" className="btn btn-outline-secondary w-100 mt-1 text-start btn-sm">
            <FontAwesomeIcon icon={faChartSimple} />
                <span> New Analytics</span>
            </button>
            <button type="button" className="btn btn-outline-secondary w-100 mt-1 text-start btn-sm">
            <FontAwesomeIcon icon={faBell} />
                <span> View Course Notifications</span>
            </button>
            <div className="mt-3">
                <div>
                    <div className="" style={{ 'color': '#2d3b45', 'fontWeight': '500' }}>
                        To do
                    </div>
                    <hr className="my-1" />
                    <div className="d-flex align-items-baseline">
                        <div className="text-light rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                                'backgroundColor': '#b52828',
                                'width': '17px',
                                'height': '17px',
                                'fontSize': '12px'
                            }}
                        >
                            1
                        </div>
                        <div className="ms-2">
                            <div style={{
                                'color': '#b52828',
                                'fontWeight': '500',
                                'fontSize': '14px'
                            }}>
                                Grade 1 - ENV + HTML
                            </div>
                            <div style={{ 'color': '#2d3b45', 'fontSize': '12px' }}>
                                100 points · Sep 18 at 11:59pm
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="" style={{ color: '#2d3b45', fontWeight: '500' }}>
                            Coming Up
                        </div>
                        <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faCalendar} />
                            <span style={{ 'color': '#b52828', 'fontSize': '12px',marginLeft:'5px' }}> View Calendar</span>
                        </div>
                    </div>
                    <hr className="mt-1 mb-2" />
                    <div className="d-flex align-items-baseline">
                    <FontAwesomeIcon icon={faCalendar} />
                        <div className="ms-2">
                            <div style={{
                                'color': '#b52828',
                                'fontWeight': '500',
                                'fontSize': '14px'
                            }}>
                                Lecture
                            </div>
                            <div style={{ 'color': '#2d3b45', 'fontSize': '12px' }}>
                                CS5610.11550.202410
                            </div>
                            <div style={{ 'color': '#2d3b45', 'fontSize': '12px' }}>
                                Sep 11 at 7pm
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-3">
                    <FontAwesomeIcon icon={faCalendar} />
                        <div className="ms-2">
                            <div style={{
                                'color': '#b52828',
                                'fontWeight': '500',
                                'fontSize': '14px'
                            }}>
                                Lecture
                            </div>
                            <div style={{ 'color': '#2d3b45', 'fontSize': '12px' }}>
                                CS5610.11550.202410
                            </div>
                            <div style={{ 'color': '#2d3b45', 'fontSize': '12px' }}>
                                Sep 11 at 7pm
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default CourseStatus;