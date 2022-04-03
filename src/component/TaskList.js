import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./component.css";
import Bottom from "./Bottom";
import { getTask, updateTask } from "../actions/task";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
const TaskList = ({ task, taskNumber, updateTask, getTask }) => {
  const handleEdit = (e) => {
    e.preventDefault();
    getTask(task.id);
  };
  return (
    <div className="taskList">
      <div className="card w-100">
        <div
          className="card-body "
          style={{
            display: "flex",
            color: "forestgreen",
            backgroundColor: "white",
          }}
        >
          <h5>{task.task_msg}</h5>

          <div style={{ marginLeft: "auto" }}>
            <FontAwesomeIcon
              icon={faEdit}
              style={{ cursor: "pointer", color: "black" }}
              onClick={handleEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

TaskList.propTypes = {
  updateTask: PropTypes.func.isRequired,
  getTask: PropTypes.func.isRequired,
};

export default connect(null, { updateTask, getTask })(TaskList);
