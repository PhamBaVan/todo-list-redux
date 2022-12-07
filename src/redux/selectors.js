import { createSelector } from 'reselect'

// khi chua su dung thu vien reselect
// export const todoListSelector = (state) => {
//   const todoRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filters.search)
//   });
//     return todoRemaining;
// } 

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const todoRemainingSelector = createSelector(todoListSelector, searchTextSelector, (todoList, searchText) => {
    return todoList.filter((todo) =>{
        return todo.name.includes(searchText)
    })
})