import React from 'react'
// import {useAPI} from '../components/CustomHooks'

export const Header = () => {

//    let api = useAPI('https://jsonplaceholder.typicode.com/todos/1')
//    console.log(api);

    return (
        <header>
            <div className='container'>
                <nav className='nav-bar'>
                    <h2 className='brand'>Todo App using React, Hooks and LocalStorage</h2>
                    {/* <ul className='nav-list'>
                        <li className='nav-item'>Home</li>
                        <li className='nav-item'>About</li>
                        <li className='nav-item'>Contact</li>
                    </ul> */}
                </nav>
            </div>
        </header>
    )
}
