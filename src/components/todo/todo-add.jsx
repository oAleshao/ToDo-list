import React, { useState } from 'react';
import toDoListImg from '../../img/to-do-list.png'

const TodoAdd = ({ addTask }) => {

    const [data, setData] = useState('');
    const [dataError, setDataError] = useState(null);

    const execute = (e) => {
        if (e.code === "Enter") {
            if (data.trim('').length !== 0)
                addTask(data);
            else
                setDataError("You must write something");
            setData('');
        }
        else
            setDataError('');
    };

    return (
        <div id='nextTask'>
            <div>
                <img src={toDoListImg} alt="" />
                <input placeholder='Enter your next task' value={data} onChange={(e) => setData(e.target.value)} onKeyDown={(e) => execute(e)}></input>
            </div>
            {dataError && <div>{dataError}</div>}
        </div>
    );
}

export default TodoAdd;
