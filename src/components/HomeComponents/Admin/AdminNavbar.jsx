import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const AdminNavbar = () => {
  return (
          <>
            <AdminNavBarStyle>
              <Link to='/admin/'> <button> Ver Reportes</button> </Link>
              <Link to='/admin/tags'> <button> Editar Tags</button></Link>
              <Link to='/admin/users'> <button> Banear Usuarios</button></Link>
            </AdminNavBarStyle>
          </>
  ) 
}











const AdminNavBarStyle = styled.div`
    background-color: #392E57;
    height: 40px;
    text-align: center;
    button {
      border: 1px solid #A8A3B5;
      border-radius: 15px;
      background-color:transparent;
      color: #A8A3B5;
      padding: 5px 15px;
      margin-left: 20px;
      margin-top: 6px;
    }
    button:hover {
      background-color: #D81B60;
      color: #fff;
      border: none;
    }
`