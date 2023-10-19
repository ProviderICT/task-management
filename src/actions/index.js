import uuid from "react-uuid"
import { CREATE_TASK, DELETE_TASK, EDIT_TASK } from "./types"

export const editTask = (id, params = {}) => {
    return {
        type: EDIT_TASK,
        payload: {
            id,
            params,
        },
    }
}
export const createTask = ({ title, desc }) => {
    return {
        type: CREATE_TASK,
        payload: {
            id: uuid(),
            title,
            desc,
            status: "To-do",
        },
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        id,
    }
}