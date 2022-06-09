import React from 'react'
import styled from 'styled-components'

export const AdminEditTags = () => {
  
  return (
    <>
      <h2>Panel de Admin - Edición de Tags</h2>
      <AdminNavBarStyle>
        <button>AGREGAR TAG</button>
        <button>ELIMINAR TAG</button>
        <hr />
        <form>
            <input 
                type="text"
                placeholder='Buscar tags...' 
            />
            <input type="submit" value="Search" />
        </form>
      </AdminNavBarStyle>
    </>
  )
}
















const AdminNavBarStyle = styled.div`
    button {
        // border-radius: 15px;
        background-color: #D81B60;
        border: none;
        color: #fff;
        padding: 5px 15px;
        margin-right: 10px;
        margin-top: 6px;
        cursor: pointer;
    }
    button:hover {
        background-color: #D81B60;
        color: #fff;
        border: none;
    }
`