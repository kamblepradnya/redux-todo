import { combineReducers } from 'redux';
import { CREATE_TODO} from '../actions/index'

const initialState = [
  {id: 1, task : 'task 1',isCompleted: true},
  {id: 2, task : 'task 2',isCompleted: false},
  {id: 3, task : 'task 3',isCompleted: false}
];

const todoItem = (state = {}, action ) => {
  switch(action.type){
    case CREATE_TODO :
      return { ...state, id: (new Date() / 1), task : action.payload , isCompleted : false };
    default:
      return state;
  }
}

const TodoList = (state = initialState , action) => {
  switch(action.type){
    case CREATE_TODO :
      return [...state,  todoItem(undefined, action)];
    default:
      return state;
  }
}


const reducers = combineReducers({
  TodoList,
})

export default reducers;