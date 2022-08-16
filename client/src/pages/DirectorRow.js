//it doesn't include in project
import React from 'react'
import{FaTrash} from 'react-icons/fa'
import { DELETE_DIRECTOR} from '../mutations/director'
import {useMutation} from '@apollo/client'
import {GET_DIRECTORS} from '../query/director'
import {GET_MOVIES} from '../query/movie'

const Clients = ({client}) => {
  const [deleteDirector] = useMutation(DELETE_DIRECTOR, {
  variables: {id: client.id},
  refetchQueries: [{query: GET_DIRECTORS},{query: GET_MOVIES}]
    })
    const deleter = ()=>{alert('Are you shure deletete');
    deleteDirector()}
  return(
 <tr>
    <td>{client.name}</td>
    <td>{client.age}</td>
    <td>{client.id}</td>
    <td><button className='btn btn-danger btn-sm'
    onClick={deleter}><FaTrash/></button></td>
</tr>
  )
}
export default Clients;
