import React from 'react'
import TaskManager from './TaskManager'

function TaskList(props) {
  return (
    <div>
      <div className="cardheader text-uppercase text-center font-weight-bold" >
        {props.status}
      </div>
      {props.task.map((tasks) => {
        return (
          <TaskManager key={tasks.id}
            tasks={tasks}
            onStatusChange={props.onStatusChange}
            onDeleteTask={props.onDeleteTask} />)
      })}
    </div>


  )
}

export default TaskList