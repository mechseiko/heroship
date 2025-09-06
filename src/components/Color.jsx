import React from 'react';

function Color({palette, colors, onChange, name, id, value}) {
    return (
        <select className='border-2 rounded-sm border-dark' name={name} id={id} value={value} onChange={onChange}>
            {
            colors.map((color, index) => (
                <option key={index}>{palette[index]}</option>
            ))
            }
        </select>
    );
}

export default Color;