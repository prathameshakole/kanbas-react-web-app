import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import db from "../../Database";
import { faEdit, faEllipsis, faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css"
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAssignment, setAssignment,setAssignments,
} from './assignmentReducer'
import { KanbasState } from "../../store";
import * as client from "./client.js";


function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state: KanbasState) => state.assignmentReducer.assignments);
  const assignment = useSelector((state: KanbasState) => state.assignmentReducer.assignment);

  useEffect(() => {
    client.findAssignmentsForCourse(courseId)
      .then((assignments: any) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor`);
  };

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState(null);

  const confirmDelete = () => {
    if (assignmentToDelete) {
      client.deleteAssignment(assignmentToDelete).then((status) => {
        dispatch(deleteAssignment(assignmentToDelete));
        setShowConfirmation(false);
        setAssignmentToDelete(null);
      });
    }
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
    setAssignmentToDelete(null);
  };

  const handleDeleteAssignment = (assignmentId: any) => {
    setShowConfirmation(true);
    setAssignmentToDelete(assignmentId);
  };

  const assignmentList = db.assignments.filter(
    (assignment) => assignment.course === courseId);
    
  return (
    <div className="wd-assignment-body">
      <input style={{ width: '400px', display: 'inline-block' }} id="search" title="search"
        className="form-control w-25" placeholder="Search for Assignment" />
      <div className="float-end">
        <button className="btn btn-light btn-outline-secondary" style={{ marginRight: '5px' }}><FontAwesomeIcon icon={faPlus} /> Group</button>
        <button className="btn btn-danger" style={{ marginRight: '5px' }} onClick={handleAdd}><FontAwesomeIcon icon={faPlus} style={{ paddingRight: '5px' }} /> Assignment</button>
        <button className="btn btn-light btn-outline-secondary"><FontAwesomeIcon icon={faEllipsisVertical} /></button>
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
            {assignments.length > 0 ? (<>
              {assignments
              .filter((assignment) => assignment.course === courseId)
              .map((assignment, index) => (
                <li key={index} className="list-group-item wd-lg-item">
                  <Link key={index} to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}><FontAwesomeIcon icon={faEdit} style={{ color: 'green', marginLeft: '3px' }} /></Link>
                  <Link
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{ textDecoration: 'none' }}
                    onClick={() => dispatch(setAssignment(assignment))}>
                    {assignment.title} <br />
                    {assignment.description}
                  </Link>
                  <button style={{ display: "inline-block" }}
                    onClick={() => handleDeleteAssignment(assignment._id)} className="float-end btn btn-danger">
                    Delete
                  </button>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                </li>
              ))}
            </>
            ) : (
              null
            )}
          </ul>
        </li>
      </ul>
      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this assignment?</p>
          <button onClick={confirmDelete}>Yes</button>
          <button onClick={cancelDelete}>No</button>
        </div>
      )}
    </div>
  );
}
export default Assignments;

