export const TodoReducer = (state, action) => {
    
    switch(action.type) {
        case 'GET_TODO_SUCCEED':
            return {
                ...state,
                todos: action.payload
            }
        case 'GET_TODO_FAILED':
            return {
                ...state,
                hasError: true,
                message: action.payload
            }
        case 'DO_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload) {
                        return {
                            ...todo, 
                            isCompleted: true
                        }
                    }else{
                        return todo
                    }
                })
            }
        case 'UNDO_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload) {
                        return {...todo, isCompleted: false}
                    }else{
                        return todo
                    }
                })
            }
        case 'ADD_TODO':
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        case 'DELETE_TODO':
            return{
                ...state,
                todos: state.todos.filter(todo => action.payload !== todo.id)
            }
        case 'DELETE_ALL_TODO':
            return {
                ...state,
                todos: []
            }
        case 'DELETE_COMPLETED_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.isCompleted)
            }
        default:
            return state
    }
}