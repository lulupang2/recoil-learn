import React, { useCallback } from 'react'
import { useRecoilState } from 'recoil';
import { todosState, ITodoTypes } from './../recoil/Todo';
import TodoItem from './TodoItem';

const TodoList = (): JSX.Element => {
    const [todos, setTodos] = useRecoilState(todosState);
    const onComplete = useCallback((id): void => {
        setTodos(
            todos.map(
                (todo: ITodoTypes) => {
                    return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo;
                }));
    }, [setTodos, todos]);
    const onDelete = useCallback((id: number) => {
        setTodos(todos.filter((todo: ITodoTypes) => todo.id !== id));
    }, [setTodos, todos]);


    return (
        <div className="TodoList">
            {
                todos.length > 0 ? todos.map((todo: ITodoTypes) => {
                    const { id, contents, isCompleted } = todo;

                    return (
                        <TodoItem
                            key={id}
                            id={id}
                            contents={contents}
                            isCompleted={isCompleted}
                            onComplete={onComplete}
                            onDelete={onDelete}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    );
                }) : <div className="TodoList-NoList">
                    할 일이 없어요!
                </div>
            }

        </div>
    )
}

export default TodoList
