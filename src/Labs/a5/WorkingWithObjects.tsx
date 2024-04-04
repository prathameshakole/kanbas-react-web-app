import axios from "axios";
import React, { useEffect, useState } from "react";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: "MOD101",
        name: "Introduction to Web Development",
        description: "Learn the basics of web development using HTML, CSS, and JavaScript.",
        course: "Web Development Bootcamp",
    });
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
    const MODULE_URL = "http://localhost:4000/a5/module";

    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };

    const updateTitle = async () => {
        const response = await axios
            .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    
    useEffect(() => {
        fetchAssignment();
    }, []);

    return (
        <div>
            <h3>Working With Objects</h3>
            <h3>Modifying Properties</h3>
            <input onChange={(e) => setAssignment({
                ...assignment, title: e.target.value
            })}
                value={assignment.title} type="text" />
            <br />
            <br />
            <button onClick={updateTitle} >
                Update Title to: {assignment.title}
            </button>
            <br />
            <br />
            <button onClick={fetchAssignment} >
                Fetch Assignment
            </button>
            <br />
            <br />
            <input type="text"
                onChange={(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })}
                value={assignment.title} />
            <br />
            <br />
            <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                Update Title
            </a>

            <h4>Retrieving Objects</h4>
            <a className="btn btn-primary" href="http://localhost:4000/a5/assignment">
                Get Assignment
            </a>
            <br />
            <h4>Retrieving Properties</h4>
            <a className="btn btn-primary" href="http://localhost:4000/a5/assignment/title">
                Get Title
            </a>
            <div className="mb-4">
                <h4>Updating Assignment Properties</h4>
                <div className="input-group mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter new score"
                        onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
                        value={assignment.score}
                    />
                    <br />
                    <a
                        className="btn btn-primary"
                        href={`${ASSIGNMENT_URL}/score/${assignment.score}`}
                    >
                        Update Score
                    </a>
                </div>
                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={assignment.completed}
                        onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
                    />
                    <label className="form-check-label">   Mark as completed   </label>
                    <a
                        className="btn btn-primary ml-2"
                        href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}
                    >
                        Update Completion Status
                    </a>
                </div>
            </div>
            <h3>Modules </h3>
            <input
                type="text"
                className="form-control"
                placeholder="Enter new module name"
                onChange={(e) => setModule({ ...module, name: e.target.value })}
                value={module.name}
            />
            <br />
            <div className="input-group-append">
                <a
                    className="btn btn-primary"
                    href={`${MODULE_URL}/name/${module.name}`}
                >
                    Update Module Name
                </a>
            </div>
            <br />
            <div className="mb-4">
                <h4>Retrieving Objects</h4>
                <a className="btn btn-primary ml-2" href={`${MODULE_URL}`}>
                    Get Module
                </a>
            </div>
            <br />
            <div>
                <h4>Retrieving Properties</h4>
                <a className="btn btn-primary ml-2" href={`${MODULE_URL}/name`}>
                    Get Module Name
                </a>
                <br />
            </div>
            <br />
            <h3>Update Module Description</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Enter new module description"
                onChange={(e) => setModule({ ...module, description: e.target.value })}
                value={module.description}
            />
            <br />
            <a
                className="btn btn-primary"
                href={`${MODULE_URL}/description/${module.description}`}
            >
                Update Module Description
            </a>
        </div>
    );
}
export default WorkingWithObjects;

