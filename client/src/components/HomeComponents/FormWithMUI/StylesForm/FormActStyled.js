import styled, { css } from "styled-components";

const colores = {
    inputPurple: "#413A66",
    error: "#f66060",
    succes: "#71ff4a"
}

const Label = styled.label`
    display: block;
    /* font-weight: 500; */
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    padding-top: 16px;
    min-height: 40px;
    color: white;
    cursor: pointer;
    ${props => props.valid === 'false' && css`
        color: ${colores.error}
    `}
`

const GrupoInput = styled.div`
    position: relative;
    z-index: 10;
`

const Input = styled.input`
    width: 70%;
    background: #fff;
    border-radius: 4px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: 0.3s ease all;
    border: 2px solid black;
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

const Select = styled.select`
    width: 75%;
    background: #fff;
    border-radius: 4px;
    height: 48px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: 0.3s ease all;
    border: 2px solid gray;
    &:focus{
        border: 2px solid ${colores.inputPurple};
        outline: none;
        box-shadow: 3px 0px 30px rgba(0,0,0,0.2);
    }
    &:hover{
        box-shadow: 3px 0px 40px rgba(0,0,0,0.2);
    }
`

const Range = styled.input`
    width: 70%;
    height: 30px;
    -webkit-appearance: none;
    background-color: #ddd;
    transition: 0.4s all ease-out;
    &:hover::-webkit-slider-runnable-track{
        box-shadow: 3px 0px 40px rgba(0,0,0,0.5);
        transition: 0.2s all ease-out;
    }
    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 6px;
        cursor: pointer;
        background: ${colores.inputPurple};
        border-radius: 50px;
    }
    &::-webkit-slider-thumb {
        height: 20px;
        width: 20px;
        border-radius: 50px;
        background: #A1D0FF;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -7px;
        transition: 0.4s all ease-out;
    }
    &:focus::-webkit-slider-runnable-track{
        box-shadow: 0px 0px 5px #393939;
    }
    &:focus::-webkit-slider-thumb{
        box-shadow: 0px 0px 5px #393939;
    } 
`

const DivRange = styled.div`
    grid-column: span 2;
    
    @media (max-width: 800px){
        grid-column: span 1;
    }
`

const Error = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display: none;
    ${props => props.valid === 'true' && css`
        display: none;
    `}
    ${props => props.valid === 'false' && css`
        display: block;
    `}
`

const ButtonCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: span 2;
    @media (max-width: 800px){
        grid-column: span 1;
    }
`

const Button = styled.button`
    height: 45px;
    line-height: 45px;
    width: 30%;
    background: #000;
    color: #fff;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s ease all;
    border: 2px solid gray;
    &:hover{
        box-shadow: 3px 0px 30px rgba(0,0,0, 0.2);
        border: 2px solid ${colores.inputPurple};
        background: #FEFBF3;
        color: ${colores.inputPurple};
    }
    ion-icon{
        font-size: 25px;
        position: relative;
        top: 5.5px;
        margin-right: 5px;
    }
`

const HomeDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;
    grid-column: span 2;
    @media (max-width: 800px){
        grid-column: span 1;
    }
    ion-icon{
        font-size: 20px;
        position: relative;
        top: 3px;
        margin-right: 5px;
    }
`

const ButtonHome = styled.button`
    height: 45px;
    margin-right: 25px;
    background: #000;
    color: #fff;
    border: none;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    padding: 5px 10px 10px 10px;
    transition: 0.2s ease all;
    border: 2px solid gray;
    &:hover{
        box-shadow: 3px 0px 30px rgba(0,0,0, 0.2);
        border: 2px solid ${colores.inputPurple};
        background: #FEFBF3;
        color: ${colores.inputPurple};
    }
`

const Success = styled.p`
    font-size: 20px;
    background: ${colores.succes};
    color: #141414;
    padding: 15px 30px;
    font-weight: bold;
    border-radius: 5px;
`

const ErrorDiv = styled.div`
    height: 45px;
    line-height: 45px;
    background: ${colores.error};
    padding: 0 15px;
    border-radius: 4px;
    grid-column: span 2;
    p{
        margin: 0;
    }
    b{
        margin-left: 10px;
    }
    ion-icon{
        font-size: 25px;
        position: relative;
        top: 5px;
    }
    @media (max-width: 800px){
        grid-column: span 1;
    }
`

const DivIcon = styled.div`
    ion-icon{
        position: absolute;
        right: 40px;
        bottom: 14px;
        z-index: 100;
        font-size: 20px;
        opacity: 0;
    }
    ${props => props.valid === 'false' && css`
        ion-icon{
            opacity: 1;
            color: ${colores.error}
        }
    `}
    ${props => props.valid === 'true' && css`
        ion-icon{
            opacity: 1;
            color: ${colores.succes}
        }
    `}
`

const NameDiv = styled.div`
    grid-column: span 2;
    @media (max-width: 800px){
        grid-column: span 1;
    }
`

const ActivitiesDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 300px;
    grid-column: span 2;
    @media (max-width: 800px){
        grid-column: span 1;
        margin-left: 200px;
    }
`

const CheckInput = styled.input`
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--form-background);
    margin: 0;
    font: inherit;
    color: ${colores.inputPurple};
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid ${colores.inputPurple};
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
    
    &::before{
        content: "";
        width: 0.65em;
        height: 0.65em;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        transform-origin: bottom left;
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(#000);
        background-color: ${colores.inputPurple};
    }
    &:checked::before {
        transform: scale(1);
    }
    &:focus {
        outline: max(2px, 0.15em) solid ${colores.inputPurple};
        outline-offset: max(2px, 0.15em);
    }
    &:hover{
        transition: 0.4s all ease;
        box-shadow: 3px 0px 30px rgba(0,0,0, 0.3);
    }
`

export const H1div = styled.div`
    width: 100%;
    border-bottom: 5px solid ${colores.inputPurple};
    background-color: #000;
    color: #fff;
`

export {
    CheckInput,
    ActivitiesDiv,
    NameDiv,
    Label,
    // Formulario,
    GrupoInput,
    Input,
    Error,
    ButtonCenter,
    Button,
    Success,
    ErrorDiv,
    DivIcon,
    Select,
    Range,
    DivRange,
    ButtonHome,
    HomeDiv
}
