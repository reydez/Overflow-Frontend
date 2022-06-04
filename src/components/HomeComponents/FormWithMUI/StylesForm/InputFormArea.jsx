import React from "react";
import styled, { css } from "styled-components";
import { Label, Error, DivIcon } from "./FormActStyled"


const InputForm = ({ label, name, placeholder, error, state, changeState, regularExpresion }) => {



    const handleChange = (e) => {
        console.log(e.target.value)
        changeState({
            ...state,
            field: e.target.value
        })
    }

    const validate = () => {
        if (regularExpresion) {
            if (regularExpresion.test(state.field)) {
                changeState({ ...state, validate: 'true' })
            } else {
                changeState({ ...state, validate: 'false' })
            }
        }
    }

    return (
        <div>
            <Label htmlFor={name} valid={state.validate}>{label}</Label>
            <GrupoInput>
                <Input
                    placeholder={placeholder}
                    // type={type}
                    id={name}
                    value={state.field}
                    onChange={handleChange}
                    onKeyUp={validate}
                    onBlur={validate}
                    valid={state.validate}
                />
                <DivIcon valid={state.validate}>
                    <ion-icon name={state.validate === 'true' ? "checkmark-circle-outline" : "close-circle-outline"}></ion-icon>
                </DivIcon>
            </GrupoInput>
            <Error valid={state.validate}>{error}</Error>
        </div>
    )
}

export default InputForm


const colores = {
    inputPurple: "#413A66",
    error: "#f66060",
    succes: "#71ff4a99"
}

const GrupoInput = styled.div`
    position: relative;
    z-index: 10;
`

// const Description = styled.textarea`
// /* display: flex; */
// /* align-items: center; */
// /* text-align: center; */

// margin-top:10px;
// flex-direction: column;
// width: 78%;
// border-radius: 4px;
// border: 2px solid grey ;
// `

const Input = styled.textarea`
    /* padding: 5px; */
    width: 70%;
    resize: none;
    background: #fff;
    border-radius: 4px;
    height: 155px;
    font-size: 14px;
    line-height: 20px;
    padding: 12px 40px 0 10px;
    transition: 0.3s ease all;
    border: 2px solid gray;
    &:hover{
        box-shadow: 3px 0px 40px rgba(0,0,0,0.2);
    }
    &:focus{
        border: 2px solid ${colores.inputPurple};
        outline: none;
        box-shadow: 3px 0px 30px rgba(0,0,0,0.2);
    }
    ${props => props.valid === 'true' && css`
        border: 2px solid gray;
    `}
    ${props => props.valid === 'false' && css`
        border: 2px solid ${colores.error} !important;
    `}
`


