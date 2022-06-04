import React from 'react';
import styled from 'styled-components';


export const EditUserProfile = ({ changeToFalse }) => {
  return (
    <EditContainer>
      <span>Cambiar datos:</span>
      <hr />
      <div>
        <label>Nombre:</label>
        <input type="Nombre" />
      </div>
      <div>
        <label>Apellido:</label>
        <input type="Apellido" />
      </div>
      <Buttons>
        <button className="buttonCambiar">CAMBIAR</button>
        <button className="buttonCancelar" onClick={ () => changeToFalse() }>CANCELAR</button>
      </Buttons>
    </EditContainer>
  )
}

const EditContainer = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  span{
    margin: 0 auto;
    color: #392e57;
  }
  hr{
    margin-right: 25px;
    color: #a8a3b5;
  }
  label {
    font-size: 14px;
    color: #a8a3b5;
  }
  input{
    margin-left: 10px;
    border: 1px solid #a8a3b5;
  }
`

const Buttons = styled.div`
 color: red;
    height: 60px;
    margin-top: 15px;
    
    .buttonCambiar{
    background: #7689FC;
    border: none;
    border-radius: 8px;
    color: #D4DDFE;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-family: Roboto;
    font-size: 15px;
    padding: 6px 20px;
  }
  .buttonCancelar{
    border: 1px solid;
    border-radius: 8px;
    background-color: transparent;
    color: #9585D4;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-family: Roboto;
    font-size: 15px;
    margin-left: 10px;
    padding: 6px 12px;
  }
`