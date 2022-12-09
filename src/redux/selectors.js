import { createSelector } from 'reselect'

// khi chua su dung thu vien reselect
// export const todoListSelector = (state) => {
//   const todoRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filters.search)
//   });
//     return todoRemaining;
// } 

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const todoListSelector = (state) => state.todoList;
export const todoRemainingSelector = createSelector(
    todoListSelector, 
    filterStatusSelector, 
    searchTextSelector,
    (todoList, status, searchText) => {
    return todoList.filter((todo) =>{
        if(status === 'All'){
            return todo.name.includes(searchText);
        }
        return ( 
          todo.name.includes(searchText) && 
          (status !== 'All' && status === 'Completed'
          ? todo.completed
          : !todo.completed)
          );
    });
})