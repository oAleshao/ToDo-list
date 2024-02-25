import React, { useState } from 'react';
import './todo-list.css';
import TodoAdd from './todo-add';
import TodoFilter from './todo-filter';
import TodoItem from './todo-item';
import list from './todoData';
import { nanoid } from 'nanoid';



const TodoList = () => {

    const [tasks, setTasks] = useState(list);

    const addTask = (data) => {
        setTasks([...tasks, {
            id: nanoid(),
            title: data,
            done: false
        }]);
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div id='todoList'>
            <h3>TODO LIST</h3>
            <TodoAdd addTask={addTask} />
            <div id="List">
                <TodoFilter />
                <div id='bodyList'>
                    {tasks.map((task) => (<TodoItem {...task} removeTask={removeTask} key={task.id} />))}
                </div>
            </div>
        </div>
    );
}

export default TodoList;
