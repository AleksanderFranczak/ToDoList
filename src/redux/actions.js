
import {
    ADD_TASK,
    COMPLETE_TASK,
    TOGGLE_VISIBILITY,
    CLEAR_COMPLETED
} from './types';





export const addTask = (text,id) => {
    return {
        type:ADD_TASK,
        payload:text,
        timestamp:15,
        id,
    }
}

export const completeTask = (id) => {
    return {
        type:COMPLETE_TASK,
        payload:id
    }
}

export const toggleVisibility = (id) => {
    return {
        type:TOGGLE_VISIBILITY,
    }
}

export const clearCompleted = () => {
    return {
        type:CLEAR_COMPLETED
    }
}