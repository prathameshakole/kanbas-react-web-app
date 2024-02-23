import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { faEdit, faEllipsis, faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css"
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="wd-assignment-body">
      <input style={{ width: '400px', display: 'inline-block' }} id="search" title="search"
        className="form-control w-25" placeholder="Search for Assignment" />
      <div className="float-end">
        <button className="btn btn-light btn-outline-secondary" style={{marginRight :'5px'}}><FontAwesomeIcon icon={faPlus}/> Group</button>
        <button className="btn btn-danger" style={{marginRight :'5px'}}><FontAwesomeIcon icon={faPlus} style={{paddingRight :'5px'}}/> Assignment</button>
        <button className="btn btn-light btn-outline-secondary"><FontAwesomeIcon icon={faEllipsisVertical}/></button>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item wd-lg-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item wd-lg-item">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}><FontAwesomeIcon icon={faEdit} style={{color: 'green', marginLeft:'3px'}}/></Link>
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{textDecoration: 'none'}}>  {assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default Assignments;

