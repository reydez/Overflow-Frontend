import React from 'react'
import Classes from "./formInput.module.css"

const FormInput = (props) => {
    const { label, errorMessage, onChange, id, ...inputProps } = props;


    return (
        <div className={Classes.formInputt} >
            <label className={Classes.labell} >
                {label}
            </label>

            <input
                className={Classes.inpuut}
                {...inputProps}
                onChange={onChange}
                required
            />

            <span className={Classes.spann} >
                {errorMessage}
            </span>
        </div>
    )
}

export default FormInput