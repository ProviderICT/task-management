import React from "react";
const Task_Statuses = ["To-do", "doing", "done"];

function TaskManager(props) {
  function onStatusChange(e) {
    props.onStatusChange(props.tasks.id, e.target.value)
  }
  function onDeleteTask(){
    props.onDeleteTask(props.tasks.id)
  }

  return (
    <>
      <form onChange={onStatusChange}>
        <select defaultValue={props.tasks.status}>
          {Task_Statuses.map((status) => {
            return (
              <option value={status} key={status}>
                {status}
              </option>
            );
          })}
        </select>
      </form>
      <h2
        className="card-title mt-3 text-uppercase px-2"
        style={{ color: "green" }}
      >
        {props.tasks.title}
      </h2>
      <p className="card-text mb-3 text-muted font-weight-bold px-2">
        {props.tasks.desc}
      </p>
      <button className="btn btn-outline-danger" onClick={()=>onDeleteTask(props.tasks.id)}>Delete</button>
    </>
  );
}

export default TaskManager;
