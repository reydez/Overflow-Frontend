import Chip from '@mui/material/Chip';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getTags } from '../../../redux/actions/tags'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTag } from '../../../redux/actions/adminTags';
import Swal from 'sweetalert2';
import { getModules } from '../../../redux/actions/module';
import axios from 'axios';
import { getTagColor } from '../../../Controllers/Helpers/colorsQuestion';

export const AdminEditTags = () => {

const dispatch = useDispatch()
const [loading, setLoading] = useState(false);
const allTags = useSelector((state) => state.tagsReducer.filteredTags);
const user = useSelector((state) => state.userReducer.user)
const allModules = useSelector((state) => state.modulesReducer.modules)
const [tag, setTag] = useState({
  name: '',
  idModulo:''
})

// console.log(allModules.map((mod) => mod.id))
// console.log('UserID:', user.id)

// ----------------------------  DELETE TAGS --------------------------
  useEffect(() => {
    const loadTags = () => {
      setLoading(true);
      dispatch(getTags());
      setTag("")
      setLoading(false);
      dispatch(getModules())
  }
    loadTags()
  }, [dispatch])

  const handleDelete = (id) => {
    dispatch(deleteTag(id, user.id))
    Swal.fire({
      title: 'Tag borrado!',
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar'
    })
    setLoading(false);
  }

 // ----------------------------  ADD TAGS --------------------------
 const [newTag, setNewTag] = useState([])

 const handleChange = (e) => {
   console.log(tag)
  e.preventDefault()
  setTag({...tag, [e.target.name]:e.target.value })
}

  const handleSubmit = (e) => {
    e.preventDefault()
      axios.post(`http://localhost:3001/admin/tags/${tag.idModulo}`, {  // DESACTIVAR PARA DEPLOY
      // axios.post(`https://henry-overflow-api.herokuapp.com/admin/tags/${tag.idModulo}`, { // ACTIVAR PARA DEPLOY
      tag: tag.name,
    }, {
      headers: {
        "authorization":
          user.id,
        },
    })
    
    .then((response) => {
      setNewTag([...newTag, response.data])
      Swal.fire({
        icon: 'success',
        title: `El tag '${tag.name}' fue creado!`,
      })
      setLoading(true);
      dispatch(getTags());
      setLoading(false);
      setTag("")
    })
    .catch((error)=> {
      if(error.response.status === 500) {
        Swal.fire({
          text: `Tag {tag} creado!`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: 'Volver'
        })
      }
    })
  }

  return (
    <>
      <h2>Panel de Admin - Edición de Tags</h2>
      <AdminNavBarStyle>
        <form onSubmit={handleSubmit}>
          {/* <label>Agregar Tag: </label> */}
          <h3>Agregar Tag: </h3>
          <div>
            <label>Módulo del nuevo tag:</label>
            <select name="idModulo" style={{marginLeft:'10px'}} onChange={(e)=>handleChange(e)}>
              {allModules.map((everyModule) => {
                return(
                  <option value={everyModule.id} >{everyModule.name} </option>
                )
              })}
            </select>
          </div>
          <input type="text" name="name" value={tag.name} onChange={handleChange} />
          <button type="submit" style={{marginLeft:'10px'}}>Agregar</button>
        </form>
        <hr />
        <h3>Click para eliminar Tag</h3>
    
        <div>
            {allTags.map((tag) => {
              let idSelected = tag.id
              return (
                <Chip
                  label={tag.name}
                  variant="outlined"
                  key={tag.id}
                  sx={{ margin: '5px 5px', cursor:'pointer', borderColor: getTagColor(tag.name) }}
                  onClick={()=>handleDelete(idSelected)}
                  deleteIcon={<DeleteIcon />}
                />
              );
            })}
        </div>
      </AdminNavBarStyle>
    </>
  )
}


const AdminNavBarStyle = styled.div`
  select {
    border-radius: 15px;
    padding: 5px 10px;
  }
  button {
    padding: 5px 15px;
    border-radius: 15px;
    background-color: #D81B60;
    border: none;
    color: #fff;
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