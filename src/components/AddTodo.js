import React, {useState, useContext} from 'react'
import {TodoContext} from '../context/TodoContext'


export const AddTodo = () => {
    const [title, setTitle] = useState('')

    const {addTodo, state} = useContext(TodoContext);
    const {todos} = state

    const handleSubmit = e => {
        e.preventDefault()
        const newTodo = {
            id: todos.length + 1,
            title,
            isCompleted: false
        }
        addTodo(newTodo)
        setTitle('')
    }

    return (
        <div className='add-todo'>
            <h3 className='add-todo-title'>Add todo here</h3>
            <form className='add-todo-form' onSubmit={handleSubmit}>
                <input 
                type='text' 
                name='title' 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                placeholder='Enter your todo here'
                required
                />
                <input type='submit' value='Add' />
            </form>
        </div>
    )
}
