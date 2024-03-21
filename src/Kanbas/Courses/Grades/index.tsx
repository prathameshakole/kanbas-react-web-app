import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExport, faFileImport, faFilter, faGear, faStar } from "@fortawesome/free-solid-svg-icons";
function Grades() {
  const { courseId } = useParams();
  const as = db.assignments.filter((assignment) => assignment.course === courseId);
  const es = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="wd-grades">
      <h1>Grades</h1>
      <div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-light btn-outline-secondary float-end me-2">
          <FontAwesomeIcon icon={faFileImport} /> Import</button>
          <div className="dropdown float-end" style={{'display': 'inline-block'}}>
            <button className="btn btn-outline-secondary dropdown-toggle me-2" type="button"
              id="dropdownMenu2" aria-haspopup="true" data-toggle="dropdown"
              aria-expanded="false">
              <FontAwesomeIcon icon={faFileExport} /> Export
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button className="dropdown-item"><a href="#"></a>Export All</button>
            </div>
          </div>

          <button type="button" className="btn btn-md btn-secondary">
          <FontAwesomeIcon icon={faGear} />
          </button>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <h3 className="mt-4 mb-3">Student Names</h3>
          <input type="text" name="student-name" id="student-name"
            className="form-control mb-3" placeholder="Search Students"></input>
        </div>
        <div className="col">
          <h3 className="mt-4 mb-3">Assignment Names</h3>
          <input type="text" name="ass-name" id="ass-name" className="form-control mb-3"
            placeholder="Search Assignments"></input>
        </div>
      </div>
      <div className="d-flex">
        <button type="button" className="btn btn-secondary mb-4">
          <i className="fa fa-filter fa-lg"></i>
          <FontAwesomeIcon icon={faFilter} /> Apply Filters
        </button>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {as.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>

          <tbody>
            {es.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td>{user?.firstName} {user?.lastName}</td>
                  {as.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                    return (<td>{grade?.grade || ""}</td>);
                  })}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;

