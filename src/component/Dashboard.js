import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAccess } from "../actions/auth";
import Bottom from "./Bottom";
import "./component.css";
import Task from "./Task";
import Top from "./Top";
import PropTypes from "prop-types";
import setAuthToken from "../utils/setAuthToken";
import { clearField, clearTask, getAllTask } from "../actions/task";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const Dashboard = ({
  taskNumber,
  isUpdate,
  getAccess,
  auth,
  getAllTask,
  clearField,
  task,
  clearTask,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const setCred = () => {
    window.localStorage.setItem("token", auth.results.token);
    window.localStorage.setItem("company_id", auth.results.company_id);
  };
  const childToParent = (childData) => {
    setIsClicked(childData);
    clearField();
  };

  useEffect(() => {
    getAccess();

    getAllTask();
  }, []);

  return (
    <div className={`dashboard`}>
      <Top childToParent={childToParent} isClicked={isClicked} />

      {isClicked || isUpdate ? <Bottom /> : <Task />}
      {auth.code === 200 ? setCred() : null}

      {localStorage.token ? setAuthToken(localStorage.token) : null}
    </div>
  );
};

Dashboard.propTypes = {
  getAccess: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getAllTask: PropTypes.func.isRequired,
  clearTask: PropTypes.func.isRequired,
  task: PropTypes.shape({}).isRequired,
};
const mapStateToProps = (state) => ({
  isUpdate: state.task.isUpdate,
  taskNumber: state.task.taskNumber,
  auth: state.auth,
  task: state.task.task,
});
export default connect(mapStateToProps, {
  getAccess,
  getAllTask,
  clearTask,
  clearField,
})(Dashboard);
