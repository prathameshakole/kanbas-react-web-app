import { Link } from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./style.css"
import db from "./Database";
import store from "./store";
import { Provider } from "react-redux";
import { useState } from "react";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg"
  });

  const addNewCourse = () => {
    const newCourse = {
      ...courses,
      _id: new Date().getTime().toString()
    };
    setCourses([...courses, { ...course, ...newCourse }]);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <div className="d-none d-md-block"><KanbasNavigation /></div>

        <div className="wd-body-element">
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route path="Dashboard" element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse} />
              } />
              <Route path="Courses/*" element={<h1>Courses</h1>} />
              <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            </Routes>
          </div>

        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;