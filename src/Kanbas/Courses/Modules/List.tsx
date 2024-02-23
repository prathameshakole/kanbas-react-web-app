import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      <div className="wd-home-sub">
        <button type="button" className="btn btn-outline-secondary btn-sm"
          style={{'marginRight': '5px'}}>Collapse All</button>
        <button className="btn btn-outline-secondary button-margin btn-sm" style={{'marginRight': '5px'}}>View Progress</button>
        <button className="btn btn-outline-secondary btn-sm dropdown-toggle" type="button"
          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
          style={{'marginRight': '5px'}}>
          Published
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link className="dropdown-item" to="#">Publish All</Link>
          <Link className="dropdown-item" to="#">Unpublish All</Link>
        </div>
        <button type="button" className="btn btn-danger btn-sm"><FontAwesomeIcon icon={faAdd}></FontAwesomeIcon> Module</button>
      </div>
      <div>
        <ul className="list-group wd-modules">
          {modulesList.map((module) => (
            <li
              className="list-group-item wd-lgi"
              onClick={() => setSelectedModule(module)}>
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group wd-lg">
                  {module.lessons?.map((lesson) => (
                    <li className="list-group-item">
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ModuleList;