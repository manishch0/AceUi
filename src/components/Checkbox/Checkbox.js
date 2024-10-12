import React from 'react'

function Checkbox(props) {
    const { label, onChange, check } = props
    return (
        <>
            <input id={label} type="checkbox" onChange={(event) => {
                onChange(event.target.checked)
            }}
                checked={check}
                name="Checkbox" />
                    
            <label htmlFor={label}>{label}</label>
        </>
    )
}

export default Checkbox
