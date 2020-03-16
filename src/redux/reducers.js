import {
  ADD_TASK,
  COMPLETE_TASK,
  TOGGLE_VISIBILITY,
  CLEAR_COMPLETED
} from "./types";

import {combineReducers} from 'redux';


const ToDoReducer = (state = [],action) => {
    switch(action.type) {
        case ADD_TASK:
            return [
              ...state,
              {
                id:action.id,
                text: action.payload,
                completed: false,
                timeStamp: action.timestamp
              }
            ];
               

        case COMPLETE_TASK:
            return state.map((task) => {
                if(task.id === action.payload) {
                    return {
                        ...task,
                        completed:true,
                    }
                } else {
                    return task
                }
            })

        case CLEAR_COMPLETED:
            return state.filter((task) => {
                return task.completed
            })

        default:
            return state;
    }
}


const VisibilityReducer = (state = false,action) => {
    switch(action.type) {
        case TOGGLE_VISIBILITY:
            return !state;
        
        default: return state;
    }
}


export default combineReducers({
    visibility:VisibilityReducer,
    tasks: ToDoReducer
})