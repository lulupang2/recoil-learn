import React from 'react'
import { FaPen } from 'react-icons/fa';

const TodoInput = (): JSX.Element => {
    const addTodo: any = '';
    return (
        <div className="TodoInput">
            <input type="text" className="TodoInput-Input" placeholder="할 일을 입력해주세요" />
            <FaPen className='TodoInput-Button' onClick={addTodo} />

        </div>
    )
}

export default TodoInput
