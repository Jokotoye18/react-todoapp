import React, {useContext} from 'react'
import {TodoContext} from '../context/TodoContext'

import {FaTrash} from 'react-icons/fa'


export const TodoItem = (props) => {
    const {title, isCompleted } = props.todo

    const {toggleCompleted, deleteTodo} = useContext(TodoContext);
    

    return (
        <>
        <div className='todo'>
            <div> 
                <div className='todo-item'>
                    <input className='checked' type='checkbox' checked={isCompleted} onChange={() => toggleCompleted(props.todo)} />
                    <h4 className={isCompleted? 'completed': undefined}>{title}</h4>
                </div>
                <p className='status '>status: {isCompleted? 'completed':'incompleted'}</p>
            </div>
            <button onClick={() => deleteTodo(props.todo)} className=''><FaTrash className='del-btn' /></button>
        </div>
        </>
    )
}
