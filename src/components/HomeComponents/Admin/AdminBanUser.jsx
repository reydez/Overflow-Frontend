
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../../redux/actions/user'
import styled from 'styled-components'
import { banUser } from '../../../redux/actions/adminUsers'

export const AdminBanUser = () => {

  const users = useSelector((state) => state.userReducer.users)
  const user = useSelector((state) => state.userReducer.user)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);


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

  return (
    <>
      <h3>Banear Usuario</h3>
      <hr />
      <div>
        <label>Buscar Usuario:</label>
        <input type="text" />
        <button>Buscar</button>
      </div>
      <div>
        {users.map((user) => {
          let idSelected = user.id;
          return !user.isAdmin
            ? (
              <NameAndButtonStyle>
                {user.isBanned
                  ? (
                    <button key={user.id} onClick={() => handleBanUser(idSelected)}>
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
  button{
    margin-right: 10px;
    border-radius:10px;
    border: 1px solid red;
    color: red;
    background-color: transparent;
    cursor: pointer;
    :hover{
       color:#fafafa;
       background-color: red;
     }
  }
`