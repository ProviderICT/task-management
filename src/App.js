import "bootstrap/dist/css/bootstrap.min.css"
// import TaskManager from './components/TaskManager';
import TaskPage from "./components/TaskPage";
import { connect } from "react-redux";
import { createTask, editTask, deleteTask } from "./actions";

function App(props) {
  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, { status }))
  }
  const onCreateTask = ({ title, desc }) => {
    props.dispatch(createTask({ title, desc }));
  }

  const onDeleteTask = (id) => {
    props.dispatch(deleteTask(id));
  }
  return (
    <>
      <TaskPage task={props.task}
        onStatusChange={onStatusChange}
        onCreateTask={onCreateTask}
        onDeleteTask={onDeleteTask} />
    </>
  );
}

const mapStateProps = (state) => {
  return { task: state.task }
}
export default connect(mapStateProps)(App);
