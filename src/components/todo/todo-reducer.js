import { nanoid } from "nanoid";

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'create':
            if (action.payload !== undefined)
                return [...state, { id: nanoid(), title: action.payload, done: false }];
            else
                return [...state];
        case 'remove':
            // action.payload = id;
            return state.filter(item => item.id !== action.payload);
        case 'removeAll':
            return [];
        case 'update':
            // action.payload = {id, title};
            return [];
        case 'changedDone':
            // action.payload = {id};
            return state.map((task) => {
                if (task.id === action.payload)
                    return { ...task, done: !task.done };
                return task;
            })
        default:
            return state;
    }
}