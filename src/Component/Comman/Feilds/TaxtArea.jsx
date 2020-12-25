import React from 'react';

const TextArea = ( { label, value, name, onChange } ) => {
    return (
        <div className="form-group">
            <label className="label">{ label }</label>
            <textarea rows="4" value={ value } name={ name } onChange={ onChange } className="form-control" required></textarea>


        </div>
    );
};

export default TextArea;
