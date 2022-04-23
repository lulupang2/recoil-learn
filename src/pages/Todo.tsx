import React from 'react'
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import '../resources/todo.scss';
import TodoTitle from './../components/TodoTitle';
const Todo = ():JSX.Element => {
    return (
        <div className="Todo">
            <div className="Todo-Contents">
                <TodoTitle />
                <TodoList />
                <TodoInput />

            </div>
        </div>
    )
}

export default Todo
