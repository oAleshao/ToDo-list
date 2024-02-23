import React, { useState } from 'react';
import tick from '../../img/tick.png';
import twoTick from '../../img/two-ticks.png'
import del from '../../img/cancel.png';

const TodoItem = ({ id, title, done, removeTask }) => {

    let [isDone, setIsDone] = useState(false);


    return (
        <div class='bodyListItem'>
            <div class='btnDone'>
                <div>
                    <img id='DoneItemBtn' alt='' onClick={(e) => {
                        if (isDone) {
                            setIsDone(!isDone);
                            e.target.src = tick;
                        }
                        else {
                            setIsDone(!isDone);
                            e.target.src = twoTick;
                        }
                    }} src={tick}></img>
                </div>
            </div>
            <input placeholder='your note' value={title}></input>
            <div class='btnDel'>
                <img onClick={() => removeTask(id)} src={del} alt=''></img>
            </div>
        </div>
    );
}

export default TodoItem;
