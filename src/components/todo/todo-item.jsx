import React, { useState } from 'react';
import tick from '../../img/tick.png';
import twoTick from '../../img/two-ticks.png'
import editImg from '../../img/pencil.png'
import del from '../../img/cancel.png';
import classNames from 'classnames';

const TodoItem = ({ id, title, done, removeTask, toggleDone, addTask }) => {

    let [isDone, setIsDone] = useState(done);
    let [isEdit, setIsEdit] = useState(false);
    let [nowValue, setNowValue] = useState(title)
    let [curImg, setCurImg] = useState(done ? twoTick : tick);

    console.log("-----------" + nowValue);

    let changedImg = () => {
        if (!isEdit)
            setCurImg(editImg);
        else
            setCurImg(done ? twoTick : tick);

        isEdit ? setIsEdit(false) : setIsEdit(true);
    }


    return (
        <div className='bodyListItem'>
            <div className='btnDone'>
                <div>
                    <img id='DoneItemBtn' alt='' onClick={(e) => {
                        if (isDone) {
                            setIsDone(!isDone);
                            setCurImg(tick);
                        }
                        else {
                            setIsDone(!isDone);
                            setCurImg(twoTick);
                        }

                        toggleDone(id);
                    }} src={curImg}></img>
                </div>
            </div>
            <input placeholder='your note' className={classNames({ "task-done": done })}
                onChange={(e) => { setNowValue(e.target.value) }} value={nowValue}
                onFocus={() => { changedImg(); }}
                onBlur={() => { changedImg(); }}></input>
            <div className='btnDel'>
                <img onClick={() => removeTask(id)} src={del} alt=''></img>
            </div>
        </div>
    );
}

export default TodoItem;
