import React, {useContext} from 'react'
import {TodoContext} from '../context/TodoContext'

import {TodoItem} from './TodoItem'
import {AddTodo} from './AddTodo'



export const Todos = () => {

    const {state, deleteAllTodo, deleteCompletedTodo} = useContext(TodoContext);

    const todoItem = state.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)

    const {todos, hasError, message} = state

    return (
        <div className='container1'>
            <section className='todos'>
            {hasError? (<h1 style={{textAlign:'center'}}>{message}</h1>) : (
            <div className=''>
                <AddTodo />
                {todos.length >= 1? <div className='multiple-delete-btn'>
                    <button className='btn' onClick={deleteAllTodo}>Delete all</button>
                    <button className='btn' onClick={deleteCompletedTodo}>Delete completed</button>
                </div> : ''
                }
                <div className='todo-items'>
                    {todoItem}
                </div>
            </div>
            )}
            
        </section>
        </div>
    )
}
