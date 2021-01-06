import React from 'react';

const Select = (props) => {
    const { selectFor, data, label, name, id } = props;
    return (
        <>
            <label for={selectFor}>{label}:</label>

            <select name={name} id={id}>
                <option value="">--Please choose an option--</option>
                {data.map(item => (
                    <option key={item} value="item">{item}</option>
                ))}
            </select>
        </>
    )
}

export default Select;