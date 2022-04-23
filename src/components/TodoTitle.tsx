import React from 'react'
import { AiFillCheckSquare } from 'react-icons/ai';

const TodoTitle = (): JSX.Element => {
    return (
        <div className="TodoTitle">
            <AiFillCheckSquare className="TodoTitle-Icon" />
            To-Do List
        </div>
    )
}

export default TodoTitle
