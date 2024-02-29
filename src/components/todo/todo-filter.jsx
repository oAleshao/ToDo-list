import classNames from 'classnames';
import React from 'react';

const TodoFilter = ({ setFilter, filters, activeBtn }) => {
    const filterKeys = Object.keys(filters);
    return (
        <div id='HeaderList'>
            {filterKeys.map(filter => <button key={filter} className={classNames({ active: filter === activeBtn })} onClick={() => setFilter(filter)}>{filter}</button>)}
        </div>
    );
}

export default TodoFilter;