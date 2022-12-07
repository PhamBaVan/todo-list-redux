import { combineReducers } from "redux";


// khoi tao nguyen thuy reducer, khong chia cac reducer con 

// const initState = {
//   filters:{
//     search: '',
//     status: 'All',
//     priority: []
//   },
//   todoList:[
//     {id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'},
//     {id: 2, name: 'Learn Redux', completed: true, priority: 'High'},
//     {id: 3, name: 'Learn Javascript', completed: false, priority: 'Low'},
//   ]
// }

// const rootReducer = (state = initState, action) =>{
//   console.log({state, action});
//   switch(action.type){
//     case 'todoList/addTodo':
//         return {
//             ...state,
//             todoList: [
//                 ...state.todoList,
//                 action.payload
//             ]
//         }
    
//     case 'filters/searchFilterChange':
//       return {
//         ...state,
//         filters:{
//           ...state.filters,
//           search: action.payload
//         }
//       }
//         default:
//            return state; 
//   }
// }  

// export default rootReducer;

// chia ra cac reducer con thanh cac slice thuc hien logic voi du lieu, state, FilterSlice va TodoListSlice 

// import filtersReducer from "../components/Filters/FiltersSlice"
// import todoListReducer from "../components/TodoList/TodoListSlice"

// const initState = {
//   filters:{
//     search: '',
//     status: 'All',
//     priority: []
//   },
//   todoList:[
//     {id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'},
//     {id: 2, name: 'Learn Redux', completed: true, priority: 'High'},
//     {id: 3, name: 'Learn Javascript', completed: false, priority: 'Low'},
//   ]
// }

// const rootReducer = (state = initState, action) =>{
//   return{
//     filters: filtersReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action)
//   };
// };

// export default rootReducer;

// su dung thu vien combineReducers cua redux 

import filtersReducer from "../components/Filters/FiltersSlice"
import todoListReducer from "../components/TodoList/TodoListSlice"

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer
});

export default rootReducer;
