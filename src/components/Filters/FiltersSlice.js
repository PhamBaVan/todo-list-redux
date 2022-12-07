const initState = {
    filters:{
      search: '',
      status: 'All',
      priority: []
    },
    todoList:[
      {id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'},
      {id: 2, name: 'Learn Redux', completed: true, priority: 'High'},
      {id: 3, name: 'Learn Javascript', completed: false, priority: 'Low'},
    ]
  }
  
  const filtersReducer = (state = initState, action) =>{
    switch(action.type){
      case 'filters/searchFilterChange':
        return {
            ...state,
            search: action.payload
        };

        case 'filters/statusFilterChange': 
        return {
          ...state,
          status: action.payload
        }
          default:
             return state; 
    }
  }  
  
  export default filtersReducer;