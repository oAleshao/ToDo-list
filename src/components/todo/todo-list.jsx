import React, { useEffect, useReducer, useState } from 'react';
import './todo-list.css';
import TodoAdd from './todo-add';
import TodoFilter from './todo-filter';
import TodoItem from './todo-item';
import list from './todoData';
import { nanoid } from 'nanoid';
import { TodoReducer } from './todo-reducer'


const TodoList = () => {

    const [filter, setFilter] = useState("All");
    const [tasks, dispatch] = useReducer(TodoReducer, []);

    useEffect(() => {
        dispatch({
            type: "create",
            payload: 'New title'
        });

    }, []);



    let Filters = {
        All: () => true,
        Done: (task) => task.done,
        ToDo: (task) => !task.done
    }

    const addTask = (data) => {
        console.log(data);
        dispatch({
            type: 'create',
            payload: data,
        });
    }

    const removeTask = (id) => {
        dispatch({
            type: 'remove',
            payload: id
        });
    }

    const toggleDone = (id) => {

        // const newTasks = tasks.map((task) => {
        //     if (id === task.id)
        //         return { ...task, done: !task.done };
        //     return { ...task };
        // });

        // setTasks(newTasks);
    }


    return (
        <div id='todoList'>
            <h3>TODO LIST</h3>
            <TodoAdd addTask={addTask} />
            <div id="List">
                <TodoFilter setFilter={setFilter} filters={Filters} activeBtn={filter} />
                <div id='bodyList'>
                    {tasks.filter(Filters[filter]).map((task) => (<TodoItem {...task} removeTask={removeTask} toggleDone={toggleDone} key={task.id} />))}
                </div>
            </div>
        </div>
    );
}

export default TodoList;
