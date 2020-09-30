import React, {useReducer, createContext, useEffect} from 'react';
// import axios from 'axios'

import {TodoReducer} from '../reducer/TodoReducer'

const initialState = {
    todos: [],
    hasError: false,
    message: ''
}


export const TodoContext = createContext(initialState)


export const TodoProvider = ({children}) => {

    const [state, dispatch] = useReducer(TodoReducer, initialState)


    // Actions

    // getTodo
    // useEffect(() => {
    //     axios
    //     .get('https://jsonplaceholder.typicode.com/todos')
    //     .then(res => {
    //         dispatch({
    //             type: 'GET_TODO_SUCCEED',
    //             payload: res.data
    //         })
    //     })
    //     .catch(err => {
    //         dispatch({
    //             type: 'GET_TODO_FAILED',
    //             payload: err.message
    //         })
    //     })
    // }, [])

    // getTodo

    useEffect(() => {
        let todos = localStorage.getItem('todos')
        if(!todos) {
            todos = localStorage.setItem('todos', JSON.stringify([]))
        }else{
            todos = JSON.parse(todos)
        }
        dispatch({
            type: 'GET_TODO_SUCCEED',
            payload: todos
        })
    }, [])



    // toggleCompleted
    const toggleCompleted = (todo) => {
        let todos = localStorage.getItem('todos');
        let parseTodos = JSON.parse(todos)
        let filterTodo = parseTodos.filter(arrTodo => {
            if( arrTodo.id === todo.id) {
                arrTodo.isCompleted = !todo.isCompleted
            }
            return arrTodo
        })
        localStorage.setItem('todos', JSON.stringify(filterTodo))
        dispatch({
            type: todo.isCompleted? 'UNDO_TODO': 'DO_TODO',
            payload: todo.id
        })
    }

    // // AddTodo
    // const addTodo = todo => {
    //     axios.post(`https://jsonplaceholder.typicode.com/posts`, todo)
    //     dispatch({
    //         type: 'ADD_TODO',
    //         payload: todo
    //     })
    // }

    // AddTodo

    const addTodo = todo => {
        let oldItems = localStorage.getItem('todos')
        oldItems = JSON.parse(oldItems)
        console.log(oldItems);
        oldItems.push(todo)
        localStorage.setItem('todos', JSON.stringify(oldItems))
        dispatch({
            type: 'ADD_TODO',
            payload: todo
        })
    }

    // Delete todo
    // const deleteTodo = todo => {
    //     axios.delete(`https://jsonplaceholder.typicode.com/posts/${todo.id}`)
    //     .then(res => {
    //         dispatch({
    //             type: 'DELETE_TODO',
    //             payload: todo.id
    //         })
    //     }).catch(error => console.log(error))
    // }

    const deleteTodo = todo => {
        let todos = localStorage.getItem('todos');
        let parseTodos = JSON.parse(todos)
        const filterTodo = parseTodos.filter(arrTodo => arrTodo.id !== todo.id)
        localStorage.setItem('todos', JSON.stringify(filterTodo))
        dispatch({
            type: 'DELETE_TODO',
            payload: todo.id
        })
    }

    // Delete all todo
    const deleteAllTodo = () => {
        localStorage.clear()
        localStorage.setItem('todos', JSON.stringify([]))
        dispatch({
            type: 'DELETE_ALL_TODO',
        })
    }
    
    const deleteCompletedTodo = ()  => {
        let todos = localStorage.getItem('todos');
        let parseTodos = JSON.parse(todos);
        let filterTodo = parseTodos.filter(todo => todo.isCompleted === false)
        localStorage.setItem('todos', JSON.stringify(filterTodo))
        dispatch({
            type: 'DELETE_COMPLETED_TODO',
        })
    }


    return <TodoContext.Provider value={{
        state: state,
        toggleCompleted,
        addTodo,
        deleteTodo,
        deleteAllTodo,
        deleteCompletedTodo,
    }}>
        {children}
    </TodoContext.Provider>
}