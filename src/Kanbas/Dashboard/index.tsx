import React from "react";
import { Link } from "react-router-dom";
import rocket from "../Images/rocket.png"
import { courses } from "../Database";
function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1><hr/>
      <h3>Published Courses ({courses.length})</h3><hr/>
      <div className="d-flex flex-row flex-wrap wd-cards">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
            <div className="p-2">
                <div className="card wd-card">
                    <img src={rocket} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                        {course.name} </Link>
                        <p className="card-text">{course.name}</p>
                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                        Go </Link>
                        <i className="fa fa-edit"></i>
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