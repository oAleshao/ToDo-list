import { nanoid } from "nanoid";

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'create':
            console.log(action.payload);
            return [...state, { id: nanoid(), title: action.payload, done: false }];
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
            return [];
        default:
            return state;
    }
}