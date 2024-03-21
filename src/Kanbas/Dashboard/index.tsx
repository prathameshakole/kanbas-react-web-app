import React, { useState } from "react";
import { Link } from "react-router-dom";
import rocket from "../Images/rocket.png"
import db from "../Database";
import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPen, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;
  }) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1><hr />
      <h5>New Course</h5>
      <div style={{marginBottom: '10px'}}>
      <input value={course.name} className="form-control wd-input"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control wd-input"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control wd-input" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control wd-input" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
      </div>
      <button className="btn btn-success" onClick={addNewCourse} style={{marginRight: '5px', marginBottom: '5px'}}>
        Add
      </button>
      <button className="btn btn-danger" onClick={updateCourse} style={{marginRight: '5px', marginBottom: '5px'}}>
        Update
      </button>


      <h3>Published Courses ({courses.length})</h3><hr />
      <div className="d-flex flex-row flex-wrap wd-cards">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
            <div className="p-2">
              <div className="card wd-card">
                <img src={rocket} className="card-img-top" alt="..." />
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name}
                  </Link>

                  <button className="btn btn-danger float-end" onClick={(event) => { event.preventDefault(); deleteCourse(course._id); }}>
                    <FontAwesomeIcon icon={faTrash}/>
                  </button>
                  <button className="btn btn-secondary float-end" onClick={(event) => { event.preventDefault(); setCourse(course); }} style={{marginRight:'5px'}}>
                    <FontAwesomeIcon icon={faPen}/>
                  </button>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

}
export default Dashboard;