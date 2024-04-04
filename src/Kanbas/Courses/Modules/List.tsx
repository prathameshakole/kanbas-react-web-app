import React, { useEffect, useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import { KanbasState } from "../../store";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();

  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId]);

  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };


  const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
  console.log("particular module", moduleList);
  const module = useSelector((state: KanbasState) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);


  return (
    <>
      <div className="wd-home-sub">
        <button type="button" className="btn btn-outline-secondary btn-sm"
          style={{ 'marginRight': '5px' }}>Collapse All</button>
        <button className="btn btn-outline-secondary button-margin btn-sm" style={{ 'marginRight': '5px' }}>View Progress</button>
        <button className="btn btn-outline-secondary btn-sm dropdown-toggle" type="button"
          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
          style={{ 'marginRight': '5px' }}>
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
          <li className="list-group-item">
            <div className="justify-content-between align-items-center">

              <input value={module.name} onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} className="form-control mb-2" />
              <textarea value={module.description} onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} className="form-control"></textarea>
              <div>
                <button onClick={handleUpdateModule} className=" float-end btn btn-secondary mt-1 mb-1 ">Update</button>
                <button onClick={handleAddModule} className=" float-end btn btn-primary me-2 mt-1 mb-1">Add</button>
              </div>
            </div>

          </li>


          {moduleList ? (
            <>
              {moduleList
                .filter((module) => module.course === courseId).map((module, index) => (
                  <li key={index}
                    className="list-group-item wd-lgi"
                    onClick={() => setSelectedModule(module)}>
                    <div>
                      <FaEllipsisV className="me-2" />
                      {module.name}
                      <button onClick={() => dispatch(setModule(module))} className="btn btn-primary btn-sm mx-2">Edit</button>
                      <button onClick={() => handleDeleteModule(module._id)} className="btn btn-danger btn-sm">Delete</button>
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaPlusCircle className="ms-2" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </div>
                    {selectedModule && selectedModule._id === module._id && (
                      <ul className="list-group wd-lg">
                        {module.lessons?.map((lesson: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
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
            </>
          ) : (
            null
          )}

        </ul>
      </div>
    </>
  );
}
export default ModuleList;