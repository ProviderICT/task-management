import React, { useState } from "react";
import TaskList from "./TaskList";

const Task_Statuses = ["To-do", "doing", "done"];
function TaskPage(props) {
    const [cardForm, setCardForm] = useState(false);
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const formToggle = () => {
        setCardForm(!cardForm);
    };

    const onChangeTitle = (e) => {
        settitle(e.target.value);
    };
    const onChangeDesc = (e) => {
        setdesc(e.target.value);
    };

    const resetForm = () => {
        settitle('');
        setdesc('');
        setCardForm(false);
    }

    const onCreateTask = (e) => {
        e.preventDefault();
        // console.log({title,desc});
        props.onCreateTask({ title, desc });
        resetForm();
    }

    const renderTaskList = () => {
        const { task } = props;
        return Task_Statuses.map((status, id) => {
            const statusTasks = task.filter((task) => task.status === status);
            return (
                <div className="col-md-3 card m-2 p-0  " key={id}>
                    <TaskList
                        key={status}
                        status={status}
                        task={statusTasks} 
                        onStatusChange={props.onStatusChange}
                        onDeleteTask={props.onDeleteTask} />
                </div>
            );
        });
    };
    return (
        <div className="container my-5" style={{}}>
            <div className="jumbotron py-3">
                <div className="row">
                    <div className="col-md-2">
                        <button className="btn btn-success m-3" onClick={formToggle}>
                            <strong>+</strong>
                        </button>
                    </div>
                    <div className="col-md-9">
                        <h2 className="display-4 text-center text-uppercase">
                            Task Manager
                        </h2>
                    </div>
                </div>
                {cardForm && (
                    <form onSubmit={onCreateTask}>
                        <div className="form-control" style={{background:"none", border:"black"}}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={onChangeTitle}
                                    placeholder="Task Title"
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    className="form-control"
                                    onChange={onChangeDesc}
                                    placeholder="Task Description"
                                    rows="3"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark">
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </div>
            <div className="row d-flex justify-content-center  position-relative align-item-center" >
                {renderTaskList()}
            </div>
        </div>
    );
}

export default TaskPage;
