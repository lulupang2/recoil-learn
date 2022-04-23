
import { atom } from 'recoil';

export interface ITodoTypes {
    id:number,
    contents:string,
    isCompleted: boolean;
}

export const inputState = atom({
    key: 'inputState',
    default: '',
});

export const todosState = atom({
    key: 'todos',
    default: [
        {
            id: 1,
            contents: '첫번째',
            isCompleted: false,
        },
        {
            id: 2,
            contents: '두번째',
            isCompleted: false,
        }
    ],
});