import { CREATE_TASK, DELETE_TASK, EDIT_TASK } from "../actions/types";

const initialState = [
    // {
    //     id: 1,
    //     title: "Lear React",
    //     desc: "Lets Learn React today",
    //     status: "To-do",
    // }, {
    //     id: 2,
    //     title: "Lear Redux",
    //     desc: "Lets Learn Redux today",
    //     status: "doing",
    // }, {
    //     id: 3,
    //     title: "Lear MERN",
    //     desc: "Lets Learn MERN today",
    //     status: "done",
    // },
];

const task = (state = { task: initialState }, action) => {
    // **************************IF ELSE**************************
    // if (action.type === EDIT_TASK) {
    //     const { payload } = action;
    //     return {
    //         task: state.task.map((task) => {
    //             if (task.id === payload.id) {
    //                 return Object.assign({}, task, payload.params)
    //             }
    //             return task;
    //         })

    //     }
    // }
    // ************************Switch********************************
    const { payload } = action;
    switch (action.type) {
        case EDIT_TASK: {
            return {
                task: state.task.map((task) => {
                    if (task.id === payload.id) {
                        return Object.assign({}, task, payload.params)
                    }
                    return task;
                }),
            }
        }
        case CREATE_TASK: {
            return {
                task: state.task.concat(action.payload),
            };
        }
        case DELETE_TASK:{
            return{
                task: state.task.filter((task)=> task.id !== action.id )
            }
        }
        default: return state;
    }

}
export default task