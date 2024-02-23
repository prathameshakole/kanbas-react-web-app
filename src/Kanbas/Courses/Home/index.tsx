import CourseStatus from "../CourseStatus";
import ModuleList from "../Modules/List";
import "./index.css"

function Home() {
  return (
    <div className="d-flex">
      <div className="wd-module-body">
        <ModuleList />
      </div>
      <div className="wd-module-status">
      <CourseStatus />
      </div>
    </div>
  );
}
export default Home;