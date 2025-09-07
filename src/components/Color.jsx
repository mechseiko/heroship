import React from 'react';

function Color({palette, colors, onChange, name, id, value}) {
    return (
        <select className='border-1 rounded-sm border-dark' name={name} id={id} value={value} onChange={onChange}>
            {
                colors.map((color, index) => (
                    <option key={index}>{Object.keys(color)[0]}</option>
                ))
            }
        </select>
    );
}

export default Color;