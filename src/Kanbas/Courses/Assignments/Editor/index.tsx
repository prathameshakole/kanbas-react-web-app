import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import Assignments from "..";
import { title } from "process";
import "./index.css"
import {
  addAssignment,
  setAssignment,
  updateAssignment,
} from '../assignmentReducer'
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignments = useSelector((state: KanbasState) => state.assignmentReducer.assignments);
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignment = useSelector((state: KanbasState) => state.assignmentReducer.assignment);

  useEffect(() => {
    // Fetch assignment data using assignmentId and set it in the state
    if (assignmentId && assignments.length > 0) {
      const foundAssignment = assignments.find(assignment => assignment.id === assignmentId);
      if (foundAssignment) {
        dispatch(setAssignment(foundAssignment));
      }
    }
  }, [assignmentId, assignments, dispatch]);

  const handle = () => {
    if (assignmentId !== "AssignmentEditor") {
      dispatch(updateAssignment(assignment))
    }
    else {
      dispatch(addAssignment({ ...assignment, course: courseId }))
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  }

  return (
    <div>
      <div className="p-4 wd-editor-body">
        <h5>Assignment Name</h5>
        <input value={assignment?.title || ""} onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))}
          className="form-control mb-2" />
        <textarea className="form-control" onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))} value={assignment.description || ""}></textarea>
      </div>
      <div className="row wd-row p-4">
        <div className="col-2"><h6>Points</h6></div>
        <div className="col-6"><input className="form-control" title="points" onChange={(e) => dispatch(setAssignment({ ...assignment, points: e.target.value }))} value={assignment.points} /></div>
      </div>
      <div className="row wd-row p-4">
        <div className="col-2"><h6>Assign</h6></div>
        <div className="card col-6">
          <div className="card-body">
            <p>Due</p>
            <input type="date" className="form-control" title = "due" value={assignment.due || ""}
                        onChange={(e) => dispatch(setAssignment({ ...assignment, due: e.target.value })) }/><br />
            <div className="row">
              <div className="col-6">
                <p>Available From</p>
              </div>
              <div className="col-6">
                <p>Until</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <input type="date" className="form-control" title="avail" value={assignment.availFrom || ""}
                  onChange={(e) => dispatch(setAssignment({ ...assignment, availFrom: e.target.value }))} /><br />
              </div>
              <div className="col-6">
              <input type="date" className="form-control" title = "until" value={assignment.availTill || ""}
                                onChange={(e) => dispatch(setAssignment({ ...assignment, availTill: e.target.value })) }/><br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="float-end">
        <button onClick={handle} className="btn btn-success ms-2 float-end">
          Save
        </button>
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-danger float-end">
          Cancel
        </Link>
      </div>
    </div>
  );
}
export default AssignmentEditor;