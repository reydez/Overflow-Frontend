
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, getUsersByName } from '../../../redux/actions/user'
import styled from 'styled-components'
import { banUser } from '../../../redux/actions/adminUsers'

export const AdminBanUser = () => {

  const users = useSelector((state) => state.userReducer.users)
  const user = useSelector((state) => state.userReducer.user)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('')

  console.log('Array de usuarios:', users)

  useEffect(() => {
    const loadUsers = () => {
      setLoading(true);
      dispatch(getUsers());
      setLoading(false);
    };
    loadUsers();
  }, [dispatch]);

  const handleBanUser = (id) => {
    dispatch(banUser(id, user.id))
    console.log('userId', id)
    console.log('Admin', user.id)
  }

  // -------------- SEARCHBAR --------------------------------
  const onSubmit = (e) => {
    e.preventDefault();
    (!search)
      ? alert('Completa con un nombre a buscar')
      : dispatch(getUsersByName(search))
    setSearch(e.target.value)
    setSearch('')
  }

  const onInputChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  return (
    <>
      <h2>Panel de Admin - Banear Usuarios</h2>
      <hr />
      {/* ------------- SEARCHBAR (USERS) ---------- */}
      <SearchBarBanStyles>
        <input type="search" value={search} placeholder='Nombre a banear...' onChange={onInputChange} />
        <button type="submit" onClick={onSubmit}>Buscar</button>
      </SearchBarBanStyles>
      <div>
        <h3>Todos los usuarios</h3>
        <hr />
        {users.map((user) => {
          let idSelected = user.id;
          return !user.isAdmin
            ? (
              <NameAndButtonStyle>
                {user.isBanned
                  ? (
                    <button className="unBanButton" key={user.id} onClick={() => handleBanUser(idSelected)}>
                      Desbanear
                    </button>
                  )
                  : (
                    <button key={user.id} onClick={() => handleBanUser(idSelected)}>
                      Banear
                    </button>
                  )}
                <span> {user.full_name}</span>
              </NameAndButtonStyle>
            )
            : null;
        })}
      </div>
    </>
  );
}


const NameAndButtonStyle = styled.div`
  margin-top: 5px;
  .unBanButton {
      background-color: #D81B60;
      color:#fafafa;
  }
  button{
    margin-right: 10px;
    border-radius:10px;
    border: 1px solid #D81B60;
    color: #D81B60;
    background-color: transparent;
    cursor: pointer;
    :hover{
      color:#fafafa;
      background-color: #D81B60;
    }
  }
`

const SearchBarBanStyles = styled.div`
margin-bottom: 20px;
  input{
    width: 250px;
    border: 1px solid #A8A3B5;
    border-radius: 10px;
    padding: 5px 10px;
  }
  button{
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    background-color: #392E57;
    color: #A8A3B5;
    padding: 5px 10px;
    cursor: pointer;
    :hover{
      border: 1px solid #392E57;
      color: #392E57;
      background-color: transparent;
    }
  }
`