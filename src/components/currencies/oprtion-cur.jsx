import React from 'react';

const OprtionCur = ({ id, title }) => {

    return (
        <option value={id}>
            {title}
        </option>
    );
}

export default OprtionCur;
